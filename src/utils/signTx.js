import { useGlobalStore } from '@/store'
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import { sha256 } from '@cosmjs/crypto'


// Sign Tx
export const signTx = async (msg, memo) => {
    let store = useGlobalStore()

    // Fee
    let fee = {
        amount: [{
            denom: store.networks[store.currentNetwork].denom,
            amount: parseInt(store.TxFee.userGasAmount * store.TxFee[`${store.TxFee.currentLevel}Price`]).toString()
        }],
        gas: store.TxFee.userGasAmount.toString()
    }

    // Sign
    let txRaw = await store.networks[store.currentNetwork].signingCosmWasmClient.sign(store.currentAddress, msg, fee, memo)

    // Encode TxRaw
    let txBytes = TxRaw.encode(txRaw).finish()

    // Hash transaction bytes
    let txHash = sha256(txBytes)

    // Convert hash bytes to hex string
    store.networks[store.currentNetwork].currentTxHash = Buffer.from(txHash).toString('hex')

    return txBytes
}


export default signTx