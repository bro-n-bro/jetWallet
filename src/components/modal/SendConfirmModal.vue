<template>
    <!-- Send confirm modal -->
    <section class="page_container inner_page_container send_confirm" :class="{ closing: isClosing }">
        <!-- Loader -->
        <Loader v-if="isProcess" />

        <div class="cont">
            <!-- Send confirm head -->
            <div class="head">
                <!-- Back button -->
                <button class="back_btn" @click="closeHandler()">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </button>

                <!-- Send confirm title -->
                <div class="page_title">
                    {{ $t('message.send_confirm_page_title') }}
                </div>
            </div>

            <!-- Send confirm data -->
            <div class="data">
                <!-- Send confirm label -->
                <div class="field_label">
                    {{ $t('message.details_label') }}
                </div>

                <!-- Send confirm info -->
                <div class="info_wrap">
                    <div class="info">
                        <!-- Send confirm features -->
                        <div class="features">
                            <!-- Send confirm feature -->
                            <div v-if="props.type === 2">
                                <!-- Send confirm feature label -->
                                <div class="label">
                                    {{ $t('message.send_confirm_chain_from_label') }}
                                </div>

                                <!-- Send confirm feature value -->
                                <div class="val">
                                    <img :src="getNetworkLogo(store.networks[store.currentNetwork].chain_id)" alt="">

                                    <span>{{ store.networks[store.currentNetwork].name }}</span>
                                </div>
                            </div>

                            <!-- Send confirm feature -->
                            <div v-if="props.type === 2">
                                <!-- Send confirm feature label -->
                                <div class="label">
                                    {{ $t('message.send_confirm_chain_to_label') }}
                                </div>

                                <!-- Send confirm feature value -->
                                <div class="val">
                                    <img :src="getNetworkLogo(store.IBCSendCurrentChain?.info.chain_id)" alt="">

                                    <span>{{ store.IBCSendCurrentChain?.info.pretty_name }}</span>
                                </div>
                            </div>

                            <!-- Send confirm feature -->
                            <div v-if="props.type === 1">
                                <!-- Send confirm feature label -->
                                <div class="label">
                                    {{ $t('message.send_confirm_receiver_label') }}
                                </div>

                                <!-- Send confirm feature value -->
                                <div class="val">
                                    <span>{{ props.msgAny[0].value.toAddress.slice(0, 9) + '...' + props.msgAny[0].value.toAddress.slice(-6) }}</span>
                                </div>
                            </div>

                            <!-- Send confirm feature -->
                            <div v-if="props.type === 2">
                                <!-- Send confirm feature label -->
                                <div class="label">
                                    {{ $t('message.send_confirm_receiver_label') }}
                                </div>

                                <!-- Send confirm feature value -->
                                <div class="val">
                                    <span>{{ props.msgAny[0].value.receiver.slice(0, 9) + '...' + props.msgAny[0].value.receiver.slice(-6) }}</span>
                                </div>
                            </div>

                            <!-- Send confirm feature -->
                            <div>
                                <!-- Send confirm feature label -->
                                <div class="label">
                                    {{ $t('message.stake_confirm_amount_label') }}
                                </div>

                                <!-- Send confirm feature value -->
                                <div class="val">
                                    {{ props.amount }}

                                    {{ props.balance.token_info.symbol }}

                                    <span class="currency">
                                        ({{ formatTokenCost(currencyConversion(props.amount, props.balance.token_info.symbol)) }}{{ store.currentCurrencySymbol }})
                                    </span>
                                </div>
                            </div>

                            <!-- Send confirm feature -->
                            <div>
                                <!-- Send confirm feature label -->
                                <div class="label">
                                    {{ $t('message.send_confirm_fee_label') }}
                                </div>

                                <!-- Send confirm feature value -->
                                <div class="val">
                                    {{ feeCost.toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }}

                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Send page memo -->
            <div class="memo_field">
                <!-- Send page memo label -->
                <div class="field_label">
                    {{ $t('message.memo_label') }}
                </div>

                <!-- Send page memo field -->
                <div class="field">
                    <input type="text" class="input big" v-model="memo"
                        :placeholder="$t('message.placeholder_memo')">
                </div>
            </div>


            <!-- Send confirm buttons -->
            <div class="btns">
                <!-- Confirm button -->
                <button class="btn" @click.prevent="openSignTxModal()">
                    <span>{{ $t('message.btn_confirm_send') }}</span>
                </button>
            </div>
        </div>
    </section>


    <!-- Sign transaction modal -->
    <SignTxModal v-if="showSignTxModal"/>
</template>


<script setup>
    import { ref, inject, computed, onMounted, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'
    import { currencyConversion, formatTokenCost, formatTokenAmount, getNetworkLogo, signTx, sendTx, getExplorerLink } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'
    import SignTxModal from '@/components/modal/SignTxModal.vue'


    const props = defineProps(['balance', 'amount', 'msgAny', 'type']),
        store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        i18n = inject('i18n'),
        notification = useNotification(),
        showSignTxModal = ref(false),
        memo = ref(''),
        feeCost = computed(() => formatTokenAmount(store.TxFee.userGasAmount * store.TxFee[`${store.TxFee.currentLevel}Price`], store.TxFee.balance.exponent)),
        isProcess = ref(false),
        isClosing = ref(false)


    onMounted(() => {
        // Event "auth"
        emitter.on('auth', auth)

        // Event "close_sign_tx_modal"
        emitter.on('close_sign_tx_modal', closeSignTxModal)
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('auth', auth)
        emitter.off('close_sign_tx_modal', closeSignTxModal)
    })


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "close_send_confirm_modal"
            emitter.emit('close_send_confirm_modal')
        }, 200)
    }


    // Send tokens
    async function send() {
        // Set process status
        isProcess.value = true

        try {
            // Update TxFee info
            if (store.TxFee.isRemember) {
                await store.updateTxFeeInfo()
            }

            // Sign Tx
            let txBytes = await signTx(props.msgAny, memo.value)

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
                    isCollapsible: true,
                    explorer_link: getExplorerLink(store.currentNetwork)
                }
            })

            // Send Tx
            sendTx(txBytes).catch(error => {
                console.log(error)

                // Show error
                showError(error)
            })

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
        // Set process status
        isProcess.value = false

        // Get error code
        let errorText = ''

        // Get error title
        error.code
            ? errorText = i18n.global.t(`message.notification_tx_error_${error.code}`)
            : errorText = i18n.global.t('message.notification_tx_error_rejected')

        // Clean notifications
        notification.notify({
            group: 'default',
            clean: true
        })

        // Show notification
        notification.notify({
            group: 'default',
            speed: 200,
            duration: 6000,
            title: i18n.global.t('message.notification_tx_error_title'),
            text: errorText,
            type: 'error'
        })

        // Clear tx hash
        store.networks[store.currentNetwork].currentTxHash = null

        // Reset Tx Fee
        store.resetTxFee()
    }


    // Open SignTx modal
    function openSignTxModal() {
        // Show SignTx modal
        showSignTxModal.value = true

        // Update status
        store.isAnyModalOpen = true
    }


    // Close SignTx modal
    function closeSignTxModal() {
        // Show SignTx modal
        showSignTxModal.value = false

        // Update status
        store.isAnyModalOpen = false
    }


    // Auth
    function auth() {
        // Close modal
        closeHandler()

        // Send tokens
        send()
    }
</script>


<style scoped>
    .send_confirm
    {
        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        animation: .25s slideLeft forwards linear;

        background: #170232;
    }


    .send_confirm.closing
    {
        animation: .25s slideRight forwards linear;
    }



    .info_wrap
    {
        padding: 1px;

        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .info
    {
        position: relative;

        padding: 7px 9px;

        border-radius: 11px;
        background: #06000e;
    }



    .features > *
    {
        font-size: 16px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
    }


    .features > * + *
    {
        margin-top: 8px;
    }


    .features .val
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;
    }


    .features .label
    {
        font-size: inherit;

        display: block;

        margin: 0;
        padding: 0;
    }


    .features .val img
    {
        display: block;

        width: 18px;
        height: 18px;
        margin-right: 4px;

        border-radius: 50%;
    }


    .features .val .currency
    {
        color: #836b9e;
    }



    .memo_field
    {
        margin-top: 12px;
        margin-bottom: auto;
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
</style>