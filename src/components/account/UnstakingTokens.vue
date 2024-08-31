<template>
    <section class="unstaking_tokens" v-if="store.isUnstakingBalancesGot && store.unstakingBalances.length">
        <div class="cont">
            <div class="title">
                {{ $t('message.unstaking_tokens_title') }}
            </div>

            <div class="data_wrap">
                <div class="data">
                    <Loader v-if="isProcess" />

                    <div class="info">
                        <div class="label">
                            {{ $t('message.unstaking_tokens_label') }}

                            <vue-countdown :time="dateCalc(getEarliestDate()) - new Date()" v-slot="{ days, hours, minutes }">
                                <span v-if="days > 1">{{ days }} {{ $t('message.unstaking_tokens_finish_days') }}</span>
                                <span v-if="days == 1">{{ days }} {{ $t('message.unstaking_tokens_finish_day') }}</span>
                                <span v-if="!days">{{ hours }}h {{ minutes }}m</span>
                            </vue-countdown>
                        </div>

                        <div class="token">
                            <div class="logo">
                                <img :src="getNetworkLogo(store.networks[store.currentNetwork].chain_id)" alt="">
                            </div>

                            <div>
                                <div class="denom">
                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>

                                <div class="count">
                                    {{ $t('message.unstaking_tokens_count_label') }} <b>{{ getUnstakingsCount() }}</b>
                                </div>
                            </div>

                            <div class="amount">
                                <div class="val">
                                    {{ formatTokenAmount(store.networks[store.currentNetwork].totalUnstakingTokens, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }).replace(',', '.') }} {{ store.networks[store.currentNetwork].token_name }}
                                </div>

                                <div class="cost">
                                    {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, store.networks[store.currentNetwork].totalUnstakingTokens, store.networks[store.currentNetwork].exponent)) }} {{ store.currentCurrencySymbol }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="spoler_btn" @click.prevent="showDropdown = !showDropdown" :class="{ active: showDropdown }">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                    </button>

                    <div class="dropdown" v-show="showDropdown">
                        <div class="list">
                            <div v-for="(item, index) in store.unstakingBalances" :key="index">
                                <UnstakingTokensItem class="item" v-for="(entry, entryIndex) in item.entries" :key="entryIndex">
                                    <template #validator>
                                    <div class="validator_wrap">
                                        <div class="validator">
                                            <div class="logo">
                                                <img :src="`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${store.networks[store.currentNetwork].prefix}/moniker/${item.validator_info.operator_address}.png`" alt="" loading="lazy" @error="imageLoadError($event)">

                                                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>
                                            </div>

                                            <div>
                                                <div class="moniker">
                                                    {{ item.validator_info.description.moniker }}
                                                </div>

                                                <div class="finish">
                                                    {{ $t('message.unstaking_tokens_finish_label') }}

                                                    <vue-countdown :time="dateCalc(entry.completion_time) - new Date()" v-slot="{ days, hours, minutes }">
                                                        <span v-if="days > 1">{{ days }} {{ $t('message.unstaking_tokens_finish_days') }}</span>
                                                        <span v-if="days == 1">{{ days }} {{ $t('message.unstaking_tokens_finish_day') }}</span>
                                                        <span v-if="!days">{{ hours }}h {{ minutes }}m</span>
                                                    </vue-countdown>
                                                </div>
                                            </div>

                                            <div class="amount">
                                                <div class="val">
                                                    {{ formatTokenAmount(entry.balance, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }) }} {{ store.networks[store.currentNetwork].token_name }}
                                                </div>

                                                <div class="cost">
                                                    {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, entry.balance, store.networks[store.currentNetwork].exponent)) }} {{ store.currentCurrencySymbol }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </template>

                                    <template #cancel_btn v-if="store.networks[store.currentNetwork].isunstakingCancelSupport">
                                    <button class="cancel_btn" @click.prevent="cancelUnstaking(item.validator_info.operator_address, entry)">
                                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>

                                        <span>{{ $t('message.btn_cancel') }}</span>
                                    </button>
                                    </template>
                                </UnstakingTokensItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, onBeforeMount, inject } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'
    import { getNetworkLogo, calcTokenCost, formatTokenCost, formatTokenAmount, imageLoadError, dateCalc, signTx, sendTx, getExplorerLink } from '@/utils'
    import { MsgCancelUnbondingDelegation } from 'cosmjs-types/cosmos/staking/v1beta1/tx'


    // Components
    import Loader from '@/components/Loader.vue'
    import UnstakingTokensItem from '@/components/account/UnstakingTokensItem.vue'


    const store = useGlobalStore(),
        i18n = inject('i18n'),
        notification = useNotification(),
        isProcess = ref(false),
        showDropdown = ref(false),
        msgAny = ref([])


    onBeforeMount(() => {
        // Get unstaking balances
        store.getUnstakingBalances()
    })


    // Get earliest date
    function getEarliestDate() {
        let allDates = store.unstakingBalances.flatMap(item => item.entries.map(entry => new Date(entry.completion_time)))

        return Math.min(...allDates)
    }


    // Get unstakings count
    function getUnstakingsCount() {
        let result = 0

        // Calc
        store.unstakingBalances.forEach(balance => result += balance.entries.length)

        return result
    }


    // Cancel unstaking
    async function cancelUnstaking(validator_address, entry) {
        // Set message
        msgAny.value.push({
            typeUrl: '/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation',
            value: MsgCancelUnbondingDelegation.fromPartial({
                delegatorAddress: store.currentAddress,
                validatorAddress: validator_address,
                amount: [{
                    denom: store.networks[store.currentNetwork].denom,
                    amount: `${parseFloat(entry.balance.toString().replace(',', '.')).toFixed(store.networks[store.currentNetwork].exponent) * Math.pow(10, store.networks[store.currentNetwork].exponent)}`
                }],
                creation_height: entry.creation_height
            })
        })


        // Set process status
        isProcess.value = true

        try {
            // Sign Tx
            let txBytes = await signTx(msgAny.value)

            // Clean notifications
            notification.notify({
                group: 'default',
                clean: true
            })

            // Show notification
            notification.notify({
                group: 'default',
                speed: 200,
                duration: -100,
                title: i18n.global.t('message.notification_tx_pending_title'),
                type: 'pending',
                data: {
                    explorer_link: getExplorerLink(store.currentNetwork)
                }
            })

            // Send Tx
            sendTx(txBytes)
        } catch (error) {
            console.log(error)

            // Show error
            showError(error)
        }


        // Show error message
        function showError(error) {
            // Get error code
            let errorText = ''

            // Get error title
            error.code
                ? errorText = i18n.global.t(`message.notification_tx_error_${error.code}`)
                : errorText = i18n.global.t('message.notification_tx_error_rejected')

            // Show notification
            notification.notify({
                group: 'default',
                speed: 200,
                duration: 6000,
                title: 'Tx error',
                text: errorText,
                type: 'error'
            })
        }
    }
</script>


<style scoped>
    .unstaking_tokens
    {
        position: relative;
        z-index: 9;

        padding-top: 12px;

        background: #170232;
    }


    .account_page.searching .unstaking_tokens
    {
        display: none;
    }


    .unstaking_tokens .title
    {
        font-size: 14px;

        padding: 2px 10px;

        opacity: .6;
    }


    .data_wrap
    {
        padding: 1px;

        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .data
    {
        position: relative;

        overflow: hidden;

        padding: 5px 9px;

        border-radius: 11px;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }



    .label
    {
        font-size: 14px;
        font-weight: 500;

        margin-bottom: 4px;

        color: #b78ce6;
    }



    .token
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
    }


    .token .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 38px;
        height: 38px;
        margin-right: 8px;

        border-radius: 50%;
    }


    .token .logo img
    {
        display: block;

        max-width: 100%;
        max-height: 100%;

        border-radius: 50%;
    }


    .token .denom
    {
        font-size: 16px;
        font-weight: 500;

        text-transform: uppercase;
    }


    .token .count
    {
        font-size: 14px;

        color: rgba(183, 140, 230, .80);
    }


    .token .count b
    {
        font-weight: 600;
    }


    .token .amount
    {
        font-size: 16px;
        font-weight: 500;

        margin-left: auto;

        text-align: right;
    }


    .token .amount .cost
    {
        font-weight: 400;

        color: #836b9e;
    }



    .spoler_btn
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 100%;
        height: 22px;
    }


    .spoler_btn .icon
    {
        display: block;

        width: 10px;
        height: 11px;

        transition: .2s linear;
    }


    .spoler_btn.active .icon
    {
        transform: rotate(180deg);
    }



    .list
    {
        display: flex;
        flex-direction: column;
    }


    .item
    {
        position: relative;
    }



    .validator_wrap
    {
        position: relative;
        z-index: 3;

        width: calc(100% + 18px);
        margin-right: -9px;
        margin-left: -9px;
        padding: 1px;

        cursor: pointer;
        transition: transform .2s linear;

        border-radius: 12px;
    }


    .validator
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        padding: 5px 9px;

        border-radius: 11px;
    }


    .validator .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 38px;
        height: 38px;
        margin-right: 8px;
        padding: 6px;

        border-radius: 50%;
        background: #950fff;
    }


    .validator .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: inherit;
    }


    .validator .logo .icon
    {
        display: none;

        width: 24px;
        height: 24px;
    }


    .validator .logo img.hide
    {
        display: none;
    }

    .validator .logo img.hide + .icon
    {
        display: block;
    }


    .validator .logo + *
    {
        width: calc(100% - 179px);
    }


    .validator .moniker
    {
        font-size: 18px;
        font-weight: 500;

        overflow: hidden;

        width: 100%;

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .validator .finish
    {
        font-size: 14px;

        color: rgba(183, 140, 230, .80);
    }


    .validator .amount
    {
        font-size: 16px;
        font-weight: 500;

        width: 125px;
        max-width: 100%;
        margin-left: auto;

        text-align: right;
    }


    .validator .amount .cost
    {
        font-weight: 400;

        color: #836b9e;
    }


    .swiped .validator_wrap
    {
        transform: translateX(-57px);

        background: linear-gradient(180deg, #dc92fe 0%, #310446 100%);
    }

    .swiped .validator_wrap .validator
    {
        background: linear-gradient(180deg, #af60d3 0%, #56007e 100%);
    }



    .cancel_btn
    {
        font-weight: 300;

        position: absolute;
        top: 0;
        right: -9px;

        display: none;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 69px;
        height: 100%;
        padding-left: 12px;

        text-align: center;

        background: #c41e1e;
    }


    .swiped .cancel_btn
    {
        display: flex;
    }


    .cancel_btn .icon
    {
        display: block;

        width: 20px;
        height: 20px;
        margin: 0 auto 4px;
    }


    .cancel_btn span
    {
        width: 100%;
    }
</style>