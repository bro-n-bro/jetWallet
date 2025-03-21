// Generate HMAC key
export const generateHMACKey = async () => {
    try {
        // Key params
        const key = await crypto.subtle.generateKey(
            {
                name: 'HMAC',
                hash: { name: 'SHA-256' },
                length: 256
            },
            true,
            ['sign']
        )

        // Export key in JWK (JSON Web Key) format
        const exportedKey = await crypto.subtle.exportKey('jwk', key)

        return exportedKey
    } catch (error) {
        // Throw error
        throw new Error(`generateHMACKey() failed: ${error.message}`)
    }
}


export default generateHMACKey