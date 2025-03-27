import { defineStore } from 'pinia'
import { getAddress, denomTraces, hashDataWithKey, generateHMACKey, generateAESKey, getPriceByDenom, getExplorerLink, encryptData, decryptData } from '@/utils'
import { chains, assets } from 'chain-registry'
import { DBaddData, DBgetMultipleData, DBgetData, DBclearAllData, DBclearStore, DBcheckStoreName, DBdeleteData } from '@/utils/db'
import { useNotification } from '@kyvg/vue3-notification'
import sss from 'shamirs-secret-sharing'
import i18n from '@/locale'


// Networks
import cosmoshub from '@/store/networks/cosmoshub'
import osmosis from '@/store/networks/osmosis'
import bostrom from '@/store/networks/bostrom'
import dymension from '@/store/networks/dymension'
import gravitybridge from '@/store/networks/gravitybridge'
// import localbostrom from '@/store/networks/localbostrom'
import neutron from '@/store/networks/neutron'
// import mocha from '@/store/networks/mocha'
import omniflixhub from '@/store/networks/omniflix'
import pion from '@/store/networks/pion'
import stride from '@/store/networks/stride'


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
        tempDerivationPath: '',
        forcedUnlock: false,
        authErrorLimit: 4,
        confirmSeedsErrorLimit: 3,
        DBVersion: 1,

        currentWalletID: null,
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

        defaultWalletName: 'MyJetWallet',

        authTime: 60 * 60 * 1000,
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
            osmosis: Object.assign(osmosis, networksAdditionalOptions),
            bostrom: Object.assign(bostrom, networksAdditionalOptions),
            dymension: Object.assign(dymension, networksAdditionalOptions),
            gravitybridge: Object.assign(gravitybridge, networksAdditionalOptions),
            neutron: Object.assign(neutron, networksAdditionalOptions),
            // mocha: Object.assign(mocha, networksAdditionalOptions),
            // localbostrom: Object.assign(localbostrom, networksAdditionalOptions)
            omniflixhub: Object.assign(omniflixhub, networksAdditionalOptions),
            pion: Object.assign(pion, networksAdditionalOptions),
            stride: Object.assign(stride, networksAdditionalOptions),
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
                format_token_name: 'eth',
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
            try {
                // Get data from DB
                const DBCurrentWalletID = await DBgetData('global', 'currentWalletID')

                if (DBCurrentWalletID !== undefined) {
                    // Set data from DB
                    this.currentWalletID = DBCurrentWalletID
                }
            } catch (error) {
                // Throw error
                throw new Error(`getCurrentWalletID() failed: ${error.message}`)
            }
        },


        // Set current wallet ID
        async setCurrentWalletID(walletID = null) {
            try {
                if (this.currentWalletID !== walletID) {
                    // Save in DB
                    await DBaddData('global', [
                        ['currentWalletID', walletID]
                    ])

                    // Set data
                    this.currentWalletID = walletID
                }
            } catch (error) {
                // Throw error
                throw new Error(`setCurrentWalletID() failed: ${error.message}`)
            }
        },


        // Auth
        async auth() {
            try {
                await Promise.all([
                    // Сhange auth limit
                    this.updateUserAuthErrorLimit(this.authErrorLimit),

                    // Save in DB
                    DBaddData('global', [
                        ['authTimestamp', new Date().toISOString()]
                    ])
                ])

                // Set authorized status
                this.isAuthorized = true
            } catch (error) {
                // Throw error
                throw new Error(`auth() failed: ${error.message}`)
            }
        },


        // Init APP
        async initApp() {
            try {
                // Init status
                this.isInitializing = true
                this.isInitialized = false

                // Forced unlock
                this.forcedUnlock = false

                // Reset data
                this.currentAddress = ''

                // Get current wallet ID
                await this.getCurrentWalletID()

                // Get DB data
                const DBData = await DBgetMultipleData(`wallet${this.currentWalletID}`, [
                    'derivationPath',
                    'name',
                    'currentCurrency',
                    'currentNetwork',
                    'TxFeeCurrentLevel',
                    'TxFeeIsRemember'
                ])

                // Set data from DB
                this.currentWalletDerivationPath = DBData.derivationPath
                this.currentWalletName = DBData.name
                this.currentCurrency = DBData.currentCurrency
                this.TxFee.currentLevel = DBData.TxFeeCurrentLevel !== undefined ? DBData.TxFeeCurrentLevel : 'average'
                this.TxFee.isRemember = DBData.TxFeeIsRemember !== undefined ? DBData.TxFeeIsRemember : false


                // Set current network
                this.networks[DBData.currentNetwork]
                    ? this.currentNetwork = DBData.currentNetwork
                    : this.currentNetwork = 'cosmoshub'


                // Get current address / check cache
                const cacheCurrentAddress = await DBgetData(`wallet${this.currentWalletID}`, `${this.currentNetwork}_currentAddress`)

                if (cacheCurrentAddress === undefined) {
                    // Get address
                    const address = await getAddress()

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

                await Promise.all([
                    // Get currencies price / check cache
                    this.getCurrenciesPrice(),

                    // Get APR for current networke / check cache
                    this.getCurrentNetworkAPR(),

                    // Connect to websocket
                    this.connectWebsocket(),

                    // Is cosmos SDK version support unstaking cancel / check cache
                    this.isUnstakingCancelSupport()
                ])

                // Wait balances
                if (this.networks[this.currentNetwork].is_staking_available) {
                    await Promise.all([
                        this.getBalances(),
                        this.getStakedBalances()
                    ])
                } else {
                    await Promise.all([
                        this.getBalances()
                    ])
                }

                // Init status
                this.isInitializing = false
                this.isInitialized = true
            } catch(error) {
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

                // Throw error
                throw new Error(`init() failed: ${error.message}`)
            }
        },


        // Currencies price
        async getCurrenciesPrice() {
            try {
                // Get from DB
                const cachePrices = await DBgetData('global', 'prices')

                if (cachePrices === undefined || (new Date() - new Date(cachePrices.timestamp) > this.cacheTime)) {
                    // Send request
                    const response = await fetch('https://rpc.bronbro.io/price_feed_api/tokens/')

                    if (!response.ok) {
                        throw new Error('Failed to fetch currencies price. Status: ' + response.status)
                    }

                    const data = await response.json()

                    // Set data
                    this.prices = data

                    // Save in DB
                    await DBaddData('global', [
                        ['prices', { data, timestamp: new Date().toISOString() }]
                    ])
                } else{
                    // Set from cache
                    this.prices = cachePrices.data
                }
            } catch (error) {
                // Throw error
                throw new Error(`getCurrenciesPrice() failed: ${error.message}`)
            }
        },


        // Get APR for current network
        async getCurrentNetworkAPR() {
            try {
                // Get from DB
                const cacheAPR = await DBgetData(`wallet${this.currentWalletID}`, `${this.currentNetwork}_APR`)

                // Check
                if (cacheAPR === undefined || (new Date() - new Date(cacheAPR.timestamp) > this.cacheTime)) {
                    // Send request
                    const response = await fetch('https://rpc.bronbro.io/networks/')

                    if (!response.ok) {
                        throw new Error('Failed to fetch current network APR. Status: ' + response.status)
                    }

                    const data = await response.json()

                    // Find chain
                    const chain = data.infos.find(chain => chain.denom === (this.networks[this.currentNetwork].token_name).toLowerCase())

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
                } else {
                    // Set from cache
                    this.networks[this.currentNetwork].APR = cacheAPR.value
                }
            } catch (error) {
                // Throw error
                throw new Error(`getCurrentNetworkAPR() failed: ${error.message}`)
            }
        },


        // Get balances
        async getBalances(forceUpdate = false) {
            try {
                // Balances status
                this.isBalancesGot = false

                // Reset data
                this.balances = []

                // Get from DB
                const cacheBalances = await DBgetData(`wallet${this.currentWalletID}`, `${this.currentNetwork}_balances`)

                if (forceUpdate || cacheBalances === undefined || (new Date() - new Date(cacheBalances.timestamp) > this.cacheTime)) {
                    // Send request
                    const response = await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/bank/v1beta1/balances/${this.currentAddress}`)

                    if (!response.ok) {
                        throw new Error('Failed to fetch balances. Status: ' + response.status)
                    }

                    const data = await response.json()

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
                } else {
                    // Set from cache
                    this.balances = cacheBalances.value
                }

                // Balances status
                this.isBalancesGot = true
            } catch (error) {
                // Throw error
                throw new Error(`getBalances() failed: ${error.message}`)
            }
        },


        // Get staked balances
        async getStakedBalances(forceUpdate = false) {
            try {
                // Balances status
                this.isStakedBalancesGot = false

                // Reset data
                this.stakedBalances = []

                // Get from DB
                const cacheStakedBalances = await DBgetData(`wallet${this.currentWalletID}`, `${this.currentNetwork}_stakedBalances`)

                if (forceUpdate || cacheStakedBalances === undefined || (new Date() - new Date(cacheStakedBalances.timestamp) > this.cacheTime)) {
                    // Send request
                    const response = await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/delegations/${this.currentAddress}`)

                    if (!response.ok) {
                        throw new Error('Failed to fetch staked balances. Status: ' + response.status)
                    }

                    const data = await response.json()

                    if (data.delegation_responses) {
                        // Set data
                        this.stakedBalances = data.delegation_responses.filter(el => el.balance.amount > 0)

                        for (let item of this.stakedBalances) {
                            await Promise.all([
                                // Get balance info
                                this.getBalanceInfo(item.balance),

                                // Get validator info
                                this.getValidatorInfo(item, item.delegation.validator_address)
                            ])
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
                } else {
                    // Set from cache
                    this.stakedBalances = cacheStakedBalances.value
                }

                // Staked balances status
                this.isStakedBalancesGot = true
            } catch (error) {
                // Throw error
                throw new Error(`getStakedBalances() failed: ${error.message}`)
            }
        },


        // Get rewards
        async getRewards() {
            try {
                // Rewards status
                this.isRewardsGot = false

                // Reset data
                this.rewardsBalances = []

                // Send request
                const response = await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/distribution/v1beta1/delegators/${this.currentAddress}/rewards`)

                if (!response.ok) {
                    throw new Error('Failed to fetch rewards. Status: ' + response.status)
                }

                const data = await response.json()

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

                // Rewards status
                this.isRewardsGot = true
            } catch (error) {
                // Throw error
                throw new Error(`getRewards() failed: ${error.message}`)
            }
        },


        // Get unstaking balances
        async getUnstakingBalances () {
            try {
                // Unstaking balances status
                this.isUnstakingBalancesGot = false

                // Reset data
                this.unstakingBalances = []
                this.networks[this.currentNetwork].totalUnstakingTokens = 0

                // Send request
                const response = await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/delegators/${this.currentAddress}/unbonding_delegations`)

                if (!response.ok) {
                    throw new Error('Failed to fetch unstaking balances. Status: ' + response.status)
                }

                const data = await response.json()

                // Set data
                this.unstakingBalances = data.unbonding_responses

                for (let item of this.unstakingBalances) {
                    // Calc total unstaking tokens
                    item.entries.forEach(entry => this.networks[this.currentNetwork].totalUnstakingTokens += parseInt(entry.balance))

                    // Get validator info
                    await this.getValidatorInfo(item, item.validator_address)
                }

                // Unstaking balances status
                this.isUnstakingBalancesGot = true
            } catch (error) {
                // Throw error
                throw new Error(`getUnstakingBalances() failed: ${error.message}`)
            }
        },


        // Get redelegations
        async getRedelegations() {
            try {
                // Send request
                const response = await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/delegators/${this.currentAddress}/redelegations`)

                if (!response.ok) {
                    throw new Error('Failed to fetch redelegations. Status: ' + response.status)
                }

                const data = await response.json()

                // Set data
                this.redelegations = data.redelegation_responses
            } catch (error) {
                // Throw error
                throw new Error(`getRedelegations() failed: ${error.message}`)
            }
        },


        // Get balance info
        async getBalanceInfo(balance) {
            try {
                // Denom traces
                let denomTrace = await denomTraces(balance.denom, this.currentNetwork)

                // Old base denom
                balance.old_base_denom = denomTrace.base

                if (denomTrace.base === 'share') {
                    return
                }

                // Get (token info/chain name) from assets
                for (let asset of assets) {
                    // Exceptions
                    switch (denomTrace.base) {
                        case 'uusdc':
                            var currentAsset = assets.find(el => el.chain_name === 'noble')
                            break;

                        // case 'utia':
                        //     var currentAsset = assets.find(el => el.chain_name === 'celestiatestnet3')
                        //     break;

                        case 'udatom':
                            var currentAsset = assets.find(el => el.chain_name === 'cosmoshub')

                            base = 'uatom'
                            break;

                        case 'drop':
                            var currentAsset = assets.find(el => el.chain_name === 'celestia')

                            base = 'utia'
                            break;

                        case 'uboom':
                            var currentAsset = assets.find(el => el.chain_name === 'neutron')

                            base = 'untrn'
                            break;

                        default:
                            var currentAsset = asset
                            break;
                    }

                    // Token info
                    const tokenInfo = currentAsset.assets.find(token => token.base === denomTrace.base)

                    if (tokenInfo) {
                        // Set data
                        balance.token_info = tokenInfo
                        balance.chain_name = currentAsset.chain_name

                        break
                    }
                }

                if (balance.token_info) {
                    // Format denom exponent
                    const formatableToken = this.formatableTokens.find(el => el.token_name === balance.token_info.base.toUpperCase())

                    // Set exponent for denom
                    formatableToken
                        ? balance.exponent = formatableToken.exponent
                        : balance.exponent = balance.token_info.denom_units[1]?.exponent || 0

                    // Get chain info
                    balance.chain_info = chains.find(el => el.chain_name === balance.chain_name)

                    // Get price
                    balance.price = getPriceByDenom(balance.token_info.symbol)
                }
            } catch (error) {
                // Throw error
                throw new Error(`getBalanceInfo() failed: ${error.message}`)
            }
        },


        // Has native token
        hasNativeToken() {
            return this.balances.some(balance => balance.denom == this.networks[this.currentNetwork].denom)
        },


        // Get validator info
        async getValidatorInfo(item, validator_address) {
            try {
                // Send request
                const response = await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/validators/${validator_address}`)

                if (!response.ok) {
                    throw new Error('Failed to fetch validator info. Status: ' + response.status)
                }

                const data = await response.json()

                // Set data
                item.validator_info = data.validator
            } catch (error) {
                // Throw error
                throw new Error(`getValidatorInfo() failed: ${error.message}`)
            }
        },


        // Get secret from DB
        async getSecret(current = false) {
            try {
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
                const DBSecret = await DBgetMultipleData('secret', [
                    `wallet${walletID}_aesKey`,
                    `wallet${walletID}_secret`,
                    `wallet${walletID}_secretIV`
                ])

                // Get wallet secret part two
                const DBSecretPartTwo = await DBgetData(`wallet${walletID}`, 'secret')

                // Restore the original secret
                const restoredSecret = sss.combine([DBSecret[`wallet${walletID}_secret`], DBSecretPartTwo])

                // Convert back to Uint8Array
                const restoredUint8Array = new Uint8Array(restoredSecret)

                // Return memo
                return await decryptData(restoredUint8Array, DBSecret[`wallet${walletID}_secretIV`], DBSecret[`wallet${walletID}_aesKey`])
            } catch (error) {
                // Throw error
                throw new Error(`getSecret() failed: ${error.message}`)
            }
        },


        // Get private key from DB
        async getPrivateKey(current = false) {
            try {
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
                const DBSecret = await DBgetMultipleData('secret', [
                    `wallet${walletID}_aesKey`,
                    `wallet${walletID}_privateKey`,
                    `wallet${walletID}_secretIV`
                ])

                // Get wallet secret part two
                const DBSecretPartTwo = await DBgetData(`wallet${walletID}`, 'privateKey')

                // Restore the original secret
                const restoredSecret = sss.combine([DBSecret[`wallet${walletID}_privateKey`], DBSecretPartTwo])

                // Convert back to Uint8Array
                const restoredUint8Array = new Uint8Array(restoredSecret)

                // Return memo
                return await decryptData(restoredUint8Array, DBSecret[`wallet${walletID}_secretIV`], DBSecret[`wallet${walletID}_aesKey`])
            } catch (error) {
                // Throw error
                throw new Error(`getPrivateKey() failed: ${error.message}`)
            }
        },


        // Find missing wallet ID
        async findMissingId(DBWallets = null) {
            try {
                if (!DBWallets) {
                    // Get wallets
                    DBWallets = await DBgetData('global', 'wallets')
                }

                // Find the minimum missing value
                let missingId = 1

                if (DBWallets !== undefined) {
                    // Set IDs
                    let ids = DBWallets.map(el => el.id)

                    while (ids.includes(missingId)) {
                        missingId++
                    }
                }

                // Return value
                return missingId
            } catch (error) {
                // Throw error
                throw new Error(`findMissingId() failed: ${error.message}`)
            }
        },


        // Find next available wallet name
        async findNextAvailableWalletName(DBWallets = null) {
            try {
                let i = 2,
                    name = this.defaultWalletName + i

                if (!DBWallets) {
                    // Get wallets
                    DBWallets = await DBgetData('global', 'wallets')
                }

                if (DBWallets !== undefined) {
                    while (true) {
                        name = this.defaultWalletName + i

                        // Check if a wallet with this name exists
                        if (!DBWallets.some(el => el.name === name)) {
                            return name
                        }

                        i++
                    }
                }

                return name
            } catch (error) {
                // Throw error
                throw new Error(`findNextAvailableWalletName() failed: ${error.message}`)
            }
        },


        // Set secret
        async setSecret(secret) {
            try {
                // Generate AES key
                const aesKey = await generateAESKey()

                // Encryption
                const { ciphertext, iv } = await encryptData(secret, aesKey)

                // Split into 2 parts, both parts are required for recovery
                const shares = sss.split(Buffer.from(ciphertext), {
                    shares: 2,
                    threshold: 2
                })

                // Get wallet ID
                const walletID = await this.findMissingId()

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
            } catch (error) {
                // Throw error
                throw new Error(`setSecret() failed: ${error.message}`)
            }
        },


        // Set private key
        async setPrivateKey(privateKey) {
            try {
                // Generate AES key
                const aesKey = await generateAESKey()

                // Encryption
                const { ciphertext, iv } = await encryptData(privateKey, aesKey)

                // Split into 2 parts, both parts are required for recovery
                const shares = sss.split(Buffer.from(ciphertext), {
                    shares: 2,
                    threshold: 2
                })

                // Get wallet ID
                const walletID = await this.findMissingId()

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
            } catch (error) {
                // Throw error
                throw new Error(`setPrivateKey() failed: ${error.message}`)
            }
        },


        // Set current network
        async setCurrentNetwork(chain) {
            try {
                // Update current network
                this.currentNetwork = chain

                // Save in DB
                await DBaddData(`wallet${this.currentWalletID}`, [
                    ['currentNetwork', chain]
                ])
            } catch (error) {
                // Throw error
                throw new Error(`setCurrentNetwork() failed: ${error.message}`)
            }
        },


        // Create wallet
        async createWallet({ pinCode = null, walletName = null, isBiometricEnabled = null, isAdding = false, relativeWallet = null, derivationPath = this.tempDerivationPath }) {
            try {
                // Get all wallets
                let DBWallets = await DBgetData('global', 'wallets')

                if (DBWallets === undefined) {
                    // Set array type
                    DBWallets = []
                }

                // Get wallet ID
                const walletID = await this.findMissingId(DBWallets)

                // Available wallet name
                const availableWalletName = await this.findNextAvailableWalletName()

                // Update wallets
                DBWallets.push({
                    id: walletID,
                    name: walletName || availableWalletName
                })

                // Add data to wallet DB
                await DBaddData(`wallet${walletID}`, [
                    ['id', walletID],
                    ['name', walletName || availableWalletName],
                    ['currentNetwork', 'cosmoshub'],
                    ['currentCurrency', 'USD'],
                    ['derivationPath', derivationPath],
                    ['subWallets', JSON.parse(JSON.stringify([]))],
                    ['relativeWallet', relativeWallet]
                ])

                // Add data to global DB
                if (!isAdding) {
                    // Generate HMAC key
                    const hmacKey = await generateHMACKey()

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
            } catch (error) {
                // Throw error
                throw new Error(`createWallet() failed: ${error.message}`)
            }
        },


        // Create from exist wallet
        async createFromExistWallet() {
            try {
                // Get secret from DB
                const currentWalletSecret = await this.getSecret(true)

                // Get sub wallets of current wallet
                let subWallets = await DBgetData(`wallet${this.currentWalletID}`, 'subWallets')

                // Set secret
                await this.setSecret(currentWalletSecret)

                // Create wallet
                const newWalletID = await this.createWallet({
                    isAdding: true,
                    relativeWallet: this.currentWalletID,
                    derivationPath: this.defaultDerivationPath.replace(/\/\d+$/, `/${(subWallets.length + 1)}`)
                })

                // Add new subwallet
                subWallets.push(newWalletID)

                // Update current wallet
                await DBaddData(`wallet${this.currentWalletID}`, [
                    ['subWallets', JSON.parse(JSON.stringify(subWallets))]
                ])
            } catch (error) {
                // Throw error
                throw new Error(`createFromExistWallet() failed: ${error.message}`)
            }
        },


        // Get current wallet created by
        async getCurrentWalletCreatedBy() {
            try {
                // Get data from DB
                return await DBgetData(`wallet${this.currentWalletID}`, 'createdBy')
            } catch (error) {
                // Throw error
                throw new Error(`getCurrentWalletCreatedBy() failed: ${error.message}`)
            }
        },


        // Update auth error limit
        async updateUserAuthErrorLimit(limit) {
            try {
                await DBaddData('global', [
                    ['authErrorLimit', limit]
                ])
            } catch (error) {
                // Throw error
                throw new Error(`updateUserAuthErrorLimit() failed: ${error.message}`)
            }
        },


        // Update TxFee info
        async updateTxFeeInfo() {
            try {
                await DBaddData(`wallet${this.currentWalletID}`, [
                    ['TxFeeCurrentLevel', this.TxFee.currentLevel],
                    ['TxFeeIsRemember', this.TxFee.isRemember]
                ])
            } catch (error) {
                // Throw error
                throw new Error(`updateTxFeeInfo() failed: ${error.message}`)
            }
        },


        // Update current currency
        async updateCurrentCurrency() {
            try {
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
            } catch (error) {
                // Throw error
                throw new Error(`updateCurrentCurrency() failed: ${error.message}`)
            }
        },


        // Connect to websocket
        async connectWebsocket() {
            try {
                // Close previous connections
                Object.values(this.networks).forEach(network => {
                    if (network.websocket) {
                        // Remove onmessage listener
                        network.websocket.onopen = null
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
                    const parsedMsg = JSON.parse(msg.data)

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
            } catch (error) {
                // Throw error
                throw new Error(`connectWebsocket() failed: ${error.message}`)
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
            const chain = chains.find(el => el.chain_id === this.networks[this.currentNetwork].chain_id)

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
            try {
                // Event Tx with hash
                this.networks[this.currentNetwork].websocket.send(JSON.stringify({
                    jsonrpc: '2.0',
                    method: 'subscribe',
                    id: '2',
                    params: {
                        query: `tm.event='Tx' AND tx.hash='${(this.networks[this.currentNetwork].currentTxHash).toUpperCase()}'`
                    }
                }))
            } catch (error) {
                // Throw error
                throw new Error(`setListenerCurrentTx() failed: ${error.message}`)
            }
        },


        // Get Tx info
        async getTxInfo(txHash) {
            try {
                // Send request
                const response = await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/tx/v1beta1/txs/${txHash.toUpperCase()}`)

                if (!response.ok) {
                    throw new Error('Failed to fetch Tx info. Status: ' + response.status)
                }

                const data = await response.json()

                return data
            } catch (error) {
                // Throw error
                throw new Error(`getTxInfo() failed: ${error.message}`)
            }
        },


        // Check Tx result
        async checkTxResult() {
            // try {
                const txResult = await this.getTxInfo(this.networks[this.currentNetwork].currentTxHash)

                if (txResult.code !== 5) {
                    // Clean notifications
                    notification.notify({
                        group: 'default',
                        clean: true
                    })

                    if (txResult.tx_response?.code === 0) {
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
                        txResult.tx_response?.code
                            ? errorText = i18n.global.t(`message.notification_tx_error_${txResult.tx_response?.code}`)
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
            // } catch (error) {
            //     // Throw error
            //     throw new Error(`checkTxResult() failed: ${error.message}`)
            // }
        },


        // Update all balances
        async updateAllBalances() {
            try {
                let promises = []

                // Update balances
                if (this.isBalancesGot) {
                    promises.push(this.getBalances(true))
                }

                // Update staked balances
                if (this.isStakedBalancesGot) {
                    promises.push(this.getStakedBalances(true))
                }

                // Update rewards
                if (this.isRewardsGot) {
                    promises.push(this.getRewards())
                }

                // Update unstaking balances
                if (this.isUnstakingBalancesGot) {
                    promises.push(this.getUnstakingBalances())
                }

                // Wait balances
                await Promise.all(promises)
            } catch (error) {
                // Throw error
                throw new Error(`updateAllBalances() failed: ${error.message}`)
            }
        },


        // Reset Tx Fee
        async resetTxFee() {
            try {
                // Get DB data
                const DBData = await DBgetMultipleData(`wallet${this.currentWalletID}`, [
                    'TxFeeCurrentLevel',
                    'TxFeeIsRemember'
                ])

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
            } catch (error) {
                // Throw error
                throw new Error(`resetTxFee() failed: ${error.message}`)
            }
        },


        // Get network unbonding period
        async getNetworkUnbondingTime() {
            try {
                // Send request
                const response = await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/params`)

                if (!response.ok) {
                    throw new Error('Failed to fetch network unbonding time. Status: ' + response.status)
                }

                const data = await response.json()

                // Set data
                this.networks[this.currentNetwork].unbondingTime = parseInt(data.params.unbonding_time) / 86400
            } catch (error) {
                // Throw error
                throw new Error(`getNetworkUnbondingTime() failed: ${error.message}`)
            }
        },


        // Get all validators
        async getAllValidators() {
            try {
                // Send request
                const response = await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/validators?status=BOND_STATUS_BONDED&pagination.limit=200`)

                if (!response.ok) {
                    throw new Error('Failed to fetch all validatots. Status: ' + response.status)
                }

                const data = await response.json()

                return data.validators
            } catch (error) {
                // Throw error
                throw new Error(`getAllValidators() failed: ${error.message}`)
            }
        },


        // Get user validators
        async getUserValidators() {
            try {
                // Send request
                const response = await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/delegators/${this.currentAddress}/validators?status=BOND_STATUS_BONDED&pagination.limit=200`)

                if (!response.ok) {
                    throw new Error('Failed to fetch user validatots. Status: ' + response.status)
                }

                const data = await response.json()

                return data.validators
            } catch (error) {
                // Throw error
                throw new Error(`getUserValidators() failed: ${error.message}`)
            }
        },


        // Get total bonded tokens
        async getTotalBondedTokens() {
            try {
                // Send request
                const response = await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/pool`)

                if (!response.ok) {
                    throw new Error('Failed to fetch user validatots. Status: ' + response.status)
                }

                const data = await response.json()

                // Set data
                this.networks[this.currentNetwork].totalBondedTokens = parseInt(data.pool.bonded_tokens)
            } catch (error) {
                // Throw error
                throw new Error(`getUserValidators() failed: ${error.message}`)
            }
        },


        // Is unstaking cancel support
        async isUnstakingCancelSupport() {
            try {
                let result = false,
                    cacheIsUnstakingCancelSupport = await DBgetData(`wallet${this.currentWalletID}`, `${this.currentNetwork}_isUnstakingCancelSupport`)

                // Check
                if (cacheIsUnstakingCancelSupport === undefined || (new Date() - new Date(cacheIsUnstakingCancelSupport.timestamp) > this.cacheTime)) {
                    const response = await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/base/tendermint/v1beta1/node_info`)

                    if (!response.ok) {
                        throw new Error('Failed to fetch is unstaking cancel support. Status: ' + response.status)
                    }

                    const data = await response.json()

                    let cosmos_sdk_version = data.application_version.cosmos_sdk_version,
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

                    // Set data
                    this.networks[this.currentNetwork].isUnstakingCancelSupport = result
                } else {
                    // Set from cache
                    this.networks[this.currentNetwork].isUnstakingCancelSupport = cacheIsUnstakingCancelSupport.value
                }
            } catch (error) {
                // Throw error
                throw new Error(`isUnstakingCancelSupport() failed: ${error.message}`)
            }
        },


        // Get wallets
        async getWallets() {
            try {
                // Get from DB
                this.wallets = await DBgetData('global', 'wallets')
            } catch (error) {
                // Throw error
                throw new Error(`getWallets() failed: ${error.message}`)
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
                        ['name', currentWallet.name]
                    ])

                    // Update in state
                    if (this.currentWalletID === wallet.id) {
                        this.currentWalletName = currentWallet.name
                    }

                    // Get wallets
                    await this.getWallets()
                }
            } catch (error) {
                // Throw error
                throw new Error(`updateWallet() failed: ${error.message}`)
            }
        },


        // Remove wallet
        async removeWallet(wallet) {
            try {
                // Update wallets
                this.wallets = this.wallets.filter(el => el.id !== wallet.id)

                // Set default wallet if deleted current
                if (wallet.id === this.currentWalletID) {
                    // Set second wallet like default
                    await this.setCurrentWalletID(this.wallets[0].id)
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

                // Update wallets in DB
                await DBaddData('global', [
                    ['wallets', JSON.parse(JSON.stringify(this.wallets))]
                ])
            } catch (error) {
                // Throw error
                throw new Error(`removeWallet() failed: ${error.message}`)
            }
        },


        // Set age confirmed
        async setAgeConfirmed() {
            try {
                // Save in DB
                await DBaddData('global', [
                    ['ageConfirmed', true]
                ])
            } catch (error) {
                // Throw error
                throw new Error(`setAgeConfirmed() failed: ${error.message}`)
            }
        },


        // Get age confirmed
        async getAgeConfirmed() {
            try {
                // Get from DB
                const DBAgeConfirmed = await DBgetData('global', 'ageConfirmed')

                if (DBAgeConfirmed !== undefined) {
                    // Set result
                    this.isAgeConfirmed = DBAgeConfirmed
                }
            } catch (error) {
                // Throw error
                throw new Error(`getAgeConfirmed() failed: ${error.message}`)
            }
        },


        // Set user lock
        async setUserLock() {
            try {
                // Save in DB
                await DBaddData('global', [
                    ['isUserLock', true],
                    ['userLockTimestamp', new Date().toISOString()]
                ])
            } catch (error) {
                // Throw error
                throw new Error(`setUserLock() failed: ${error.message}`)
            }
        },


        // Set user unlock
        async setUserUnlock() {
            try {
                // Save in DB
                await DBaddData('global', [
                    ['isUserLock', false],
                    ['userLockTimestamp', '']
                ])

                // Сhange auth limit
                await this.updateUserAuthErrorLimit(this.authErrorLimit)
            } catch (error) {
                // Throw error
                throw new Error(`setUserLock() failed: ${error.message}`)
            }
        },


        // Set user channel
        async setUserChannel(channel) {
            try {
                // Get from DB
                let userChannels = await DBgetData('global', 'userChannels') || []

                // Add new channel
                userChannels.push(channel)

                // Save in DB
                await DBaddData('global', [
                    ['userChannels', JSON.parse(JSON.stringify(userChannels))]
                ])
            } catch (error) {
                // Throw error
                throw new Error(`setUserChannel() failed: ${error.message}`)
            }
        },


        // Update user channel
        async updateUserChannel(channel) {
            try {
                // Get from DB
                const userChannels = await DBgetData('global', 'userChannels') || []

                // Add new channel
                let oldChannel = userChannels.find(el => el.info.pretty_name === channel.old.info.pretty_name)

                // Update data
                oldChannel.info = channel.info
                oldChannel.channel_id = channel.channel_id

                // Save in DB
                await DBaddData('global', [
                    ['userChannels', JSON.parse(JSON.stringify(userChannels))]
                ])
            } catch (error) {
                // Throw error
                throw new Error(`updateUserChannel() failed: ${error.message}`)
            }
        },


        // Get all user channels
        async getAllUserChannels() {
            try {
                // Get from DB
                return await DBgetData('global', 'userChannels')
            } catch (error) {
                // Throw error
                throw new Error(`getAllUserChannels() failed: ${error.message}`)
            }
        },


        // Delete user channel
        async deleteUserChannel(chainName) {
            try {
                // Get from DB
                let userChannels = await DBgetData('global', 'userChannels')

                // Delete channel
                userChannels = userChannels.filter(el => el.info.pretty_name !== chainName)

                // Update in DB
                await DBaddData('global', [
                    ['userChannels', userChannels],
                ])
            } catch (error) {
                // Throw error
                throw new Error(`deleteUserChannel() failed: ${error.message}`)
            }
        },


        // Clear all data
        async clearAllData() {
            try {
                // Clear in DB
                await DBclearAllData()

                // Reset all state
                this.$reset()
            } catch (error) {
                // Throw error
                throw new Error(`clearAllData() failed: ${error.message}`)
            }
        }
    }
})