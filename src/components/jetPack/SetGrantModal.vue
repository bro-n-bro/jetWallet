<template>
    <!-- Set grant modal -->
    <section class="modal set_grant_modal">
        <div class="modal_content">
            <div class="data">
                <!-- Loader -->
                <Loader v-if="isProcess" />

                <!-- Close button -->
                <button class="close_btn" @click.prevent="rejectRequest()">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">Bust or Boom</div>

                <!-- Modal desc -->
                <div class="modal_desc">Bust or Boom app truing to connect you wallet.<br> Confirm to connect your wallet.</div>

                <!-- Set grant modal info -->
                <div class="info">
                    <div class="label">Details:</div>

                    <div class="bg">
                        <div class="address">
                            <div class="label">Adress:</div>

                            <div class="val">
                                {{ store.jetPackRequest?.data?.msg[0].value.grantee }}
                                <!-- {{ store.jetPackRequest?.data?.msg[0].value.grantee.slice(0, 9) + '...' + store.jetPackRequest?.data?.msg[0].value.grantee.slice(-6) }} -->
                            </div>
                        </div>

                        <div class="period">
                            <div class="label">Expiry date:</div>

                            <div class="val">7 Days</div>
                        </div>
                    </div>
                </div>

                <!-- Tx fee -->
                <TxFee :msgAny="store.jetPackRequest?.data?.msg" txType="send" />


                <!-- JetPack - Send Tx page buttons -->
                <div class="btns">
                    <!-- Reject button -->
                    <button v-if="!store.networks[store.currentNetwork].currentTxHash" class="btn red_btn" @click="rejectRequest()">
                        <span><svg><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg></span>
                    </button>

                    <!-- Send button -->
                    <button v-if="!store.networks[store.currentNetwork].currentTxHash" class="btn" @click.prevent="openSignTxModal()" :class="{ disabled: !store.TxFee.isEnough }">
                        <span>{{ $t('message.btn_confirm') }}</span>
                    </button>

                    <!-- Waiting button -->
                    <button v-else class="btn waiting_btn" @click.prevent="emitter.emit('show_collapsible_notification')">
                        <span>{{ $t('message.btn_waiting_tx') }}</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Sign transaction modal -->
    <transition name="modal">
    <SignTxModal v-if="showSignTxModal"/>
    </transition>

    <!-- Overlay -->
    <transition name="fade">
    <div class="modal_overlay set_grant_modal_overlay" @click.prevent="rejectRequest()"></div>
    </transition>

    <transition name="fade">
    <div class="modal_overlay" @click.prevent="emitter.emit('close_any_modal')" v-if="showSignTxModal"></div>
    </transition>
</template>


<script setup>
    import { ref, inject } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'
    import { signTx, sendTx, getExplorerLink } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'
    import TxFee from '@/components/TxFee.vue'
    import SignTxModal from '@/components/modal/SignTxModal.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        notification = useNotification(),
        i18n = inject('i18n'),
        isProcess = ref(false),
        showSignTxModal = ref(false)


    // Approve request
    async function approveRequest() {
        // Set process status
        isProcess.value = true

        try {
            // Update TxFee info
            if (store.TxFee.isRemember) {
                await store.updateTxFeeInfo()
            }

            // Sign Tx
            let txBytes = await signTx(store.jetPackRequest.data.msg, '')

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

            // Event "close_set_grant_modal"
            emitter.emit('close_set_grant_modal')
        } catch (error) {
            console.log(error)

            // Show error
            showError(error)

            // Show redirect modal
            store.showRedirectModal = true
        }
    }


    // Reject request
    function rejectRequest() {
        // Send response
        const connection = store.RTCConnections[store.jetPackRequest.data.peer_id]

        if (connection) {
            connection.send({
                type: 'error',
                requestId: store.jetPackRequest.data.request_id,
                message: i18n.global.t('message.jp_message_rejected')
            })
        }

        // Show notification
        notification.notify({
            group: 'default',
            speed: 200,
            duration: 1000,
            title: i18n.global.t('message.notification_jp_send_reject'),
            type: 'default'
        })

        // Reset Tx Fee
        store.resetTxFee()

        // Reset jetPack request
        store.jetPackRequest = null

        // Event "close_send_tx_modal"
        emitter.emit('close_set_grant_modal')

        // Show redirect modal
        store.showRedirectModal = true
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

        // Send response
        if (store.jetPackRequest) {
            const connection = store.RTCConnections[store.jetPackRequest.data.peer_id]

            if (connection) {
                connection.send({
                    type: 'tx',
                    requestId: store.jetPackRequest.data.request_id,
                    status: 'error',
                    hash: store.networks[store.currentNetwork].currentTxHash
                })
            }
        }

        // Reset jetPack request
        store.jetPackRequest = null

        // Event "close_send_tx_modal"
        emitter.emit('close_set_grant_modal')

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


    // Event "auth"
    emitter.on('auth', () => {
        // Hide SignTx modal
        showSignTxModal.value = false

        // Update status
        store.isAnyModalOpen = false

        // Set grant request
        approveRequest()
    })


    // Event "close_sign_tx_modal"
    emitter.on('close_sign_tx_modal', () => {
        // Hide SignTx modal
        showSignTxModal.value = false

        // Update status
        store.isAnyModalOpen = false
    })


    // Event "close_any_modal"
    emitter.on('close_any_modal', () => {
        // Hide SignTx modal
        showSignTxModal.value = false

        // Update status
        store.isAnyModalOpen = false
    })
</script>


<style scoped>
    .set_grant_modal
    {
        z-index: 89;
    }

    .set_grant_modal_overlay
    {
        z-index: 88;
    }


    .modal_title
    {
        padding: 0 10px;
    }


    .modal_desc
    {
        margin-top: 12px;
        padding: 0 10px;
    }



    .info
    {
        margin-top: 14px;
        margin-bottom: 60px;
    }


    .info .label
    {
        font-size: 14px;

        margin-bottom: 2px;
        padding: 0 10px;
    }


    .info .bg
    {
        padding: 8px 6px;

        border: 1px solid #1a0242;
        border-radius: 10px;
        background: #06000e;
    }


    .info .address .label
    {
        font-size: 16px;

        margin: 0;
        padding: 0 4px;
    }


    .info .address .val
    {
        font-size: 12px;
        font-weight: 300;

        margin-top: 8px;
        padding: 0 8px;
    }


    .info .period
    {
        font-size: 16px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-top: 8px;
        padding: 0 4px;
    }


    .info .period .label
    {
        font-size: inherit;

        margin: 0;
        padding: 0;
    }



    .btns
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-top: -12px;
    }


    .btns .btn
    {
        width: 100%;
        height: 48px;
        margin: 0;
    }


    .btns .btn.red_btn
    {
        width: 48px;

        background: linear-gradient(180deg, #cd7474 0%, #5c1010 100%);
    }

    .btns .btn.red_btn span
    {
        background: linear-gradient(to bottom, #b06161 0%, #872323 100%);
    }


    .btns .btn.red_btn svg
    {
        display: block;

        width: 24px;
        height: 24px;
    }


    .btns .red_btn + .btn
    {
        width: calc(100% - 58px);
    }
</style>