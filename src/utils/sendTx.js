import { useGlobalStore } from '@/store'


// Send Tx
export const sendTx = async txBytes => {
    let store = useGlobalStore()

    // Broadcast
    await store.networks[store.currentNetwork].signingCosmWasmClient.broadcastTx(
        txBytes,
        store.networks[store.currentNetwork].signingCosmWasmClient.broadcastTimeoutMs,
        store.networks[store.currentNetwork].signingCosmWasmClient.broadcastPollIntervalMs
    )
}


export default sendTx