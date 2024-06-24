<template>
    <Loader v-if="loading" />

    <section class="page_container account_page" v-else>
        <div class="cont">
            <div class="page_title">Account page</div>
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