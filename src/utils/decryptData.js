// Decryption
export const decryptData = async (ciphertext, iv, key) => {
    try {
        const decrypted = await crypto.subtle.decrypt(
            {
                name: 'AES-GCM',
                iv: iv,
            },
            key,
            ciphertext
        )

        const decoder = new TextDecoder()

        return decoder.decode(decrypted)
    } catch (error) {
        // Throw error
        throw new Error(`decryptData() failed: ${error.message}`)
    }
}


export default decryptData