import { useGlobalStore } from '@/store'

import { DBgetMultipleData } from '@/utils/db'
import { importWalletFromMnemonic } from './importWalletFromMnemonic'
import { importWalletFromPrivateKey } from './importWalletFromPrivateKey'


// Get address
export const getAddress = async () => {
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
            const secret = await store.getSecret(true)

            // Get wallet
            wallet = await importWalletFromMnemonic(secret, store.networks[store.currentNetwork].prefix)
        }

        if (DBSecret[`wallet${store.currentWalletID}_privateKey`]) {
            // Get secret from DB
            const privateKey = await store.getPrivateKey(true)

            // Get wallet
            wallet = await importWalletFromPrivateKey(privateKey, store.networks[store.currentNetwork].prefix)
        }

        // Current address
        const address = (await wallet.getAccounts())[0].address

        return address
    } catch (error) {
        // Throw error
        throw new Error(`getAddress() failed: ${error.message}`)
    }
}


export default getAddress