const network = {
    name: 'Bostrom',
    lcd_api: 'https://lcd.bostrom.bronbro.io',
    rpc_api: 'https://rpc.bostrom.bronbro.io',
    websocket_url: 'wss://rpc.bostrom.bronbro.io:443/websocket',
    websocket_origin: 'wss://rpc.bostrom.bronbro.io',

    denom: 'boot',
    token_name: 'BOOT',
    chain_id: 'bostrom',
    prefix: 'bostrom',
    explorer_link: 'https://www.mintscan.io/cosmos/tx/{tx_hash}',
    alias: 'bostrom',
    exponent: 0,
    gas_adjustment: 1.3
}

export default network