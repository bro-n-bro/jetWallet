<template>
    <button class="currency" @click.prevent="store.updateCurrentCurrency()">
        {{ store.currentCurrency }}
    </button>
</template>


<script setup>
    import { useGlobalStore } from '@/store'


    const store = useGlobalStore()
</script>


<style scoped>
    .currency
    {
        font-size: 12px;

        position: absolute;
        z-index: 9;
        top: 77px;
        right: 12px;

        padding: 0 4px;

        white-space: nowrap;

        border-radius: 5px;
        background: #5b3895;
    }
</style>