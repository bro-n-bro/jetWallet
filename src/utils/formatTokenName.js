import { useGlobalStore } from '@/store'


// Format token name
export const formatTokenName = tokenName => {
    let store = useGlobalStore(),
        formatableToken = store.formatableTokens.find(el => el.token_name === tokenName),
        formatTokenName = formatableToken ? formatableToken.format_token_name : tokenName

    return formatTokenName
}


export default formatTokenName