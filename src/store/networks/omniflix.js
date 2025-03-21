const network = {
    name: 'OmniFlix',
    lcd_api: 'https://lcd.omniflix.bronbro.io',
    rpc_api: 'https://rpc.omniflix.bronbro.io',
    websocket_url: 'wss://rpc.omniflix.bronbro.io:443/websocket',

    denom: 'uflix',
    token_name: 'FLIX',
    chain_id: 'omniflixhub-1',
    prefix: 'omniflix',
    explorer_link: 'https://www.mintscan.io/omniflix/tx/{tx_hash}',
    alias: 'omniflixhub',
    exponent: 6,
    gas_adjustment: 1.6,
    address_length: 20,
    gas_amount_send: 100000,
    gas_amount_claim: 300000,
    gas_amount_stake: 250000,
    gas_amount_unstake: 250000,
    gas_amount_redelegate: 300000,
    is_staking_available: true
}

export default network