import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { stringToPath } from '@cosmjs/crypto'
import { useGlobalStore } from '@/store'


// Import wallet from mnemonic
export const importWalletFromMnemonic = async (mnemonic, prefix = null, derivationPath = null) => {
    const store = useGlobalStore(),
        path = !derivationPath ? store.currentWalletDerivationPath : derivationPath

    try {
        return await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
            hdPaths: [stringToPath(path)],
            prefix
        })
    } catch (error) {
        // Throw error
        throw new Error(`importWalletFromMnemonic() failed: ${error.message}`)
    }
}


export default importWalletFromMnemonic