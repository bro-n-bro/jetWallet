import { formatTokenAmount } from './formatTokenAmount'
import { currencyConversion } from './currencyConversion'


// Calc token cost in current cucrrency
export const calcTokenCost = (denom, amount, exponent, currency = null) => {
    let formatAmount = formatTokenAmount(amount, exponent)

    return currencyConversion(formatAmount, denom, currency)
}


export default calcTokenCost