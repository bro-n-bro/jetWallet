import { useGlobalStore } from '@/store'


// Get explorer link
export const getExplorerLink = (network) => {
    const store = useGlobalStore()

    return (store.networks[network].explorer_link).replace('{tx_hash}', store.networks[network].currentTxHash)
}


export default getExplorerLink