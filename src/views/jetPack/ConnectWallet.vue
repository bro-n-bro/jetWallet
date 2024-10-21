<template>
    <!-- JetPack - Get address page -->
    <section class="page_container get_address">
        <div class="cont">
            <!-- JetPack - Connection page title -->
            <div class="page_title">
                {{ $t('message.jp_connection_title') }}
            </div>

            <!-- JetPack - Connection page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- JetPack - Connection desc -->
                    <div class="desc">
                        {{ $t('message.jp_connection_desc') }}
                    </div>

                    <!-- Buttons -->
                    <div class="btns">
                        <!-- Approve button -->
                        <button class="btn" @click="approveRequest()">
                            <span>{{ $t('message.btn_approve') }}</span>
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
</template>


<script setup>
    import { inject } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'


    const store = useGlobalStore(),
        router = useRouter(),
        notification = useNotification(),
        i18n = inject('i18n'),
        emitter = inject('emitter')


    // Approve request
    function approveRequest() {
        // Send response
        const connection = store.RTCConnections[store.jetPackRequest.data.peer_id]

        if (connection) {
            connection.send({
                type: 'address',
                requestId: store.jetPackRequest.data.request_id,
                address: store.currentAddress
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

        // Event "show_redirect_modal"
        emitter.emit('show_redirect_modal')

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
            title: i18n.global.t('message.notification_jp_get_address_reject'),
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