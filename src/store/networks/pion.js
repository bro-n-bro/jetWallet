const network = {
    name: 'Pion',
    lcd_api: 'https://lcd.pion-1.bronbro.io',
    rpc_api: 'https://rpc.pion-1.bronbro.io',
    websocket_url: 'wss://rpc.pion-1.bronbro.io:443/websocket',

    logo: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-raw.svg',
    denom: 'untrn',
    token_name: 'NTRN',
    chain_id: 'pion-1',
    prefix: 'neutron',
    explorer_link: 'https://neutron.celat.one/pion-1/txs/{tx_hash}',
    alias: 'pion',
    chain_registry_alias: 'neutron',
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