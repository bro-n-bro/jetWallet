<template>
    <!-- Currency button -->
    <div class="currency" @click.prevent="store.updateCurrentCurrency()">
        {{ store.currentCurrency }}
    </div>
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
        top: 65px;
        right: 12px;

        min-width: 32px;
        padding: 2px 4px;

        transition: .2s linear;
        text-align: center;
        white-space: nowrap;

        border-radius: 5px;
        background: #5b3895;
    }


    .currency:active
    {
        color: #5b3895;
        background: #fff;
    }
</style>