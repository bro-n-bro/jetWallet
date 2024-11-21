import { useGlobalStore } from '@/store'
import { chains } from 'chain-registry'


// Get metwork logo
export const getNetworkLogo = chainId => {
    let store = useGlobalStore(),
        logo = ''

    if (chainId) {
        let chain = Object.values(store.networks).find(el => el.chain_id === chainId)

        if (chain !== undefined && chain.logo) {
            logo = chain.logo
        } else {
            chain = chains.find(el => el.chain_id === chainId)

            if (chain) {
                if (chain.logo_URIs) {
                    logo = chain.logo_URIs.svg || chain.logo_URIs.png
                } else if (chain.images) {
                    logo = chain.images[chain.images.length - 1].svg || chain.images[chain.images.length - 1].png
                }
            }
        }
    }

    return logo
}


export default getNetworkLogo