<template>
    <div class="android_ace" :style="`height: ${topHeight}px;`" :class="{ show: !loading }" v-if="store.unstakingBalances.length"></div>

    <div class="android_animation" ref="container" :class="{ show: !loading }">
        <div class="top" ref="topBar" :style="`height: ${topHeight}px;`"></div>

        <div class="bottom" :style="`height: ${bottomHeight}px;`"></div>

        <svg v-if="store.unstakingBalances.length">
            <filter id="gooey">
                <feGaussianBlur stdDeviation="10"/>
                <feColorMatrix values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 20 -10"/>
            </filter>
        </svg>
    </div>
</template>


<script setup>
    import { ref, watch, computed, onMounted, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { calcAvailableAmount, calcStakedAmount, calcUnstakingAmount } from '@/utils'


    const store = useGlobalStore(),
        count = ref(10),
        topBar = ref(null),
        container = ref(null),
        loading = ref(true),
        isProcess = ref(false),
        topHeight = ref(0),
        bottomHeight = ref(0),
        availableAmount = calcAvailableAmount(),
        stakedAmount = calcStakedAmount(),
        unstakingAmount = calcUnstakingAmount()


    onBeforeMount(() => {
        // Total tokens
        let sumAmounts = parseInt(availableAmount) + parseInt(stakedAmount),
            totalHeight = 266

        // Get heights
        topHeight.value = Math.floor(totalHeight * 0.25 * (stakedAmount / sumAmounts))
        bottomHeight.value = Math.floor(totalHeight * 0.25 * (availableAmount / sumAmounts))
    })


    onMounted(() => {
        // Init animation
        initAnim()
    })


    watch(computed(() => store.isUnstakingBalancesGot), () => {
        // Init animation
        initAnim()
    })


    // Init animation
    function initAnim() {
        if (store.isUnstakingBalancesGot && store.unstakingBalances.length && !isProcess.value) {
            isProcess.value = true

            // Change count
            if (stakedAmount) {
                count.value = Math.ceil(10 * (unstakingAmount / stakedAmount))
            }

            // Generate balls
            for(let i = 0; i < count.value; i++) {
                container.value.insertBefore(randomizedBall(), topBar.value)
            }
        }

        // Show animation
        setTimeout(() => {
            loading.value = false
            isProcess.value = false
        }, 750)
    }


    function randomizedBall() {
        let ball = document.createElement('div'),
            randomSize = getRandomBetween(40, 25),
            translate = getRandomBetween(container.value.clientWidth - 40, 0)

        ball.classList.add('ball')

        ball.style.setProperty('--anim-delay', `${getRandomBetween(9, 0, 3)}s`)
        ball.style.setProperty('--transform-start', `translateX(${translate}px) translateY(-${randomSize}px)`)
        ball.style.setProperty('--transform-x', `translateX(${translate}px)`)
        ball.style.setProperty('--size', `${randomSize}px`)

        return ball
    }


    function getRandomBetween(max, min, decimalPlaces = 0) {
        return (Math.random() * (max - min) + min).toFixed(decimalPlaces)
    }
</script>


<style>
    .android_ace
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;

        display: block;

        width: 100%;
        min-height: 0;

        transition: transform .35s linear .1s;
        transform: translate3d(0, -100%, 0);
        pointer-events: none;

        opacity: 0;
        background: url(@/assets/bg_ace.png) 50%/cover no-repeat;
    }

    .android_ace.show
    {
        transform: translate3d(0, 0, 0);

        opacity: .2;
    }


    .android_animation
    {
        position: absolute;
        z-index: 2;
        top: -4px;
        left: -12%;

        width: 124%;
        height: calc(100% + 8px);

        transition: opacity .35s linear;
        pointer-events: none;

        opacity: 0;

        filter: url(#gooey);
    }


    .android_animation .top,
    .android_animation .bottom
    {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        min-height: 14px;

        transition: transform .35s linear .1s;
        transform: translate3d(0, -100%, 0);

        background: #fff;
    }


    .android_animation .bottom
    {
        top: auto;
        bottom: 0;

        transform: translate3d(0, 100%, 0);

        background: url(@/assets/bg_wave.svg) 0 0/cover no-repeat;
    }


    .android_animation .ball
    {
        position: absolute;
        top: 0;
        left: 0;

        width: var(--size);
        height: var(--size);

        animation: fall 10s infinite;
        animation-delay: var(--anim-delay);

        color: #fff;
        border-radius: 50%;
        background: #fff;
    }



    @keyframes fall
    {
        from
        {
            transform: var(--transform-start);
        }
        100%
        {
            transform: var(--transform-x) translateY(306px);
        }
    }


    .android_animation svg
    {
        position: absolute !important;

        display: none;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);

        width: 1px;
        height: 1px;

        white-space: nowrap;
    }


    .android_animation.show
    {
        opacity: .1;
    }


    .android_animation.show .top,
    .android_animation.show .bottom
    {
        transform: translate3d(0, 0, 0);
    }
</style>