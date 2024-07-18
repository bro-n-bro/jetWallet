<template>
    <section class="page_container account_page" :class="{ searching: searchingClass }">
        <Loader v-if="loading" />

        <template v-else>
        <section class="top_block">
            <!-- Network selection -->
            <NetworkChooser />

            <!-- Scaner -->
            <QRCode />

            <!-- Currency -->
            <CurrentCurrency />

            <!-- Swiper -->
            <swiper-container :injectStyles="swiperInjectStyles" :pagination="{
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
            }">
                <!-- Main section -->
                <swiper-slide>
                    <MainSection />
                </swiper-slide>

                <!-- Main section -->
                <swiper-slide>
                    <MainSection />
                </swiper-slide>
            </swiper-container>
        </section>

        <!-- Available tokens -->
        <AvailableTokens />

        <pre>{{ params }}</pre>
        </template>
    </section>
</template>


<script setup>
    import { ref, onBeforeMount, watch, computed, inject } from 'vue'
    import { useGlobalStore } from '@/store'

    // Components
    import Loader from '@/components/Loader.vue'
    import NetworkChooser from '@/components/account/NetworkChooser.vue'
    import QRCode from '@/components/account/QRCode.vue'
    import CurrentCurrency from '@/components/account/Currency.vue'
    import MainSection from '@/components/account/Main.vue'
    import AvailableTokens from '@/components/account/AvailableTokens.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        loading = ref(true),
        searchingClass = ref(''),
        params = ref([]),
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

        params.value.push(Telegram.WebApp.viewportHeight)
        params.value.push(Telegram.WebApp.viewportStableHeight)

        Telegram.WebApp.onEvent('viewportChanged', () => {
            params.value.push(Telegram.WebApp.viewportHeight)
            params.value.push(Telegram.WebApp.viewportStableHeight)
        })

        // Hide loader
        loading.value = false
    })


    watch(computed(() => store.currentNetwork), async () => {
        // Show loader
        loading.value = true

        // Reinit APP
        await store.initApp()

        // Hide loader
        loading.value = false
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


<style scoped>
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
</style>