import { useGlobalStore } from '@/store'
import { calcTokenCost } from './calcTokenCost'


// Calc balances cost in current cucrrency
export const calcBalancesCost = (currency = null) => {
    let store = useGlobalStore(),
        totalPrice = 0

    // Calc total cost
    if (store.balances.length) {
        store.balances.forEach(balance => totalPrice += calcTokenCost(balance.token_info.symbol, balance.amount, balance.exponent, currency))
    }

    return parseFloat(totalPrice)
}


export default calcBalancesCost