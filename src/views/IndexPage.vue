<template>
    <!-- Index page -->
    <IndexPage />
</template>


<script setup>
    // Components
    import IndexPage from '@/components/IndexPage.vue'
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
