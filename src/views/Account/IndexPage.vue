<template>
    <!-- Update balances loader -->
    <div class="update_balances_loader"></div>

    <section class="page_container account_page" :class="{ searching: searchingClass }">
        <section class="top_block" v-parallax>
            <!-- Network selection -->
            <KeepAlive>
            <NetworkChooser v-if="store.currentNetwork" />
            </KeepAlive>

            <!-- Wallet name -->
            <div class="wallet_name" @click.prevent="emitter.emit('show_wallets_modal')">
                <span>{{ store.currentWalletName }}</span>

                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arr_ver3"></use></svg>
            </div>

            <!-- Stats button -->
            <div class="stats_btn" v-if="swiperActiveIndex == 1 && store.isInitialized && store.networks[store.currentNetwork].is_staking_available" @click.prevent="openStatsModal()">
                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_stats"></use></svg>
            </div>

            <!-- QR code scanner -->
            <KeepAlive>
            <QRCodeScanner v-if="store.isInitialized" />
            </KeepAlive>

            <!-- Support button -->
            <KeepAlive>
            <SupportBtn />
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

            <div class="wave" v-if="!swipeExperience"></div>
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


    <!-- wallets modal -->
    <WalletsModal v-if="showWalletsModal" />

    <!-- Edit wallet modal -->
    <EditWalletModal v-if="showEditWalletModal" :wallet="editingWallet" />

    <!-- Remove wallet modal -->
    <RemoveWalletModal v-if="showRemoveWalletModal" :wallet="removingWallet" />

    <!-- Stats modal -->
    <StatsModal v-if="showStatsModal && store.networks[store.currentNetwork]?.is_staking_available" />
</template>


<script setup>
    import { ref, onBeforeMount, onMounted, inject, watch, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useUrlSearchParams } from '@vueuse/core'

    // Components
    import NetworkChooser from '@/components/account/NetworkChooser.vue'
    import QRCodeScanner from '@/components/account/QRCodeScanner.vue'
    import SupportBtn from '@/components/account/SupportBtn.vue'
    import CurrentCurrency from '@/components/account/Currency.vue'

    import AvailableSection from '@/components/account/Available.vue'
    import StakedSection from '@/components/account/Staked.vue'

    import AvailableTokens from '@/components/account/AvailableTokens.vue'
    import ClaimRewards from '@/components/account/ClaimRewards.vue'
    import UnstakingTokens from '@/components/account/UnstakingTokens.vue'
    import StakedTokens from '@/components/account/StakedTokens.vue'

    import WalletsModal from '@/components/modal/WalletsModal.vue'
    import EditWalletModal from '@/components/modal/EditWalletModal.vue'
    import RemoveWalletModal from '@/components/modal/RemoveWalletModal.vue'
    import StatsModal from '@/components/modal/StatsModal.vue'


    const store = useGlobalStore(),
        params = useUrlSearchParams('history'),
        emitter = inject('emitter'),
        searchingClass = ref(''),
        showWalletsModal = ref(false),
        showEditWalletModal = ref(false),
        showRemoveWalletModal = ref(false),
        editingWallet = ref(null),
        removingWallet = ref(null),
        showStatsModal = ref(false),
        swipeExperience = ref(localStorage.getItem('swipe_experience') || false),
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
        if (!store.isInitialized && !store.isInitializing) {
            // Init app
            await store.initApp()
        }
    })


    onMounted(async () => {
        // Get swiper instance
        swiperEl.value = document.querySelector('swiper-container')

        swiperEl.value.addEventListener('swiperslidechangetransitionstart', () => {
            // Set user swipe experience
            swipeExperience.value = true

            // Save user swipe experience in localStorage
            localStorage.setItem('swipe_experience', swipeExperience.value)

            // Set active slide
            swiperActiveIndex.value = swiperEl.value.swiper.activeIndex
        })


        // Check Tx result
        if (store.isInitialized && store.networks[store.currentNetwork].currentTxHash) {
            // Check Tx
            await store.checkTxResult()

            if (store.networks[store.currentNetwork].currentTxHash) {
                // Set listener current tx
                store.setListenerCurrentTx()
            }
        }
    })


    watch(computed(() => store.isInitialized), async () => {
        // Check Tx result
        if (store.isInitialized && store.networks[store.currentNetwork].currentTxHash) {
            // Check Tx
            await store.checkTxResult()

            if (store.networks[store.currentNetwork].currentTxHash) {
                // Set listener current tx
                store.setListenerCurrentTx()
            }
        }
    })


    watch(computed(() => store.currentNetwork), () => {
        if (!store.networks[store.currentNetwork].is_staking_available) {
            // Swiper move slides
            swiperEl.value.swiper.slideTo(0, 500)
        }
    })


    // Open stats modal
    function openStatsModal() {
        // Show stats modal
        showStatsModal.value = true

        // Update status
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


    // Event "show_wallets_modal"
    emitter.on('show_wallets_modal', () => {
        // Show wallets modal
        showWalletsModal.value = true

        // Update status
        store.isAnyModalOpen = true
    })


    // Event "show_edit_wallet_modal"
    emitter.on('show_edit_wallet_modal', (data) => {
        // Editing wallet
        editingWallet.value = data.wallet

        // Show Edit wallet modal
        showEditWalletModal.value = true

        // Update status
        store.isAnyModalOpen = true
    })


    // Event "show_remove_wallet_modal"
    emitter.on('show_remove_wallet_modal', (data) => {
        // Editing wallet
        removingWallet.value = data.wallet

        // Show Remove wallet modal
        showRemoveWalletModal.value = true

        // Update status
        store.isAnyModalOpen = true
    })


    // Event "close_wallets_modal"
    emitter.on('close_wallets_modal', () => {
        // Hide wallets modal
        showWalletsModal.value = false

        // Update status
        store.isAnyModalOpen = false
    })


    // Event "close_edit_wallet_modal"
    emitter.on('close_edit_wallet_modal', ({ back = false }) => {
        // Hide Edit wallet modal
        showEditWalletModal.value = false

        if (back) {
            // Event "show_wallets_modal"
            emitter.emit('show_wallets_modal')
        }
    })


    // Event "close_remove_wallet_modal"
    emitter.on('close_remove_wallet_modal', ({ back = false }) => {
        // Hide Remove wallet modal
        showRemoveWalletModal.value = false

        if (back) {
            // Show Edit wallet modal
            showEditWalletModal.value = true
        }
    })


    // Event "close_stats_modal"
    emitter.on('close_stats_modal', () => {
        // Hide stats modal
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

        padding-top: 296px;

        transition: .2s linear;
        transform: translateY(0%);

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
        z-index: 5;
        top: 0;
        left: 0;

        width: 100%;

        transition: opacity .2s linear;

        opacity: 1;
        border-radius: 0 0 20px 20px;
    }


    .top_block .wave
    {
        position: absolute;
        top: 15%;
        left: 100%;

        width: 50px;
        height: 70%;

        transform: scale(1);
        animation: pulse 3s infinite;

        border-radius: 50%;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
    }


    .top_block .wave::before
    {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        content: '';
        animation: pulse 3s infinite;
        animation-delay: .5s;

        border-radius: 50%;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
    }


    @keyframes pulse
    {
        0%
        {
            transform: scale(.95);

            box-shadow: 0 0 0 0 rgba(255, 255, 255, .7);
        }

        70%
        {
            transform: scale(1);

            box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
        }

        100%
        {
            transform: scale(.95);

            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
        }
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

        overflow: hidden;

        width: 100%;

        cursor: pointer;
        white-space: nowrap;
        text-overflow: ellipsis;
    }



    .top_block .wallet_name
    {
        font-size: 16px;
        font-weight: 500;

        position: absolute;
        z-index: 5;
        top: 51px;
        left: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        max-width: 100%;
        padding: 7px 11px 8px;

        cursor: pointer;

        gap: 4px;
    }


    .top_block .wallet_name span
    {
        overflow: hidden;

        max-width: calc(100% - 22px);

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .top_block .wallet_name .icon
    {
        display: block;

        width: 18px;
        height: 18px;
    }



    .top_block .stats_btn
    {
        position: absolute;
        z-index: 9;
        top: 17px;
        right: 108px;

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