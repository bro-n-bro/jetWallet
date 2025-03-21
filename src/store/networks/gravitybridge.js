const network = {
    name: 'Gravity bridge',
    lcd_api: 'https://lcd.gravity-bridge-3.bronbro.io',
    rpc_api: 'https://rpc.gravity-bridge-3.bronbro.io',
    websocket_url: 'wss://rpc.gravity-bridge-3.bronbro.io:443/websocket',

    denom: 'ugraviton',
    token_name: 'GRAV',
    chain_id: 'gravity-bridge-3',
    prefix: 'gravity',
    explorer_link: 'https://www.mintscan.io/gravity-bridge/tx/{tx_hash}',
    alias: 'gravitybridge',
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