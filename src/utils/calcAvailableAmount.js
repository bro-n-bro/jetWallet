import { useGlobalStore } from '@/store'


// Calc stake available amount
export const calcAvailableAmount = () => {
    let store = useGlobalStore(),
        balance = store.balances.find(balance => balance.denom === store.networks[store.currentNetwork].denom)

    return balance ? parseFloat(balance.amount) : 0
}


export default calcAvailableAmount