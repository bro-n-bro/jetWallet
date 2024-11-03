// Decode from base64
export const decodeFromBase64 = base64String => {
    // Decode the Base64 string back to a JSON string
    const jsonString = atob(base64String)

    // Convert the JSON string back to an object
    return JSON.parse(jsonString)
}


export default decodeFromBase64