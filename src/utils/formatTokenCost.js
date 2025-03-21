import { useGlobalStore } from '@/store'


// Format token cost
export const formatTokenCost = (cost, currency = null) => {
    let store = useGlobalStore(),
        currentCurrency = currency || store.currentCurrency

    // Rounding
    switch (currentCurrency) {
        case 'BTC':
            return cost > 0.0000000001 || cost == 0 ? cost.toLocaleString('ru-RU', { maximumFractionDigits: 10, minimumFractionDigits: 2 }).replace(',', '.') : '<0.0000000001'

        case 'ETH':
            return cost > 0.0000001 || cost == 0 ? cost.toLocaleString('ru-RU', { maximumFractionDigits: 7, minimumFractionDigits: 2 }).replace(',', '.') : '<0.0000001'

        default:
            return cost > 0.01 || cost == 0 ? cost.toLocaleString('ru-RU', { maximumFractionDigits: 2, minimumFractionDigits: 2 }).replace(',', '.') : '<0.01'
    }
}


export default formatTokenCost