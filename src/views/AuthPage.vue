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

                    <!-- Buttons -->
                    <div class="btns">
                        <!-- Login button -->
                        <button class="btn" @click.prevent="deleteAll()">
                            <span>Delete address</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- Auth error modal -->
    <transition name="modal">
    <AuthErrorModal v-if="showErrorAuthModal" />
    </transition>

    <!-- Overlay -->
    <transition name="fade">
    <div class="modal_overlay" @click.prevent="emitter.emit('close_any_modal')" v-if="showErrorAuthModal"></div>
    </transition>
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


    async function deleteAll() {
        // Clear data
        await store.clearAllData()

        // Redirect
        router.push('/')
    }


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
    emitter.on('show_error_auth_modal', () => {
        // Show error auth modal
        showErrorAuthModal.value = true
    })
</script>


<style scoped>
    .btns
    {
        margin-top: 0;
    }
</style>