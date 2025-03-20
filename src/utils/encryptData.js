// Encryption
export const encryptData = async (text, key) => {
    const iv = crypto.getRandomValues(new Uint8Array(12)),
        encoder = new TextEncoder(),
        encodedText = encoder.encode(text)

    try {
        const ciphertext = await crypto.subtle.encrypt(
            {
                name: "AES-GCM",
                iv: iv,
            },
            key,
            encodedText
        )

        return {
            ciphertext: new Uint8Array(ciphertext),
            iv: iv
        }
    } catch (error) {
        // Throw error
        throw new Error(`encryptData() failed: ${error.message}`)
    }
}


export default encryptData