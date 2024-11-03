import { useGlobalStore } from '@/store'
import { calcTokenCost } from './calcTokenCost'


// Calc Staked balances cost in current cucrrency
export const calcStakedBalancesCost = (currency = null) => {
    let store = useGlobalStore(),
        totalPrice = 0

    // Calc total cost
    if (store.stakedBalances.length) {
        store.stakedBalances.forEach(el => totalPrice += calcTokenCost(el.balance.token_info.symbol, el.balance.amount, el.balance.exponent, currency))
    }

    return parseFloat(totalPrice)
}


export default calcStakedBalancesCost