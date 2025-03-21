// Hash data with key
export const hashDataWithKey = async (data, key) => {
    const encoder = new TextEncoder(),
        encodedData = encoder.encode(data)

    try {
        const cryptoKey = await crypto.subtle.importKey(
            'jwk',
            key,
            {
                name: 'HMAC',
                hash: { name: 'SHA-256' }
            },
            false,
            ['sign']
        )

        const signature = await crypto.subtle.sign('HMAC', cryptoKey, encodedData),
            hashArray = Array.from(new Uint8Array(signature)),
            hashHex = hashArray.map(byte => ('00' + byte.toString(16)).slice(-2)).join('')

        return hashHex
    } catch (error) {
        // Throw error
        throw new Error(`hashDataWithKey() failed: ${error.message}`)
    }
}


export default hashDataWithKey