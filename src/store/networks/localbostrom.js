const network = {
    name: 'LocalBostrom',
    lcd_api: 'https://lcd.uni-3.cybernode.ai',
    rpc_api: 'https://rpc.uni-3.cybernode.ai',
    websocket_url: 'wss://rpc.uni-3.cybernode.ai:443/websocket',

    denom: 'boot',
    token_name: 'BOOT',
    chain_id: 'bostrom',
    prefix: 'bostrom',
    explorer_link: 'https://ping.pub/bostrom/tx/{tx_hash}',
    alias: 'localbostrom',
    exponent: 0,
    gas_adjustment: 1.3
}

export default network