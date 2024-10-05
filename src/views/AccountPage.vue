<template>
    <!-- Update balances loader -->
    <div class="update_balances_loader"></div>

    <section class="page_container account_page" :class="{ searching: searchingClass }">
        <section class="top_block" v-parallax>
            <!-- Network selection -->
            <KeepAlive>
            <NetworkChooser v-if="store.currentNetwork" />
            </KeepAlive>

            <div class="stats_btn" v-if="swiperActiveIndex == 1 && store.isInitialized && store.networks[store.currentNetwork].is_staking_available" @click.prevent="openStatsModal()">
                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_stats"></use></svg>
            </div>

            <!-- QR code scanner -->
            <KeepAlive>
            <QRCodeScanner v-if="store.isInitialized" />
            </KeepAlive>

            <!-- Currency -->
            <KeepAlive>
            <CurrentCurrency />
            </KeepAlive>

            <!-- Swiper -->
            <swiper-container :initial-slide="swiperActiveIndex" :injectStyles="swiperInjectStyles" speed="500" touchMoveStopPropagation="true" :pagination="{
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
            }">
                <!-- Main section -->
                <swiper-slide>
                    <AvailableSection />
                </swiper-slide>

                <!-- Stacked section -->
                <swiper-slide v-if="store.networks[store.currentNetwork]?.is_staking_available">
                    <StakedSection :swiperActiveIndex />
                </swiper-slide>
            </swiper-container>
        </section>


        <!-- Available tokens -->
        <AvailableTokens v-show="swiperActiveIndex == 0" />

        <!-- Claim rewards -->
        <ClaimRewards v-show="swiperActiveIndex == 1" v-if="store.networks[store.currentNetwork]?.is_staking_available" />

        <!-- Unstaking tokens -->
        <UnstakingTokens v-show="swiperActiveIndex == 1" v-if="store.isInitialized && store.networks[store.currentNetwork]?.is_staking_available" />

        <!-- Stacked tokens -->
        <StakedTokens v-show="swiperActiveIndex == 1" v-if="store.networks[store.currentNetwork]?.is_staking_available" />
    </section>

    <!-- Stats modal -->
    <transition name="modal">
    <StatsModal v-if="showStatsModal && store.networks[store.currentNetwork]?.is_staking_available" />
    </transition>

    <!-- Overlay -->
    <transition name="fade">
    <div class="modal_overlay" @click.prevent="emitter.emit('close_any_modal')" v-if="showStatsModal"></div>
    </transition>
</template>


<script setup>
    import { ref, onBeforeMount, onMounted, inject, watch, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { useUrlSearchParams } from '@vueuse/core'

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
        router = useRouter(),
        searchingClass = ref(''),
        showStatsModal = ref(false),
        swiperEl = ref(null),
        swiperActiveIndex = ref(params.activeSlide || 0),
        swiperInjectStyles = [`
            .swiper-horizontal > .swiper-pagination-bullets,
            .swiper-pagination-bullets.swiper-pagination-horizontal,
            .swiper-pagination-custom,
            .swiper-pagination-fraction
            {
                top: auto;
                bottom: 8px;

                height: 4px;
            }

            .swiper-pagination-bullet
            {
                width: 8px;
                height: 4px;

                transition: .2s linear;
                vertical-align: top;

                opacity: 1;
                border-radius: 2px;
                background: #fff;
            }

            .swiper-pagination-bullet.active
            {
                width: 20px;
            }
        `]


    onBeforeMount(async () => {
        if (!store.isInitialized) {
            // Init app
            await store.initApp()
        }
    })


    onMounted(() => {
        // Get swiper instance
        swiperEl.value = document.querySelector('swiper-container')

        swiperEl.value.addEventListener('swiperslidechangetransitionstart', async () => {
            // Set active slide
            swiperActiveIndex.value = swiperEl.value.swiper.activeIndex
        })
    })


    // Update qr code
    watch(computed(() => store.currentAddress), () => {
        if (store.startParams) {
            // Get address
            if (store.startParams.method === 'getAddress') {
                router.push('/jet_pack/get_address')
            }
        }
    })


    // Open stats modal
    function openStatsModal() {
        // Show Stats modal
        showStatsModal.value = true

        store.isAnyModalOpen = true
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

        // Update status
        store.isAnyModalOpen = false
    })


    // Event "close_any_modal"
    emitter.on('close_any_modal', () => {
        // Hide Stats modal
        showStatsModal.value = false

        // Update status
        store.isAnyModalOpen = false
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

        padding-top: 266px;

        transition: .2s linear;
        transform: translateY(0%);

        background: #170232;

        will-change: transform, padding;
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

        opacity: 1;
        border-radius: 0 0 20px 20px;

        will-change: opacity;
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

        transition: .2s linear;

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
        position: relative;
        z-index: 3;

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

        width: 50px;
        max-width: 100%;

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

        transition: .2s linear;

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