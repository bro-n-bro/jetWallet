import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { stringToPath } from '@cosmjs/crypto'
import { useGlobalStore } from '@/store'


// Import wallet from mnemonic
export const importWalletFromMnemonic = async (mnemonic, prefix = null, derivationPath = null) => {
    let store = useGlobalStore(),
        path = !derivationPath ? store.currentWalletDerivationPath : derivationPath

    return await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        hdPaths: [stringToPath(path)],
        prefix
    })
}


export default importWalletFromMnemonic