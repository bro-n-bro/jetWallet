import { useGlobalStore } from '@/store'


// Calc unstaking amount
export const calcUnstakingAmount = () => {
    let store = useGlobalStore(),
        totalAmount = 0

    // Calc total amount
    if (store.unstakingBalances.length) {
        store.unstakingBalances.forEach(item => {
            item.entries.forEach(el => totalAmount += parseFloat(el.balance))
        })
    }

    return totalAmount
}


export default calcUnstakingAmount