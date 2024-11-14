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
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { inject, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'

    // Components
    import Auth from '@/components/Auth.vue'


    const store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter')


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
</style>