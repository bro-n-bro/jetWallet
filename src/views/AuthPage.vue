<template>
    <!-- Auth page -->
    <section class="page_container auth_page">
        <div class="cont">
            <!-- Auth page title -->
            <div class="page_title">
                {{ $t('message.auth_title') }}
            </div>

            <!-- Auth page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- Auth -->
                    <Auth />

                    <div class="version">
                        {{ version }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { inject, onUnmounted, onMounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { DBgetData } from '@/utils/db'

    // Components
    import Auth from '@/components/Auth.vue'


    const store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        version = process.env.APP_VERSION || 'unknown'


    onMounted(async () => {
        // Get data from DB
        let userLockTimestamp = await DBgetData('global', 'userLockTimestamp')

        if (new Date(userLockTimestamp) - new Date() < store.userLockTime) {
            // Set user unlock
            await store.setUserUnlock()
        }
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('auth')
    })


    // Event "auth"
    emitter.on('auth', () => {
        // Сhange auth limit
        store.updateUserAuthErrorLimit(store.authErrorLimit)

        // Set authorized status
        store.isAuthorized = true

        // Redirect
        router.push('/account')
    })
</script>


<style scoped>
    .btns
    {
        margin-top: 0;
    }


    .version
    {
        font-size: 10px;

        margin-top: 12px;

        text-align: center;

        opacity: .5;
    }
</style>