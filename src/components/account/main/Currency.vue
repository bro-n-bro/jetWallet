<template>
    <button class="currency" @click.prevent="switchCurrency">
        {{ currentCurrency }}
    </button>
</template>


<script setup>
    import { useGlobalState } from '@/store'
    import { addData } from '@/utils/db'


    const { currentCurrency, currentCurrencySymbol } = useGlobalState()


    // Switch currency
    function switchCurrency() {
        switch (currentCurrency.value) {
            case 'BTC':
                // Set current currency
                currentCurrency.value = 'ETH'

                // Set current currency symbol
                currentCurrencySymbol.value = 'ETH'

                // Update in DB
                addData('wallet', [['currentCurrency', 'ETH']])

                break;

            case 'ETH':
                // Set current currency
                currentCurrency.value = 'USD'

                // Set current currency symbol
                currentCurrencySymbol.value = '$'

                // Update in DB
                addData('wallet', [['currentCurrency', 'USD']])

                break;

            default:
                // Set current currency
                currentCurrency.value = 'BTC'

                // Set current currency symbol
                currentCurrencySymbol.value = 'BTC'

                // Update in DB
                addData('wallet', [['currentCurrency', 'BTC']])

                break;
        }
    }
</script>


<style scoped>
    .currency
    {
        font-size: 12px;

        position: absolute;
        top: 2px;
        right: 0;

        padding: 0 4px;

        white-space: nowrap;

        border-radius: 5px;
        background: #5b3895;
    }
</style>