<template>
    <section class="page_container account_page" :class="{ searching: searchingClass }">
        <section class="top_block" v-parallax>
            <!-- Network selection -->
            <NetworkChooser v-if="store.isInitialized" />

            <!-- Scaner -->
            <QRCode />

            <!-- Currency -->
            <CurrentCurrency />

            <!-- Swiper -->
            <swiper-container :injectStyles="swiperInjectStyles" speed="500" :pagination="{
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
            }">
                <!-- Main section -->
                <swiper-slide>
                    <!-- <AvailableSection v-if="swiperActiveIndex == 0" /> -->
                    <AvailableSection />
                </swiper-slide>

                <!-- Stacked section -->
                <swiper-slide>
                    <!-- <StackedSection v-if="swiperActiveIndex == 1" /> -->
                    <StackedSection />
                </swiper-slide>
            </swiper-container>
        </section>


        <!-- Available tokens -->
        <AvailableTokens v-show="swiperActiveIndex == 0" />

        <!-- Claim rewards -->
        <ClaimRewards v-show="swiperActiveIndex == 1" />

        <!-- Stacked tokens -->
        <StakedTokens v-show="swiperActiveIndex == 1" />
    </section>
</template>


<script setup>
    import { ref, onBeforeMount, onMounted, watch, computed, inject } from 'vue'
    import { useGlobalStore } from '@/store'

    // Components
    import NetworkChooser from '@/components/account/NetworkChooser.vue'
    import QRCode from '@/components/account/QRCode.vue'
    import CurrentCurrency from '@/components/account/Currency.vue'

    import AvailableSection from '@/components/account/Available.vue'
    import StackedSection from '@/components/account/Stacked.vue'

    import AvailableTokens from '@/components/account/AvailableTokens.vue'
    import ClaimRewards from '@/components/account/ClaimRewards.vue'
    import StakedTokens from '@/components/account/StakedTokens.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        searchingClass = ref(''),
        swiperEl = ref(null),
        swiperActiveIndex = ref(0),
        swiperInjectStyles = [
            `
            .swiper-horizontal > .swiper-pagination-bullets,
            .swiper-pagination-bullets.swiper-pagination-horizontal,
            .swiper-pagination-custom,
            .swiper-pagination-fraction
            {
                bottom: 8px;
            }

            .swiper-pagination-bullet
            {
                width: 8px;
                opacity: 1;
                height: 4px;

                transition: .2s linear;

                border-radius: 2px;
                background: #fff;
            }

            .swiper-pagination-bullet.active
            {
                width: 20px;
            }
            `
        ]


    onBeforeMount(async () => {
        // Init app
        await store.initApp()

        // Get balances
        await store.getBalances()

        // Get stake balances
        await store.getstakedBalances()
    })


    onMounted(() => {
        // Get swiper instance
        swiperEl.value = document.querySelector('swiper-container')

        swiperEl.value.addEventListener('swiperslidechangetransitionstart', async e => {
            // Set active slide
            swiperActiveIndex.value = swiperEl.value.swiper.activeIndex

            // // Get balances
            // if (swiperActiveIndex.value == 0) {
            //     await store.getBalances()
            // }

            // // Get stake balances
            // if (swiperActiveIndex.value == 1) {
            //     await store.getstakedBalances()
            // }
        })


        // Disable overscroll
        let startY,
            isPulling = false,
            threshold = 100

        window.addEventListener('touchstart', e => {
            if (window.scrollY === 0) {
                startY = e.touches[0].pageY
                isPulling = true
            }
        }, { passive: false })

        window.addEventListener('touchmove', e => {
            if (!isPulling) return

            let currentY = e.touches[0].pageY,
                distance = currentY - startY

            if (distance > 0) {
                if (distance > threshold) {
                    console.log('Пользователь тянет страницу вниз для обновления')
                    // Здесь можно показать индикатор загрузки

                    e.preventDefault()
                    e.stopPropagation()
                }
            }
        }, { passive: false })

        window.addEventListener('touchend', () => {
            if (isPulling) {
                isPulling = false

                if (window.scrollY === 0) {
                    console.log('Начать обновление данных')
                    // Здесь можно скрыть индикатор загрузки и начать обновление данных
                }
            }
        }, { passive: false })
    })


    watch(computed(() => store.currentNetwork), async () => {
        if (store.isInitialized) {
            // Init status
            store.isInitialized = false

            // Balances status
            store.isBalancesGot = false

            // Stake balances status
            store.isStakedBalancesGot = false

            // Reinit APP
            await store.initApp()

            // Get balances
            await store.getBalances()

            // Get stake balances
            await store.getstakedBalances()

            // // Get balances
            // if (swiperActiveIndex.value == 0) {
            //     await store.getBalances()
            // }

            // // Get stake balances
            // if (swiperActiveIndex.value == 1) {
            //     await store.getstakedBalances()
            // }
        }
    })


    // Event "swiper_slideTo"
    emitter.on('swiper_slideTo', ({ index }) => {
        // Swiper move slides
        swiperEl.value.swiper.slideTo(index, 500)
    })


    // Event "search_focus"
    emitter.on('search_focus', () => {
        searchingClass.value = true
    })


    // Event "search_focus"
    emitter.on('search_blur', () => {
        searchingClass.value = false
    })
</script>


<style>
    .account_page
    {
        display: flex;
        flex-direction: column;

        padding-top: 265px;

        transition: padding-top .2s linear;

        background: #170232;
    }


    .account_page.searching
    {
        padding-top: 0;
    }



    .top_block
    {
        position: fixed;
        z-index: 3;
        top: 0;
        left: 0;

        width: 100%;

        transition: opacity .2s linear;

        border-radius: 0 0 15px 15px;
    }


    .searching .top_block
    {
        pointer-events: none;

        opacity: 0;
    }


    .top_block:before
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        content: '';
        pointer-events: none;

        opacity: .8;
        border-radius: inherit;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }


    .top_block .balance
    {
        display: flex;
        align-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: center;

        text-align: center;
    }


    .top_block .balance .val
    {
        font-size: 38px;
        font-weight: 700;

        width: 100%;
    }



    .top_block .actions
    {
        display: flex;
        align-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-top: 20px;
    }


    .top_block .actions .btn
    {
        font-size: 12px;

        text-align: center;
        text-decoration: none;

        color: currentColor;
    }


    .top_block .actions .btn .icon
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 44px;
        height: 44px;
        margin: 0 auto 4px;

        background: url(@/assets/bg_action_btn.svg) 0 0/100% 100% no-repeat;
    }


    .top_block .actions .btn .icon svg
    {
        display: block;

        width: 22px;
        height: 22px;
    }
</style>