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
                    <div class="btns">
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
