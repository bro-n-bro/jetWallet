import { createSinger } from './createSinger'


// Send Tx
export const sendTx = async txBytes => {
    let { signingCosmWasmClient } = await createSinger()

    // Broadcast
    await signingCosmWasmClient.broadcastTx(txBytes, signingCosmWasmClient.broadcastTimeoutMs, signingCosmWasmClient.broadcastPollIntervalMs)
}


export default sendTx