<template>
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <button class="close_btn" @click.prevent="emitter.emit('close_tx_warning_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <div class="modal_title">
                    {{ $t('message.tx_warning_title') }}
                </div>

                <div class="desc">
                    {{ $t('message.tx_warning_desc') }}
                </div>

                <div class="btns">
                    <button class="btn" @click.prevent="emitter.emit('close_tx_warning_modal')">
                        <span>{{ $t('message.btn_accept') }}</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="overlay" @click.prevent="emitter.emit('close_tx_warning_modal')"></div>
    </section>
</template>


<script setup>
    import { inject } from 'vue'


    const emitter = inject('emitter')
</script>


<style scoped>
    .modal_content
    {
        min-height: 0;
    }


    .modal_content .data
    {
        width: 220px;
        max-width: 100%;
        margin: 0 auto 10px;

        border-radius: 18px;
    }


    .modal_content .close_btn
    {
        top: 0;
        right: 0;
    }


    .modal_title
    {
        text-align: center;
    }


    .desc
    {
        margin-top: 12px;
    }


    .btns
    {
        padding-top: 64px;
    }
</style>