<template>
    <!-- JetPack - Get address page -->
    <section class="page_container get_address">
        <div class="cont">
            <!-- JetPack - Get address page title -->
            <div class="page_title">
                {{ $t('message.jp_get_address_title') }}
            </div>

            <!-- JetPack - Get address page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- JetPack - Get address desc -->
                    <div class="desc">
                        {{ $t('message.jp_get_address_desc') }}
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
    import { inject, ref, onBeforeMount, onMounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'


    const store = useGlobalStore(),
        router = useRouter(),
        notification = useNotification(),
        i18n = inject('i18n'),
        initdata = ref(null)


    onBeforeMount(async () => {
        if (!store.isInitialized) {
            // Init app
            await store.initApp()
        }
    })


    onMounted(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            initdata.value = Telegram.WebApp.initData
        }
    })


    // Approve request
    async function approveRequest() {
        // Send response
        await fetch(`https://api.telegram.org/bot${store.tgBotToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                chat_id: store.tgChatId,
                protect_content: true,
                disable_notification: true,
                text: `Address: ${store.currentAddress}`
            })
        })
        .then(response => response.json())
        .then(data => {
            // Show notification
            notification.notify({
                group: 'default',
                speed: 200,
                duration: 1000,
                title: i18n.global.t('message.notification_jp_get_address_title'),
                type: 'success'
            })
        })
        .catch(error => {
            console.error(error)

            // Show notification
            notification.notify({
                group: 'default',
                speed: 200,
                duration: 1000,
                title: i18n.global.t('message.notification_error_title'),
                type: 'error'
            })
        })

        // Redirect
        router.push('/account')
    }


    // Reject request
    function rejectRequest() {
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