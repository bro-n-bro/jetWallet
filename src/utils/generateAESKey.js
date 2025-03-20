// Generate AES key
export const generateAESKey = async () => {
    try {
        const key = await crypto.subtle.generateKey(
            {
                name: 'AES-GCM',
                length: 256
            },
            true,
            [
                'encrypt',
                'decrypt'
            ]
        )

        return key
    } catch (error) {
        // Throw error
        throw new Error(`generateAESKey() failed: ${error.message}`)
    }
}


export default generateAESKey