// Encryption
export const encryptData = async (text, key) => {
    let iv = crypto.getRandomValues(new Uint8Array(12)),
        encoder = new TextEncoder(),
        encodedText = encoder.encode(text)

    let ciphertext = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        key,
        encodedText
    );

    return {
        ciphertext: new Uint8Array(ciphertext),
        iv: iv
    }
}


export default encryptData