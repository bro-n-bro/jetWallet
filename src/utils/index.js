import { DirectSecp256k1HdWallet, DirectSecp256k1Wallet } from '@cosmjs/proto-signing'
import { GasPrice, SigningStargateClient } from '@cosmjs/stargate'
import { getData } from '@/utils/db'


// Generate wallet
export const generateWallet = async count => {
    return await DirectSecp256k1HdWallet.generate(count)
}


// Import wallet from mnemonic
export const importWalletFromMnemonic = async mnemonic => {
    return await DirectSecp256k1HdWallet.fromMnemonic(mnemonic)
}


// Import wallet from private key
export const importWalletFromPrivateKey = async privateKey => {
    return await DirectSecp256k1Wallet.fromKey(Buffer.from(privateKey, 'hex'))
}


// Hash data with key
export const hashDataWithKey = async (data, key) => {
    let encoder = new TextEncoder(),
        encodedData = encoder.encode(data)

    let cryptoKey = await crypto.subtle.importKey(
        'jwk',
        key,
        {
            name: 'HMAC',
            hash: { name: 'SHA-256' }
        },
        false,
        ['sign']
    )

    let signature = await crypto.subtle.sign('HMAC', cryptoKey, encodedData),
        hashArray = Array.from(new Uint8Array(signature)),
        hashHex = hashArray.map(byte => ('00' + byte.toString(16)).slice(-2)).join('')

    return hashHex
}


// Generate HMAC key
export const generateHMACKey = async () => {
    // Key params
    let key = await crypto.subtle.generateKey(
        {
            name: 'HMAC',
            hash: { name: 'SHA-256' },
            length: 256
        },
        true,
        ['sign']
    )

    // Export key in JWK (JSON Web Key) format
    let exportedKey = await crypto.subtle.exportKey('jwk', key)

    return exportedKey
}


// Create singer
export const createSinger = async ({ rpc_api, prefix }) => {
    // Wallet
    let wallet = await importWalletFromMnemonic(await getData('wallet', 'secret'), { prefix })

    // Current address
    let address = (await wallet.getAccounts())[0].address

    // Stargate client
    let signingClient = await SigningStargateClient.connectWithSigner(rpc_api, wallet)

    return { address, signingClient }
}