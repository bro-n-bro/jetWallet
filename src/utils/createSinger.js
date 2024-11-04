import { useGlobalStore } from '@/store'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { SigningStargateClient } from '@cosmjs/stargate'

import { DBgetMultipleData } from '@/utils/db'
import { decryptData } from './decryptData'
import { importWalletFromMnemonic } from './importWalletFromMnemonic'
import { importWalletFromPrivateKey } from './importWalletFromPrivateKey'


// Create singer
export const createSinger = async () => {
    let store = useGlobalStore(),
        wallet = null

    // Get DB data
    let DBData = await DBgetMultipleData('wallet', ['secret', 'secretIV', 'aesKey', 'privateKey'])

    // Wallet
    if (DBData.secret) {
        // Decryption
        let decryptedData = await decryptData(DBData.secret, DBData.secretIV, DBData.aesKey)

        // Get wallet
        wallet = await importWalletFromMnemonic(decryptedData, store.networks[store.currentNetwork].prefix)
    }

    if (DBData.privateKey) {
        // Decryption
        let decryptedData = await decryptData(DBData.privateKey, DBData.secretIV, DBData.aesKey)

        // Get wallet
        wallet = await importWalletFromPrivateKey(decryptedData, store.networks[store.currentNetwork].prefix)
    }

    // Stargate client
    let signingClient = await SigningStargateClient.connectWithSigner(store.networks[store.currentNetwork].rpc_api, wallet)

    // Stargate Cosm wasm client
    let signingCosmWasmClient = await SigningCosmWasmClient.connectWithSigner(store.networks[store.currentNetwork].rpc_api, wallet)

    return { signingClient, signingCosmWasmClient }
}


export default createSinger