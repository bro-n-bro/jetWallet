<template>
    <!-- JetPack - Send Tx page -->
    <section class="page_container send_tx">
        <div class="cont">
            <!-- JetPack - Send Tx page title -->
            <div class="page_title">
                {{ $t('message.jp_send_tx_title') }}
            </div>

            <!-- JetPack - Send Tx page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- JetPack - Send Tx messages -->
                    <code>
                        {{ store.jetPackRequest?.data?.msg }}
                    </code>


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
                        <!-- <button v-if="!store.networks[store.currentNetwork].currentTxHash" class="btn" @click.prevent="openSignTxModal()" :class="{ disabled: !store.TxFee.isEnough }">
                            <span>{{ $t('message.btn_send') }}</span>
                        </button> -->

                        <!-- Waiting button -->
                        <!-- <button v-else class="btn waiting_btn" @click.prevent="emitter.emit('show_collapsible_notification')">
                            <span>{{ $t('message.btn_waiting_tx') }}</span>
                        </button> -->

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

    // Components
    import TxFee from '@/components/TxFee.vue'
    import SignTxModal from '@/components/modal/SignTxModal.vue'


    const store = useGlobalStore(),
        router = useRouter(),
        notification = useNotification(),
        i18n = inject('i18n'),
        memo = ref(''),
        showSignTxModal = ref(false)


    // Approve request
    function approveRequest() {
        // Send response
        const connection = store.RTCConnections[store.startParams.data.peer_id]

        if (connection) {
            connection.send({
                type: 'tx',
                hash: store.networks[store.currentNetwork].currentTxHash
            })
        }

        // Show notification
        notification.notify({
            group: 'default',
            speed: 200,
            duration: 1000,
            title: i18n.global.t('message.notification_jp_get_address_success'),
            type: 'default'
        })

        // Reset jetPack request
        store.jetPackRequest = null

        // Redirect
        router.push('/account')
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

        // Redirect
        router.push('/account')
    }
</script>


<style scoped>
    .desc
    {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }
</style>