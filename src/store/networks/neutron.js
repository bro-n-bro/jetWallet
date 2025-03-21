const network = {
    name: 'Neutron',
    lcd_api: 'https://lcd.neutron-1.bronbro.io',
    rpc_api: 'https://rpc.neutron-1.bronbro.io',
    websocket_url: 'wss://rpc.neutron-1.bronbro.io:443/websocket',

    denom: 'untrn',
    token_name: 'NTRN',
    chain_id: 'neutron-1',
    prefix: 'neutron',
    explorer_link: 'https://www.mintscan.io/neutron/tx/{tx_hash}',
    alias: 'neutron',
    exponent: 6,
    gas_adjustment: 1.6,
    address_length: 20,
    gas_amount_send: 300000,
    gas_amount_claim: 300000,
    gas_amount_stake: 250000,
    gas_amount_unstake: 250000,
    gas_amount_redelegate: 300000,
    is_staking_available: false
}

export default network