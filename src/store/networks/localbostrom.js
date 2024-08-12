const network = {
    name: 'LocalBostrom',
    lcd_api: 'https://lcd.uni-3.cybernode.ai',
    rpc_api: 'https://rpc.uni-3.cybernode.ai',
    websocket_url: 'wss://rpc.uni-3.cybernode.ai:443/websocket',
    websocket_origin: 'wss://rpc.uni-3.cybernode.ai',

    denom: 'boot',
    token_name: 'BOOT',
    chain_id: 'bostrom',
    prefix: 'bostrom',
    alias: 'localbostrom',
    explorer_link: 'https://www.mintscan.io/cosmos/tx/{tx_hash}',
    exponent: 0,
}

export default network