<template>
    <div class="tx_fee">
        <button class="btn" :class="{ red: !store.TxFee.isEnough }" @click.prevent="showTxFeeModal = true">
            {{ $t('message.tx_fee_label') }} {{ currentPrice }} {{ store.TxFee.balance.token_info.symbol }}
        </button>
    </div>

    <!-- Tx fee modal -->
    <TxFeeModal v-if="showTxFeeModal" />
</template>


<script setup>
    import { inject, ref, onBeforeMount, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { formatTokenAmount, simulateTx } from '@/utils'

    // Components
    import TxFeeModal from '@/components/modal/TxFeeModal.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        showTxFeeModal = ref(false),
        msgAny = ref([]),
        currentPrice = computed(() => formatTokenAmount(store.TxFee.userGasAmount * store.TxFee[`${store.TxFee.currentLevel}Price`], store.TxFee.balance.exponent).toLocaleString('ru-RU', { maximumFractionDigits: 5 }))


    onBeforeMount(async () => {
        // Set current balance
        store.TxFeeGetCurrentBalance(store.networks[store.currentNetwork].denom)

        // Set gas prices
        store.TxFeeSetGasPrices()

        // Set messeges
        store.stakedBalances.forEach(balance => {
            msgAny.value.push({
                typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
                value: {
                    delegatorAddress: store.currentAddress,
                    validatorAddress: balance.validator_info.operator_address
                }
            })
        })

        // Simulate Tx
        store.TxFee.simulatedFee = await simulateTx(msgAny.value)
        store.TxFee.userGasAmount = store.TxFee.simulatedFee.gas

        // Enough status
        store.TxFeeIsEnough()
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