<template>
    <section class="modal" v-if="!showErrorSignTxModal">
        <div class="modal_content">
            <div class="data">
                <button class="close_btn" @click.prevent="emitter.emit('close_sign_tx_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <div class="modal_title">
                    {{ $t('message.sign_tx_title') }}
                </div>

                <!-- Auth -->
                <div class="auth_wrap">
                    <Auth />
                </div>
            </div>
        </div>

        <div class="overlay" @click.prevent="emitter.emit('close_sign_tx_modal')"></div>
    </section>


    <!-- Sign tx error modal -->
    <SignTxErrorModal v-if="showErrorSignTxModal" />
</template>


<script setup>
    import { ref, inject } from 'vue'

    // Components
    import Auth from '@/components/Auth.vue'
    import SignTxErrorModal from '@/components/modal/SignTxErrorModal.vue'


    const emitter = inject('emitter'),
        showErrorSignTxModal = ref(false)


    // Event "show_error_sign_tx_modal"
    emitter.on('show_error_sign_tx_modal', () => showErrorSignTxModal.value = true)
</script>


<style scoped>
    .auth_wrap
    {
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;

        margin-top: 28px;
    }
</style>