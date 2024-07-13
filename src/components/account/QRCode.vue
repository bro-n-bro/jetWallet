<template>
    <button class="qr_code_btn" @click.prevent="openScaner">
        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_scaner"></use></svg>
    </button>
</template>


<script setup>
    // Open QR popup
    function openScaner() {
        Telegram.WebApp.showScanQrPopup({ text: 'Наш текст' })
    }
</script>


<style scoped>
    .qr_code_btn
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 28px;
        height: 28px;
        margin-left: auto;

        background: url(@/assets/bg_action_btn.svg) 0 0/100% 100% no-repeat;
    }


    .qr_code_btn .icon
    {
        display: block;

        width: 14px;
        height: 14px;
    }
</style>