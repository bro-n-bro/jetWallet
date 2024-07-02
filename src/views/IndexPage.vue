<template>
    <section class="page_container index_page">
        <div class="cont">
            <div class="logo">
                <img src="@/assets/logo.svg" alt="" loading="lazy">
            </div>

            <div class="page_data_wrap">
                <div class="page_data">
                    <Loader v-if="loading" />

                    <div class="image">
                        <img src="@/assets/index_page_img.svg" alt="" loading="lazy">
                    </div>

                    <div class="btns">
                        <button class="btn" @click="goTo('/create_wallet')">
                            <span>{{ $t('message.btn_create_wallet') }}</span>
                        </button>

                        <button class="btn purple_btn" @click="goTo('/import_wallet')">
                            <span>{{ $t('message.btn_import_wallet') }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, onBeforeMount } from 'vue'
    import { useRouter } from 'vue-router'


    // Components
    import Loader from '@/components/Loader.vue'


    const router = useRouter(),
        loading = ref(true)


    onBeforeMount(() => {
        // Hide loader
        loading.value = false
    })


    // Go to route
    function goTo(path) {
        // Show loader
        loading.value = true

        // Set router
        router.push(path)
    }
</script>


<style scoped>
    .logo
    {
        padding: 16px 0 13px;
    }


    .logo img
    {
        display: block;

        width: 161px;
        max-width: 100%;
        height: 63px;
        margin: 0 auto;

        filter: drop-shadow(0px 0px 180px rgba(231, 200, 255, .5));
    }



    .image
    {
        margin-top: auto;
    }


    .image img
    {
        display: block;

        max-width: 100%;
        margin: 0 auto;
    }
</style>
