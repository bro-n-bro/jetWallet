import { openDB } from 'idb'


const dbPromise = openDB('bro_db', 1, {
    upgrade(db) {
        if (!db.objectStoreNames.contains('wallet')) {
            db.createObjectStore('wallet')
        }
    }
})


export async function DBgetAllData(storeName) {
    let db = await dbPromise

    return db.getAll(storeName)
}


export async function DBgetData(storeName, key) {
    let db = await dbPromise

    return db.get(storeName, key)
}


export async function DBgetMultipleData(storeName, keys) {
    const db = await dbPromise,
        results = await Promise.all(keys.map(key => db.get(storeName, key)))

    // Create an object that maps keys and values
    let keyValueMap = {}

    keys.forEach((key, index) => keyValueMap[key] = results[index])

    return keyValueMap
}


export async function DBaddData(storeName, data) {
    let db = await dbPromise,
        tx = db.transaction(storeName, 'readwrite'),
        store = tx.objectStore(storeName)

    for (let [key, value] of data) {
        await store.put(value, key)
    }

    await tx.done
}


export async function DBdeleteData(storeName, id) {
    let db = await dbPromise

    return db.delete(storeName, id)
}


export async function DBclearData(storeName) {
    const db = await dbPromise
    const tx = db.transaction(storeName, 'readwrite')
    const store = tx.objectStore(storeName)
    await store.clear()
    await tx.done
}