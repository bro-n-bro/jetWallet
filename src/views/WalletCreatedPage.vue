<template>
    <!-- Wallet created page -->
    <section class="page_container wallet_created_page">
        <div class="cont">
            <!-- Wallet created page title -->
            <div class="page_title">
                {{ $t('message.wallet_created_title') }}
            </div>

            <!-- Wallet created page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- Index page image -->
                    <div class="image">
                        <img src="@/assets/wallet_created_page_img.jpg" alt="" loading="lazy">
                    </div>

                    <!-- Wallet created page buttons -->
                    <div class="btns">
                        <!-- Join button -->
                        <router-link to="/account" class="btn">
                            <span>{{ $t('message.btn_join') }}</span>
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
    .image
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        pointer-events: none;

        border-radius: inherit;
    }


    .image:before
    {
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 130px;
        max-height: 100%;

        content: '';

        border-radius: inherit;
        background: linear-gradient(180deg, rgba(56, 12, 150, .00) 0%, #36006c 100%);

        mix-blend-mode: multiply;
    }


    .image img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: inherit;

        object-fit: cover;
    }



    .btns
    {
        position: relative;
        z-index: 2;
    }
</style>