<template>
    <div class="tx_fee">
        <button class="btn">
            {{ $t('message.tx_fee_label') }} {{ store.TxFee.currentAmount }} {{ store.TxFee.currentSymbol }}
        </button>
    </div>
</template>


<script setup>
    import { onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'


    const store = useGlobalStore()


    onBeforeMount(() => {
        // Set current amount
        store.TxFeeSetCurrentAmount(store.networks[store.currentNetwork].chain_id)

        // Set current denom
        store.TxFeeSetCurrentDenom(store.networks[store.currentNetwork].denom, store.networks[store.currentNetwork].token_name)
    })
</script>


<style scoped>
    .tx_fee
    {
        text-align: center;
        margin-top: auto;
        padding: 12px;
    }


    .tx_fee .btn
    {
        font-size: 18px;
        font-weight: 500;

        text-decoration: underline;

        text-decoration-thickness: 1px;
    }
</style>