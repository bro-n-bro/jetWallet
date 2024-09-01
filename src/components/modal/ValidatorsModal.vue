<template>
    <section class="page_container inner_page_container validators_page">
        <div class="cont">
            <div class="head">
                <button class="back_btn" @click="emitter.emit('close_validators_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </button>

                <div class="page_title">
                    {{ $t('message.validators_page_title') }}
                </div>
            </div>

            <!-- Search -->
            <Search source="validators" />

            <Loader v-if="!isValidatorsGot" />

            <div class="validators" v-else>
                <div class="list" v-if="searchResult.length">
                    <div class="item" v-for="(validator, index) in searchResult" :key="index">
                        <div class="validator_wrap" @click.prevent="setValidator(validator)" :class="{ current: isCurrentValidator(validator.operator_address) }">
                            <div class="validator">
                                <div class="logo">
                                    <img :src="`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${store.networks[store.currentNetwork].prefix}/moniker/${validator.operator_address}.png`" alt="" loading="lazy" @error="imageLoadError($event)">

                                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>
                                </div>

                                <div>
                                    <div class="moniker">
                                        {{ validator.description.moniker }}
                                    </div>

                                    <div class="commission">
                                        {{ (validator.commission.commission_rates.rate * 100).toLocaleString('ru-RU', { maximumFractionDigits: 2 }).replace(',', '.') }}%
                                    </div>

                                    <div class="staked" v-if="item = isStakedValidator(validator.operator_address)">
                                        {{ $t('message.validatoes_staked_label') }}

                                        {{ formatTokenAmount(item.balance.amount, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }).replace(',', '.') }}

                                        <div class="logo">
                                            <img :src="getNetworkLogo(store.networks[store.currentNetwork].chain_id)" alt="">
                                        </div>
                                    </div>
                                </div>

                                <div class="apr">
                                    <span>{{ $t('message.stake_APR_label') }}<br> {{ ((store.networks[store.currentNetwork].APR * 100) - (store.networks[store.currentNetwork].APR * 100 * validator.commission.commission_rates.rate)).toFixed(2) }}%</span>
                                </div>

                                <div class="check">
                                    <svg v-if="isCurrentValidator(validator.operator_address)"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="empty" v-else>
                    {{ $t('message.search_empty_validator') }}
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, inject, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { imageLoadError, getNetworkLogo, formatTokenAmount } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'
    import Search from '@/components/Search.vue'


    const props = defineProps(['unstake', 'redelegate']),
        store = useGlobalStore(),
        emitter = inject('emitter'),
        isValidatorsGot = ref(false),
        validators = ref([]),
        searchResult = ref([])


    onBeforeMount(async() => {
        if (props.unstake) {
            // Get validators
            validators.value = (await store.getUserValidators()).validators
        } else if(props.redelegate) {
            if (props.redelegate === 'from') {
                // Get validators
                validators.value = (await store.getUserValidators()).validators
            } else {
                // Get validators (Exclude validator from)
                validators.value = (await store.getAllValidators()).validators.filter(validator => validator.operator_address !== store.redelegateValidatorFrom?.operator_address)
            }
        } else {
            // Get validators
            validators.value = (await store.getAllValidators()).validators
        }

        // Sort by voiting power
        validators.value.sort((a, b) => {
            if (parseInt(a.tokens) > parseInt(b.tokens)) { return -1 }
            if (parseInt(a.tokens) < parseInt(b.tokens)) { return 1 }
            return 0
        })

        // Default search result
        searchResult.value = validators.value

        // Hide loader
        isValidatorsGot.value = true
    })


    // Is staked validator
    function isStakedValidator(address) {
        return store.stakedBalances.find(balance => balance.validator_info.operator_address === address)
    }


    // Is current validator
    function isCurrentValidator(address) {
        if (props.unstake) {
            // Check
            if (store.unstakeCurrentValidator && store.unstakeCurrentValidator.operator_address === address) {
                return true
            }
        } else if(props.redelegate) {
            if (props.redelegate === 'from') {
                // Check
                if (store.redelegateValidatorFrom && store.redelegateValidatorFrom.operator_address === address) {
                    return true
                }
            } else {
                // Check
                if (store.redelegateValidatorTo && store.redelegateValidatorTo.operator_address === address) {
                    return true
                }
            }
        } else {
            // Check
            if (store.stakeCurrentValidator && store.stakeCurrentValidator.operator_address === address) {
                return true
            }
        }
    }


    function setValidator(validator) {
        if (props.unstake) {
            // Set data
            store.unstakeCurrentValidator = validator
        } else if (props.redelegate) {
            if (props.redelegate === 'from') {
                // Set data
                store.redelegateValidatorFrom = validator

                // Remove duplicate
                if (store.redelegateValidatorFrom.operator_address === store.redelegateValidatorTo?.operator_address) {
                    store.redelegateValidatorTo = null
                }
            } else {
                // Set data
                store.redelegateValidatorTo = validator
            }
        } else {
            // Set data
            store.stakeCurrentValidator = validator
        }

        // Event "close_validators_modal"
        emitter.emit('close_validators_modal')
    }


    // Event "search"
    emitter.on('search', ({ query, source }) => {
        if (source === 'validators') {
            // Clear search result
            searchResult.value = []

            // Set new result
            for (let key in validators.value) {
                if (validators.value[key].description.moniker.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
                    searchResult.value.push(validators.value[key])
                }
            }
        }
    })
</script>


<style scoped>
    .validators_page
    {
        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: #170232;
    }


    .validators_page .head
    {
        margin-bottom: 0;
    }



    .loader_wrap
    {
        position: relative;

        height: auto;
        padding: 20px;

        background: none;
    }



    .validators
    {
        overflow: auto;

        width: calc(100% + 32px);
        height: calc(var(--tg-viewport-stable-height) - 110px);
        margin: 0 -16px;
        padding: 0 16px 12px;

        overscroll-behavior-y: contain;
    }


    .empty
    {
        font-size: 20px;
        font-weight: 500;

        padding: 10px;

        text-align: center;

        opacity: .7;
    }


    .validators .list
    {
        display: flex;
        flex-direction: column;
    }


    .validators .list > *
    {
        margin-top: 8px;
    }



    .validators .validator_wrap
    {
        padding: 1px;

        cursor: pointer;

        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .validators .validator
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        padding: 5px 7px;

        border-radius: 11px;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }


    .validators .validator .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 44px;
        height: 44px;
        margin-right: 8px;
        padding: 6px;

        border-radius: 50%;
        background: #950fff;
    }


    .validators .validator .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: inherit;
    }


    .validators .validator .logo .icon
    {
        display: none;

        width: 24px;
        height: 24px;
    }


    .validators .validator .logo img.hide
    {
        display: none;
    }

    .validators .validator .logo img.hide + .icon
    {
        display: block;
    }


    .validators .validator .logo + *
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        width: calc(100% - 160px);
    }


    .validators .validator .moniker
    {
        font-size: 18px;
        font-weight: 500;

        overflow: hidden;

        width: calc(100% - 46px);

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .validators .validator .commission
    {
        font-size: 18px;
        font-weight: 500;

        margin-left: auto;

        white-space: nowrap;
    }


    .validators .validator .staked
    {
        font-size: 16px;
        font-weight: 300;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        color: rgba(255, 255, 255, .80);
    }


    .validators .validator .staked .logo
    {
        width: 18px;
        height: 18px;
        margin: 0 0 0 4px;
        padding: 0;
    }


    .validators .validator .apr
    {
        font-size: 12px;

        margin-left: auto;
        padding: 2px 6px;

        text-align: center;

        border-radius: 4px;
        background: #170232;
    }


    .validators .validator .apr span
    {
        display: block;

        background: linear-gradient(180deg, #dd93fe 0%, #aa36de 100%);
        -webkit-background-clip: text;
                background-clip: text;

        -webkit-text-fill-color: transparent;
    }


    .validators .validator .check
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 44px;
        height: 44px;
        margin-left: 6px;
    }


    .validators .validator .check svg
    {
        display: block;

        width: 20px;
        height: 20px;
    }


    .validators .validator_wrap.current
    {
        background: linear-gradient(180deg, #dc92fe 0%, #310446 100%);
    }

    .validators .current .validator
    {
        background: linear-gradient(180deg, #af60d3 0%, #56007e 100%);
    }
</style>