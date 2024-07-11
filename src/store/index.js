import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'
import { createSinger } from '@/utils'


// Networks
import cosmoshub from '@/store/networks/cosmoshub'
import osmosis from '@/store/networks/osmosis'
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
                osmosis,
                bostrom
            },
            formatableTokens = [
                {
                    tokenName: 'BOOT',
                    formatTokenName: 'MBOOT',
                    exponent: 6
                },
                {
                    tokenName: 'HYDROGEN',
                    formatTokenName: 'MHYDROGEN',
                    exponent: 6
                },
                {
                    tokenName: 'TOCYB',
                    formatTokenName: 'MTOCYB',
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

            console.log(balances.value)

            // Clear balances
            // balances.value = balances.value.filter(obj => obj.hasOwnProperty('exponent'))

            // Sort by "cost"
            // balances.value.sort((a, b) => {
            //     if (a.cost > b.cost) { return -1 }
            //     if (a.cost < b.cost) { return 1 }
            //     return 0
            // })
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
            getBalances
        }
    }
)