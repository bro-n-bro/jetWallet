import { useGlobalStore } from '@/store'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { SigningStargateClient } from '@cosmjs/stargate'

import { decryptData } from './decryptData'
import { importWalletFromMnemonic } from './importWalletFromMnemonic'
import { importWalletFromPrivateKey } from './importWalletFromPrivateKey'


// Create singer
export const createSinger = async () => {
    let store = useGlobalStore(),
        wallet = null

    // Wallet
    if (store.secret) {
        // Decryption
        let decryptedData = await decryptData(store.secret, store.secretIV, store.aesKey)

        // Get wallet
        wallet = await importWalletFromMnemonic(decryptedData, store.networks[store.currentNetwork].prefix)
    }

    if (store.privateKey) {
        // Decryption
        let decryptedData = await decryptData(store.privateKey, store.secretIV, store.aesKey)

        // Get wallet
        wallet = await importWalletFromPrivateKey(decryptedData, store.networks[store.currentNetwork].prefix)
    }

    // Current address
    let address = (await wallet.getAccounts())[0].address

    // Stargate client
    let signingClient = await SigningStargateClient.connectWithSigner(store.networks[store.currentNetwork].rpc_api, wallet)

    // Stargate Cosm wasm client
    let signingCosmWasmClient = await SigningCosmWasmClient.connectWithSigner(store.networks[store.currentNetwork].rpc_api, wallet)

    return { address, signingClient, signingCosmWasmClient }
}


export default createSinger