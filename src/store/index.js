import { defineStore } from 'pinia'
import { createSinger, denomTraces, hashDataWithKey, generateHMACKey, getPriceByDenom, getExplorerLink } from '@/utils'
import { chains, assets } from 'chain-registry'
import { DBaddData, DBclearData, DBgetMultipleData } from '@/utils/db'
import { useNotification } from '@kyvg/vue3-notification'
import i18n from '@/locale'


// Networks
import cosmoshub from '@/store/networks/cosmoshub'
import bostrom from '@/store/networks/bostrom'
import localbostrom from '@/store/networks/localbostrom'


// Networks additional options
const networksAdditionalOptions = {
    signingClient: {},
    websocket: null,
    currentTxHash: null,
    unbondingTime: 0,
    totalBondedTokens: 0,
    totalUnstakingTokens: 0
}


// Notifications
const notification = useNotification()


export const useGlobalStore = defineStore('global', {
    state: () => ({
        isInitialized: false,
        isBalancesGot: false,
        isStakedBalancesGot: false,
        isRewardsGot: false,
        isUnstakingBalancesGot: false,
        isAuthorized: false,

        authErrorLimit: 4,

        currentNetwork: '',
        currentAddress: '',
        currentCurrency: '',
        currentCurrencySymbol: '',
        stakeCurrentValidator: null,
        unstakeCurrentValidator: null,

        prices: [],
        balances: [],
        stakedBalances: [],
        rewardsBalances: [],
        unstakingBalances: [],

        secret: null,
        privateKey: null,
        notificationsPendingDelay: 2000,

        TxFee: {
            balance: {},
            currentLevel: 'average',
            userGasAmount: 0,
            gasAmount: 0,
            isRemember: false,
            isGasAdjustmentAuto: true,
            isEnough: false
        },

        networks: {
            cosmoshub: Object.assign(cosmoshub, networksAdditionalOptions),
            bostrom: Object.assign(bostrom, networksAdditionalOptions),
            localbostrom: Object.assign(localbostrom, networksAdditionalOptions)
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
            // Init status
            this.isInitialized = false

            // Get DB data
            let DBData = await this.getMultipleData(['secret', 'privateKey', 'currentCurrency', 'currentNetwork', 'TxFeeCurrentLevel', 'TxFeeIsRemember'])

            // Set data from DB
            this.secret = DBData.secret
            this.privateKey = DBData.privateKey
            this.currentCurrency = DBData.currentCurrency
            this.currentNetwork = DBData.currentNetwork
            this.TxFee.currentLevel = DBData.TxFeeCurrentLevel || 'average'
            this.TxFee.isRemember = DBData.TxFeeIsRemember || false

            // Create singer
            let signer = await createSinger()

            this.currentAddress = signer.address
            this.networks[this.currentNetwork].signingClient = signer.signingClient

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
            this.getCurrentNetworkAPR()

            // Connect to websocket
            this.connectWebsocket()

            // Wait balances
            Promise.all([await this.getBalances(), await this.getStakedBalances()]).then(() => {
                // Init status
                this.isInitialized = true
            })
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
            this.balances = await this.networks[this.currentNetwork].signingClient.getAllBalances(this.currentAddress)

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
                                await this.getValidatorInfo(item, item.delegation.validator_address)
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


        // Get unstaking balances
        async getUnstakingBalances () {
            // Unstaking balances status
            this.isUnstakingBalancesGot = false

            // Reset data
            this.unstakingBalances = []
            this.networks[this.currentNetwork].totalUnstakingTokens = 0

            // Request
            try {
                await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/delegators/${this.currentAddress}/unbonding_delegations`)
                    .then(response => response.json())
                    .then(async data => {
                        // Set data
                        this.unstakingBalances = data.unbonding_responses

                        for (let item of this.unstakingBalances) {
                            // Calc total unstaking tokens
                            this.networks[this.currentNetwork].totalUnstakingTokens += parseInt(item.entries[0].balance)

                            // Get validator info
                            await this.getValidatorInfo(item, item.validator_address)
                        }
                    })

                // Unstaking balances status
                this.isUnstakingBalancesGot = true
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
        async getValidatorInfo(item, validator_address) {
            try {
                await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/validators/${validator_address}`)
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
        setCurrentNetwork(chain) {
            // Save in DB
            DBaddData('wallet', [
                ['currentNetwork', chain]
            ])

            // Update current network
            this.currentNetwork = chain
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


        // Update TxFee info
        async updateTxFeeInfo() {
            await DBaddData('wallet', [
                ['TxFeeCurrentLevel', this.TxFee.currentLevel],
                ['TxFeeIsRemember', this.TxFee.isRemember]
            ])
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
            // Close previous connections
            Object.values(this.networks).forEach(network => {
                if (network.websocket) {
                    // Remove onmessage listener
                    network.websocket.onmessage = null

                    // Close connection
                    network.websocket.close()
                }
            })

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
            this.networks[this.currentNetwork].websocket.onmessage = async msg => {
                let parsedMsg = JSON.parse(msg.data)

                // If the result object is not empty
                if (Object.keys(parsedMsg.result).length) {
                    // User recipient
                    if (parsedMsg.id == '1') {
                        // Update all balances
                        this.updateAllBalances()

                        // Reset Tx Fee
                        this.resetTxFee()
                    }

                    // Transaction
                    if (parsedMsg.id == '2') {
                        // Check Tx result
                        let txResult = await this.checkTxResult(this.networks[this.currentNetwork].currentTxHash)

                        // Clean notifications
                        notification.notify({
                            group: 'default',
                            clean: true
                        })

                        if (txResult.tx_response.code == '0') {
                            // Show notification
                            notification.notify({
                                group: 'default',
                                speed: 200,
                                duration: 4000,
                                title: i18n.global.t('message.notification_tx_success_title'),
                                type: 'success',
                                data: {
                                    explorer_link: getExplorerLink(this.currentNetwork)
                                }
                            })
                        } else {
                            // Get error code
                            let errorText = ''

                            // Get error title
                            txResult.tx_response.code
                                ? errorText = i18n.global.t(`message.notification_tx_error_${txResult.tx_response.code}`)
                                : errorText = i18n.global.t('message.notification_tx_error_rejected')

                            // Show notification
                            notification.notify({
                                group: 'default',
                                speed: 200,
                                duration: 6000,
                                title: i18n.global.t('message.notification_tx_error_title'),
                                text: errorText,
                                type: 'error'
                            })
                        }

                        // Clear tx hash
                        this.networks[this.currentNetwork].currentTxHash = null

                        // Update all balances
                        this.updateAllBalances()

                        // Reset Tx Fee
                        this.resetTxFee()
                    }
                }
            }
        },


        // Set current balance
        TxFeeGetCurrentBalance(baseDenom) {
            // Set data
            this.TxFee.balance = this.balances.find(balance => balance.denom === baseDenom) || { amount: 0 }
        },


        // Get minimum gas price
        TxFeeSetGasPrices() {
            // Get chain info
            let chain = chains.find(el => el.chain_id === this.networks[this.currentNetwork].chain_id)

            // Set data
            this.TxFee.lowPrice = chain.fees.fee_tokens[0].fixed_min_gas_price ? chain.fees.fee_tokens[0].fixed_min_gas_price * 1.1 : chain.fees.fee_tokens[0].low_gas_price
            this.TxFee.averagePrice = this.TxFee.lowPrice * 1.15
            this.TxFee.highPrice = this.TxFee.lowPrice * 1.30
        },


        // Enough status
        TxFeeIsEnough() {
            // Set status
            if (this.isBalancesGot) {
                this.TxFee.isEnough = this.TxFee.balance.amount > this.TxFee.userGasAmount * this.TxFee[`${this.TxFee.currentLevel}Price`]
            }
        },


        // Set listener current tx
        setListenerCurrentTx() {
            // Event Tx with hash
            this.networks[this.currentNetwork].websocket.send(JSON.stringify({
                jsonrpc: '2.0',
                method: 'subscribe',
                id: '2',
                params: {
                    query: `tm.event='Tx' AND tx.hash='${(this.networks[this.currentNetwork].currentTxHash).toUpperCase()}'`
                }
            }))
        },


        // Check Tx result
        async checkTxResult(txHash) {
            try {
                return await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/tx/v1beta1/txs/${txHash.toUpperCase()}`).then(res => res.json())
            } catch (error) {
                console.error(error)
            }
        },


        // Update all balances
        updateAllBalances() {
            // Get balances
            if (this.isBalancesGot) {
                this.getBalances()
            }

            // Get staked balances
            if (this.isStakedBalancesGot) {
                this.getStakedBalances()
            }

            // Get rewards
            if (this.isRewardsGot) {
                this.getRewards()
            }
        },


        // Reset Tx Fee
        async resetTxFee() {
            // Get DB data
            let DBData = await this.getMultipleData(['TxFeeCurrentLevel', 'TxFeeIsRemember'])

            // Reset data
            this.TxFee = {
                balance: {},
                currentLevel: DBData.TxFeeCurrentLevel || 'average',
                userGasAmount: 0,
                gasAmount: 0,
                isRemember: DBData.TxFeeIsRemember || false,
                isGasAdjustmentAuto: true,
                isEnough: false
            }
        },


        // Get network unbonding period
        async getNetworkUnbondingTime() {
            try {
                await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/params`)
                    .then(res => res.json())
                    .then(response => {
                        // Set data
                        this.networks[this.currentNetwork].unbondingTime = parseInt(response.params.unbonding_time) / 86400
                    })
            } catch (error) {
                console.error(error)
            }
        },


        // Get all validators
        async getAllValidators() {
            try {
                return await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=200`).then(res => res.json())
            } catch (error) {
                console.error(error)
            }
        },


        // Get user validators
        async getUserValidators() {
            try {
                return await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/delegators/${this.currentAddress}/validators?status=BOND_STATUS_BONDED&pagination.limit=200`).then(res => res.json())
            } catch (error) {
                console.error(error)
            }
        },


        // Get total bonded tokens
        async getTotalBondedTokens() {
            try {
                await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/pool`)
                    .then(res => res.json())
                    .then(response => {
                        // Set data
                        this.networks[this.currentNetwork].totalBondedTokens = parseInt(response.pool.bonded_tokens)
                    })
            } catch (error) {
                console.error(error)
            }
        },


        // Clear BD
        async clearAllData() {
            await DBclearData('wallet')
        }
    }
})