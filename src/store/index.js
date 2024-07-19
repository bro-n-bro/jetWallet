import { defineStore } from 'pinia'
import { createSinger, denomTraces, hashDataWithKey, generateHMACKey, getPriceByDenom } from '@/utils'
import { chains, assets } from 'chain-registry'
import { DBaddData, DBclearData, DBgetMultipleData } from '@/utils/db'


// Networks
import cosmoshub from '@/store/networks/cosmoshub'
import bostrom from '@/store/networks/bostrom'


export const useGlobalStore = defineStore('global', {
    state: () => ({
        isInitialized: false,
        isAuthorized: false,
        authErrorLimit: 4,

        currentNetwork: '',
        currentAddress: '',
        currentCurrency: '',
        currentCurrencySymbol: '',

        prices: [],
        balances: [],
        signingClient: {},

        secret: null,
        privateKey: null,

        networks: {
            cosmoshub,
            bostrom
        },

        formatableTokens: [
            {
                token_name: 'USD',
                format_token_name: 'USDT',
                exponent: 0
            },
            {
                token_name: 'BTC',
                format_token_name: 'WBTC',
                exponent: 0
            }
        ]
    }),


    actions: {
        // Init APP
        async initApp() {
            // Get DB data
            ({
                secret: this.secret,
                privateKey: this.privateKey,
                currentCurrency: this.currentCurrency,
                currentNetwork: this.currentNetwork
            } = await this.getMultipleData(['secret', 'privateKey', 'currentCurrency', 'currentNetwork']))

            // Create singer
            let signer = await createSinger()

            this.currentAddress = signer.address
            this.signingClient = signer.signingClient

            // Get currencies price
            await this.getCurrenciesPrice()

            // Get balances
            await this.getBalances()

            // Set current currency symbol
            switch (this.currentCurrency) {
                case 'BTC':
                    // Set current currency symbol
                    this.currentCurrencySymbol = 'BTC'
                    break

                case 'ETH':
                    // Set current currency symbol
                    this.currentCurrencySymbol = 'ETH'
                    break

                default:
                    // Set current currency symbol
                    this.currentCurrencySymbol = '$'
                    break
            }

            // Init status
            this.isInitialized = true
        },


        // Currencies price
        async getCurrenciesPrice() {
            try {
                await fetch('https://rpc.bronbro.io/price_feed_api/tokens/')
                    .then(response => response.json())
                    .then(data => this.prices = data)
            } catch (error) {
                console.error(error)
            }
        },


        // Get balances
        async getBalances() {
            // Request
            this.balances = await this.signingClient.getAllBalances(this.currentAddress)

            for (let balance of this.balances) {
                // Denom traces
                let { base_denom } = await denomTraces(balance.denom, this.currentNetwork)

                // Get (token info/chain name) from assets
                for (let asset of assets) {
                    // Exceptions
                    switch (base_denom) {
                        case 'uusdc':
                            var currentAsset = assets.find(el => el.chain_name === 'noble')
                            break;

                        default:
                            var currentAsset = asset
                            break;
                    }

                    // Token info
                    let tokenInfo = currentAsset.assets.find(token => token.base === base_denom)

                    if (tokenInfo) {
                        // Set data
                        balance.token_info = tokenInfo
                        balance.chain_name = currentAsset.chain_name

                        break
                    }
                }

                // Format denom exponent
                let formatableToken = this.formatableTokens.find(el => el.token_name === balance.token_info.base.toUpperCase())

                // Set exponent for denom
                formatableToken
                    ? balance.exponent = formatableToken.exponent
                    : balance.exponent = balance.token_info.denom_units[1]?.exponent || 0

                // Get chain info
                balance.chain_info = chains.find(el => el.chain_name === balance.chain_name)

                // Get price
                balance.price = getPriceByDenom(balance.token_info.symbol)
            }

            // Clear balances
            this.balances = this.balances.filter(obj => obj.hasOwnProperty('exponent'))
        },


        // Set secret
        async setSecret(secret) {
            // Save in store
            this.secret = secret

            // Save in DB
            await DBaddData('wallet', [
                ['secret', secret]
            ])
        },


        // Set private key
        async setPrivateKey(privateKey) {
            // Save in store
            this.privateKey = privateKey

            // Save in DB
            await DBaddData('wallet', [
                ['privateKey', privateKey]
            ])
        },


        // Set current network
        async setCurrentNetwork(chain) {
            // Save in store
            this.currentNetwork = chain

            // Save in DB
            await DBaddData('wallet', [
                ['currentNetwork', chain]
            ])
        },


        // Create wallet
        async createWallet({ pinCode, walletName, isBiometricEnabled }) {
            // Generate HMAC key
            let hmacKey = await generateHMACKey()

            // Save in DB
            await DBaddData('wallet', [
                ['hmacKey', hmacKey],
                ['pin', await hashDataWithKey(pinCode.join(''), hmacKey)],
                ['name', walletName],
                ['isRegister', true],
                ['isBiometric', isBiometricEnabled],
                ['authErrorLimit', this.authErrorLimit],
                ['currentNetwork', 'cosmoshub'],
                ['currentCurrency', 'USD']
            ])

            // Set authorized status
            this.isAuthorized = true
        },


        // Get data from DB
        async getMultipleData(requestingData) {
            return await DBgetMultipleData('wallet', requestingData)
        },


        // Update auth error limit
        async updateUserAuthErrorLimit(limit) {
            await DBaddData('wallet', [['authErrorLimit', limit]])
        },


        // Update current currency
        async updateCurrentCurrency() {
            switch (this.currentCurrency) {
                case 'BTC':
                    // Set current currency
                    this.currentCurrency = 'ETH'

                    // Set current currency symbol
                    this.currentCurrencySymbol = 'ETH'

                    // Update in DB
                    DBaddData('wallet', [['currentCurrency', 'ETH']])

                    break;

                case 'ETH':
                    // Set current currency
                    this.currentCurrency = 'USD'

                    // Set current currency symbol
                    this.currentCurrencySymbol = '$'

                    // Update in DB
                    DBaddData('wallet', [['currentCurrency', 'USD']])

                    break;

                default:
                    // Set current currency
                    this.currentCurrency = 'BTC'

                    // Set current currency symbol
                    this.currentCurrencySymbol = 'BTC'

                    // Update in DB
                    DBaddData('wallet', [['currentCurrency', 'BTC']])

                    break;
            }
        },


        // Clear BD
        async clearAllData() {
            await DBclearData('wallet')
        }
    }
})