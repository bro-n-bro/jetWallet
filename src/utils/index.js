import { useGlobalStore } from '@/store'
import { DirectSecp256k1HdWallet, DirectSecp256k1Wallet } from '@cosmjs/proto-signing'
import { fromHex } from '@cosmjs/encoding'
import { SigningStargateClient } from '@cosmjs/stargate'
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx'
import { sha256 } from '@cosmjs/crypto'
import { chains } from 'chain-registry'


// Generate wallet
export const generateWallet = async count => {
    return await DirectSecp256k1HdWallet.generate(count)
}


// Import wallet from mnemonic
export const importWalletFromMnemonic = async (mnemonic, prefix = null) => {
    return await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix })
}


// Import wallet from private key
export const importWalletFromPrivateKey = async (privateKey, prefix = null) => {
    return await DirectSecp256k1Wallet.fromKey(fromHex(privateKey), prefix)
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


// Generate AES key
export const generateAESKey = async () => {
    let key = await crypto.subtle.generateKey(
        {
            name: 'AES-GCM',
            length: 256
        },
        true,
        ['encrypt', 'decrypt']
    )

    return key
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


// Encryption
export const encryptData = async (text, key) => {
    let iv = crypto.getRandomValues(new Uint8Array(12)),
        encoder = new TextEncoder(),
        encodedText = encoder.encode(text)

    let ciphertext = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        key,
        encodedText
    );

    return {
        ciphertext: new Uint8Array(ciphertext),
        iv: iv
    }
}


// Decryption
export const decryptData = async (ciphertext, iv, key) => {
    let decrypted = await crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        key,
        ciphertext
    )

    let decoder = new TextDecoder()

    return decoder.decode(decrypted)
}


// Create singer
export const createSinger = async () => {
    let store = useGlobalStore(),
        wallet = null

    // Wallet
    if (store.secret) {
        // Decryption
        let decryptedData = await decryptData(store.secret, store.secretIV, store.aesKey)

        // Get wallet
        wallet = await importWalletFromMnemonic(decryptedData, store.networks[store.currentNetwork].prefix)
    }

    if (store.privateKey) {
        // Decryption
        let decryptedData = await decryptData(store.privateKey, store.secretIV, store.aesKey)

        // Get wallet
        wallet = await importWalletFromPrivateKey(decryptedData, store.networks[store.currentNetwork].prefix)
    }

    // Current address
    let address = (await wallet.getAccounts())[0].address

    // Stargate client
    let signingClient = await SigningStargateClient.connectWithSigner(store.networks[store.currentNetwork].rpc_api, wallet)

    return { address, signingClient }
}


// Denom traces
export const denomTraces = async (string) => {
    let store = useGlobalStore(),
        result = {
            path: null,
            base_denom: string
        },
        hash = string.split('/')

    if (hash[0] == 'ibc') {
        try {
            // Request
            await fetch(`${store.networks[store.currentNetwork].lcd_api}/ibc/apps/transfer/v1/denom_traces/${hash[1]}`)
                .then(response => response.json())
                .then(response => result = response.denom_trace)
        } catch (error) {
            console.error(error)
        }
    } else if (hash[0] == 'factory') {
        result.ingnoreTraces = true
        result.base_denom = hash[hash.length - 1]
    }

    return result
}


// Formating token amount
export const formatTokenAmount = (amount, exponent) => amount / Math.pow(10, exponent)


// Format token cost
export const formatTokenCost = (cost, currency = null) => {
    let store = useGlobalStore(),
    currentCurrency = currency || store.currentCurrency

    // Rounding
    switch (currentCurrency) {
        case 'BTC':
            return cost > 0.0000000001 || cost == 0 ? cost.toLocaleString('ru-RU', { maximumFractionDigits: 10, minimumFractionDigits: 2 }).replace(',', '.') : '<0.0000000001'

        case 'ETH':
            return cost > 0.0000001 || cost == 0 ? cost.toLocaleString('ru-RU', { maximumFractionDigits: 7, minimumFractionDigits: 2 }).replace(',', '.') : '<0.0000001'

        default:
            return cost > 0.01 || cost == 0 ? cost.toLocaleString('ru-RU', { maximumFractionDigits: 2, minimumFractionDigits: 2 }).replace(',', '.') : '<0.01'
    }
}


// Formating token name
export const formatTokenName = tokenName => {
    let store = useGlobalStore(),
        formatableToken = store.formatableTokens.find(el => el.token_name == tokenName),
        formatTokenName = formatableToken ? formatableToken.format_token_name : tokenName

    return formatTokenName
}


// Get price by denom
export const getPriceByDenom = denom => {
    let store = useGlobalStore(),
        price = store.prices.find(el => el.symbol === denom)?.price || 0,
        formatableToken = store.formatableTokens.find(el => el.token_name == denom),
        formatPrice = formatableToken ? price * Math.pow(10, formatableToken.exponent) : price

    return formatPrice
}


// Currency conversion
export const currencyConversion = (amount, denom, currency) => {
    let store = useGlobalStore(),
        currentCurrencyPrice = 0

    currency
        ? currentCurrencyPrice = store.prices.find(el => el.symbol == formatTokenName(currency)).price
        : currentCurrencyPrice = store.prices.find(el => el.symbol == formatTokenName(store.currentCurrency)).price

    return amount * (getPriceByDenom(denom) / currentCurrencyPrice)
}


// Calc token cost in current cucrrency
export const calcTokenCost = (denom, amount, exponent, currency = null) => {
    let formatAmount = formatTokenAmount(amount, exponent)

    return currencyConversion(formatAmount, denom, currency)
}


// Calc balances cost in current cucrrency
export const calcBalancesCost = (currency = null) => {
    let store = useGlobalStore(),
        totalPrice = 0

    // Calc total cost
    if (store.balances.length) {
        store.balances.forEach(balance => totalPrice += calcTokenCost(balance.token_info.symbol, balance.amount, balance.exponent, currency))
    }

    return parseFloat(totalPrice)
}


// Calc Staked balances cost in current cucrrency
export const calcStakedBalancesCost = (currency = null) => {
    let store = useGlobalStore(),
        totalPrice = 0

    // Calc total cost
    if (store.stakedBalances.length) {
        store.stakedBalances.forEach(el => totalPrice += calcTokenCost(el.balance.token_info.symbol, el.balance.amount, el.balance.exponent, currency))
    }

    return parseFloat(totalPrice)
}


// Calc rewards balances cost in current cucrrency
export const calcRewardsBalancesCost = (currency = null) => {
    let store = useGlobalStore(),
        totalPrice = 0

    // Calc total cost
    if (store.rewardsBalances.length) {
        store.rewardsBalances.forEach(balance => totalPrice += calcTokenCost(balance.token_info.symbol, balance.amount, balance.exponent, currency))
    }

    return parseFloat(totalPrice)
}


// Calc stake available amount
export const calcAvailableAmount = () => {
    let store = useGlobalStore(),
        balance = store.balances.find(balance => balance.denom === store.networks[store.currentNetwork].denom)

    return balance ? balance.amount : 0
}


// Calc staked amount
export const calcStakedAmount = () => {
    let store = useGlobalStore(),
        totalAmount = 0

    // Calc total amount
    if (store.stakedBalances.length) {
        store.stakedBalances.forEach(item => totalAmount += parseFloat(item.balance.amount))
    }

    return totalAmount
}


// Calc unstaking amount
export const calcUnstakingAmount = () => {
    let store = useGlobalStore(),
        totalAmount = 0

    // Calc total amount
    if (store.unstakingBalances.length) {
        store.unstakingBalances.forEach(item => {
            item.entries.forEach(el => totalAmount += parseFloat(el.balance))
        })
    }

    return totalAmount
}


// Get metwork logo
export const getNetworkLogo = chainId => {
    let logos = null

    if (chainId) {
        let chain = chains.find(el => el.chain_id === chainId)

        if (chain) {
            chain.logo_URIs
                ? logos = chain.logo_URIs.svg || chain.logo_URIs.png
                : logos = chain.images[chain.images.length - 1].svg || chain.images[chain.images.length - 1].png
        }
    }

    return logos
}


// Simulate Tx
export const simulateTx = async (msg, memo = '') => {
    let store = useGlobalStore()

    // Simulate gas
    let gasUsed = await store.networks[store.currentNetwork].signingClient.simulate(store.currentAddress, msg, memo)

    // Set gas amount
    store.TxFee.gasAmount = parseInt(gasUsed * store.networks[store.currentNetwork].gas_adjustment)

    // Set user gas amount
    store.TxFee.userGasAmount = store.TxFee.gasAmount
}


// Sign Tx
export const signTx = async (msg, memo) => {
    let store = useGlobalStore()

    // Fee
    let fee = {
        amount: [{
            denom: store.networks[store.currentNetwork].denom,
            amount: parseInt(store.TxFee.userGasAmount * store.TxFee[`${store.TxFee.currentLevel}Price`]).toString()
        }],
        gas: store.TxFee.userGasAmount.toString()
    }

    // Sign
    let txRaw = await store.networks[store.currentNetwork].signingClient.sign(store.currentAddress, msg, fee, memo)

    // Encode TxRaw
    let txBytes = TxRaw.encode(txRaw).finish()

    // Hash transaction bytes
    let txHash = sha256(txBytes)

    // Convert hash bytes to hex string
    store.networks[store.currentNetwork].currentTxHash = Buffer.from(txHash).toString('hex')

    // Set listener current tx
    store.setListenerCurrentTx()

    return txBytes
}


// Send Tx
export const sendTx = async txBytes => {
    let store = useGlobalStore()

    // Broadcast
    await store.networks[store.currentNetwork].signingClient.broadcastTx(txBytes, store.networks[store.currentNetwork].signingClient.broadcastTimeoutMs, store.networks[store.currentNetwork].signingClient.broadcastPollIntervalMs)
}


// Get explorer link
export const getExplorerLink = (network) => {
    let store = useGlobalStore()

    return (store.networks[network].explorer_link).replace('{tx_hash}', store.networks[network].currentTxHash)
}


// Image load error
export const imageLoadError = e => e.target.classList.add('hide')


// Date calc
export const dateCalc = date => {
    let currentDate = new Date(date),
        userTimeZone = new Date().getTimezoneOffset() / 60 * -1

    return new Date(currentDate.setHours(currentDate.getHours() + userTimeZone))
}


// Decode from base64
export const decodeFromBase64 = base64String => {
    // Decode the Base64 string back to a JSON string
    const jsonString = atob(base64String)

    // Convert the JSON string back to an object
    return JSON.parse(jsonString)
}