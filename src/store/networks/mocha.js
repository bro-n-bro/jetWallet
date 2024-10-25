const network = {
    name: 'Mocha Testnet',
    lcd_api: 'https://lcd-celestia-testnet-mocha.keplr.app',
    rpc_api: 'https://celestia-testnet-rpc.itrocket.net',
    websocket_url: 'wss://celestia-testnet-rpc.itrocket.net:443/websocket',

    logo: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet3/images/celestia.svg',
    denom: 'utia',
    token_name: 'TIA',
    chain_id: 'mocha-4',
    prefix: 'celestia',
    explorer_link: 'https://mintscan.io/celestia-testnet/txs/{tx_hash}',
    alias: 'mocha',
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