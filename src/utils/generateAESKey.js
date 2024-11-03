// Generate AES key
export const generateAESKey = async () => {
    let key = await crypto.subtle.generateKey(
        {
            name: 'AES-GCM',
            length: 256
        },
        true,
        ['encrypt', 'decrypt']
    )

    return key
}


export default generateAESKey