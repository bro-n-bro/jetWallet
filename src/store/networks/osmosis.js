const network = {
    name: 'Osmosis',
    lcd_api: 'https://lcd.osmosis-1.bronbro.io',
    rpc_api: 'https://rpc.osmosis-1.bronbro.io',
    websocket_url: 'wss://rpc.osmosis-1.bronbro.io:443/websocket',

    denom: 'uosmo',
    token_name: 'OSMO',
    chain_id: 'osmosis-1',
    prefix: 'osmo',
    explorer_link: 'https://www.mintscan.io/osmosis/tx/{tx_hash}',
    alias: 'osmosis',
    chain_registry_alias: 'osmosis',
    exponent: 6,
    gas_adjustment: 1.3,
    address_length: 20,
    gas_amount_send: 100000,
    gas_amount_claim: 1000000,
    gas_amount_stake: 500000,
    gas_amount_unstake: 500000,
    gas_amount_redelegate: 1000000,
    is_staking_available: true
}

export default network