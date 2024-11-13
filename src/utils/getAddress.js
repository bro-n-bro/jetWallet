import { useGlobalStore } from '@/store'

import { DBgetMultipleData } from '@/utils/db'
import { importWalletFromMnemonic } from './importWalletFromMnemonic'
import { importWalletFromPrivateKey } from './importWalletFromPrivateKey'


// Get address
export const getAddress = async () => {
    let store = useGlobalStore(),
        wallet = null

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

    // Current address
    let address = (await wallet.getAccounts())[0].address

    return address
}


export default getAddress