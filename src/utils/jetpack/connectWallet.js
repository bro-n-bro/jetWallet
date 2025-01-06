import { watch, computed } from 'vue'
import { useGlobalStore } from '@/store'


// JetPack connect wallet
export const jetPackConnectWallet = async (emitter) => {
    let store = useGlobalStore()

    if (store.networks[store.currentNetwork].chain_id !== store.jetPackRequest.data.chain_id) {
        await store.jetPackSwitchNetwork()
    }

    if (store.currentAddress) {
        // Show connect wallet modal
        emitter.emit('show_connect_wallet_modal')
    } else {
        // Watch for changes in the current address
        let stopWatch = watch(computed(() => store.currentAddress), () => {
            if (store.currentAddress) {
                // Stop watch
                stopWatch()

                // Show connect wallet modal
                emitter.emit('show_connect_wallet_modal')
            }
        })
    }
}


export default jetPackConnectWallet