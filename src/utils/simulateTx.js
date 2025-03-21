import { useGlobalStore } from '@/store'
import { createSinger } from './createSinger'


// Simulate Tx
export const simulateTx = async (msg, memo = '') => {
    try {
        const store = useGlobalStore(),
            { signingCosmWasmClient } = await createSinger()

        // Simulate gas
        const gasUsed = await signingCosmWasmClient.simulate(store.currentAddress, msg, memo)

        // Set gas amount
        store.TxFee.gasAmount = parseInt(gasUsed * store.networks[store.currentNetwork].gas_adjustment)

        // Set user gas amount
        store.TxFee.userGasAmount = store.TxFee.gasAmount
    } catch (error) {
        // Throw error
        throw new Error(`simulateTx() failed: ${error.message}`)
    }
}


export default simulateTx