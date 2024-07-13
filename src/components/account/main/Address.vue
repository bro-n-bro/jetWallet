<template>
    <div class="address" @click.prevent="copy(currentAddress)">
        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_copy2"></use></svg>

        <span>{{ currentAddress.slice(0, 9) + '...' + currentAddress.slice(-6) }}</span>
    </div>
</template>


<script setup>
    import { useClipboard } from '@vueuse/core'
    import { useGlobalState } from '@/store'


    const { currentAddress } = useGlobalState(),
        { copy } = useClipboard()
</script>


<style scoped>
    .address
    {
        font-size: 12px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        padding: 2px;

        cursor: pointer;

        border-radius: 5px;
        background: #5b3895;
    }


    .address .icon
    {
        display: block;

        width: 14px;
        height: 14px;
        margin-right: 4px;
    }
</style>