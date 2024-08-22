<template>
    <section class="page_container claim_confirm">
        <Loader v-if="isProcess" />

        <div class="cont">
            <div class="head">
                <router-link to="/account?activeSlide=1" class="back_btn">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </router-link>

                <div class="page_title">
                    {{ $t('message.claim_rewards_page_title') }}
                </div>
            </div>


            <div class="data">
                <div class="label">
                    {{ $t('message.details_label') }}

                    <!-- <button class="json_btn">
                        <span>{{ $t('message.btn_json') }}</span>
                    </button> -->
                </div>

                <div class="info_wrap">
                    <div class="info">
                        <div class="logo">
                            <img :src="getNetworkLogo(store.networks[store.currentNetwork].chain_id)" alt="">
                        </div>

                        <div class="title">
                            {{ $t('message.claim_rewards_title') }}
                        </div>

                        <div class="amount">
                            <div class="val">
                                ~ {{ formatTokenAmount(store.rewardsBalances[0].amount, store.rewardsBalances[0].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }) }}

                                {{ store.rewardsBalances[0].token_info.symbol }}
                            </div>

                            <div class="cost">
                                ~ {{ formatTokenCost(calcRewardsBalancesCost('USD'), 'USD') }}$
                            </div>
                        </div>
                    </div>
                </div>

                <div class="not_enought" v-if="!store.TxFee.isEnough">
                    {{ $t('message.claim_rewards_not_enought', { denom: store.TxFee.currentSymbol }) }}
                </div>
            </div>


            <div class="memo">
                <div class="label">
                    {{ $t('message.memo_label') }}
                </div>

                <div class="field">
                    <input type="text" class="input big" v-model="memo"
                        @focus="emitter.emit('show_keyboard')"
                        @blur="emitter.emit('hide_keyboard')">
                </div>
            </div>


            <!-- Tx fee -->
            <TxFee v-if="store.isBalancesGot" :msgAny />


            <div class="btns">
                <button v-if="!store.networks[store.currentNetwork].currentTxHash" class="btn" @click.prevent="showSignTxModal = true" :class="{ disabled: !store.TxFee.isEnough }">
                    <span>{{ $t('message.btn_approve') }}</span>
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
    import { useRouter } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'
    import { getNetworkLogo, signTx, sendTx, calcRewardsBalancesCost, formatTokenCost, formatTokenAmount, getExplorerLink } from '@/utils'
    import { MsgWithdrawDelegatorReward } from 'cosmjs-types/cosmos/distribution/v1beta1/tx'

    // Components
    import Loader from '@/components/Loader.vue'
    import TxFee from '@/components/TxFee.vue'
    import SignTx from '@/components/modal/SignTx.vue'


    const store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        i18n = inject('i18n'),
        notification = useNotification(),
        memo = ref(''),
        showSignTxModal = ref(false),
        msgAny = ref([]),
        isProcess = ref(false)


    onBeforeMount(() => {
        // Set messeges
        store.stakedBalances.forEach(balance => {
            msgAny.value.push({
                typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
                value: MsgWithdrawDelegatorReward.fromPartial({
                    delegatorAddress: store.currentAddress,
                    validatorAddress: balance.validator_info.operator_address
                })
            })
        })
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('auth')
        emitter.off('close_sign_tx_modal')
    })


    // Claim tokens
    async function claim() {
        // Set process status
        isProcess.value = true

        try {
            // Update TxFee info
            if (store.TxFee.isRemember) {
                await store.updateTxFeeInfo()
            }

            // Sign Tx
            let txBytes = await signTx(msgAny.value, memo.value)

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

            // Redirect
            router.push('/account')
        } catch (error) {
            console.log(error)

            // Show error
            showError(error)
        }
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
    .claim_confirm
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


    .memo
    {
        margin-top: 12px;
        margin-bottom: auto;
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


    .json_btn
    {
        margin-left: auto;
    }


    .info_wrap
    {
        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #5d33cd 0%,#200750 100%);
    }


    .info
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 8px 7px;

        border-radius: 9px;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }


    .info .logo
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


    .info .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: 50%;
    }


    .info .title
    {
        font-size: 16px;
        font-weight: 500;
    }


    .info .amount
    {
        font-size: 18px;
        font-weight: 500;

        margin-left: auto;

        text-align: right;
        white-space: nowrap;
    }


    .info .amount .cost
    {
        font-size: 16px;
        font-weight: 400;

        color: #836b9e;
    }


    .not_enought
    {
        padding: 5px 10px;

        text-decoration: underline;

        color: #ffe352;

        text-decoration-thickness: 1px;
    }


    .field
    {
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