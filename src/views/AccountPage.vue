<template>
    <!-- Update balances loader -->
    <div class="update_balances_loader"></div>

    <section class="page_container account_page" :class="{ searching: searchingClass }">
        <section class="top_block" v-parallax>
            <!-- Network selection -->
            <NetworkChooser v-if="store.currentNetwork" />

            <div class="stats_btn" v-if="swiperActiveIndex == 1 && store.isInitialized" @click.prevent="showStatsModal = true">
                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_stats"></use></svg>
            </div>

            <!-- QR code scanner -->
            <QRCodeScanner v-if="store.isInitialized" />

            <!-- Currency -->
            <CurrentCurrency />

            <!-- Swiper -->
            <swiper-container :initial-slide="swiperActiveIndex" :injectStyles="swiperInjectStyles" speed="500" touchMoveStopPropagation="true" :pagination="{
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
                    <StakedSection />
                </swiper-slide>
            </swiper-container>
        </section>


        <!-- Available tokens -->
        <AvailableTokens v-show="swiperActiveIndex == 0" />

        <!-- Claim rewards -->
        <ClaimRewards v-show="swiperActiveIndex == 1" />

        <!-- Unstaking tokens -->
        <UnstakingTokens v-show="swiperActiveIndex == 1" v-if="store.isInitialized" />

        <!-- Stacked tokens -->
        <StakedTokens v-show="swiperActiveIndex == 1" />
    </section>

    <!-- Stats modal -->
    <StatsModal v-if="showStatsModal" />
</template>


<script setup>
    import { ref, onBeforeMount, onMounted, watch, computed, inject, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useUrlSearchParams } from '@vueuse/core'
    import { useNotification } from '@kyvg/vue3-notification'

    // Components
    import NetworkChooser from '@/components/account/NetworkChooser.vue'
    import QRCodeScanner from '@/components/account/QRCodeScanner.vue'
    import CurrentCurrency from '@/components/account/Currency.vue'

    import AvailableSection from '@/components/account/Available.vue'
    import StakedSection from '@/components/account/Staked.vue'

    import AvailableTokens from '@/components/account/AvailableTokens.vue'
    import ClaimRewards from '@/components/account/ClaimRewards.vue'
    import UnstakingTokens from '@/components/account/UnstakingTokens.vue'
    import StakedTokens from '@/components/account/StakedTokens.vue'

    import StatsModal from '@/components/modal/StatsModal.vue'


    const store = useGlobalStore(),
        params = useUrlSearchParams('history'),
        emitter = inject('emitter'),
        notification = useNotification(),
        searchingClass = ref(''),
        showStatsModal = ref(false),
        swiperEl = ref(null),
        swiperActiveIndex = ref(params.activeSlide || 0),
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
        ],
        startY = ref(0),
        isPulling = ref(false),
        threshold = 70,
        hasUpdated = ref(false)


    onBeforeMount(async () => {
        if (!store.isInitialized) {
            // Init app
            await store.initApp()
        }
    })


    onMounted(() => {
        // Get swiper instance
        swiperEl.value = document.querySelector('swiper-container')

        swiperEl.value.addEventListener('swiperslidechangetransitionstart', async e => {
            // Set active slide
            swiperActiveIndex.value = swiperEl.value.swiper.activeIndex
        })

        // Overscroll
        window.addEventListener('touchstart', handleTouchStart, { passive: false })
        window.addEventListener('touchmove', handleTouchMove, { passive: false })
        window.addEventListener('touchend', handleTouchEnd, { passive: false })
    })


    onUnmounted(() => {
        window.removeEventListener('touchstart', handleTouchStart, { passive: false })
        window.removeEventListener('touchmove', handleTouchMove, { passive: false })
        window.removeEventListener('touchend', handleTouchEnd, { passive: false })
    })


    watch(computed(() => store.currentNetwork), async () => {
        if (store.isInitialized || store.forcedUnlock) {
            // Clean notifications
            notification.notify({
                group: 'default',
                clean: true
            })

            // Reinit APP
            await store.initApp()
        }
    })


    // Handle touch start
    function handleTouchStart(e) {
        if (window.scrollY === 0) {
            startY.value = e.touches[0].pageY
            isPulling.value = true
            hasUpdated.value = false
        }
    }


    // Handle touch move
    function handleTouchMove(e) {
        if (isPulling.value && (store.networks[store.currentNetwork].currentTxHash || store.forcedUnlock)) {
            // Event "show_collapsible_notification"
            emitter.emit('show_collapsible_notification')

            return
        }

        if (!isPulling.value || hasUpdated.value) return

        let currentY = e.touches[0].pageY,
            distance = currentY - startY.value

        if (distance > 0 && distance >= threshold) {
            e.preventDefault()
            e.stopPropagation()

            // Updating flag
            hasUpdated.value = true

            // Top loader
            let account = document.querySelector('.account_page')

            if (account) {
                account.classList.add('updating')
                setTimeout(() => account.classList.remove('updating'), 500)
            }

            // Update all balances
            store.updateAllBalances()
        }
    }


    // Handle touch end
    function handleTouchEnd(e) {
        isPulling.value = false
    }


    // Event "swiper_slideTo"
    emitter.on('swiper_slideTo', ({ index }) => {
        // Swiper move slides
        swiperEl.value.swiper.slideTo(index, 500)

        setTimeout(() => {
            let stakeBtn = document.querySelector('.staked_section .stake_btn')

            if (stakeBtn) {
                stakeBtn.classList.add('click_animate')

                setTimeout(() => stakeBtn.click(), 500)
            }
        }, 500)
    })


    // Event "search_focus"
    emitter.on('search_focus', () => {
        searchingClass.value = true
    })


    // Event "search_focus"
    emitter.on('search_blur', () => {
        searchingClass.value = false
    })


    // Event "close_stats_modal"
    emitter.on('close_stats_modal', () => {
        // Hide Stats modal
        showStatsModal.value = false
    })
</script>


<style>
    .update_balances_loader
    {
        position: absolute;
        top: 18px;
        right: 0;
        left: 0;

        width: 18px;
        height: 18px;
        margin: 0 auto;

        animation: spin 1s linear infinite;

        border-top: 2px solid currentColor;
        border-right: 2px solid transparent;
        border-left: 2px solid currentColor;
        border-radius: 50%;
    }


    .account_page
    {
        position: relative;
        z-index: 9;

        display: flex;
        flex-direction: column;

        padding-top: 265px;

        transition: .2s linear;

        background: #170232;
    }


    .account_page.updating
    {
        transform: translateY(54px);
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

        border-radius: 0 0 20px 20px;
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

        cursor: pointer;
    }



    .top_block .stats_btn
    {
        position: absolute;
        z-index: 9;
        top: 17px;
        right: 60px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 28px;
        height: 28px;

        background: url(@/assets/bg_action_btn.svg) 0 0/100% 100% no-repeat;
    }


    .top_block .stats_btn .icon
    {
        display: block;

        width: 16px;
        height: 16px;
    }


    .top_block .stats_btn:active
    {
        color: #170232;
        background-image: url(@/assets/bg_action_btn_a.svg);
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

        position: relative;

        transition: opacity .2s linear;
        text-align: center;
        text-decoration: none;

        color: currentColor;
    }


    .top_block .actions .stake_btn:before
    {
        position: absolute;
        top: -20px;
        left: 50%;

        display: block;

        width: 80px;
        height: 80px;
        margin-left: -40px;

        content: '';
        transform: scale(.001, .001);

        border-radius: 50%;
        background-color: rgba(240, 248, 255, .65);
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


    .top_block .actions .stake_btn.click_animate:before
    {
        -webkit-animation: effect_dylan .5s ease-out;
                animation: effect_dylan .5s ease-out;
    }


    .top_block .actions .btn.disabled
    {
        pointer-events: none;

        opacity: .4;
    }


    .top_block .actions .btn:active .icon:hover
    {
        color: #170232;
        background: url(@/assets/bg_action_btn_a.svg) 0 0/100% 100% no-repeat;
    }
</style>