import { watch, computed } from 'vue'
import { useGlobalStore } from '@/store'


// JetPack switch chain
export const jetPackSwitchChain = (i18n) => {
    let store = useGlobalStore()

    // Get connection
    let connection = store.RTCConnections[store.jetPackRequest.data.peer_id]

    // Switch
    store.jetPackSwitchNetwork()
        .then(() => {
            // Watch for changes in the current address
            let stopWatch = watch(computed(() => store.currentAddress), () => {
                if (store.currentAddress.length) {
                    // Stop watch
                    stopWatch()

                    // Send response
                    if (connection) {
                        connection.send({
                            type: 'switchChain',
                            requestId: store.jetPackRequest.data.request_id,
                            chain_id: store.jetPackRequest.data.chain_id,
                            address: store.currentAddress,
                        })
                    }
                }
            })
        }).catch(() => {
            // Send response
            if (connection) {
                connection.send({
                    type: 'error',
                    requestId: store.jetPackRequest.data.request_id,
                    message: i18n.global.t('message.jp_chain_not_found')
                })
            }
        })
}


export default jetPackSwitchChain