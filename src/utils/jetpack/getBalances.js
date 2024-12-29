import { watch, computed } from 'vue'
import { useGlobalStore } from '@/store'


// JetPack get balances
export const jetPackGetBalances = () => {
    let store = useGlobalStore()

    // Get connection
    let connection = store.RTCConnections[store.jetPackRequest.data.peer_id]

    if (store.isBalancesGot) {
        // Send response
        if (connection) {
            connection.send({
                type: 'balances',
                requestId: store.jetPackRequest.data.request_id,
                balances: store.balances
            })
        }
    } else {
        // Watch for changes in the balance receipt status
        let stopWatch = watch(computed(() => store.isBalancesGot), () => {
            if (store.isBalancesGot) {
                // Stop watch
                stopWatch()

                // Send response
                if (connection) {
                    connection.send({
                        type: 'balances',
                        requestId: store.jetPackRequest.data.request_id,
                        balances: store.balances
                    })
                }
            }
        })
    }
}


export default jetPackGetBalances