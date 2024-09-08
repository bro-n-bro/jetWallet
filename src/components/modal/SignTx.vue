<template>
    <!-- Sign Tx modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="emitter.emit('close_sign_tx_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <template v-if="!showErrorSignTxModal">
                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.sign_tx_title') }}
                </div>

                <!-- Auth -->
                <div class="auth_wrap">
                    <Auth />
                </div>
                </template>


                <template v-else>
                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.sign_tx_error_title') }}
                </div>

                <!-- Modal desc -->
                <div class="modal_desc">
                    {{ $t('message.sign_tx_error_desc') }}
                </div>

                <!-- Sign Tx error modal buttons -->
                <div class="btns">
                    <!-- Understood button -->
                    <button class="btn" @click.prevent="emitter.emit('close_sign_tx_modal')">
                        <span>{{ $t('message.btn_understood') }}</span>
                    </button>
                </div>
                </template>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, inject } from 'vue'

    // Components
    import Auth from '@/components/Auth.vue'


    const emitter = inject('emitter'),
        showErrorSignTxModal = ref(false)


    // Event "show_error_sign_tx_modal"
    emitter.on('show_error_sign_tx_modal', () => {
        showErrorSignTxModal.value = true
    })
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