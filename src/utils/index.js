import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'


// Generate wallet
export const generateWallet = async count => {
    return await DirectSecp256k1HdWallet.generate(count)
}