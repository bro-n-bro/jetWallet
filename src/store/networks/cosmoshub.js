const network = {
    name: 'Cosmos Hub',
    lcd_api: 'https://lcd.cosmoshub-4.bronbro.io',
    rpc_api: 'https://rpc.cosmoshub-4.bronbro.io',
    websocket_url: 'wss://rpc.cosmoshub-4.bronbro.io:443/websocket',
    websocket_origin: 'wss://rpc.cosmoshub-4.bronbro.io',

    denom: 'uatom',
    token_name: 'ATOM',
    chain_id: 'cosmoshub-4',
    prefix: 'cosmos',
    explorer_link: 'https://www.mintscan.io/cosmos/tx/{tx_hash}',
    alias: 'cosmoshub',
    exponent: 6,
    gas_adjustment: 1.6,
}

export default network