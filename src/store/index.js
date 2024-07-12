import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'
import { createSinger, denomTraces, formatTokenAmount } from '@/utils'
import { chains, assets, ibc } from 'chain-registry'


// Networks
import cosmoshub from '@/store/networks/cosmoshub'
import bostrom from '@/store/networks/bostrom'


export const useGlobalState = createGlobalState(
    () => {
        // State
        const isAuthorized = ref(false),
            currentNetwork = ref(cosmoshub),
            authErrorLimit = 4,
            prices = ref([]),
            balances = ref([]),
            stargateClient = ref({}),
            currentAddress = ref(''),
            networks = {
                cosmoshub,
                bostrom
            },
            formatableTokens = [
                {
                    token_name: 'BOOT',
                    format_token_name: 'MBOOT',
                    exponent: 6
                },
                {
                    token_name: 'HYDROGEN',
                    format_token_name: 'MHYDROGEN',
                    exponent: 6
                },
                {
                    token_name: 'TOCYB',
                    format_token_name: 'MTOCYB',
                    exponent: 6
                }
            ]


        // Init APP
        async function initApp() {
            // Create singer
            ({ address: currentAddress.value, signingClient: stargateClient.value } = await createSinger(currentNetwork.value))

            // Get currencies price
            await getCurrenciesPrice()

            // Get balances
            await getBalances()
        }


        // Currencies price
        async function getCurrenciesPrice() {
            try {
                await fetch('https://rpc.bronbro.io/price_feed_api/tokens/')
                    .then(response => response.json())
                    .then(data => prices.value = data)
            } catch (error) {
                console.error(error)
            }
        }


        // Get balances
        async function getBalances() {
            // Request
            balances.value = await stargateClient.value.getAllBalances(currentAddress.value)

            for (let balance of balances.value) {
                // Denom traces
                let { base_denom } = await denomTraces(balance.denom, currentNetwork.value)

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
                let formatableToken = formatableTokens.find(el => el.token_name === balance.token_info.base.toUpperCase())

                // Set exponent for denom
                formatableToken
                    ? balance.exponent = formatableToken.exponent
                    : balance.exponent = balance.token_info.denom_units[1]?.exponent || 0

                // Get chain info
                balance.chain_info = chains.find(el => el.chain_name === balance.chain_name)

                // Get price
                balance.price = getPriceByDenom(balance.token_info.symbol)

                // Set cost
                formatableToken
                    ? balance.cost = balance.amount * balance.price
                    : balance.cost = formatTokenAmount(balance.amount, balance.exponent) * balance.price
            }

            // Clear balances
            balances.value = balances.value.filter(obj => obj.hasOwnProperty('exponent'))

            // Sort by "cost"
            balances.value.sort((a, b) => {
                if (a.cost > b.cost) { return -1 }
                if (a.cost < b.cost) { return 1 }
                return 0
            })
        }


        // Get price by denom
        function getPriceByDenom(denom) {
            let price = 0

            if (denom) {
                let item = prices.value.find(el => el.symbol === denom)

                if (item) {
                    price = item.price
                }
            }

            return price
        }


        return {
            isAuthorized,
            currentNetwork,
            authErrorLimit,
            prices,
            balances,
            stargateClient,
            currentAddress,
            networks,
            formatableTokens,

            initApp,
            getCurrenciesPrice,
            getBalances,
            getPriceByDenom
        }
    }
)