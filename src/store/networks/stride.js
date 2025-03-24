const network = {
    name: 'Stride',
    lcd_api: 'https://lcd.stride.bronbro.io',
    rpc_api: 'https://rpc.stride.bronbro.io',
    websocket_url: 'wss://rpc.stride.bronbro.io:443/websocket',

    denom: 'ustrd',
    token_name: 'STRD',
    chain_id: 'stride-1',
    prefix: 'stride',
    explorer_link: 'https://www.mintscan.io/stride/tx/{tx_hash}',
    alias: 'stride',
    chain_registry_alias: 'stride',
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