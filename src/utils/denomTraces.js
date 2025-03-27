import { useGlobalStore } from '@/store'


// Denom traces
export const denomTraces = async (string) => {
    let store = useGlobalStore(),
        result = {
            base: string
        },
        hash = string.split('/')


    if (hash[0] == 'ibc') {
        try {
            // Request
            let response = await fetch(`${store.networks[store.currentNetwork].lcd_api}/ibc/apps/transfer/v1/denom_traces/${hash[1]}`),
                data

            if (response.ok) {
                data = await response.json()

                // Set data
                result.base = data.denom_trace.base_denom
            } else if (response.status === 501 || response.status === 502) {
                response = await fetch(`${store.networks[store.currentNetwork].lcd_api}/ibc/apps/transfer/v1/denoms/${hash[1]}`)

                if (!response.ok) {
                    throw new Error('Failed to fetch denom. Status: ' + response.status);
                }

                data = await response.json()

                // Set data
                result.base = data.denom.base
            } else {
                throw new Error('Failed to fetch denom traces. Status: ' + response.status);
            }
        } catch (error) {
            // Throw error
            throw new Error(`denomTraces() failed: ${error.message}`)
        }
    } else if (hash[0] == 'factory') {
        result.ingnoreTraces = true
        result.base = hash[hash.length - 1]
    }

    return result
}


export default denomTraces