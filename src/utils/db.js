import { openDB } from 'idb'


const dbPromise = openDB('bro_db', 1, {
    upgrade(db) {
        if (!db.objectStoreNames.contains('wallet')) {
            db.createObjectStore('wallet')
        }
    }
})


export async function getAllData(storeName) {
    let db = await dbPromise

    return db.getAll(storeName)
}


export async function addData(storeName, data) {
    let db = await dbPromise,
        tx = db.transaction(storeName, 'readwrite'),
        store = tx.objectStore(storeName)

    for (let [key, value] of data) {
        await store.put(value, key)
    }

    await tx.done
}


export async function deleteData(storeName, id) {
    let db = await dbPromise

    return db.delete(storeName, id)
}


export async function updateData(storeName, id, updatedData) {
    let db = await dbPromise

    return db.put(storeName, { ...updatedData, id })
}