<template>
    <!-- JetPack - Send Tx page -->
    <section class="page_container send_tx">
        <!-- Loader -->
        <Loader v-if="isProcess" />

        <div class="cont">
            <!-- JetPack - Send Tx page title -->
            <div class="page_title">
                {{ $t('message.jp_send_tx_title') }}
            </div>

            <!-- JetPack - Send Tx page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- JetPack - Send Tx messages -->
                    <pre><code>{{ store.jetPackRequest?.data?.msg }}</code></pre>


                    <!-- JetPack - Send Tx page memo -->
                    <div class="memo_field">
                        <!-- Send page memo label -->
                        <div class="field_label">
                            {{ $t('message.memo_label') }}
                        </div>

                        <!-- JetPack - Send Tx page memo field -->
                        <div class="field">
                            <input type="text" class="input big" v-model="memo">
                        </div>
                    </div>


                    <!-- Tx fee -->
                    <TxFee :msgAny="store.jetPackRequest?.data?.msg" txType="send" />


                    <!-- JetPack - Send Tx page buttons -->
                    <div class="btns">
                        <!-- Send button -->
                        <button v-if="!store.networks[store.currentNetwork].currentTxHash" class="btn" @click.prevent="openSignTxModal()" :class="{ disabled: !store.TxFee.isEnough }">
                            <span>{{ $t('message.btn_send') }}</span>
                        </button>

                        <!-- Waiting button -->
                        <button v-else class="btn waiting_btn" @click.prevent="emitter.emit('show_collapsible_notification')">
                            <span>{{ $t('message.btn_waiting_tx') }}</span>
                        </button>

                        <!-- Reject button -->
                        <button class="btn purple_btn" @click="rejectRequest()">
                            <span>{{ $t('message.btn_reject') }}</span>
                        </button>
                    </div>
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
    <div class="modal_overlay" @click.prevent="emitter.emit('close_any_modal')" v-if="showSignTxModal"></div>
    </transition>
</template>


<script setup>
    import { ref, inject } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'
    import { signTx, sendTx, getExplorerLink } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'
    import TxFee from '@/components/TxFee.vue'
    import SignTxModal from '@/components/modal/SignTxModal.vue'


    const store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        notification = useNotification(),
        i18n = inject('i18n'),
        memo = ref(''),
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
            let txBytes = await signTx(store.jetPackRequest.data.msg, memo.value)

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


            console.log(txBytes)

            // Send Tx
            sendTx(txBytes).catch(error => {
                console.log(error)

                // Reset jetPack request
                store.jetPackRequest = null

                // Show error
                // showError(error)

                // Show redirect modal
                store.showRedirectModal = true

                // Show notification
                notification.notify({
                    group: 'default',
                    speed: 200,
                    duration: 4000,
                    title: i18n.global.t('message.notification_tx_success_title'),
                    type: 'success',
                    data: {
                        explorer_link: getExplorerLink(this.currentNetwork)
                    }
                })

                // Send response
                if (this.jetPackRequest) {
                    const connection = this.RTCConnections[this.jetPackRequest.data.peer_id]

                    if (connection) {
                        connection.send({
                            type: 'tx',
                            requestId: this.jetPackRequest.data.request_id,
                            status: 'success',
                            hash: this.networks[this.currentNetwork].currentTxHash
                        })
                    }
                }
            })

            // Redirect
            router.push('/account')
        } catch (error) {
            console.log(error)

            // Reset jetPack request
            store.jetPackRequest = null

            // Show error
            // showError(error)

            // Show redirect modal
            store.showRedirectModal = true

            // Show notification
            notification.notify({
                group: 'default',
                speed: 200,
                duration: 4000,
                title: i18n.global.t('message.notification_tx_success_title'),
                type: 'success',
                data: {
                    explorer_link: getExplorerLink(this.currentNetwork)
                }
            })

            // Send response
            if (this.jetPackRequest) {
                const connection = this.RTCConnections[this.jetPackRequest.data.peer_id]

                if (connection) {
                    connection.send({
                        type: 'tx',
                        requestId: this.jetPackRequest.data.request_id,
                        status: 'success',
                        hash: this.networks[this.currentNetwork].currentTxHash
                    })
                }
            }
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

        // Reset jetPack request
        store.jetPackRequest = null

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

        // Show redirect modal
        store.showRedirectModal = true

        // Redirect
        router.push('/account')
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


    // Event "auth"
    emitter.on('auth', () => {
        // Hide SignTx modal
        showSignTxModal.value = false

        // Update status
        store.isAnyModalOpen = false

        // Send tokens
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
    .memo_field
    {
        margin-bottom: auto;
    }


    pre
    {
        display: block;
        overflow: auto;

        width: 100%;
        margin-bottom: 12px;
        padding: 15px;

        border: 1px solid #1a0242;
        border-radius: 10px;
        background: #170232;
    }


    .btns
    {
        margin-top: 0;
        padding: 0;
    }
</style>