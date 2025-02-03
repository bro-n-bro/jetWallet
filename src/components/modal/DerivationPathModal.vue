<template>
    <!-- Derivation path modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data" :class="{ closing: isClosing }">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="closeHandler()">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.derivation_path_title') }}
                </div>

                <!-- Modal desc -->
                <div class="modal_desc" v-html="$t('message.derivation_path_desc')"></div>

                <!-- Modal buttons -->
                <div class="btns">
                    <!-- Ok button -->
                    <button class="btn" @click.prevent="emitter.emit('close_derivation_path_modal')">
                        <span>{{ $t('message.btn_OK') }}</span>
                    </button>
                </div>
            </div>
        </div>
    </section>


    <!-- Modal overlay -->
    <div class="modal_overlay" :class="{ closing: isClosing }" @click.prevent="closeHandler()"></div>
</template>


<script setup>
    import { ref, inject } from 'vue'


    const emitter = inject('emitter'),
        isClosing = ref(false)


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "close_derivation_path_modal"
            emitter.emit('close_derivation_path_modal')
        }, 200)
    }
</script>


<style scoped>
    .modal_content
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 100%;
        height: 100%;
        min-height: 0;
        padding: 0;
    }


    .modal_content .data
    {
        width: 240px;
        padding: 14px 10px 10px;

        border-radius: 12px;
    }

    .modal_content .data:before
    {
        display: none;
    }


    .modal_content .close_btn
    {
        top: 0;
        right: 0;

        width: 52px;
        height: 52px;
    }


    .modal_content .modal_title
    {
        font-size: 18px;
        font-weight: 700;

        text-align: center;
    }


    .modal_content .modal_desc
    {
        font-weight: 500;

        margin-top: 13px;
    }


    ::v-deep(.modal_desc ul li)
    {
        position: relative;

        display: block;
        overflow: hidden;

        padding-left: 20px;

        list-style-type: none;
    }


    ::v-deep(.modal_desc ul li:before)
    {
        position: absolute;
        top: 8px;
        left: 4px;

        display: block;

        width: 4px;
        height: 4px;

        content: '';

        border-radius: 50%;
        background: currentColor;
    }


    .btns
    {
        margin-top: 48px;
    }


    .btns .btn span
    {
        padding: 9px;

        text-transform: uppercase;
    }
</style>