<template>
    <section class="page_container claim_confirm">
        <Loader v-if="isProcess" />

        <div class="cont">
            <div class="head">
                <router-link to="/account" class="back_btn">
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
                    <input type="text" class="input big" v-model="memo">
                </div>
            </div>


            <!-- Tx fee -->
            <TxFee />


            <div class="btns">
                <button class="btn" @click.prevent="showSignTxModal = true" :class="{ disabled: !store.TxFee.isEnough }">
                    <span>{{ $t('message.btn_approve') }}</span>
                </button>
            </div>
        </div>
    </section>


    <!-- Sign transaction -->
    <SignTx v-if="showSignTxModal"/>
</template>


<script setup>
    import { ref, inject, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'
    import { getNetworkLogo, sendTx } from '@/utils'

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
        isProcess = ref(false),
        showSignTxModal = ref(false)


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
            // Message
            let msgAny = []

            // Set messeges
            store.stakedBalances.forEach(balance => {
                msgAny.push({
                    typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
                    value: {
                        delegatorAddress: store.currentAddress,
                        validatorAddress: balance.validator_info.operator_address
                    }
                })
            })

            // Send Tx
            let result = await sendTx(msgAny)

            if (result.code === 0) {
                // Update rewards
                await store.getRewards()

                // Show notification
                notification.notify({
                    group: 'default',
                    clean: true
                })

                notification.notify({
                    group: 'default',
                    speed: 200,
                    duration: 2000,
                    title: i18n.global.t('message.notification_tx_success_title'),
                    type: 'success'
                })

                // Redirect
                router.push('/account')
            } else {
                console.log(result)

                // Show error
                showError(result)

                // Set process status
                isProcess.value = false
            }
        } catch (error) {
            console.log(error)

            // Show error
            showError(error)

            // Set process status
            isProcess.value = false
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
            clean: true
        })

        notification.notify({
            group: 'default',
            title: i18n.global.t('message.notification_tx_error_title'),
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

        margin-left: 6px;
    }


    .page_title
    {
        width: calc(100% - 64px);
        margin-left: auto;
        padding: 0;
    }


    .memo
    {
        margin-top: 12px;
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

        width: calc(100% - 46px);
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