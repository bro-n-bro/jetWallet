// Convert arrayBuffers to Uint8Arrays
export const convertArrayBuffersToUint8Arrays = data => {
    if (Array.isArray(data)) {
        return data.map(convertArrayBuffersToUint8Arrays)
    }

    if (data !== null && typeof data === "object") {
        const result = {}

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const value = data[key]

                value instanceof ArrayBuffer
                    ? result[key] = new Uint8Array(value)
                    : result[key] = convertArrayBuffersToUint8Arrays(value)
            }
        }

        return result
    }

    return data
}


export default convertArrayBuffersToUint8Arrays