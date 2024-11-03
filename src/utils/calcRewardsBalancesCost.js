import { useGlobalStore } from '@/store'
import { calcTokenCost } from './calcTokenCost'


// Calc rewards balances cost in current cucrrency
export const calcRewardsBalancesCost = (currency = null) => {
    let store = useGlobalStore(),
        totalPrice = 0

    // Calc total cost
    if (store.rewardsBalances.length) {
        store.rewardsBalances.forEach(balance => totalPrice += calcTokenCost(balance.token_info.symbol, balance.amount, balance.exponent, currency))
    }

    return parseFloat(totalPrice)
}


export default calcRewardsBalancesCost