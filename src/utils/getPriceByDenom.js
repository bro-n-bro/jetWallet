import { useGlobalStore } from '@/store'


// Get price by denom
export const getPriceByDenom = denom => {
    const store = useGlobalStore(),
        price = store.prices.find(el => el.symbol.toLowerCase() === denom.toLowerCase())?.price || 0,
        formatableToken = store.formatableTokens.find(el => el.token_name == denom),
        formatPrice = formatableToken ? price * Math.pow(10, formatableToken.exponent) : price

    return formatPrice
}


export default getPriceByDenom