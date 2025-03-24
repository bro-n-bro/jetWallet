const network = {
    name: 'Cosmos Hub',
    lcd_api: 'https://lcd.cosmoshub-4.bronbro.io',
    rpc_api: 'https://rpc.cosmoshub-4.bronbro.io',
    websocket_url: 'wss://rpc.cosmoshub-4.bronbro.io:443/websocket',

    denom: 'uatom',
    token_name: 'ATOM',
    chain_id: 'cosmoshub-4',
    prefix: 'cosmos',
    explorer_link: 'https://www.mintscan.io/cosmos/tx/{tx_hash}',
    alias: 'cosmoshub',
    chain_registry_alias: 'cosmos',
    exponent: 6,
    gas_adjustment: 1.6,
    address_length: 20,
    gas_amount_send: 100000,
    gas_amount_claim: 1000000,
    gas_amount_stake: 500000,
    gas_amount_unstake: 500000,
    gas_amount_redelegate: 1000000,
    is_staking_available: true
}

export default network