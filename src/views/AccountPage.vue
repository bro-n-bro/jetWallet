<template>
    <section class="page_container account_page">
        <div class="cont">
            <!-- Main section -->
            <Main />
        </div>
    </section>
</template>


<script setup>
    import { ref, onBeforeMount } from 'vue'


    // Components
    import Main from '@/components/account/Main.vue'


    const loading = ref(true)


    onBeforeMount(() => {
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