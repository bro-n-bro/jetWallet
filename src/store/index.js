import { defineStore } from 'pinia'
import { createSinger, denomTraces, hashDataWithKey, generateHMACKey, generateAESKey, getPriceByDenom, getExplorerLink, encryptData, decryptData } from '@/utils'
import { chains, assets } from 'chain-registry'
import { DBaddData, DBclearData, DBgetMultipleData } from '@/utils/db'
import { useNotification } from '@kyvg/vue3-notification'
import i18n from '@/locale'


// Networks
import cosmoshub from '@/store/networks/cosmoshub'
import bostrom from '@/store/networks/bostrom'
import neutron from '@/store/networks/neutron'
// import pion from '@/store/networks/pion'
// import mocha from '@/store/networks/mocha'
import omniflix from '@/store/networks/omniflix'
import dymension from '@/store/networks/dymension'
import stride from '@/store/networks/stride'
// import localbostrom from '@/store/networks/localbostrom'


// Networks additional options
const networksAdditionalOptions = {
    signingClient: {},
    websocket: null,
    currentTxHash: null,
    unbondingTime: 0,
    totalBondedTokens: 0,
    totalUnstakingTokens: 0,
    isUnstakingCancelSupport: false
}


// Notifications
const notification = useNotification()


export const useGlobalStore = defineStore('global', {
    state: () => ({
        isInitializing: false,
        isInitialized: false,
        isBalancesGot: false,
        isStakedBalancesGot: false,
        isRewardsGot: false,
        isUnstakingBalancesGot: false,
        isAuthorized: false,
        isAnyModalOpen: false,
        isAgeConfirmed: false,

        showRedirectModal: false,
        forcedUnlock: false,
        authErrorLimit: 4,

        currentNetwork: '',
        currentAddress: '',
        currentCurrency: '',
        currentCurrencySymbol: '',
        stakeCurrentValidator: null,
        unstakeCurrentValidator: null,
        redelegateValidatorFrom: null,
        redelegateValidatorTo: null,

        prices: [],
        balances: [],
        stakedBalances: [],
        rewardsBalances: [],
        unstakingBalances: [],
        redelegations: [],

        tgBotId: 7437812149,
        // tgUserId: 808958531,
        tgUserId: '',
        jetPackRequest: null,

        RTCPeer: null,
        RTCConnections: {},

        secret: null,
        secretIV: null,
        aesKey: null,
        privateKey: null,

        cacheTime: 15 * 60 * 1000,
        notificationsCollapsingDelay: 2000,

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
            neutron: Object.assign(neutron, networksAdditionalOptions),
            // pion: Object.assign(pion, networksAdditionalOptions),
            // mocha: Object.assign(mocha, networksAdditionalOptions),
            omniflix: Object.assign(omniflix, networksAdditionalOptions),
            dymension: Object.assign(dymension, networksAdditionalOptions),
            stride: Object.assign(stride, networksAdditionalOptions),
            // localbostrom: Object.assign(localbostrom, networksAdditionalOptions)
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
            this.isInitializing = true
            this.isInitialized = false

            // Forced unlock
            this.forcedUnlock = false

            // Reset data
            this.currentAddress = ''

            // Get DB data
            let DBData = await this.getMultipleData(['secret', 'secretIV', 'aesKey', 'privateKey', 'currentCurrency', 'currentNetwork', 'TxFeeCurrentLevel', 'TxFeeIsRemember', 'prices'])

            // Set data from DB
            this.secret = DBData.secret
            this.secretIV = DBData.secretIV
            this.aesKey = DBData.aesKey
            this.privateKey = DBData.privateKey
            this.currentCurrency = DBData.currentCurrency
            this.TxFee.currentLevel = DBData.TxFeeCurrentLevel || 'average'
            this.TxFee.isRemember = DBData.TxFeeIsRemember || false

            // Set current network
            if (this.jetPackRequest) {
                if (!this.jetPackRequest.data || !this.jetPackRequest.data?.chain_id) {
                    // Show notification - Param chain_id not passed
                    notification.notify({
                        group: 'default',
                        speed: 200,
                        duration: 1000,
                        title: i18n.global.t('message.notification_jp_chain_id_not_passed'),
                        type: 'error'
                    })

                    // Reset jetPack request
                    this.jetPackRequest = null

                    // Set data from DB
                    this.currentNetwork = DBData.currentNetwork
                } else {
                    // Checking for network availability
                    let chain = Object.values(this.networks).find(network => network.chain_id === this.jetPackRequest.data.chain_id)

                    if (chain) {
                        // Set data
                        this.setCurrentNetwork(chain.alias)
                    } else {
                        // Show notification - Network not supported
                        notification.notify({
                            group: 'default',
                            speed: 200,
                            duration: 1000,
                            title: i18n.global.t('message.notification_jp_chain_not_supported'),
                            type: 'error'
                        })

                        // Reset jetPack request
                        this.jetPackRequest = null

                        // Set data from DB
                        this.currentNetwork = DBData.currentNetwork
                    }
                }
            } else {
                // Set data from DB
                this.networks[DBData.currentNetwork]
                    ? this.currentNetwork = DBData.currentNetwork
                    : this.currentNetwork = 'cosmoshub'
            }

            try {
                // Create singer
                let signer = await createSinger()


                // Get current address / check cache
                let cacheCurrentAddress = await this.getMultipleData([`${this.currentNetwork}_currentAddress`])

                if (cacheCurrentAddress[`${this.currentNetwork}_currentAddress`] === undefined) {
                    // Set current address
                    this.currentAddress = signer.address

                    // Save in DB
                    await DBaddData('wallet', [
                        [`${this.currentNetwork}_currentAddress`, signer.address]
                    ])
                } else {
                    // Set current address
                    this.currentAddress = cacheCurrentAddress[`${this.currentNetwork}_currentAddress`]
                }


                this.networks[this.currentNetwork].signingClient = signer.signingClient
                this.networks[this.currentNetwork].signingCosmWasmClient = signer.signingCosmWasmClient


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


                // Get currencies price / check cache
                await this.getCurrenciesPrice(DBData.prices)

                // Get APR for current networke / check cache
                await this.getCurrentNetworkAPR()

                // Connect to websocket
                this.connectWebsocket()

                // Is cosmos SDK version support unstaking cancel / check cache
                await this.isUnstakingCancelSupport()


                // Wait balances
                if (this.networks[this.currentNetwork].is_staking_available) {
                    Promise.all([await this.getBalances(), await this.getStakedBalances()]).then(() => {
                        // Init status
                        this.isInitialized = true
                    })
                } else {
                    Promise.all([await this.getBalances()]).then(() => {
                        // Init status
                        this.isInitializing = false
                        this.isInitialized = true
                    })
                }
            } catch(error) {
                console.log(error)

                // Clean notifications
                notification.notify({
                    group: 'default',
                    clean: true
                })

                // Show notification
                notification.notify({
                    group: 'default',
                    speed: 200,
                    duration: -100,
                    title: i18n.global.t('message.notification_error_title'),
                    type: 'error',
                    data: {
                        isCollapsible: true
                    }
                })

                // Forced unlock
                this.forcedUnlock = true
            }
        },


        // Currencies price
        async getCurrenciesPrice(DBPrices) {
            if (DBPrices === undefined || (new Date() - new Date(DBPrices.timestamp) > this.cacheTime)) {
                try {
                    // Send request
                    await fetch('https://rpc.bronbro.io/price_feed_api/tokens/')
                        .then(response => response.json())
                        .then(async data => {
                            // Set data
                            this.prices = data

                            // Add timestamp
                            data.timestamp = new Date().toISOString()

                            // Save in DB
                            await DBaddData('wallet', [
                                ['prices', JSON.parse(JSON.stringify(data))]
                            ])
                        })
                } catch (error) {
                    console.error(error)
                }
            } else{
                // Set from cache
                this.prices = DBPrices
            }
        },


        // Get APR for current network
        async getCurrentNetworkAPR() {
            // Get from DB
            let cache = await this.getMultipleData([`${this.currentNetwork}_APR`])

            // Check
            if (cache[`${this.currentNetwork}_APR`] === undefined || (new Date() - new Date(cache[`${this.currentNetwork}_APR`].timestamp) > this.cacheTime)) {
                try {
                    // Send request
                    await fetch('https://rpc.bronbro.io/networks/')
                        .then(response => response.json())
                        .then(async data => {
                            // Find chain
                            let chain = data.infos.find(chain => chain.denom === (this.networks[this.currentNetwork].token_name).toLowerCase())

                            if (chain) {
                                // Set network APR
                                this.networks[this.currentNetwork].APR = chain.apr

                                // Save in DB
                                await DBaddData('wallet', [
                                    [`${this.currentNetwork}_APR`, JSON.parse(JSON.stringify({
                                        value: chain.apr,
                                        timestamp: new Date().toISOString()
                                    }))]
                                ])
                            }
                        })
                } catch (error) {
                    console.log(error)
                }
            } else {
                // Set from cache
                this.networks[this.currentNetwork].APR = cache[`${this.currentNetwork}_APR`].value
            }
        },


        // Get balances
        async getBalances() {
            // Balances status
            this.isBalancesGot = false

            // Get from DB
            let cache = await this.getMultipleData([`${this.currentNetwork}_balances`])

            if (cache[`${this.currentNetwork}_balances`] === undefined || (new Date() - new Date(cache[`${this.currentNetwork}_balances`].timestamp) > this.cacheTime)) {
                // Send request
                this.balances = await this.networks[this.currentNetwork].signingClient.getAllBalances(this.currentAddress)

                alert(this.balances.length)

                if (this.balances.length) {
                    // Get balance info
                    for (let balance of this.balances) {
                        await this.getBalanceInfo(balance)
                    }

                    // Clear balances
                    this.balances = this.balances.filter(obj => obj.hasOwnProperty('exponent'))

                    // Save in DB
                    await DBaddData('wallet', [
                        [`${this.currentNetwork}_balances`, JSON.parse(JSON.stringify({
                            value: this.balances,
                            timestamp: new Date().toISOString()
                        }))]
                    ])
                }
            } else {
                // Set from cache
                this.balances = cache[`${this.currentNetwork}_balances`].value
            }

            // Balances status
            this.isBalancesGot = true
        },


        // Get staked balances
        async getStakedBalances() {
            // Balances status
            this.isStakedBalancesGot = false

            // Get from DB
            let cache = await this.getMultipleData([`${this.currentNetwork}_stakedBalances`])

            if (cache[`${this.currentNetwork}_stakedBalances`] === undefined || (new Date() - new Date(cache[`${this.currentNetwork}_stakedBalances`].timestamp) > this.cacheTime)) {
                // Send request
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

                                // Save in DB
                                await DBaddData('wallet', [
                                    [`${this.currentNetwork}_stakedBalances`, JSON.parse(JSON.stringify({
                                        value: this.stakedBalances,
                                        timestamp: new Date().toISOString()
                                    }))]
                                ])

                                // Staked balances status
                                this.isStakedBalancesGot = true
                            }
                        })
                } catch (error) {
                    console.error(error)
                }
            } else {
                // Set from cache
                this.stakedBalances = cache[`${this.currentNetwork}_stakedBalances`].value

                // Staked balances status
                this.isStakedBalancesGot = true
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

                        // Rewards status
                        this.isRewardsGot = true
                    })
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
                            item.entries.forEach(entry => this.networks[this.currentNetwork].totalUnstakingTokens += parseInt(entry.balance))

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


        // Get redelegations
        async getRedelegations() {
            // Request
            try {
                await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/delegators/${this.currentAddress}/redelegations`)
                    .then(response => response.json())
                    .then(async data => {
                        // Set data
                        this.redelegations = data.redelegation_responses
                    })
            } catch (error) {
                console.error(error)
            }
        },


        // Get balance info
        async getBalanceInfo(balance) {
            // Denom traces
            let { base_denom } = await denomTraces(balance.denom, this.currentNetwork)

            alert(base_denom)

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

            if (balance.token_info) {
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
        },


        // Has native token
        hasNativeToken() {
            return this.balances.some(balance => balance.denom == this.networks[this.currentNetwork].denom)
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


        // Get secret from DB
        async getSecret() {
            // Get from DB
            let DBData = await this.getMultipleData(['secret', 'secretIV', 'aesKey'])

            // Save in store
            this.secret = DBData.secret
            this.secretIV = DBData.secretIV
            this.aesKey = DBData.aesKey

            // Return memo
            return await decryptData(this.secret, this.secretIV, this.aesKey)
        },


        // Set secret
        async setSecret(secret) {
            // Generate AES key
            let aesKey = await generateAESKey()

            // Encryption
            let { ciphertext, iv } = await encryptData(secret, aesKey)

            // Save in store
            this.secret = ciphertext
            this.secretIV = iv
            this.aesKey = aesKey

            // Save in DB
            await DBaddData('wallet', [
                ['aesKey', aesKey],
                ['secret', ciphertext],
                ['secretIV', iv]
            ])
        },


        // Set private key
        async setPrivateKey(privateKey) {
            // Generate AES key
            let aesKey = await generateAESKey()

            // Encryption
            let { ciphertext, iv } = await encryptData(privateKey, aesKey)

            // Save in store
            this.privateKey = ciphertext
            this.secretIV = iv
            this.aesKey = aesKey

            // Save in DB
            await DBaddData('wallet', [
                ['aesKey', aesKey],
                ['privateKey', ciphertext],
                ['secretIV', iv]
            ])
        },


        // Set current network
        setCurrentNetwork(chain) {
            // Update current network
            this.currentNetwork = chain

            // Save in DB
            DBaddData('wallet', [['currentNetwork', chain]])
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
                if (parsedMsg.result && Object.keys(parsedMsg.result).length > 0) {
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
                        this.checkTxResult()
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


        // Get Tx info
        async getTxInfo(txHash) {
            try {
                // Request
                return await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/tx/v1beta1/txs/${txHash.toUpperCase()}`).then(res => res.json())
            } catch (error) {
                console.error(error)
            }
        },


        // Check Tx result
        async checkTxResult() {
            let txResult = await this.getTxInfo(this.networks[this.currentNetwork].currentTxHash)

            if (txResult.code != 5) {
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

                    // Send response
                    if (this.jetPackRequest) {
                        const connection = this.RTCConnections[this.jetPackRequest.data.peer_id]

                        if (connection) {
                            connection.send({
                                type: 'tx',
                                requestId: this.jetPackRequest.data.request_id,
                                status: 'success',
                                hash: this.networks[this.currentNetwork].currentTxHash
                            })
                        }
                    }
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

                    // Send response
                    if (this.jetPackRequest) {
                        const connection = this.RTCConnections[this.jetPackRequest.data.peer_id]

                        if (connection) {
                            connection.send({
                                type: 'error',
                                requestId: this.jetPackRequest.data.request_id,
                                status: 'error',
                                hash: this.networks[this.currentNetwork].currentTxHash,
                                message: errorText
                            })
                        }
                    }
                }

                // Clear tx hash
                this.networks[this.currentNetwork].currentTxHash = null

                // Show redirect modal
                if (this.jetPackRequest) {
                    this.showRedirectModal = true
                }

                // Reset jetPack request
                this.jetPackRequest = null

                // Update all balances
                this.updateAllBalances()

                // Reset Tx Fee
                this.resetTxFee()
            }
        },


        // Update all balances
        async updateAllBalances() {
            // Update balances
            if (this.isBalancesGot) {
                var getBalances = await this.getBalances()
            }

            // Update staked balances
            if (this.isStakedBalancesGot) {
                var getStakedBalances = await this.getStakedBalances()
            }

            // Wait balances
            Promise.all([getBalances, getStakedBalances]).then(() => {
                // Update rewards
                if (this.isRewardsGot) {
                    this.getRewards()
                }

                // Update unstaking balances
                if (this.isUnstakingBalancesGot) {
                    this.getUnstakingBalances()
                }
            })
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


        // Is unstaking cancel support
        async isUnstakingCancelSupport() {
            let result = false,
                cacheisUnstakingCancelSupport = await this.getMultipleData([`${this.currentNetwork}_isUnstakingCancelSupport`])

            // Check
            if (cacheisUnstakingCancelSupport[this.currentNetwork + '_isUnstakingCancelSupport'] === undefined || (new Date() - new Date(cacheisUnstakingCancelSupport[this.currentNetwork + '_isUnstakingCancelSupport'].timestamp) > this.cacheTime)) {
                try {
                    let response = await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/base/tendermint/v1beta1/node_info`),
                        data = await response.json(),
                        cosmos_sdk_version = data.application_version.cosmos_sdk_version,
                        min_version = 'v0.46'

                    // Parsing versions
                    let cosmos_sdk_version_parsed = cosmos_sdk_version.replace('v', '').split('-')[0].split('.').map(Number),
                        min_version_parsed = min_version.replace('v', '').split('-')[0].split('.').map(Number)

                    // Fill in the missing with zeros
                    while (cosmos_sdk_version_parsed.length < 3) cosmos_sdk_version_parsed.push(0)
                    while (min_version_parsed.length < 3) min_version_parsed.push(0)

                    // Compare versions
                    for (let i = 0; i < 3; i++) {
                        if (cosmos_sdk_version_parsed[i] > min_version_parsed[i]) result = true // Version above minimum
                        if (cosmos_sdk_version_parsed[i] < min_version_parsed[i]) result = false // Version is less than minimum
                    }

                    // Save in DB
                    await DBaddData('wallet', [
                        [this.currentNetwork + '_isUnstakingCancelSupport', JSON.parse(JSON.stringify({
                            value: result,
                            timestamp: new Date().toISOString()
                        }))]
                    ])
                } catch (error) {
                    console.error(error)
                }

                // Set data
                this.networks[this.currentNetwork].isUnstakingCancelSupport = result
            } else {
                // Set from cache
                this.networks[this.currentNetwork].isUnstakingCancelSupport = cacheisUnstakingCancelSupport[this.currentNetwork + '_isUnstakingCancelSupport'].value
            }
        },


        // Set age confirmed
        async setAgeConfirmed() {
            await DBaddData('wallet', [['ageConfirmed', true]])
        },


        // Get age confirmed
        async getAgeConfirmed() {
            try {
                // Get from DB
                let result = await this.getMultipleData(['ageConfirmed'])

                if (result.ageConfirmed) {
                    // Set result
                    this.isAgeConfirmed = result.ageConfirmed
                }
            } catch (error) {
                console.log(error)
            }
        },


        // Clear BD
        async clearAllData() {
            await DBclearData('wallet')
        },


        // JetPack Switch network
        jetPackSwitchNetwork() {
            return new Promise((resolve, reject) => {
                // Get chain info
                let chain = Object.values(this.networks).find(network => network.chain_id === this.jetPackRequest.data.chain_id)

                if (chain) {
                    // Set current network
                    this.setCurrentNetwork(chain.alias)

                    // Resolve
                    resolve()
                } else {
                    // Reject
                    reject()
                }
            })
        }
    }
})