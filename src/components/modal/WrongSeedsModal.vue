<template>
    <!-- Wring seeds modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="emitter.emit('close_wrong_seeds_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.wrong_seeds_title') }}
                </div>

                <!-- Modal image -->
                <div class="image">
                    <img src="@/assets/wrong_seeds_img.svg" alt="">
                </div>

                <!-- Modal desc -->
                <div class="modal_desc">
                    {{ $t('message.wrong_seeds_desc') }}
                </div>

                <!-- Modal buttons -->
                <div class="btns">
                    <!-- Try button -->
                    <button class="btn" @click.prevent="emitter.emit('close_wrong_seeds_modal')">
                        <span>{{ $t('message.btn_try') }}</span>
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
        width: 220px;
        padding: 20px;

        border-radius: 18px;
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



    .image
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        height: 120px;
        margin-top: 22px;
    }


    .image img
    {
        display: block;

        max-width: 100%;
        max-height: 100%;

        filter: drop-shadow(0px 0px 146.2px rgba(24, 0, 54, .55));
    }


    .modal_content .modal_desc
    {
        font-weight: 400;

        margin-top: 17px;
    }


    .btns
    {
        margin-top: 20px;
    }
</style>