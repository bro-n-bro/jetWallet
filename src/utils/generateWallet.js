import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'


// Generate wallet
export const generateWallet = async count => {
    try {
        return await DirectSecp256k1HdWallet.generate(count)
    } catch (error) {
        // Throw error
        throw new Error(`generateWallet() failed: ${error.message}`)
    }
}


export default generateWallet