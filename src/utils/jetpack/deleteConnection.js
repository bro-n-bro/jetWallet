import { useGlobalStore } from '@/store'


// JetPack delete connection
export const jetPackDeleteConnection = (conn) => {
    let store = useGlobalStore()

    // Delete connection
    delete store.RTCConnections[conn.peer]

    // Update connection status
    if (!Object.keys(store.RTCConnections).length) {
        store.isRTCConnected = false
    }
}


export default jetPackDeleteConnection