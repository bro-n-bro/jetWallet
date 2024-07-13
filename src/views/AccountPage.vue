<template>
    <section class="page_container account_page">
        <Loader v-if="loading" />

        <template v-else>
        <!-- Main section -->
        <Main />

        <!-- Available tokens -->
        <AvailableTokens />
        </template>
    </section>
</template>


<script setup>
    import { ref, onBeforeMount } from 'vue'
    import { useGlobalState } from '@/store'


    // Components
    import Loader from '@/components/Loader.vue'
    import Main from '@/components/account/Main.vue'
    import AvailableTokens from '@/components/account/AvailableTokens.vue'


    const loading = ref(true),
        { initApp } = useGlobalState()


    onBeforeMount(async () => {
        // Init app
        await initApp()

        // Hide loader
        loading.value = false
    })
</script>


<style scoped>
    .account_page
    {
        background: #170232;
    }
</style>