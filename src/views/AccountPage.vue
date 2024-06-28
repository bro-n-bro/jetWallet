<template>
    <section class="page_container account_page">
        <div class="cont">
            <Loader v-if="loading" />

            <template v-else>
            Это страница кошелька
            </template>
        </div>
    </section>
</template>


<script setup>
    import { ref, onBeforeMount } from 'vue'


    // Components
    import Loader from '@/components/Loader.vue'


    const loading = ref(true)


    onBeforeMount(() => {
        // Hide loader
        loading.value = false
    })
</script>