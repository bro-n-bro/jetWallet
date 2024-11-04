import { useGlobalStore } from '@/store'

import { DBgetMultipleData } from '@/utils/db'
import { decryptData } from './decryptData'
import { importWalletFromMnemonic } from './importWalletFromMnemonic'
import { importWalletFromPrivateKey } from './importWalletFromPrivateKey'


// Get address
export const getAddress = async () => {
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

    // Current address
    let address = (await wallet.getAccounts())[0].address

    return address
}


export default getAddress