import { DirectSecp256k1Wallet } from '@cosmjs/proto-signing'
import { fromHex } from '@cosmjs/encoding'


// Import wallet from private key
export const importWalletFromPrivateKey = async (privateKey, prefix = null) => {
    return await DirectSecp256k1Wallet.fromKey(fromHex(privateKey), prefix)
}


export default importWalletFromPrivateKey