import { useGlobalStore } from '@/store'
import { createSinger } from './createSinger'


// Simulate Tx
export const simulateTx = async (msg, memo = '') => {
    let store = useGlobalStore(),
        { signingCosmWasmClient } = await createSinger()

    // Simulate gas
    let gasUsed = await signingCosmWasmClient.simulate(store.currentAddress, msg, memo)

    // Set gas amount
    store.TxFee.gasAmount = parseInt(gasUsed * store.networks[store.currentNetwork].gas_adjustment)

    // Set user gas amount
    store.TxFee.userGasAmount = store.TxFee.gasAmount
}


export default simulateTx