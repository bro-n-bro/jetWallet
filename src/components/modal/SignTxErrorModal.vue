<template>
    <!-- Sign Tx error modal -->
    <section class="modal">
        <div class="modal_content">
            <!-- Sign Tx error modal data -->
            <div class="data">
                <!-- Back button -->
                <button class="close_btn" @click.prevent="emitter.emit('close_sign_tx_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.sign_tx_error_title') }}
                </div>

                <!-- Modal desc -->
                <div class="modal_desc">
                    {{ $t('message.sign_tx_error_desc') }}
                </div>

                <!-- Sign Tx error modal button -->
                <div class="btns">
                    <!-- Understood button -->
                    <button class="btn" @click.prevent="emitter.emit('close_sign_tx_modal')">
                        <span>{{ $t('message.btn_understood') }}</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Overlay -->
        <div class="overlay" @click.prevent="emitter.emit('close_sign_tx_modal')"></div>
    </section>
</template>


<script setup>
    import { inject } from 'vue'


    const emitter = inject('emitter')
</script>