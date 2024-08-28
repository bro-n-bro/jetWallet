<template>
    <section class="page_container inner_page_container restake">
        <div class="cont">
            <div class="head">
                <router-link to="/account?activeSlide=1" class="back_btn">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </router-link>

                <div class="page_title">
                    {{ $t('message.restake_page_title') }}
                </div>
            </div>


            <div class="validator_info from">
                <div class="field_label">
                    {{ $t('message.restake_validator_from_label') }}
                </div>

                <div class="info_wrap" @click.prevent="showValidatorsFromModal = true" v-if="!store.restakeValidatorFrom">
                    <div class="info">
                        <div class="placeholder">
                            {{ $t('message.stake_validator_placeholder') }}
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>

                <div class="validator_wrap" @click.prevent="showValidatorsFromModal = true" v-else>
                    <div class="validator">
                        <div class="logo">
                            <img :src="`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${store.networks[store.currentNetwork].prefix}/moniker/${store.restakeValidatorFrom.operator_address}.png`" alt="" loading="lazy" @error="imageLoadError($event)">

                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>
                        </div>

                        <div>
                            <div class="moniker">
                                {{ store.restakeValidatorFrom.description.moniker }}
                            </div>
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>

                <div class="staked">
                    <div class="label">
                        {{ $t('message.validatoes_staked_label') }}
                    </div>

                    <div class="amount">
                        {{ formatTokenAmount(validatorFromStaked.balance.amount, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }) }}

                        <span>{{ store.networks[store.currentNetwork].token_name }}</span>
                    </div>

                    <div class="cost">
                        {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, validatorFromStaked.balance.amount, store.networks[store.currentNetwork].exponent)) }} {{ store.currentCurrencySymbol }}
                    </div>
                </div>
            </div>


            <div class="validator_info to">
                <div class="field_label">
                    {{ $t('message.restake_validator_to_label') }}
                </div>

                <div class="info_wrap" @click.prevent="showValidatorsToModal = true" v-if="!store.restakeValidatorTo">
                    <div class="info">
                        <div class="placeholder">
                            {{ $t('message.stake_validator_placeholder') }}
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>

                <div class="validator_wrap" @click.prevent="showValidatorsToModal = true" v-else>
                    <div class="validator">
                        <div class="logo">
                            <img :src="`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${store.networks[store.currentNetwork].prefix}/moniker/${store.restakeValidatorTo.operator_address}.png`" alt="" loading="lazy" @error="imageLoadError($event)">

                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>
                        </div>

                        <div>
                            <div class="moniker">
                                {{ store.restakeValidatorTo.description.moniker }}
                            </div>
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>

                <div class="staked">
                    <div class="label">
                        {{ $t('message.validatoes_staked_label') }}
                    </div>

                    <div class="amount">
                        {{ formatTokenAmount(validatorToStaked.balance.amount, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }) }}

                        <span>{{ store.networks[store.currentNetwork].token_name }}</span>
                    </div>

                    <div class="cost">
                        {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, validatorToStaked.balance.amount, store.networks[store.currentNetwork].exponent)) }} {{ store.currentCurrencySymbol }}
                    </div>
                </div>
            </div>


            <div class="amount" :class="{ disabled: !store.restakeValidatorFrom }">
                <div class="field_label">
                    {{ $t('message.stake_amount_label') }}

                    <div class="cost">
                        {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, (amount * Math.pow(10, store.networks[store.currentNetwork].exponent)), store.networks[store.currentNetwork].exponent)) }}

                        {{ store.currentCurrencySymbol }}
                    </div>
                </div>

                <div class="field">
                    <input type="number" inputmode="numeric" class="input big" v-model="amount" placeholder="0.00"
                        @focus="emitter.emit('show_keyboard')"
                        @blur="emitter.emit('hide_keyboard')"
                        @input="validateAmount($event)">

                    <button type="button" class="max_btn" @click.prevent="setMaxAmount">
                        {{ $t('message.btn_MAX') }}
                    </button>
                </div>
            </div>


            <!-- Tx fee -->
            <TxFee v-if="isFormValid" :msgAny />


            <div class="btns">
                <button v-if="!store.networks[store.currentNetwork].currentTxHash" class="btn" @click.prevent="showRestakeConfirmModal = true" :class="{ disabled: !store.TxFee.isEnough }">
                    <span>{{ $t('message.btn_restake') }}</span>
                </button>

                <button v-else class="btn waiting_btn" @click.prevent="emitter.emit('show_pending_notification')">
                    <span>{{ $t('message.btn_waiting_tx') }}</span>
                </button>
            </div>
        </div>
    </section>


    <!-- Validators modal -->
    <ValidatorsModal v-if="showValidatorsFromModal" restake="from" />
    <ValidatorsModal v-if="showValidatorsToModal" restake="to" />

    <!-- restake confirm modal -->
    <RestakeConfirmModal v-if="showRestakeConfirmModal" :amount :msgAny />
</template>


<script setup>
    import { ref, inject, onBeforeMount, computed, onUnmounted, watch } from 'vue'
    import { useGlobalStore } from '@/store'
    import { formatTokenCost, formatTokenAmount, imageLoadError, calcTokenCost } from '@/utils'
    import { MsgBeginRedelegate } from 'cosmjs-types/cosmos/staking/v1beta1/tx'

    // Components
    import TxFee from '@/components/TxFee.vue'
    import ValidatorsModal from '@/components/modal/ValidatorsModal.vue'
    import RestakeConfirmModal from '@/components/modal/RestakeConfirmModal.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        showValidatorsFromModal = ref(false),
        showValidatorsToModal = ref(false),
        showRestakeConfirmModal = ref(false),
        msgAny = ref([]),
        amount = ref(''),
        maxAmount = ref(0),
        isAmountReady = ref(false),
        isFormValid = ref(computed(() => isAmountReady.value && !!store.restakeValidatorFrom && !!store.restakeValidatorTo)),
        validatorFromStaked = computed(() => {
            let result = isStakedValidator(store.restakeValidatorFrom?.operator_address)

            return result || {
                balance: {
                    amount: 0
                }
            }
        }),
        validatorToStaked = computed(() => {
            let result = isStakedValidator(store.restakeValidatorTo?.operator_address)

            return result || {
                balance: {
                    amount: 0
                }
            }
        })


    onBeforeMount(() => {
        // Reset data
        store.restakeValidatorFrom = null
        store.restakeValidatorTo = null
    })


    onUnmounted(() => {
        // Reset data
        store.restakeValidatorFrom = null
        store.restakeValidatorTo = null

        // Unlisten events
        emitter.off('close_restake_confirm_modal')
        emitter.off('close_validators_modal')
    })


    watch(computed(() => store.restakeValidatorFrom), () => {
        // Get max amount
        maxAmount.value = (isStakedValidator(store.restakeValidatorFrom.operator_address)).balance.amount
    })


    watch(computed(() => isFormValid.value), () => {
        if (isFormValid.value) {
            // Set messeges
            msgAny.value = [{
                typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
                value: MsgBeginRedelegate.fromPartial({
                    delegatorAddress: store.currentAddress,
                    validatorSrcAddress: store.restakeValidatorFrom.operator_address,
                    validatorDstAddress: store.restakeValidatorTo.operator_address,
                    amount: {
                        denom: store.networks[store.currentNetwork].denom,
                        amount: `${parseFloat((amount.value).toString().replace(',', '.')).toFixed(store.networks[store.currentNetwork].exponent) * Math.pow(10, store.networks[store.currentNetwork].exponent)}`
                    }
                })
            }]
        }
    })


    // Set MAX amount
    function setMaxAmount() {
        // Set amount status
        isAmountReady.value = false

        setTimeout(() => {
            // Set amount
            amount.value = formatTokenAmount(maxAmount.value, store.networks[store.currentNetwork].exponent)

            // Set amount status
            isAmountReady.value = true
        })
    }


    // Validate amount
    function validateAmount(e) {
        // Set amount status
        isAmountReady.value = false

        setTimeout(() => {
            // Negative value
            if (e.target.value.length && e.target.value <= 0) {
                // Set empty
                amount.value = ''
            }

            // Acceptable value
            if (e.target.value.length && e.target.value > 0 && e.target.value < formatTokenAmount(maxAmount.value, store.networks[store.currentNetwork].exponent)){
                // Set amount status
                isAmountReady.value = true
            }

            // More than available balance
            if (e.target.value > formatTokenAmount(maxAmount.value, store.networks[store.currentNetwork].exponent)) {
                // Set MAX amount
                setMaxAmount()
            }
        })
    }


    // Is staked validator
    function isStakedValidator(address) {
        return store.stakedBalances.find(balance => balance.validator_info.operator_address === address)
    }


    // Event "close_validators_modal"
    emitter.on('close_validators_modal', () => {
        // Hide validators modal
        showValidatorsFromModal.value = false
        showValidatorsToModal.value = false
    })


    // Event "close_stake_confirm_modal"
    emitter.on('close_restake_confirm_modal', () => {
        // Hide restake confirm modal
        showRestakeConfirmModal.value = false
    })
</script>


<style scoped>
    .restake
    {
        background: #170232;
    }



    .validator_info
    {
        position: relative;

        margin-top: 8px;
        padding: 8px;

        border-radius: 10px;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(53, 12, 107, .7) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(148, 56, 248, .7) 85.09%);
    }

    .validator_info.from
    {
        margin-top: 10px;

        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .7) 0%, rgba(89, 21, 167, .7) 50.94%, rgba(53, 12, 107, .7) 85.09%);
    }


    .validator_info .info_wrap
    {
        padding: 1px;

        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .validator_info .info
    {
        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        height: 46px;
        padding: 0 15px;

        cursor: pointer;

        border-radius: 11px;
        background: #06000e;
    }


    .validator_info .info .placeholder
    {
        font-size: 16px;
        font-weight: 500;

        opacity: .6;
    }


    .validator_info .info .arr
    {
        position: absolute;
        z-index: 3;
        top: 0;
        right: 16px;
        bottom: 0;

        display: block;

        width: 28px;
        height: 28px;
        margin: auto 0;

        transform: rotate(-90deg);
    }


    .validator_info .validator_wrap
    {
        padding: 1px;

        cursor: pointer;

        border-radius: 12px;
        background: linear-gradient(180deg, #dc92fe 0%, #310446 100%);
    }


    .validator_info .validator
    {
        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        padding: 5px 7px;

        border-radius: 11px;
        background: linear-gradient(180deg, #af60d3 0%, #56007e 100%);
    }


    .validator_info .validator .logo
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


    .validator_info .validator .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: inherit;
    }


    .validator_info .validator .logo .icon
    {
        display: none;

        width: 24px;
        height: 24px;
    }


    .validator_info .validator .logo img.hide
    {
        display: none;
    }

    .validator_info .validator .logo img.hide + .icon
    {
        display: block;
    }


    .validator_info .validator .logo + *
    {
        width: calc(100% - 100px);
    }


    .validator_info .validator .moniker
    {
        font-size: 18px;
        font-weight: 500;

        overflow: hidden;

        width: calc(100% - 46px);

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .validator_info .validator .staked
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


    .validator_info .validator .staked .logo
    {
        width: 18px;
        height: 18px;
        margin: 0 0 0 4px;
        padding: 0;
    }


    .validator_info .validator .arr
    {
        position: absolute;
        z-index: 3;
        top: 0;
        right: 16px;
        bottom: 0;

        display: block;

        width: 28px;
        height: 28px;
        margin: auto 0;

        transform: rotate(-90deg);
    }


    .validator_info .staked
    {
        margin-top: 6px;
        padding: 4px 7px 5px;

        border-radius: 10px;
        background: #170232;
    }


    .validator_info .staked .label
    {
        font-weight: 500;
    }


    .validator_info .staked .amount
    {
        font-weight: 300;
    }


    .validator_info .staked .amount span
    {
        font-weight: 400;
    }


    .validator_info .staked .cost
    {
        font-weight: 300;

        color: rgba(255, 255, 255, .60);
    }



    .amount
    {
        margin-top: 2px;
        margin-bottom: auto;
    }


    .amount .cost
    {
        margin-left: auto;

        color: rgba(255, 255, 255, .70);
    }


    .amount.disabled
    {
        pointer-events: none;
    }



    .field
    {
        position: relative;

        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #5d33ce 0%,#200750 100%);
    }


    .input
    {
        border-radius: 9px;
        background: #06000e;
    }


    .btns
    {
        margin-top: 0;
        padding: 0;
    }
</style>