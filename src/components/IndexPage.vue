<template>
    <!-- Index page -->
    <section class="page_container index_page">
        <div class="cont">
            <!-- Index page logo -->
            <div class="logo">
                <img src="@/assets/logo.svg" alt="" loading="lazy">
            </div>

            <!-- Index page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- Index page image -->
                    <div class="image">
                        <img src="@/assets/index_page_img.svg" alt="" loading="lazy">
                    </div>

                    <!-- Index page buttons -->
                    <div class="btns" v-if="props.additionalButton">
                        <!-- Create from existing wallet button -->
                        <!-- <button class="btn">
                            <span>{{ $t('message.btn_from_exist_wallet') }}</span>
                        </button> -->

                        <!-- Create wallet button -->
                        <!-- <router-link to="/add_wallet/create" class="btn">
                            <span>{{ $t('message.btn_create_wallet') }}</span>
                        </router-link> -->

                        <!-- Import wallet button -->
                        <router-link to="/add_wallet/import" class="btn purple_btn">
                            <span>{{ $t('message.btn_import_wallet') }}</span>
                        </router-link>
                    </div>

                    <div class="btns" v-else>
                        <!-- Create wallet button -->
                        <router-link to="/create_wallet" class="btn">
                            <span>{{ $t('message.btn_create_wallet') }}</span>
                        </router-link>

                        <!-- Import wallet button -->
                        <router-link to="/import_wallet" class="btn purple_btn">
                            <span>{{ $t('message.btn_import_wallet') }}</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    const props = defineProps(['additionalButton'])
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



    .page_data_wrap
    {
        overflow: hidden;

        padding: 0;

        background: #00001d;
    }


    .page_data
    {
        border-radius: 0;
        background: none;
    }



    .image
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        pointer-events: none;
    }


    .image:after
    {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 100%;

        content: '';

        box-shadow: inset 0 0 24px #00001d;
    }


    .image img
    {
        position: relative;
        z-index: 1;

        display: block;

        width: 100%;
    }



    .btns
    {
        position: relative;
        z-index: 2;
    }
</style>
