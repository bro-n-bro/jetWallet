// Decryption
export const decryptData = async (ciphertext, iv, key) => {
    let decrypted = await crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        key,
        ciphertext
    )

    let decoder = new TextDecoder()

    return decoder.decode(decrypted)
}


export default decryptData