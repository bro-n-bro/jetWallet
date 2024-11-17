<template>
    <!-- Stake page -->
    <section class="page_container inner_page_container stake">
        <div class="cont">
            <!-- Stake page head -->
            <div class="head">
                <!-- Bacj button -->
                <router-link to="/account?activeSlide=1" class="back_btn">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </router-link>

                <!-- Stake page title -->
                <div class="page_title">
                    {{ $t('message.stake_page_title') }}
                </div>
            </div>

            <!-- Loader -->
            <Loader v-if="!store.isBalancesGot || !store.isStakedBalancesGot" />

            <template v-else>
            <!-- Current staked -->
            <div class="current_staked">
                <!-- Current staked label -->
                <div class="field_label">
                    {{ $t('message.stake_current_staked_label') }}
                </div>

                <!-- Current staked data -->
                <div class="data_wrap">
                    <div class="data">
                        <!-- Current staked APR -->
                        <div class="apr">
                            <span>{{ $t('message.stake_APR_label') }}<br> {{ (store.networks[store.currentNetwork].APR * 100).toFixed(2) }}%</span>
                        </div>

                        <!-- Current staked token -->
                        <div class="token">
                            <!-- Current staked token logo -->
                            <div class="logo">
                                <img :src="getNetworkLogo(store.networks[store.currentNetwork].chain_id)" alt="">
                            </div>

                            <div>
                                <!-- Current staked token denom -->
                                <div class="denom">
                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>

                                <!-- Current staked token unbonding period -->
                                <div class="unbonding_period">
                                    {{ $t('message.stake_unbonding_period_label') }}

                                    {{ store.networks[store.currentNetwork].unbondingTime }}

                                    {{ $t('message.stake_unbonding_time_unit') }}
                                </div>
                            </div>
                        </div>

                        <!-- Current staked balances -->
                        <div class="balances">
                            <div>
                                <!-- Current staked balances label -->
                                <div class="label">
                                    {{ $t('message.stake_available_label') }}
                                </div>

                                <!-- Current staked balances amount -->
                                <div class="amount">
                                    {{ formatTokenAmount(calcAvailableAmount(), store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }).replace(',', '.') }}

                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>

                                <!-- Current staked balances cost -->
                                <div class="cost">
                                    {{ store.currentCurrencySymbol }}

                                    {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, calcAvailableAmount(), store.networks[store.currentNetwork].exponent)) }}
                                </div>
                            </div>

                            <div>
                                <!-- Current staked balances label -->
                                <div class="label">
                                    {{ $t('message.stake_staked_label') }}
                                </div>

                                <!-- Current staked balances amount -->
                                <div class="amount">
                                    {{ formatTokenAmount(calcStakedAmount(), store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }).replace(',', '.') }}

                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>

                                <!-- Current staked balances cost -->
                                <div class="cost">
                                    {{ store.currentCurrencySymbol }}{{ formatTokenCost(calcStakedBalancesCost()) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Stake page validator -->
            <div class="validator_info">
                <!-- Stake page validator label -->
                <div class="field_label">
                    {{ $t('message.stake_validator_label') }}
                </div>

                <!-- Stake page validator info -->
                <div class="info_wrap" @click.prevent="openValidatorsModal()" v-if="!store.stakeCurrentValidator">
                    <div class="info">
                        <div class="placeholder">
                            {{ $t('message.stake_validator_placeholder') }}
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>

                <!-- Stake page validator info -->
                <div class="validator_wrap" @click.prevent="openValidatorsModal()" v-else>
                    <div class="validator">
                        <!-- Stake page validator logo -->
                        <div class="logo">
                            <img :src="`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${store.networks[store.currentNetwork].prefix}/moniker/${store.stakeCurrentValidator.operator_address}.png`" alt="" loading="lazy" @error="imageLoadError($event)">

                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>
                        </div>

                        <div>
                            <!-- Stake page validator moniker -->
                            <div class="moniker">
                                {{ store.stakeCurrentValidator.description.moniker }}
                            </div>

                            <!-- Stake page validator staked -->
                            <div class="staked" v-if="item = isStakedValidator(store.stakeCurrentValidator.operator_address)">
                                {{ $t('message.validatoes_staked_label') }}

                                {{ formatTokenAmount(item.balance.amount, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }) }}

                                <div class="logo">
                                    <img :src="getNetworkLogo(store.networks[store.currentNetwork].chain_id)" alt="">
                                </div>
                            </div>
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>
            </div>


            <!-- Stake page amount -->
            <div class="amount">
                <!-- Stake page amount label -->
                <div class="field_label">
                    {{ $t('message.stake_amount_label') }}

                    <!-- Stake page amount cost -->
                    <div class="cost">
                        {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, (amount * Math.pow(10, store.networks[store.currentNetwork].exponent)), store.networks[store.currentNetwork].exponent)) }}

                        {{ store.currentCurrencySymbol }}
                    </div>
                </div>

                <!-- Stake page amount field -->
                <div class="field">
                    <input type="number" inputmode="numeric" class="input big" v-model="amount"
                        :placeholder="$t('message.placeholder_amount', { token: store.networks[store.currentNetwork].token_name })"
                        @input="validateAmount($event)">

                    <!-- Stake page amount max. button -->
                    <button type="button" class="max_btn" @click.prevent="setMaxAmount">
                        {{ $t('message.btn_MAX') }}
                    </button>
                </div>
            </div>


            <!-- Tx fee -->
            <TxFee v-if="isFormValid" :msgAny txType="stake" />


            <!-- Stake page button -->
            <div class="btns">
                <!-- Stake button -->
                <button v-if="!store.networks[store.currentNetwork].currentTxHash" class="btn" @click.prevent="showStakeConfirmModal = true" :class="{ disabled: !store.TxFee.isEnough }">
                    <span>{{ $t('message.btn_stake') }}</span>
                </button>

                <!-- Waiting button -->
                <button v-else class="btn waiting_btn" @click.prevent="emitter.emit('show_collapsible_notification')">
                    <span>{{ $t('message.btn_waiting_tx') }}</span>
                </button>
            </div>
            </template>
        </div>
    </section>


    <!-- Validators modal -->
    <transition name="from_right">
    <ValidatorsModal v-if="showValidatorsModal" />
    </transition>

    <!-- Stake confirm modal -->
    <transition name="from_right">
    <StakeConfirmModal v-if="showStakeConfirmModal" :amount :msgAny />
    </transition>
</template>


<script setup>
    import { ref, inject, onUnmounted, onBeforeMount, watch, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { getNetworkLogo, formatTokenCost, calcTokenCost, calcStakedBalancesCost, calcAvailableAmount, calcStakedAmount, formatTokenAmount, imageLoadError } from '@/utils'
    import { MsgDelegate } from 'cosmjs-types/cosmos/staking/v1beta1/tx'

    // Components
    import Loader from '@/components/Loader.vue'
    import TxFee from '@/components/TxFee.vue'
    import ValidatorsModal from '@/components/modal/ValidatorsModal.vue'
    import StakeConfirmModal from '@/components/modal/StakeConfirmModal.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        showValidatorsModal = ref(false),
        showStakeConfirmModal = ref(false),
        msgAny = ref([]),
        amount = ref(''),
        isAmountReady = ref(false),
        isFormValid = ref(computed(() => isAmountReady.value && !!store.stakeCurrentValidator && calcAvailableAmount()))


    onBeforeMount(() => {
        // Reset data
        store.stakeCurrentValidator = null

        // Get network unbonding period
        store.getNetworkUnbondingTime()
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('close_stake_confirm_modal')
        emitter.off('close_validators_modal')
    })


    watch(computed(() => isFormValid.value), () => {
        if (isFormValid.value) {
            // Set messeges
            msgAny.value = [{
                typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
                value: MsgDelegate.fromPartial({
                    delegatorAddress: store.currentAddress,
                    validatorAddress: store.stakeCurrentValidator.operator_address,
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
            amount.value = formatTokenAmount(calcAvailableAmount(), store.networks[store.currentNetwork].exponent)

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
            if (e.target.value.length && e.target.value > 0 && e.target.value < formatTokenAmount(calcAvailableAmount(), store.networks[store.currentNetwork].exponent)){
                // Set amount status
                isAmountReady.value = true
            }

            // More than available balance
            if (e.target.value > formatTokenAmount(calcAvailableAmount(), store.networks[store.currentNetwork].exponent)) {
                // Set MAX amount
                setMaxAmount()
            }
        })
    }


    // Is staked validator
    function isStakedValidator(address) {
        return store.stakedBalances.find(balance => balance.validator_info.operator_address === address)
    }


    // Open validators modal
    function openValidatorsModal() {
        // Show validators modal
        showValidatorsModal.value = true
    }


    // Event "close_validators_modal"
    emitter.on('close_validators_modal', () => {
        // Hide validators modal
        showValidatorsModal.value = false
    })


    // Event "close_stake_confirm_modal"
    emitter.on('close_stake_confirm_modal', () => {
        // Hide stake confirm modal
        showStakeConfirmModal.value = false
    })
</script>


<style scoped>
    .loader_wrap
    {
        position: relative;

        height: auto;
        padding: 20px;

        background: none;
    }



    .current_staked .data_wrap
    {
        padding: 1px;

        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .current_staked .data
    {
        position: relative;

        padding: 7px;

        border-radius: 11px;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }



    .current_staked .apr
    {
        font-size: 12px;

        position: absolute;
        top: 7px;
        right: 7px;

        padding: 2px 6px;

        text-align: center;

        border-radius: 4px;
        background: #170232;
    }


    .current_staked .apr span
    {
        display: block;

        background: linear-gradient(180deg, #dd93fe 0%, #aa36de 100%);
        -webkit-background-clip: text;
                background-clip: text;

        -webkit-text-fill-color: transparent;
    }



    .current_staked .token
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
    }


    .current_staked .token .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 38px;
        height: 38px;

        border-radius: 50%;
    }


    .current_staked .token .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: inherit;
    }


    .current_staked .token .logo + *
    {
        align-self: center;

        width: calc(100% - 44px);
    }


    .current_staked .token .denom
    {
        font-size: 16px;
        font-weight: 500;

        text-transform: uppercase;
    }


    .current_staked .token .unbonding_period
    {
        font-size: 12px;
        font-weight: 200;
    }



    .current_staked .balances
    {
        display: flex;
        align-content: stretch;
        align-items: stretch;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-top: 10px;
    }


    .current_staked .balances > *
    {
        width: calc(50% - 4px);
        padding: 4px 8px;

        border-radius: 6px;
        background: #170232;
    }


    .current_staked .balances .label
    {
        font-weight: 500;
    }


    .current_staked .balances .amount
    {
        font-size: 12px;
        font-weight: 300;

        margin: 0;
    }


    .current_staked .balances .cost
    {
        font-size: 12px;
        font-weight: 300;

        color: rgba(255, 255, 255, .60);
    }



    .validator_info
    {
        margin-top: 12px;
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
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
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
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
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



    .amount
    {
        margin-top: 12px;
        margin-bottom: auto;
    }


    .amount .cost
    {
        margin-left: auto;

        color: rgba(255, 255, 255, .70);
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