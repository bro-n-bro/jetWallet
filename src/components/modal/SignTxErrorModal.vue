<template>
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <button class="close_btn" @click.prevent="emitter.emit('close_sign_tx_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <div class="modal_title">
                    {{ $t('message.sign_tx_error_title') }}
                </div>

                <div class="modal_desc">
                    {{ $t('message.sign_tx_error_desc') }}
                </div>

                <div class="btns">
                    <button class="btn" @click.prevent="emitter.emit('close_sign_tx_modal')">
                        <span>{{ $t('message.btn_understood') }}</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="overlay" @click.prevent="emitter.emit('close_sign_tx_modal')"></div>
    </section>
</template>


<script setup>
    import { inject } from 'vue'


    const emitter = inject('emitter')
</script>