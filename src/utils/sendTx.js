import { createSinger } from './createSinger'


// Send Tx
export const sendTx = async txBytes => {
    let { signingCosmWasmClient } = await createSinger()

    try {
        // Broadcast
        await signingCosmWasmClient.broadcastTx(txBytes, signingCosmWasmClient.broadcastTimeoutMs, signingCosmWasmClient.broadcastPollIntervalMs)
    } catch (error) {
        // Throw error
        throw new Error(`sendTx() failed: ${error.message}`)
    }
}


export default sendTx