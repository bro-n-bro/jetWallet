// Hash data with key
export const hashDataWithKey = async (data, key) => {
    let encoder = new TextEncoder(),
        encodedData = encoder.encode(data)

    let cryptoKey = await crypto.subtle.importKey(
        'jwk',
        key,
        {
            name: 'HMAC',
            hash: { name: 'SHA-256' }
        },
        false,
        ['sign']
    )

    let signature = await crypto.subtle.sign('HMAC', cryptoKey, encodedData),
        hashArray = Array.from(new Uint8Array(signature)),
        hashHex = hashArray.map(byte => ('00' + byte.toString(16)).slice(-2)).join('')

    return hashHex
}


export default hashDataWithKey