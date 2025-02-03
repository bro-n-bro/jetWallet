<template>
    <!-- Tx warning modal -->
    <section class="modal">
        <div class="modal_content">
            <!-- Tx warning data -->
            <div class="data" :class="{ closing: isClosing }">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="closeHandler()">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.tx_warning_title') }}
                </div>

                <!-- Desc -->
                <div class="desc">
                    {{ $t('message.tx_warning_desc') }}
                </div>

                <!-- Tx warning buttons -->
                <div class="btns">
                    <!-- Accept button -->
                    <button class="btn" @click.prevent="emitter.emit('close_tx_warning_modal')">
                        <span>{{ $t('message.btn_accept') }}</span>
                    </button>
                </div>
            </div>
        </div>
    </section>


    <!-- Modal overlay -->
    <div class="modal_overlay" :class="{ closing: isClosing }" @click.prevent="closeHandler()"></div>
</template>


<script setup>
    import { ref, inject, onMounted, onUnmounted } from 'vue'


    const emitter = inject('emitter'),
        isClosing = ref(false)


    onMounted(() => {
        // Event "close_any_modal"
        emitter.on('close_any_modal', closeHandler)
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('close_any_modal', closeHandler)
    })


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "close_wallets_modal"
            emitter.emit('close_tx_warning_modal')
        }, 200)
    }
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