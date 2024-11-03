import { useGlobalStore } from '@/store'


// Simulate Tx
export const simulateTx = async (msg, memo = '') => {
    let store = useGlobalStore()

    // Simulate gas
    let gasUsed = await store.networks[store.currentNetwork].signingCosmWasmClient.simulate(store.currentAddress, msg, memo)

    // Set gas amount
    store.TxFee.gasAmount = parseInt(gasUsed * store.networks[store.currentNetwork].gas_adjustment)

    // Set user gas amount
    store.TxFee.userGasAmount = store.TxFee.gasAmount
}


export default simulateTx