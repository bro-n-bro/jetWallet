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

</style>