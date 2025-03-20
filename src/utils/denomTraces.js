import { useGlobalStore } from '@/store'


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
            // Throw error
            throw new Error(`denomTraces() failed: ${error.message}`)
        }
    } else if (hash[0] == 'factory') {
        result.ingnoreTraces = true
        result.base_denom = hash[hash.length - 1]
    }

    return result
}


export default denomTraces