import { openDB } from 'idb'


const dbPromise = openDB('jetWallet', 1, {
    upgrade(db) {
        if (!db.objectStoreNames.contains('global')) {
            db.createObjectStore('global')
        }

        if (!db.objectStoreNames.contains('secret')) {
            db.createObjectStore('secret')
        }

        if (!db.objectStoreNames.contains('wallet1')) {
            db.createObjectStore('wallet1')
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
    let db = await dbPromise,
        results = await Promise.all(keys.map(key => db.get(storeName, key))),
        keyValueMap = {}

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


export async function DBclearStore(storeName) {
    let db = await dbPromise,
        tx = db.transaction(storeName, 'readwrite')
        store = tx.objectStore(storeName)

    await store.clear()
    await tx.done
}


export async function DBclearAllData() {
    let db = await dbPromise,
        storeNames = db.objectStoreNames

    for (let storeName of storeNames) {
        let tx = db.transaction(storeName, 'readwrite'),
            store = tx.objectStore(storeName)

        await store.clear()
        await tx.done
    }
}