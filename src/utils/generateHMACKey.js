// Generate HMAC key
export const generateHMACKey = async () => {
    // Key params
    let key = await crypto.subtle.generateKey(
        {
            name: 'HMAC',
            hash: { name: 'SHA-256' },
            length: 256
        },
        true,
        ['sign']
    )

    // Export key in JWK (JSON Web Key) format
    let exportedKey = await crypto.subtle.exportKey('jwk', key)

    return exportedKey
}


export default generateHMACKey