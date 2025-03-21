import { fromBech32, toBech32 } from '@cosmjs/encoding'


// Convert address
export const convertAddress = (address, prefix) => {
    // Decoding the address in Bech32
    const { data } = fromBech32(address)

    // Encode the address with a new prefix
    return toBech32(prefix, data)
}


export default convertAddress