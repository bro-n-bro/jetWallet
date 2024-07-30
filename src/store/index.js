import { defineStore } from 'pinia'
import { createSinger, denomTraces, hashDataWithKey, generateHMACKey, getPriceByDenom } from '@/utils'
import { chains, assets } from 'chain-registry'
import { DBaddData, DBclearData, DBgetMultipleData } from '@/utils/db'


// Networks
import cosmoshub from '@/store/networks/cosmoshub'
import bostrom from '@/store/networks/bostrom'
import localbostrom from '@/store/networks/localbostrom'


export const useGlobalStore = defineStore('global', {
    state: () => ({
        isInitialized: false,
        isBalancesGot: false,
        isStakedBalancesGot: false,
        isRewardsGot: false,
        isAuthorized: false,

        authErrorLimit: 4,
        memo: 'cosmos_wallet',

        currentNetwork: '',
        currentAddress: '',
        currentCurrency: '',
        currentCurrencySymbol: '',

        prices: [],
        balances: [],
        stakedBalances: [],
        rewardsBalances: [],
        signingClient: {},

        secret: null,
        privateKey: null,

        networks: {
            cosmoshub,
            bostrom,
            localbostrom
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

            // Get currencies price
            await this.getCurrenciesPrice()

            // Get APR for current network
            await this.getCurrentNetworkAPR()

            // Connect to websocket
            this.connectWebsocket()

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


        // Get APR for current network
        async getCurrentNetworkAPR() {
            try {
                await fetch('https://rpc.bronbro.io/networks/')
                    .then(response => response.json())
                    .then(data => {
                        data.infos.find(chain => {
                            if (chain.denom == (this.networks[this.currentNetwork].token_name).toLowerCase()) {
                                // Set network APR
                                this.networks[this.currentNetwork].APR = chain.apr
                            }
                        })
                    })
            } catch (err) {
                console.log(err)
            }
        },


        // Get balances
        async getBalances() {
            // Balances status
            this.isBalancesGot = false

            // Request
            this.balances = await this.signingClient.getAllBalances(this.currentAddress)

            if (this.balances.length) {
                // Get balance info
                for (let balance of this.balances) {
                    await this.getBalanceInfo(balance)
                }

                // Clear balances
                this.balances = this.balances.filter(obj => obj.hasOwnProperty('exponent'))
            }

            // Balances status
            this.isBalancesGot = true
        },


        // Get staked balances
        async getStakedBalances() {
            // Balances status
            this.isStakedBalancesGot = false

            // Request
            try {
                await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/delegations/${this.currentAddress}`)
                    .then(response => response.json())
                    .then(async data => {
                        if (data.delegation_responses) {
                            // Set data
                            this.stakedBalances = data.delegation_responses

                            for (let item of this.stakedBalances) {
                                // Get balance info
                                await this.getBalanceInfo(item.balance)

                                // Get validator info
                                await this.getValidatorInfo(item)
                            }

                            // Clear balances
                            this.stakedBalances = this.stakedBalances.filter(item => item.balance.hasOwnProperty('exponent'))
                        }
                    })

                // Staked balances status
                this.isStakedBalancesGot = true
            } catch (error) {
                console.error(error)
            }
        },


        // Get rewards
        async getRewards() {
            // Rewards status
            this.isRewardsGot = false

            // Request
            try {
                await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/distribution/v1beta1/delegators/${this.currentAddress}/rewards`)
                    .then(response => response.json())
                    .then(async data => {
                        if (data.total.length) {
                            // Set data
                            this.rewardsBalances = data.total

                            for (let balance of this.rewardsBalances) {
                                // Get balance info
                                await this.getBalanceInfo(balance)
                            }

                            // Clear rewards
                            this.rewardsBalances = this.rewardsBalances.filter(balance => balance.hasOwnProperty('exponent'))

                            // Filter rewards
                            this.rewardsBalances = this.rewardsBalances.filter(balance => balance.chain_info.chain_id == this.networks[this.currentNetwork].chain_id)
                        } else {
                            // Clear data
                            this.rewardsBalances = []
                        }
                    })

                // Rewards status
                this.isRewardsGot = true
            } catch (error) {
                console.error(error)
            }
        },


        // Get balance info
        async getBalanceInfo(balance) {
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
        },


        // Get validator info
        async getValidatorInfo(item) {
            try {
                await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/validators/${item.delegation.validator_address}`)
                    .then(res => res.json())
                    .then(response => {
                        // Set data
                        item.validator_info = response.validator
                    })
            } catch (error) {
                console.error(error)
            }
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


        // Connect to websocket
        connectWebsocket() {
            // Connect
            this.networks[this.currentNetwork].websocket = new WebSocket(this.networks[this.currentNetwork].websocket_url)

            // Listening events
            this.networks[this.currentNetwork].websocket.onopen = () => {
                // Event Tx with sender
                // this.networks[this.currentNetwork].websocket.send(JSON.stringify({
                //     jsonrpc: '2.0',
                //     method: 'subscribe',
                //     id: '1',
                //     params: {
                //         query: `tm.event='Tx' AND transfer.sender='${this.currentAddress}'`
                //     }
                // }))

                // Event Tx with recipient
                this.networks[this.currentNetwork].websocket.send(JSON.stringify({
                    jsonrpc: '2.0',
                    method: 'subscribe',
                    id: '1',
                    params: {
                        query: `tm.event='Tx' AND transfer.recipient='${this.currentAddress}'`
                    }
                }))
            }


            // WSS message event
            this.networks[this.currentNetwork].websocket.onmessage = msg => {
                // If the result object is not empty
                if (Object.keys((JSON.parse(msg.data)).result).length) {
                    // Update balances
                    this.getBalances()
                }
            }
        },


        // Clear BD
        async clearAllData() {
            await DBclearData('wallet')
        }
    }
})