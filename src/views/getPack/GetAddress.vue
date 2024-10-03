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
                        <button class="btn" @click="approve()">
                            <span>{{ $t('message.btn_approve') }}</span>
                        </button>

                        <!-- Reject button -->
                        <button class="btn purple_btn" @click="reject()">
                            <span>{{ $t('message.btn_reject') }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { useRouter } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'


    const router = useRouter(),
        notification = useNotification()


    // Approve request
    function reject() {
        // Show notification
        notification.notify({
            group: 'default',
            speed: 200,
            duration: 1000,
            title: i18n.global.t('message.notification_jp_get_address_title'),
            type: 'success'
        })

        // Redirect
        router.push('/account')
    }


    // Reject request
    function reject() {
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