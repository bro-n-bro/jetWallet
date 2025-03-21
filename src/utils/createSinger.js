import { useGlobalStore } from '@/store'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { SigningStargateClient } from '@cosmjs/stargate'

import { DBgetMultipleData } from '@/utils/db'
import { importWalletFromMnemonic } from './importWalletFromMnemonic'
import { importWalletFromPrivateKey } from './importWalletFromPrivateKey'


// Create singer
export const createSinger = async () => {
    let store = useGlobalStore(),
        wallet = null

    try {
        // Get from DB
        let DBSecret = await DBgetMultipleData('secret', [
            `wallet${store.currentWalletID}_secret`,
            `wallet${store.currentWalletID}_privateKey`
        ])

        // Wallet
        if (DBSecret[`wallet${store.currentWalletID}_secret`]) {
            // Get secret from DB
            let secret = await store.getSecret(true)

            // Get wallet
            wallet = await importWalletFromMnemonic(secret, store.networks[store.currentNetwork].prefix)
        }

        if (DBSecret[`wallet${store.currentWalletID}_privateKey`]) {
            // Get secret from DB
            let privateKey = await store.getPrivateKey(true)

            // Get wallet
            wallet = await importWalletFromPrivateKey(privateKey, store.networks[store.currentNetwork].prefix)
        }

        // Stargate client
        let signingClient = await SigningStargateClient.connectWithSigner(store.networks[store.currentNetwork].rpc_api, wallet)

        // Stargate Cosm wasm client
        let signingCosmWasmClient = await SigningCosmWasmClient.connectWithSigner(store.networks[store.currentNetwork].rpc_api, wallet)

        return { signingClient, signingCosmWasmClient }
    } catch (error) {
        // Throw error
        error.message = `createSinger.js failed: ${error.message}`

        throw error
    }
}


export default createSinger