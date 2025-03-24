const network = {
    name: 'Bostrom',
    lcd_api: 'https://lcd.bostrom.bronbro.io',
    rpc_api: 'https://rpc.bostrom.bronbro.io',
    websocket_url: 'wss://rpc.bostrom.bronbro.io:443/websocket',

    denom: 'boot',
    token_name: 'BOOT',
    chain_id: 'bostrom',
    prefix: 'bostrom',
    explorer_link: 'https://ping.pub/bostrom/tx/{tx_hash}',
    alias: 'bostrom',
    chain_registry_alias: 'bostrom',
    exponent: 0,
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