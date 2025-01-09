import { useGlobalStore } from '@/store'


// JetPack event change wallet
export const jetPackEventChangeWallet = () => {
    let store = useGlobalStore()

    // Send event to all connections
    Object.values(store.RTCConnections).forEach(conn => {
        // Send event
        conn.send({
            type: 'eventChangeWallet'
        })
    })
}


export default jetPackEventChangeWallet