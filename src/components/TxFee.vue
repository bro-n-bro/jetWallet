<template>
    <div class="tx_fee">
        <button class="btn">
            {{ $t('message.tx_fee_label') }} {{ store.TxFee.currentAmount }} {{ store.TxFee.currentSymbol }}
        </button>

        <div class="not_enough" v-if="!store.TxFee.isEnough">
            Not enough balance
        </div>
    </div>
</template>


<script setup>
    import { onBeforeMount, watch, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { formatTokenAmount } from '@/utils'


    const store = useGlobalStore(),
        balance = store.balances.find(balance => balance.denom == store.networks[store.currentNetwork].denom)


    onBeforeMount(() => {
        // Set current amount
        store.TxFeeSetCurrentAmount(store.networks[store.currentNetwork].chain_id)

        // Set current denom
        store.TxFeeSetCurrentDenom(store.networks[store.currentNetwork].denom, store.networks[store.currentNetwork].token_name)

        // Set enough status
        store.TxFee.isEnough = formatTokenAmount(balance.amount, balance.exponent) > store.TxFee.currentAmount
    })


    watch(computed(() => store.isBalancesGot), () => {
        // Set enough status
        store.TxFee.isEnough = formatTokenAmount(balance.amount, balance.exponent) > store.TxFee.currentAmount
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


    .not_enough{
        margin-top: 8px;
        color: orange;
    }
</style>