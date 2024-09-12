<template>
    <!-- Wallet created page -->
    <section class="page_container wallet_created_page">
        <div class="cont">
            <!-- Wallet created page title -->
            <div class="page_title">
                {{ $t('message.wallet_created_title') }}
            </div>

            <!-- Wallet created page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- Index page image -->
                    <div class="image" :style="{ '--animation_offset': `${animationOffset}px` }" ref="imageRef" :class="{ animate: animationOffset }">
                        <img src="@/assets/wallet_created_page_front_mountains.svg" alt="" class="front_mountains">

                        <img src="@/assets/wallet_created_page_rocket.svg" alt="" class="rocket">

                        <img src="@/assets/wallet_created_page_bg.svg" alt="" class="bg" ref="imageBgRef" @load="onImageLoad()">
                    </div>

                    <!-- Wallet created page buttons -->
                    <div class="btns">
                        <!-- Join button -->
                        <router-link to="/account" class="btn">
                            <span>{{ $t('message.btn_join') }}</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref } from 'vue'


    const animationOffset = ref(0),
        imageRef = ref(null),
        imageBgRef = ref(null)


    function onImageLoad() {
        // Get image height
        let imageHeight = imageRef.value.getBoundingClientRect().height

        // Get bg image height
        let bgImageHeight = imageBgRef.value.getBoundingClientRect().height

        // Set offset
        animationOffset.value = bgImageHeight - imageHeight
    }
</script>


<style scoped>
    .image
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;

        overflow: hidden;

        width: 100%;
        height: 100%;

        pointer-events: none;

        border-radius: inherit;
        background: linear-gradient(to bottom,  #000 0%,#000116 100%);
    }


    .image .front_mountains
    {
        position: absolute;
        z-index: 3;
        bottom: 0;
        left: 0;

        display: block;

        width: 100%;

        transition: 2s ease-in-out .2s;
    }


    .image .rocket
    {
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 19.5%;
        left: 0;

        display: block;

        width: 16%;
        margin: 0 auto;

        transition: 2s ease-in-out .2s;
    }


    .image .bg
    {
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;

        display: block;

        width: 100%;

        transition: 2s ease-in-out .2s;
    }


    .image.animate .front_mountains,
    .image.animate .bg
    {
        transform: translateY(var(--animation_offset));
    }

    .image.animate .rocket
    {
        bottom: 40%;

        transform: rotate(13.784deg);
    }



    .btns
    {
        position: relative;
        z-index: 2;
    }
</style>