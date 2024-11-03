<template>
    <!-- Redirect modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.redirect_modal_title') }}
                </div>

                <!-- Modal desc -->
                <div class="modal_desc">
                    {{ $t('message.redirect_modal_desc') }}
                </div>

                <!-- Redirect modal buttons -->
                <div class="btns">
                    <!-- Ok button -->
                    <button class="btn" @click.prevent="emitter.emit('close_redirect_modal')">
                        <span>{{ $t('message.btn_OK') }}</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { inject } from 'vue'

    const emitter = inject('emitter')
</script>


<style scoped>
    .modal_content
    {
        min-height: 268px;
    }
</style>