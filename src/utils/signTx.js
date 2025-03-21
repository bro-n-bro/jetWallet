import { useGlobalStore } from '@/store'
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import { sha256 } from '@cosmjs/crypto'

import { createSinger } from './createSinger'


// Sign Tx
export const signTx = async (msg, memo) => {
    try {
        const store = useGlobalStore(),
            { signingCosmWasmClient } = await createSinger()

        // Fee
        const fee = {
            amount: [{
                denom: store.networks[store.currentNetwork].denom,
                amount: parseInt(store.TxFee.userGasAmount * store.TxFee[`${store.TxFee.currentLevel}Price`]).toString()
            }],
            gas: store.TxFee.userGasAmount.toString()
        }

        // Sign
        const txRaw = await signingCosmWasmClient.sign(store.currentAddress, msg, fee, memo)

        // Encode TxRaw
        const txBytes = TxRaw.encode(txRaw).finish()

        // Hash transaction bytes
        const txHash = sha256(txBytes)

        // Convert hash bytes to hex string
        store.networks[store.currentNetwork].currentTxHash = Buffer.from(txHash).toString('hex')

        return txBytes
    } catch (error) {
        // Throw error
        throw new Error(`signTx() failed: ${error.message}`)
    }
}


export default signTx