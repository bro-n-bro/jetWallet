import { useGlobalStore } from '@/store'
import { formatTokenName } from './formatTokenName'
import { getPriceByDenom } from './getPriceByDenom'


// Currency conversion
export const currencyConversion = (amount, denom, currency) => {
    let store = useGlobalStore(),
        currentCurrencyPrice = 0

    currency
        ? currentCurrencyPrice = store.prices.find(el => el.symbol == formatTokenName(currency)).price
        : currentCurrencyPrice = store.prices.find(el => el.symbol == formatTokenName(store.currentCurrency)).price

    return amount * (getPriceByDenom(denom) / currentCurrencyPrice)
}


export default currencyConversion