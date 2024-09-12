<template>
    <!-- Redelegate page -->
    <section class="page_container inner_page_container redelegate">
        <div class="cont">
            <!-- Redelegate page head -->
            <div class="head">
                <!-- Back button -->
                <router-link to="/account?activeSlide=1" class="back_btn">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </router-link>

                <!-- Redelegate page title -->
                <div class="page_title">
                    {{ $t('message.redelegate_page_title') }}
                </div>
            </div>


            <!-- Validator from -->
            <div class="validator_info from">
                <!-- Validator label -->
                <div class="field_label">
                    {{ $t('message.redelegate_validator_from_label') }}
                </div>

                <!-- Validator info -->
                <div class="info_wrap" @click.prevent="openValidatorsFromModal()" v-if="!store.redelegateValidatorFrom">
                    <div class="info">
                        <div class="placeholder">
                            {{ $t('message.stake_validator_placeholder') }}
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>

                <!-- Validator info -->
                <div class="validator_wrap" @click.prevent="openValidatorsFromModal()" v-else>
                    <div class="validator">
                        <!-- Validator logo -->
                        <div class="logo">
                            <img :src="`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${store.networks[store.currentNetwork].prefix}/moniker/${store.redelegateValidatorFrom.operator_address}.png`" alt="" loading="lazy" @error="imageLoadError($event)">

                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>
                        </div>

                        <div>
                            <!-- Validator moniker -->
                            <div class="moniker">
                                {{ store.redelegateValidatorFrom.description.moniker }}
                            </div>

                            <div class="notice" v-if="store.redelegateValidatorFrom?.redelegations" @click.stop.prevent="openRedelegationsModal()">!</div>
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>

                <!-- Validator staked -->
                <div class="balances">
                    <div class="staked">
                        <!-- Validator staked label -->
                        <div class="label">
                            {{ $t('message.validatoes_staked_label') }}
                        </div>

                        <!-- Validator staked amount -->
                        <div class="amount">
                            {{ formatTokenAmount(validatorFromStaked.balance.amount, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }).replace(',', '.') }}

                            <span>{{ store.networks[store.currentNetwork].token_name }}</span>
                        </div>

                        <!-- Validator staked cost -->
                        <div class="cost">
                            {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, validatorFromStaked.balance.amount, store.networks[store.currentNetwork].exponent)) }}

                            {{ store.currentCurrencySymbol }}
                        </div>
                    </div>

                    <div class="availabel">
                        <!-- Validator availabel label -->
                        <div class="label">
                            {{ $t('message.validatoes_availabel_label') }}
                        </div>

                        <!-- Validator availabel amount -->
                        <div class="amount">
                            {{ formatTokenAmount(maxAmount, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }).replace(',', '.') }}

                            <span>{{ store.networks[store.currentNetwork].token_name }}</span>
                        </div>

                        <!-- Validator availabel cost -->
                        <div class="cost">
                            {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, maxAmount, store.networks[store.currentNetwork].exponent)) }}

                            {{ store.currentCurrencySymbol }}
                        </div>
                    </div>
                </div>
            </div>


            <!-- Redelegate page arrow -->
            <div class="arrow_wrap">
                <div class="arrow">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_arrow_ver"></use></svg>
                </div>
            </div>


            <!-- Validator to -->
            <div class="validator_info to">
                <!-- Validator label -->
                <div class="field_label">
                    {{ $t('message.redelegate_validator_to_label') }}
                </div>

                <!-- Validator info -->
                <div class="info_wrap" @click.prevent="openValidatorsToModal()" v-if="!store.redelegateValidatorTo">
                    <div class="info">
                        <div class="placeholder">
                            {{ $t('message.stake_validator_placeholder') }}
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>

                <!-- Validator info -->
                <div class="validator_wrap" @click.prevent="openValidatorsToModal()" v-else>
                    <div class="validator">
                        <!-- Validator logo -->
                        <div class="logo">
                            <img :src="`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${store.networks[store.currentNetwork].prefix}/moniker/${store.redelegateValidatorTo.operator_address}.png`" alt="" loading="lazy" @error="imageLoadError($event)">

                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>
                        </div>

                        <div>
                            <!-- Validator moniker -->
                            <div class="moniker">
                                {{ store.redelegateValidatorTo.description.moniker }}
                            </div>
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>

                <!-- Validator staked -->
                <div class="balances">
                    <div class="staked">
                        <!-- Validator staked label -->
                        <div class="label">
                            {{ $t('message.validatoes_staked_label') }}
                        </div>

                        <!-- Validator staked amount -->
                        <div class="amount">
                            {{ formatTokenAmount(validatorToStaked.balance.amount, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }).replace(',', '.') }}

                            <span>{{ store.networks[store.currentNetwork].token_name }}</span>
                        </div>

                        <!-- Validator staked cost -->
                        <div class="cost">
                            {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, validatorToStaked.balance.amount, store.networks[store.currentNetwork].exponent)) }}

                            {{ store.currentCurrencySymbol }}
                        </div>
                    </div>
                </div>
            </div>


            <!-- Redelegate amount -->
            <div class="amount_field" :class="{ disabled: !store.redelegateValidatorFrom }">
                <!-- Redelegate amount label -->
                <div class="field_label">
                    {{ $t('message.stake_amount_label') }}

                    <!-- Redelegate amount notice -->
                    <div class="notice" v-if="store.redelegateValidatorFrom?.redelegations" @click.stop.prevent="openRedelegationsModal()">!</div>

                    <!-- Redelegate amount cost -->
                    <div class="cost">
                        {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, (amount * Math.pow(10, store.networks[store.currentNetwork].exponent)), store.networks[store.currentNetwork].exponent)) }}

                        {{ store.currentCurrencySymbol }}
                    </div>
                </div>

                <div class="field">
                     <!-- Redelegate amount field -->
                    <input type="number" inputmode="numeric" class="input big" v-model="amount" placeholder="0.00"
                        @focus="emitter.emit('show_keyboard', $event.target)"
                        @blur="emitter.emit('hide_keyboard')"
                        @input="validateAmount($event)">

                    <!-- Redelegate amount max. nutton -->
                    <button type="button" class="max_btn" @click.prevent="setMaxAmount()">
                        {{ $t('message.btn_MAX') }}
                    </button>
                </div>
            </div>


            <!-- Tx fee -->
            <TxFee v-if="isFormValid" :msgAny txType="redelegate" />


             <!-- Redelegate page buttons -->
            <div class="btns">
                <!-- Redelegate button -->
                <button v-if="!store.networks[store.currentNetwork].currentTxHash" class="btn" @click.prevent="showRedelegateConfirmModal = true" :class="{ disabled: !store.TxFee.isEnough }">
                    <span>{{ $t('message.btn_redelegate') }}</span>
                </button>

                <!-- Waiting button  -->
                <button v-else class="btn waiting_btn" @click.prevent="emitter.emit('show_collapsible_notification')">
                    <span>{{ $t('message.btn_waiting_tx') }}</span>
                </button>
            </div>
        </div>
    </section>


    <!-- Validators modal -->
    <transition name="from_right">
    <ValidatorsModal v-if="showValidatorsFromModal" redelegate="from" />
    </transition>

    <transition name="from_right">
    <ValidatorsModal v-if="showValidatorsToModal" redelegate="to" />
    </transition>

    <!-- Redelegations modal -->
    <transition name="modal">
    <RedelegationsModal v-if="showRedelegationsModal" :redelegations="store.redelegateValidatorFrom?.redelegations" />
    </transition>

    <!-- Redelegate confirm modal -->
    <transition name="from_right">
    <RedelegateConfirmModal v-if="showRedelegateConfirmModal" :amount :msgAny />
    </transition>

    <!-- Overlay -->
    <transition name="fade">
    <div class="modal_overlay" @click.prevent="emitter.emit('close_any_modal')" v-if="showRedelegationsModal"></div>
    </transition>
</template>


<script setup>
    import { ref, inject, onBeforeMount, computed, onUnmounted, watch } from 'vue'
    import { useGlobalStore } from '@/store'
    import { formatTokenCost, formatTokenAmount, imageLoadError, calcTokenCost } from '@/utils'
    import { MsgBeginRedelegate } from 'cosmjs-types/cosmos/staking/v1beta1/tx'

    // Components
    import TxFee from '@/components/TxFee.vue'
    import ValidatorsModal from '@/components/modal/ValidatorsModal.vue'
    import RedelegateConfirmModal from '@/components/modal/RedelegateConfirmModal.vue'
    import RedelegationsModal from '@/components/modal/RedelegationsModal.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        showRedelegationsModal = ref(false),
        showValidatorsFromModal = ref(false),
        showValidatorsToModal = ref(false),
        showRedelegateConfirmModal = ref(false),
        msgAny = ref([]),
        amount = ref(''),
        maxAmount = ref(0),
        isAmountReady = ref(false),
        isFormValid = ref(computed(() => amount.value > 0 && isAmountReady.value && !!store.redelegateValidatorFrom && !!store.redelegateValidatorTo)),
        validatorFromStaked = computed(() => {
            let result = isStakedValidator(store.redelegateValidatorFrom?.operator_address)

            return result || {
                balance: {
                    amount: 0
                }
            }
        }),
        validatorToStaked = computed(() => {
            let result = isStakedValidator(store.redelegateValidatorTo?.operator_address)

            return result || {
                balance: {
                    amount: 0
                }
            }
        })


    onBeforeMount(async () => {
        // Reset data
        store.redelegateValidatorFrom = null
        store.redelegateValidatorTo = null

        // Get redelegations
        await store.getRedelegations()
    })


    onUnmounted(() => {
        // Reset data
        store.redelegateValidatorFrom = null
        store.redelegateValidatorTo = null

        // Unlisten events
        emitter.off('close_any_modal')
        emitter.off('close_redelegations_modal')
        emitter.off('close_redelegate_confirm_modal')
        emitter.off('close_validators_modal')
    })


    watch(computed(() => store.redelegateValidatorFrom), () => {
        // Find validator in redelegations
        store.redelegateValidatorFrom.redelegations = store.redelegations.find(el => el.redelegation.validator_dst_address === store.redelegateValidatorFrom.operator_address) || null

        // Sum redelegations
        store.redelegateValidatorFrom.redelegationsSum = 0

        if (store.redelegateValidatorFrom.redelegations) {
            store.redelegateValidatorFrom.redelegations.entries.forEach(el => {
                store.redelegateValidatorFrom.redelegationsSum += parseFloat(el.redelegation_entry.initial_balance)
            })
        }

        // Get max amount
        maxAmount.value = (isStakedValidator(store.redelegateValidatorFrom.operator_address)).balance.amount - store.redelegateValidatorFrom.redelegationsSum
    })


    watch(computed(() => isFormValid.value), () => {
        if (isFormValid.value) {
            // Set messeges
            msgAny.value = [{
                typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
                value: MsgBeginRedelegate.fromPartial({
                    delegatorAddress: store.currentAddress,
                    validatorSrcAddress: store.redelegateValidatorFrom.operator_address,
                    validatorDstAddress: store.redelegateValidatorTo.operator_address,
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


    // Open validators from modal
    function openValidatorsFromModal() {
        // Show validators modal
        showValidatorsFromModal.value = true
    }


    // Open redelegations modal
    function openRedelegationsModal() {
        // Show redelegations modal
        showRedelegationsModal.value = true

        // Update status
        store.isAnyModalOpen = true
    }


    // Open validators to modal
    function openValidatorsToModal() {
        // Show validators modal
        showValidatorsToModal.value = true
    }


    // Event "close_validators_modal"
    emitter.on('close_validators_modal', () => {
        // Hide validators modal
        showValidatorsFromModal.value = false
        showValidatorsToModal.value = false
    })


    // Event "close_stake_confirm_modal"
    emitter.on('close_redelegate_confirm_modal', () => {
        // Hide redelegate confirm modal
        showRedelegateConfirmModal.value = false
    })


    // Event "close_redelegations_modal"
    emitter.on('close_redelegations_modal', () => {
        // Hide redelegations modal
        showRedelegationsModal.value = false

        // Update status
        store.isAnyModalOpen = false
    })


    // Event "close_any_modal"
    emitter.on('close_any_modal', () => {
        // Hide redelegations modal
        showRedelegationsModal.value = false

        // Update status
        store.isAnyModalOpen = false
    })
</script>


<style scoped>
    .validator_info
    {
        position: relative;

        padding: 8px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #2c0a5a 0%,#6b27b9 100%);
    }

    .validator_info.from
    {
        background: linear-gradient(to top,  #2c0a5a 0%,#6b27b9 100%);
    }


    .validator_info .info_wrap
    {
        padding: 1px;

        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .validator_info.from:before
    {
        position: absolute;
        z-index: 1;
        right: 0;
        bottom: 0;
        left: 0;

        display: block;

        width: 72px;
        height: 8px;
        margin: 0 auto;

        content: '';
        pointer-events: none;

        background: url(@/assets/bg_redelegate_validator_from.png) 0 0 no-repeat;
    }


    .validator_info.to:before
    {
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        left: 0;

        display: block;

        width: 72px;
        height: 19px;
        margin: 0 auto;

        content: '';
        pointer-events: none;

        background: url(@/assets/bg_redelegate_validator_to.png) 0 0 no-repeat;
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
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

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


    .validator_info .validator .notice
    {
        line-height: 18px;

        width: 20px;
        height: 20px;

        text-align: center;

        border: 1px solid;
        border-radius: 50%;
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


    .validator_info .balances
    {
        position: relative;
        z-index: 2;

        display: flex;
        align-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-top: 6px;
        padding: 4px 7px 5px;

        border-radius: 10px;
        background: #170232;
    }


    .validator_info .balances:before
    {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;

        display: block;

        width: 72px;
        height: 19px;
        margin: 0 auto;

        content: '';
        pointer-events: none;

        background: url(@/assets/bg_redelegate_validator_from_balances.png) 0 0 no-repeat;
    }


    .validator_info.to .balances:before
    {
        display: none;
    }


    .validator_info .balances .availabel
    {
        text-align: right;
    }


    .validator_info .balances .label
    {
        font-weight: 500;
    }


    .validator_info .balances .amount
    {
        font-weight: 300;
    }


    .validator_info .balances .amount span
    {
        font-weight: 400;
    }


    .validator_info .balances .cost
    {
        font-weight: 300;

        color: rgba(255, 255, 255, .60);
    }



    .arrow_wrap
    {
        position: relative;
        z-index: 5;

        width: 38px;
        height: 38px;
        margin: -15px auto;
        padding: 1px;

        border-radius: 5px;
        background: linear-gradient(180deg, #dc92fe 0%, #310446 100%);
    }


    .arrow_wrap .arrow
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 36px;
        height: 36px;

        border-radius: 4px;
        background: linear-gradient(180deg, #af60d3 0%, #56007e 100%);
    }


    .arrow_wrap .arrow svg
    {
        display: block;

        width: 12px;
        height: 20px;
    }



    .amount_field
    {
        margin-top: 12px;
        margin-bottom: auto;
        padding-bottom: 20px;
    }


    .amount_field .notice
    {
        font-size: 10px;
        line-height: 10px;

        width: 12px;
        height: 12px;
        margin-left: 8px;

        text-align: center;

        border: 1px solid;
        border-radius: 50%;
    }


    .amount_field .cost
    {
        margin-left: auto;

        color: rgba(255, 255, 255, .70);
    }


    .amount_field.disabled
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