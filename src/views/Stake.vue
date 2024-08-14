<template>
    <section class="page_container stake">
        <div class="cont">
            <div class="head">
                <router-link to="/account?activeSlide=1" class="back_btn">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </router-link>

                <div class="page_title">
                    {{ $t('message.stake_page_title') }}
                </div>
            </div>


            <div class="current_staked">
                <div class="label">
                    {{ $t('message.stake_current_staked_label') }}
                </div>

                <div class="data_wrap">
                    <div class="data">
                        <div class="apr">
                            <span>{{ $t('message.stake_APR_label') }}<br> {{ (store.networks[store.currentNetwork].APR * 100).toFixed(2) }}%</span>
                        </div>

                        <div class="token">
                            <div class="logo">
                                <img :src="getNetworkLogo(store.networks[store.currentNetwork].chain_id)" alt="">
                            </div>

                            <div>
                                <div class="denom">
                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>

                                <div class="unbonding_period">
                                    {{ $t('message.stake_unbonding_period_label') }}

                                    {{ store.networks[store.currentNetwork].unbondingTime }}

                                    {{ $t('message.stake_unbonding_time_unit') }}
                                </div>
                            </div>
                        </div>

                        <div class="balances">
                            <div>
                                <div class="label">
                                    {{ $t('message.stake_available_label') }}
                                </div>

                                <div class="amount">
                                    {{ formatTokenAmount(calcStakeAvailabelAmount(), store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }) }}

                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>

                                <div class="cost">
                                    {{ store.currentCurrencySymbol }}

                                    {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, calcStakeAvailabelAmount(), store.networks[store.currentNetwork].exponent)) }}
                                </div>
                            </div>

                            <div>
                                <div class="label">
                                    {{ $t('message.stake_staked_label') }}
                                </div>

                                <div class="amount">
                                    {{ formatTokenAmount(calcStakedAmount(), store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }) }}

                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>

                                <div class="cost">
                                    {{ store.currentCurrencySymbol }}{{ formatTokenCost(calcStakedBalancesCost()) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="validator">
                <div class="label">
                    {{ $t('message.stake_validator_label') }}
                </div>

                <div class="info_wrap">
                    <div class="info">
                        <div class="placeholder">
                            {{ $t('message.stake_validator_placeholder') }}
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>
            </div>


            <div class="amount">
                <div class="label">
                    {{ $t('message.stake_amount_label') }}

                    <div class="cost">
                        {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, (amount * Math.pow(10, store.networks[store.currentNetwork].exponent)), store.networks[store.currentNetwork].exponent)) }}

                        {{ store.currentCurrencySymbol }}
                    </div>
                </div>

                <div class="field">
                    <input type="number" inputmode="numeric" class="input big" v-model="amount" placeholder="0.00" @input="validateAmount($event)">

                    <button type="button" class="max_btn" @click.prevent="setMaxAmount">
                        {{ $t('message.btn_MAX') }}
                    </button>
                </div>
            </div>


            <!-- Tx fee -->
            <!-- <TxFee v-if="store.isBalancesGot" :msgAny /> -->


            <div class="btns">
                <button v-if="!store.networks[store.currentNetwork].currentTxHash" class="btn" @click.prevent="showSignTxModal = true" :class="{ disabled: !store.TxFee.isEnough }">
                    <span>{{ $t('message.btn_stake') }}</span>
                </button>

                <button v-else class="btn waiting_btn" @click.prevent="emitter.emit('show_pending_notification')">
                    <span>{{ $t('message.btn_waiting_tx') }}</span>
                </button>
            </div>
        </div>
    </section>


    <!-- Sign transaction -->
    <SignTx v-if="showSignTxModal"/>
</template>


<script setup>
    import { ref, inject, onUnmounted, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { getNetworkLogo, formatTokenCost, calcTokenCost, calcStakedBalancesCost, calcStakeAvailabelAmount, calcStakedAmount, formatTokenAmount } from '@/utils'

    // Components
    import TxFee from '@/components/TxFee.vue'
    import SignTx from '@/components/modal/SignTx.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        showSignTxModal = ref(false),
        msgAny = ref([]),
        amount = ref('')


    onBeforeMount(async () => {
        // Get network unbonding period
        await store.getNetworkUnbondingTime()

        // Set messeges
        // store.stakedBalances.forEach(balance => {
        //     msgAny.value.push({
        //         typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
        //         value: {
        //             delegatorAddress: store.currentAddress,
        //             validatorAddress: balance.validator_info.operator_address
        //         }
        //     })
        // })
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('auth')
        emitter.off('close_sign_tx_modal')
    })


    // Set MAX amount
    function setMaxAmount() {
        amount.value = formatTokenAmount(calcStakeAvailabelAmount(), store.networks[store.currentNetwork].exponent)
    }


    // Validate amount
    function validateAmount(e) {
        // Zero
        if (e.target.value.length && e.target.value <= 0) {
            // Set zero
            amount.value = 0
        }

        // More than available balance
        if (e.target.value > formatTokenAmount(calcStakeAvailabelAmount(), store.networks[store.currentNetwork].exponent)) {
            // Set MAX amount
            setMaxAmount()
        }
    }


    // Event "auth"
    emitter.on('auth', () => {
        // Hide SignTx modal
        showSignTxModal.value = false

        // Claim tokens
        claim()
    })


    // Event "close_sign_tx_modal"
    emitter.on('close_sign_tx_modal', () => {
        // Hide SignTx modal
        showSignTxModal.value = false
    })
</script>


<style scoped>
    .stake
    {
        padding-top: 8px;

        background: #170232;
    }


    .head
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-bottom: 10px;
    }


    .back_btn
    {
        position: relative;
        top: 0;
        left: 0;

        margin-left: -12px;
    }


    .page_title
    {
        width: calc(100% - 48px);
        margin-left: auto;
        padding: 0;
    }


    .label
    {
        font-size: 14px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        margin-bottom: 2px;
        padding: 0 10px;
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

        padding: 0 6px;

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
        font-size: 12px;
        font-weight: 500;

        margin: 0;
        padding: 0;
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



    .validator
    {
        margin-top: 12px;
    }


    .validator .info_wrap
    {
        padding: 1px;

        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .validator .info
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


    .validator .placeholder
    {
        font-size: 16px;
        font-weight: 500;

        opacity: .6;
    }


    .validator .arr
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