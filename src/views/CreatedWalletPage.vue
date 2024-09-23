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

                        <img src="@/assets/wallet_created_page_rocket.svg" alt="" class="rocket" ref="rocket">

                        <img src="@/assets/wallet_created_page_rocket_fire.svg" alt="" class="fire">

                        <img src="@/assets/wallet_created_page_comet.svg" alt="" class="comet">

                        <img src="@/assets/wallet_created_page_comet2.svg" alt="" class="comet2">

                        <img src="@/assets/logo.svg" alt="" class="logo">

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
        imageBgRef = ref(null),
        rocket = ref(null)


    function onImageLoad() {
        setTimeout(() => {
            // Get image height
            let imageHeight = imageRef.value.getBoundingClientRect().height

            // Get bg image height
            let bgImageHeight = imageBgRef.value.getBoundingClientRect().height

            // Set offset
            animationOffset.value = bgImageHeight - imageHeight

            // Rocket fly away
            setTimeout(() => rocket.value.classList.add('fly_away'), 2700)
        }, 500)
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
        z-index: 5;
        bottom: 0;
        left: 0;

        display: block;

        width: 100%;

        transition: 2s ease-in;
        transform: translateY(0%);

        will-change: transform;
    }


    .image .rocket,
    .image .fire
    {
        position: absolute;
        z-index: 3;
        top: 83%;
        right: 0;
        left: 0;

        display: block;

        width: 40%;
        max-width: 163px;
        margin: 0 auto;

        transition: 2s ease-in;
        transform: translateY(-50%);

        will-change: transform, top, opacity;
    }


    .image .fire
    {
        z-index: 4;

        transition: transform 2s ease-in, top 2s ease-in, opacity .3s linear 1.25s;
    }


    .image .comet,
    .image .comet2
    {
        position: absolute;
        z-index: 2;
        top: -268px;
        left: 100%;

        display: block;

        transition: .2s ease-in 2.3s;
        transform: translateY(0);
        pointer-events: none;

        will-change: transform;
    }

    .image .comet2
    {
        top: -68px;

        transition-delay: 2.4s;
    }


    .image .logo
    {
        position: absolute;
        z-index: 3;
        top: 30%;
        right: 0;
        left: 0;

        display: block;

        margin: 0 auto;

        transition: .35s ease-in 2.75s;
        transform: scale(0);
        pointer-events: none;

        will-change: transform;
    }


    .image .bg
    {
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;

        display: block;

        width: 100%;

        transition: 2s ease-in;
        transform: translateY(0%);

        will-change: transform;
    }


    .image.animate .front_mountains,
    .image.animate .bg
    {
        transform: translateY(var(--animation_offset));
    }


    .image.animate .rocket,
    .image.animate .fire
    {
        top: 49%;
    }


    .image.animate .rocket.fly_away
    {
        top: 0;

        transition: .2s linear;
        transform: translateY(-100%);
    }


    .image.animate .fire
    {
        opacity: 0;
    }


    .image.animate .comet,
    .image.animate .comet2
    {
        left: -150%;

        transform: translateY(480px);
    }

    .image.animate .comet2
    {
        left: -200%;
    }


    .image.animate .logo
    {
        transform: scale(1);
    }



    .btns
    {
        position: relative;
        z-index: 2;
    }
</style>