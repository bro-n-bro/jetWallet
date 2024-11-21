import { defineStore } from 'pinia'
import { getAddress, denomTraces, hashDataWithKey, generateHMACKey, generateAESKey, getPriceByDenom, getExplorerLink, encryptData, decryptData } from '@/utils'
import { chains, assets } from 'chain-registry'
import { DBaddData, DBgetMultipleData, DBgetData, DBclearAllData, DBclearStore, DBcheckStoreName, DBdeleteData } from '@/utils/db'
import { useNotification } from '@kyvg/vue3-notification'
import sss from 'shamirs-secret-sharing'
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


// Networks additional optionsupdateUserAuthErrorLimit
const networksAdditionalOptions = {
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

        defaultDerivationPath: "m/44'/118'/0'/0/0",
        showRedirectModal: false,
        forcedUnlock: false,
        authErrorLimit: 4,
        DBVersion: 1,

        currentWalletID: 1,
        currentWalletDerivationPath: null,
        currentWalletName: '',
        currentNetwork: '',
        currentAddress: '',
        currentCurrency: '',
        currentCurrencySymbol: '',
        IBCSendCurrentChain: null,
        stakeCurrentValidator: null,
        unstakeCurrentValidator: null,
        redelegateValidatorFrom: null,
        redelegateValidatorTo: null,

        wallets: [],
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

        defaultWalletName: 'MyJetWallet',

        cacheTime: 15 * 60 * 1000,
        userLockTime: 15 * 60 * 1000,
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
                format_token_name: 'usdt',
                exponent: 0
            },
            {
                token_name: 'BTC',
                format_token_name: 'wbtc',
                exponent: 0
            },
            {
                token_name: 'ETH',
                format_token_name: 'axleth',
                exponent: 0
            }
        ]
    }),


    actions: {
        // Get current DB version
        getCurrentDBVersion() {
            // Get data from DB
            let DBCurrentVersion = localStorage.getItem('DBVersion')

            if (!DBCurrentVersion) {
                // Save data in localStorage
                localStorage.setItem('DBVersion', this.DBVersion)
            } else {
                // Set data from localStorage
                this.DBVersion = DBCurrentVersion
            }
        },


        // Set new DB version
        setNewDBVersion() {
            // Increase by 1
            this.DBVersion++

            // Save data in localStorage
            localStorage.setItem('DBVersion', this.DBVersion)
        },


        // Get current wallet ID
        async getCurrentWalletID() {
            // Get data from DB
            let DBCurrentWalletID = await DBgetData('global', 'currentWalletID')

            if (DBCurrentWalletID !== undefined) {
                // Set data from DB
                this.currentWalletID = DBCurrentWalletID
            }
        },


        // Set current wallet ID
        async setCurrentWalletID(walletID = 1) {
            if (this.currentWalletID !== walletID) {
                // Save in DB
                await DBaddData('global', [
                    ['currentWalletID', walletID]
                ])

                // Set data
                this.currentWalletID = walletID
            }
        },


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
            let DBData = await DBgetMultipleData(`wallet${this.currentWalletID}`, ['derivationPath', 'name', 'currentCurrency', 'currentNetwork', 'TxFeeCurrentLevel', 'TxFeeIsRemember'])

            // Set data from DB
            this.currentWalletDerivationPath = DBData.derivationPath
            this.currentWalletName = DBData.name
            this.currentCurrency = DBData.currentCurrency
            this.TxFee.currentLevel = DBData.TxFeeCurrentLevel !== undefined ? DBData.TxFeeCurrentLevel : 'average'
            this.TxFee.isRemember = DBData.TxFeeIsRemember !== undefined ? DBData.TxFeeIsRemember : false

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
                // Get current address / check cache
                let cacheCurrentAddress = await DBgetData(`wallet${this.currentWalletID}`, `${this.currentNetwork}_currentAddress`)

                if (cacheCurrentAddress === undefined) {
                    // Get address
                    let address = await getAddress()

                    // Set current address
                    this.currentAddress = address

                    // Save in DB
                    await DBaddData(`wallet${this.currentWalletID}`, [
                        [`${this.currentNetwork}_currentAddress`, address]
                    ])
                } else {
                    // Set current address
                    this.currentAddress = cacheCurrentAddress
                }


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
                await this.getCurrenciesPrice()

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
        async getCurrenciesPrice() {
            // Get from DB
            let cachePrices = await DBgetData('global', 'prices')

            if (cachePrices === undefined || (new Date() - new Date(cachePrices.timestamp) > this.cacheTime)) {
                try {
                    // Send request
                    await fetch('https://rpc.bronbro.io/price_feed_api/tokens/')
                        .then(response => response.json())
                        .then(async data => {
                            // Set data
                            this.prices = data

                            // Save in DB
                            await DBaddData('global', [
                                ['prices', { data, timestamp: new Date().toISOString() }]
                            ])
                        })
                } catch (error) {
                    console.error(error)
                }
            } else{
                // Set from cache
                this.prices = cachePrices.data
            }
        },


        // Get APR for current network
        async getCurrentNetworkAPR() {
            // Get from DB
            let cacheAPR = await DBgetData(`wallet${this.currentWalletID}`, `${this.currentNetwork}_APR`)

            // Check
            if (cacheAPR === undefined || (new Date() - new Date(cacheAPR.timestamp) > this.cacheTime)) {
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
                                await DBaddData(`wallet${this.currentWalletID}`, [
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
                this.networks[this.currentNetwork].APR = cacheAPR.value
            }
        },


        // Get balances
        async getBalances(forceUpdate = false) {
            // Balances status
            this.isBalancesGot = false

            // Reset data
            this.balances = []

            // Get from DB
            let cacheBalances = await DBgetData(`wallet${this.currentWalletID}`, `${this.currentNetwork}_balances`)

            if (forceUpdate || cacheBalances === undefined || (new Date() - new Date(cacheBalances.timestamp) > this.cacheTime)) {
                // Send request
                try {
                    await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/bank/v1beta1/balances/${this.currentAddress}`)
                        .then(response => response.json())
                        .then(async data => {
                            if (data.balances.length) {
                                // Set data
                                this.balances = data.balances

                                for (let balance of this.balances) {
                                    // Get balance info
                                    await this.getBalanceInfo(balance)
                                }

                                // Clear balances
                                this.balances = this.balances.filter(obj => obj.hasOwnProperty('exponent'))

                                // Save in DB
                                await DBaddData(`wallet${this.currentWalletID}`, [
                                    [`${this.currentNetwork}_balances`, JSON.parse(JSON.stringify({
                                        value: this.balances,
                                        timestamp: new Date().toISOString()
                                    }))]
                                ])
                            }
                        })
                } catch (error) {
                    console.error(error)
                }
            } else {
                // Set from cache
                this.balances = cacheBalances.value
            }

            // Balances status
            this.isBalancesGot = true
        },


        // Get staked balances
        async getStakedBalances(forceUpdate = false) {
            // Balances status
            this.isStakedBalancesGot = false

            // Reset data
            this.stakedBalances = []

            // Get from DB
            let cacheStakedBalances = await DBgetData(`wallet${this.currentWalletID}`, `${this.currentNetwork}_stakedBalances`)

            if (forceUpdate || cacheStakedBalances === undefined || (new Date() - new Date(cacheStakedBalances.timestamp) > this.cacheTime)) {
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
                                await DBaddData(`wallet${this.currentWalletID}`, [
                                    [`${this.currentNetwork}_stakedBalances`, JSON.parse(JSON.stringify({
                                        value: this.stakedBalances,
                                        timestamp: new Date().toISOString()
                                    }))]
                                ])
                            }
                        })
                } catch (error) {
                    console.error(error)
                }
            } else {
                // Set from cache
                this.stakedBalances = cacheStakedBalances.value
            }

            // Staked balances status
            this.isStakedBalancesGot = true
        },


        // Get rewards
        async getRewards() {
            // Rewards status
            this.isRewardsGot = false

            // Reset data
            this.rewardsBalances = []

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
                        }
                    })
            } catch (error) {
                console.error(error)
            }

            // Rewards status
            this.isRewardsGot = true
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
            } catch (error) {
                console.error(error)
            }

            // Unstaking balances status
            this.isUnstakingBalancesGot = true
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
        async getSecret(current = false) {
            let DBWallets = null,
                walletID = 0

            if (!current) {
                // Get wallets
                DBWallets = await DBgetData('global', 'wallets')

                // Get wallet ID
                walletID = DBWallets !== undefined ? DBWallets.length + 1 : 1
            } else {
                walletID = this.currentWalletID
            }

            // Get from DB
            let DBSecret = await DBgetMultipleData('secret', [
                `wallet${walletID}_aesKey`,
                `wallet${walletID}_secret`,
                `wallet${walletID}_secretIV`
            ])

            // Get wallet secret part two
            let DBSecretPartTwo = await DBgetData(`wallet${walletID}`, 'secret')

            // Restore the original secret
            let restoredSecret = sss.combine([DBSecret[`wallet${walletID}_secret`], DBSecretPartTwo])

            // Convert back to Uint8Array
            let restoredUint8Array = new Uint8Array(restoredSecret)

            // Return memo
            return await decryptData(restoredUint8Array, DBSecret[`wallet${walletID}_secretIV`], DBSecret[`wallet${walletID}_aesKey`])
        },


        // Get private key from DB
        async getPrivateKey(current = false) {
            let DBWallets = null,
                walletID = 0

            if (!current) {
                // Get wallets
                DBWallets = await DBgetData('global', 'wallets')

                // Get wallet ID
                walletID = DBWallets !== undefined ? DBWallets.length + 1 : 1
            } else {
                walletID = this.currentWalletID
            }

            // Get from DB
            let DBSecret = await DBgetMultipleData('secret', [
                `wallet${walletID}_aesKey`,
                `wallet${walletID}_privateKey`,
                `wallet${walletID}_secretIV`
            ])

            // Get wallet secret part two
            let DBSecretPartTwo = await DBgetData(`wallet${walletID}`, 'privateKey')

            // Restore the original secret
            let restoredSecret = sss.combine([DBSecret[`wallet${walletID}_privateKey`], DBSecretPartTwo])

            // Convert back to Uint8Array
            let restoredUint8Array = new Uint8Array(restoredSecret)

            // Return memo
            return await decryptData(restoredUint8Array, DBSecret[`wallet${walletID}_secretIV`], DBSecret[`wallet${walletID}_aesKey`])
        },


        // Set secret
        async setSecret(secret) {
            // Generate AES key
            let aesKey = await generateAESKey()

            // Encryption
            let { ciphertext, iv } = await encryptData(secret, aesKey)

            // Split into 2 parts, both parts are required for recovery
            let shares = sss.split(Buffer.from(ciphertext), {
                shares: 2,
                threshold: 2
            })

            // Get wallets
            let DBWallets = await DBgetData('global', 'wallets')

            // Get wallet ID
            let walletID = DBWallets !== undefined ? DBWallets.length + 1 : 1

            // Save in DB
            await DBaddData('secret', [
                [`wallet${walletID}_aesKey`, aesKey],
                [`wallet${walletID}_secret`, shares[0]],
                [`wallet${walletID}_secretIV`, iv]
            ])

            // Check DB storeName
            await DBcheckStoreName(`wallet${walletID}`)

            // Save in DB
            await DBaddData(`wallet${walletID}`, [
                ['secret', shares[1]],
                ['createdBy', 'secret']
            ])
        },


        // Set private key
        async setPrivateKey(privateKey) {
            // Generate AES key
            let aesKey = await generateAESKey()

            // Encryption
            let { ciphertext, iv } = await encryptData(privateKey, aesKey)

            // Split into 2 parts, both parts are required for recovery
            let shares = sss.split(Buffer.from(ciphertext), {
                shares: 2,
                threshold: 2
            })

            // Get wallets
            let DBWallets = await DBgetData('global', 'wallets')

            // Get wallet ID
            let walletID = DBWallets !== undefined ? DBWallets.length + 1 : 1

            // Save in DB
            await DBaddData('secret', [
                [`wallet${walletID}_aesKey`, aesKey],
                [`wallet${walletID}_privateKey`, shares[0]],
                [`wallet${walletID}_secretIV`, iv]
            ])

            await DBaddData(`wallet${walletID}`, [
                ['privateKey', shares[1]],
                ['createdBy', 'privateKey']
            ])
        },


        // Set current network
        setCurrentNetwork(chain) {
            // Update current network
            this.currentNetwork = chain

            // Save in DB
            DBaddData(`wallet${this.currentWalletID}`, [
                ['currentNetwork', chain]
            ])
        },


        // Create wallet
        async createWallet({ pinCode = null, walletName = null, isBiometricEnabled = null, isAdding = false, relativeWallet = null, derivationPath = this.defaultDerivationPath }) {
            // Get all wallets
            let DBWallets = await DBgetData('global', 'wallets')

            // Get wallet ID
            let walletID = DBWallets !== undefined ? DBWallets.length + 1 : 1

            if (DBWallets === undefined) {
                // Set array type
                DBWallets = []
            }

            // Update wallets
            DBWallets.push({
                id: walletID,
                name: walletName || this.defaultWalletName + walletID
            })

            // Add data to wallet DB
            await DBaddData(`wallet${walletID}`, [
                ['id', walletID],
                ['name', walletName || this.defaultWalletName + walletID],
                ['currentNetwork', 'cosmoshub'],
                ['currentCurrency', 'USD'],
                ['derivationPath', derivationPath],
                ['subWallets', JSON.parse(JSON.stringify([]))],
                ['relativeWallet', relativeWallet]
            ])

            // Add data to global DB
            if (!isAdding) {
                // Generate HMAC key
                let hmacKey = await generateHMACKey()

                await DBaddData('global', [
                    ['isRegister', true],
                    ['currentWalletID', walletID],
                    ['hmacKey', hmacKey],
                    ['pin', await hashDataWithKey(pinCode.join(''), hmacKey)],
                    ['isBiometric', isBiometricEnabled],
                    ['authErrorLimit', this.authErrorLimit],
                    ['wallets', DBWallets]
                ])
            } else {
                await DBaddData('global', [
                    ['wallets', DBWallets]
                ])
            }

            // Set authorized status
            this.isAuthorized = true

            // Return wallet ID
            return walletID
        },


        // Create from exist wallet
        async createFromExistWallet() {
            // Get secret from DB
            let currentWalletSecret = await this.getSecret(true)

            // Get sub wallets of current wallet
            let subWallets = await DBgetData(`wallet${this.currentWalletID}`, 'subWallets')

            // Set secret
            await this.setSecret(currentWalletSecret)

            // Create wallet
            let newWalletID = await this.createWallet({
                isAdding: true,
                relativeWallet: this.currentWalletID,
                derivationPath: this.defaultDerivationPath.replace(/\/\d+$/, `/${(subWallets + 1)}`)
            })

            // Add new subwallet
            subWallets.push(newWalletID)

            // Update current wallet
            await DBaddData(`wallet${this.currentWalletID}`, [
                ['subWallets', JSON.parse(JSON.stringify(subWallets))]
            ])
        },


        // Get current wallet created by
        async getCurrentWalletCreatedBy() {
            // Get data from DB
            return await DBgetData(`wallet${this.currentWalletID}`, 'createdBy')
        },


        // Update auth error limit
        async updateUserAuthErrorLimit(limit) {
            await DBaddData('global', [
                ['authErrorLimit', limit]
            ])
        },


        // Update TxFee info
        async updateTxFeeInfo() {
            await DBaddData(`wallet${this.currentWalletID}`, [
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
                    DBaddData(`wallet${this.currentWalletID}`, [
                        ['currentCurrency', 'ETH']
                    ])

                    break;

                case 'ETH':
                    // Set current currency
                    this.currentCurrency = 'USD'

                    // Set current currency symbol
                    this.currentCurrencySymbol = '$'

                    // Update in DB
                    DBaddData(`wallet${this.currentWalletID}`, [
                        ['currentCurrency', 'USD']
                    ])

                    break;

                default:
                    // Set current currency
                    this.currentCurrency = 'BTC'

                    // Set current currency symbol
                    this.currentCurrencySymbol = 'BTC'

                    // Update in DB
                    DBaddData(`wallet${this.currentWalletID}`, [
                        ['currentCurrency', 'BTC']
                    ])

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
                var getBalances = await this.getBalances(true)
            }

            // Update staked balances
            if (this.isStakedBalancesGot) {
                var getStakedBalances = await this.getStakedBalances(true)
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
            let DBData = await DBgetMultipleData(`wallet${this.currentWalletID}`, ['TxFeeCurrentLevel', 'TxFeeIsRemember'])

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
                cacheIsUnstakingCancelSupport = await DBgetData(`wallet${this.currentWalletID}`, `${this.currentNetwork}_isUnstakingCancelSupport`)

            // Check
            if (cacheIsUnstakingCancelSupport === undefined || (new Date() - new Date(cacheIsUnstakingCancelSupport.timestamp) > this.cacheTime)) {
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
                    await DBaddData(`wallet${this.currentWalletID}`, [
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
                this.networks[this.currentNetwork].isUnstakingCancelSupport = cacheIsUnstakingCancelSupport.value
            }
        },


        // Get wallets
        async getWallets() {
            try {
                // Get from DB
                this.wallets = await DBgetData('global', 'wallets')
            } catch (error) {
                console.log(error)
            }
        },


        // Update wallet
        async updateWallet({ wallet, new_name }) {
            try {
                // Find wallet
                let currentWallet = this.wallets.find(el => el.id === wallet.id)

                // Update name
                if (currentWallet) {
                    currentWallet.name = new_name

                    // Update in DB
                    await DBaddData('global', [
                        ['wallets', JSON.parse(JSON.stringify(this.wallets))]
                    ])

                    await DBaddData(`wallet${this.currentWalletID}`, [
                        ['name', new_name]
                    ])

                    // Update in state
                    if (this.currentWalletID === wallet.id) {
                        this.currentWalletName = new_name
                    }

                    // Get wallets
                    await this.getWallets()
                }
            } catch (error) {
                console.log(error)
            }
        },


        // Remove wallet
        async removeWallet(wallet) {
            try {
                // Set default wallet if deleted current
                if (wallet.id === this.currentWalletID) {
                    await this.setCurrentWalletID()
                }

                // Cleare store in DB
                await DBclearStore(`wallet${wallet.id}`)

                // Remove in secret DB
                await DBdeleteData('secret', [
                    `wallet${wallet.id}_aesKey`,
                    `wallet${wallet.id}_privateKey`,
                    `wallet${wallet.id}_secret`,
                    `wallet${wallet.id}_secretIV`
                ])

                // Update wallets
                this.wallets = this.wallets.filter(el => el.id !== wallet.id)

                // Update wallets in DB
                await DBaddData('global', [
                    ['wallets', JSON.parse(JSON.stringify(this.wallets))]
                ])
            } catch (error) {
                console.log(error)
            }
        },


        // Set age confirmed
        async setAgeConfirmed() {
            // Save in DB
            await DBaddData('global', [
                ['ageConfirmed', true]
            ])
        },


        // Get age confirmed
        async getAgeConfirmed() {
            try {
                // Get from DB
                let DBAgeConfirmed = await DBgetData('global', 'ageConfirmed')

                if (DBAgeConfirmed !== undefined) {
                    // Set result
                    this.isAgeConfirmed = DBAgeConfirmed
                }
            } catch (error) {
                console.log(error)
            }
        },


        // Set user lock
        async setUserLock() {
            // Save in DB
            await DBaddData('global', [
                ['isUserLock', true],
                ['userLockTimestamp', new Date().toISOString()]
            ])
        },


        // Set user unlock
        async setUserUnlock() {
            // Save in DB
            await DBaddData('global', [
                ['isUserLock', false],
                ['userLockTimestamp', '']
            ])

            // Сhange auth limit
            await this.updateUserAuthErrorLimit(this.authErrorLimit)
        },


        // Clear all data
        async clearAllData() {
            try {
                // Clear in DB
                await DBclearAllData()

                // Reset all state
                this.$reset()
            } catch (error) {
                console.log(error)
            }
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