<template>
    <section class="page_container account_page">
        <Loader v-if="loading" />

        <template v-else>
        <section class="top_block">
            <!-- Network selection -->
            <NetworkChooser />

            <!-- Scaner -->
            <QRCode />

            <!-- Currency -->
            <CurrentCurrency />

            <!-- Main section -->
            <MainSection />
        </section>

        <!-- Available tokens -->
        <AvailableTokens />
        </template>
    </section>
</template>


<script setup>
    import { ref, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'


    // Components
    import Loader from '@/components/Loader.vue'
    // import NetworkChooser from '@/components/account/NetworkChooser.vue'
    import QRCode from '@/components/account/QRCode.vue'
    import CurrentCurrency from '@/components/account/Currency.vue'
    import MainSection from '@/components/account/Main.vue'
    import AvailableTokens from '@/components/account/AvailableTokens.vue'


    const store = useGlobalStore(),
        loading = ref(true)


    onBeforeMount(async () => {
        // Init app
        await store.initApp()

        // Hide loader
        loading.value = false
    })
</script>


<style scoped>
    .account_page
    {
        background: #170232;
    }



    .top_block
    {
        position: relative;

        padding: 75px 22px 25px;

        border-radius: 0 0 15px 15px;
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