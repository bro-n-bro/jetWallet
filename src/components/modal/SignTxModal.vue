<template>
    <!-- Sign Tx modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data" :class="{ closing: isClosing }">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="closeHandler()">
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
                    <button class="btn" @click.prevent="closeHandler()">
                        <span>{{ $t('message.btn_understood') }}</span>
                    </button>
                </div>
                </template>
            </div>
        </div>
    </section>


    <!-- Modal overlay -->
    <div class="modal_overlay" :class="{ closing: isClosing }" @click.prevent="closeHandler()"></div>
</template>


<script setup>
    import { ref, inject, onMounted, onUnmounted } from 'vue'

    // Components
    import Auth from '@/components/Auth.vue'


    const emitter = inject('emitter'),
        showErrorSignTxModal = ref(false),
        isClosing = ref(false)


    onMounted(() => {
        // Event "auth"
        emitter.on('auth', closeHandler)

        // Event "close_any_modal"
        emitter.on('close_any_modal', closeHandler)

        // Event "show_error_sign_tx_modal"
        emitter.on('show_error_sign_tx_modal', showErrorSignTx)
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('auth', closeHandler)
        emitter.off('close_any_modal', closeHandler)
        emitter.off('show_error_sign_tx_modal', showErrorSignTx)
    })


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "close_sign_tx_modal"
            emitter.emit('close_sign_tx_modal')
        }, 200)
    }


    // Show error sign tx
    function showErrorSignTx() {
        showErrorSignTxModal.value = true
    }
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