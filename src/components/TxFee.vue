<template>
    <!-- Tx fee -->
    <div class="tx_fee">
        <div class="btn" :class="{ red: !store.TxFee.isEnough }" @click.prevent="openTxFeeModal()">
            <!-- Tx fee label -->
            {{ $t('message.tx_fee_label') }}

            <!-- Tx fee value -->
            {{ cost.toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }}

            <!-- Tx fee denom -->
            {{ store.networks[store.currentNetwork].token_name }}

            <!-- Tx fee cost -->
            <div class="cost">
                (~ {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, store.TxFee.userGasAmount * store.TxFee[`${store.TxFee.currentLevel}Price`], store.networks[store.currentNetwork].exponent, 'USD'), 'USD') }}$)
            </div>
        </div>
    </div>


    <!-- Tx fee modal -->
    <transition name="modal">
    <TxFeeModal v-if="showTxFeeModal" />
    </transition>

    <!-- Overlay -->
    <transition name="fade">
    <div class="modal_overlay" @click.prevent="emitter.emit('close_any_modal')" v-if="showTxFeeModal"></div>
    </transition>
</template>


<script setup>
    import { inject, ref, onBeforeMount, computed, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { formatTokenAmount, simulateTx, calcTokenCost, formatTokenCost } from '@/utils'

    // Components
    import TxFeeModal from '@/components/modal/TxFeeModal.vue'


    const props = defineProps(['msgAny', 'txType']),
        store = useGlobalStore(),
        emitter = inject('emitter'),
        showTxFeeModal = ref(false),
        cost = computed(() => formatTokenAmount(store.TxFee.userGasAmount * store.TxFee[`${store.TxFee.currentLevel}Price`], store.networks[store.currentNetwork].exponent))


    onBeforeMount(async () => {
        // Reset data
        await store.resetTxFee()

        // Set current balance
        store.TxFeeGetCurrentBalance(store.networks[store.currentNetwork].denom)

        // Set gas prices
        store.TxFeeSetGasPrices()

        // Simulate Tx
        if (store.TxFee.balance.amount) {
            await simulateTx(props.msgAny)
        } else {
            // Set default gas amount
            if (props.txType === 'send') {
                store.TxFee.gasAmount = store.TxFee.userGasAmount = store.networks[store.currentNetwork].gas_amount_send
            }

            if (props.txType === 'claim') {
                store.TxFee.gasAmount = store.TxFee.userGasAmount = store.networks[store.currentNetwork].gas_amount_claim
            }

            if (props.txType === 'stake') {
                store.TxFee.gasAmount = store.TxFee.userGasAmount = store.networks[store.currentNetwork].gas_amount_stake
            }

            if (props.txType === 'unstake') {
                store.TxFee.gasAmount = store.TxFee.userGasAmount = store.networks[store.currentNetwork].gas_amount_unstake
            }

            if (props.txType === 'redelegate') {
                store.TxFee.gasAmount = store.TxFee.userGasAmount = store.networks[store.currentNetwork].gas_amount_redelegate
            }
        }

        // Enough status
        store.TxFeeIsEnough()
    })


    onUnmounted(() => {
        // Reset data
        store.TxFee.isEnough = false

        // Unlisten events
        emitter.off('close_any_modal')
        emitter.off('close_tx_fee_modal')
    })


    // Open TxFee modal
    function openTxFeeModal() {
        // Show TxFee modal
        showTxFeeModal.value = true

        // Update status
        store.isAnyModalOpen = true
    }


    // Event "close_tx_fee_modal"
    emitter.on('close_tx_fee_modal', () => {
        // Hide TxFee modal
        showTxFeeModal.value = false

        // Update status
        store.isAnyModalOpen = false
    })


    // Event "close_any_modal"
    emitter.on('close_any_modal', () => {
        // Hide TxFee modal
        showTxFeeModal.value = false

        // Update status
        store.isAnyModalOpen = false
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

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 100%;

        white-space: nowrap;
        text-decoration: underline;

        text-decoration-thickness: 1px;
    }


    .tx_fee .btn.red
    {
        color: #f33;
    }


    .tx_fee .cost
    {
        margin-left: 6px;

        opacity: .6;
        color: #fff;
    }
</style>