const network = {
    name: 'LocalBostrom',
    lcd_api: 'https://lcd.uni-3.cybernode.ai',
    rpc_api: 'https://rpc.uni-3.cybernode.ai',
    websocket_url: 'wss://rpc.uni-3.cybernode.ai:443/websocket',

    denom: 'boot',
    token_name: 'BOOT',
    chain_id: 'bostrom',
    prefix: 'bostrom',
    alias: 'localbostrom',
    currentTxHash: null,
    exponent: 0,
    websocket: null
}

export default network