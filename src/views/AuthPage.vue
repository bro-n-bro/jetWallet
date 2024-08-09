<template>
    <section class="page_container auth_page">
        <div class="cont">
            <div class="page_title">
                {{ $t('message.auth_title') }}
            </div>

            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- Auth -->
                    <Auth />

                    <button @click.prevent="deleteAll" style="margin: 20px auto 0; width: 70px;">Удалить всё</button>
                </div>
            </div>
        </div>
    </section>


    <!-- Auth error modal -->
    <AuthErrorModal v-if="showErrorAuthModal" />
</template>


<script setup>
    import { ref, inject, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'

    // Components
    import Auth from '@/components/Auth.vue'
    import AuthErrorModal from '@/components/modal/AuthErrorModal.vue'


    const store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        showErrorAuthModal = ref(false)


    onUnmounted(() => {
        // Unlisten events
        emitter.off('auth')
        emitter.off('show_error_auth_modal')
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


    // Event "show_error_auth_modal"
    emitter.on('show_error_auth_modal', () => showErrorAuthModal.value = true)


    async function deleteAll() {
        // Clear data
        await store.clearAllData()

        // Redirect
        router.push('/')
    }
</script>