<template>
    <!-- QR code button -->
    <button class="btn" @click.prevent="openScanner()">
        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_scaner"></use></svg>
    </button>
</template>


<script setup>
    // Open QR popup
    function openScanner() {
        Telegram.WebApp.showScanQrPopup({ text: 'Наш текст' })
    }
</script>


<style scoped>
    .btn
    {
        position: absolute;
        z-index: 9;
        top: 17px;
        right: 12px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 28px;
        height: 28px;
        margin-left: auto;

        transition: .2s linear;

        background: url(@/assets/bg_action_btn.svg) 0 0/100% 100% no-repeat;
    }


    .btn.in_field
    {
        top: 0;
        right: 16px;
        bottom: 0;

        margin: auto 0;

        background: none;
    }


    .btn .icon
    {
        display: block;

        width: 14px;
        height: 14px;
    }


    .btn:active
    {
        color: #5b3895;
        background: url(@/assets/bg_action_btn_a.svg) 0 0/100% 100% no-repeat;
    }
</style>