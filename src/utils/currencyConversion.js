import { useGlobalStore } from '@/store'
import { formatTokenName } from './formatTokenName'
import { getPriceByDenom } from './getPriceByDenom'


// Currency conversion
export const currencyConversion = (amount, denom, currency) => {
    let store = useGlobalStore(),
        currentCurrencyPrice = 1

    currency
        ? currentCurrencyPrice = store.prices.find(el => el.symbol.toLowerCase() === formatTokenName(currency).toLowerCase()).price
        : currentCurrencyPrice = store.prices.find(el => el.symbol.toLowerCase() === formatTokenName(store.currentCurrency).toLowerCase()).price

    return amount * (getPriceByDenom(denom) / currentCurrencyPrice)
}


export default currencyConversion