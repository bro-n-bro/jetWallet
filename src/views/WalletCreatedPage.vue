<template>
    <section class="page_container wallet_created_page">
        <div class="cont">
            <div class="page_title">
                {{ $t('message.wallet_created_title') }}
            </div>

            <div class="page_data_wrap">
                <div class="page_data">
                    <Loader v-if="loading" />

                    <template v-else>
                    <div class="btns">
                        <router-link to="/account" class="btn">
                            <span>{{ $t('message.btn_join') }}</span>
                        </router-link>
                    </div>
                    </template>
                </div>
            </div>
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


<style scoped>

</style>