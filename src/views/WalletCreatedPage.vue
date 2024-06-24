<template>
    <Loader v-if="loading" />

    <section class="page_container wallet_created_page" v-else>
        <div class="cont">
            <div class="page_title">Account created!</div>

            <div class="btns">
                <router-link to="/account" class="btn">
                    {{ $t('message.btn_join') }}
                </router-link>
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
.btns
{
    margin-top: auto;
    padding-top: 24px;
}


.btns .btn
{
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
    height: 50px;

    text-align: center;
    text-decoration: none;

    color: #fff;
    border: 1px solid;
    border-radius: 10px;
}

</style>