import { useGlobalStore } from '@/store'


// Calc staked amount
export const calcStakedAmount = () => {
    let store = useGlobalStore(),
        totalAmount = 0

    // Calc total amount
    if (store.stakedBalances.length) {
        store.stakedBalances.forEach(item => totalAmount += parseFloat(item.balance.amount))
    }

    return totalAmount
}


export default calcStakedAmount