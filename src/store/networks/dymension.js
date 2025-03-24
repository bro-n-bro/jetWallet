const network = {
    name: 'Dymension Hub',
    lcd_api: 'https://lcd.dymension.bronbro.io',
    rpc_api: 'https://rpc.dymension.bronbro.io',
    websocket_url: 'wss://rpc.dymension.bronbro.io:443/websocket',

    denom: 'adym',
    token_name: 'DYM',
    chain_id: 'dymension_1100-1',
    prefix: 'dym',
    explorer_link: 'https://www.mintscan.io/dymension/tx/{tx_hash}',
    alias: 'dymension',
    chain_registry_alias: 'dymension',
    exponent: 6,
    gas_adjustment: 1.3,
    address_length: 20,
    gas_amount_send: 300000,
    gas_amount_claim: 300000,
    gas_amount_stake: 250000,
    gas_amount_unstake: 250000,
    gas_amount_redelegate: 300000,
    is_staking_available: true
}

export default network