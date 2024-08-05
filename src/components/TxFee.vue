<template>
    <div class="tx_fee">
        <button class="btn" :class="{ red: !store.TxFee.isEnough }" @click.prevent="showTxFeeModal = true">
            {{ $t('message.tx_fee_label') }} {{ store.TxFee.currentPriceAmount }} {{ store.TxFee.currentSymbol }}
        </button>
    </div>

    <!-- Tx fee modal -->
    <TxFeeModal v-if="showTxFeeModal" />
</template>


<script setup>
    import { onBeforeMount, watch, computed, inject, ref } from 'vue'
    import { useGlobalStore } from '@/store'
    import { formatTokenAmount } from '@/utils'

    // Components
    import TxFeeModal from '@/components/modal/TxFeeModal.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        showTxFeeModal = ref(false),
        balance = store.balances.find(balance => balance.denom == store.networks[store.currentNetwork].denom)


    onBeforeMount(() => {
        // Set current denom
        store.TxFeeSetCurrentDenom(store.networks[store.currentNetwork].denom, store.networks[store.currentNetwork].token_name)

        // Get gas prices
        store.TxFeeGetGasPrices(store.networks[store.currentNetwork].chain_id)

        // Set enough status
        store.TxFee.isEnough = formatTokenAmount(balance.amount, balance.exponent) > store.TxFee.currentPriceAmount
    })


    watch(computed(() => store.isBalancesGot), () => {
        // Set enough status
        store.TxFee.isEnough = formatTokenAmount(balance.amount, balance.exponent) > store.TxFee.currentPriceAmount
    })


    // Event "close_tx_fee_modal"
    emitter.on('close_tx_fee_modal', () => {
        // Hide TxFee modal
        showTxFeeModal.value = false
    })
</script>


<style scoped>
    .tx_fee
    {
        margin-top: auto;
        padding: 12px;

        text-align: center;
    }


    .tx_fee .btn
    {
        font-size: 18px;
        font-weight: 500;

        text-decoration: underline;

        text-decoration-thickness: 1px;
    }


    .tx_fee .btn.red
    {
        color: #f33;
    }
</style>