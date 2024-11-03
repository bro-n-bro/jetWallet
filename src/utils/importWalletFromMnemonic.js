import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'


// Import wallet from mnemonic
export const importWalletFromMnemonic = async (mnemonic, prefix = null) => {
    return await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix })
}


export default importWalletFromMnemonic