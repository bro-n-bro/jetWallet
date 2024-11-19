import { openDB } from 'idb'


var DB = null


// Get store
async function getStore() {
    // Import
    const { useGlobalStore } = await import('@/store')

    // Return instance
    return useGlobalStore()
}


// DB promise
const dbPromise = (async () => {
    let store = await getStore()

    // Get current DB version
    store.getCurrentDBVersion()

    // Open DB
    return await openDB('jetWallet', store.DBVersion, {
        async upgrade(db) {
            if (!db.objectStoreNames.contains('secret')) {
                db.close()

                await indexedDB.deleteDatabase('jetWallet')

                return
            }


            // Create store if it does not exist
            if (!db.objectStoreNames.contains('global')) {
                db.createObjectStore('global')
            }

            // Create store if it does not exist
            if (!db.objectStoreNames.contains('secret')) {
                db.createObjectStore('secret')
            }
        }
    })
})()


export async function DBcheckStoreName(name) {
    let store = await getStore()

    if (!DB) {
        // Check DB
        DB = await dbPromise
    }

    if (!DB.objectStoreNames.contains(name)) {
        // Set new DB version
        store.setNewDBVersion()

        // Close DB
        DB.close()

        // Open DB
        DB = await openDB('jetWallet', store.DBVersion, {
            upgrade(db) {
                // Create store if it does not exist
                if (!db.objectStoreNames.contains(name)) {
                    db.createObjectStore(name)
                }
            }
        })
    }
}


export async function DBgetAllData(storeName) {
    if (!DB) {
        // Check DB
        DB = await dbPromise
    }

    return DB.getAll(storeName)
}


export async function DBgetData(storeName, key) {
    if (!DB) {
        // Check DB
        DB = await dbPromise
    }

    return DB.get(storeName, key)
}


export async function DBgetMultipleData(storeName, keys) {
    if (!DB) {
        // Check DB
        DB = await dbPromise
    }

    let results = await Promise.all(keys.map(key => DB.get(storeName, key))),
        keyValueMap = {}

    keys.forEach((key, index) => keyValueMap[key] = results[index])

    return keyValueMap
}


export async function DBaddData(storeName, data) {
    if (!DB) {
        // Check DB
        DB = await dbPromise
    }

    let tx = DB.transaction(storeName, 'readwrite'),
        store = tx.objectStore(storeName)

    for (let [key, value] of data) {
        await store.put(value, key)
    }

    await tx.done
}


export async function DBdeleteData(storeName, keys) {
    if (!DB) {
        // Check DB
        DB = await dbPromise
    }

    let tx = DB.transaction(storeName, 'readwrite'),
        store = tx.objectStore(storeName)

    await Promise.all(keys.map(key => store.delete(key)))

    return tx.done
}


export async function DBclearStore(storeName) {
    if (!DB) {
        // Check DB
        DB = await dbPromise
    }

    let tx = DB.transaction(storeName, 'readwrite'),
        store = tx.objectStore(storeName)

    await store.clear()
    await tx.done
}


export async function DBclearAllData() {
    if (!DB) {
        // Check DB
        DB = await dbPromise
    }

    for (let storeName of DB.objectStoreNames) {
        let tx = DB.transaction(storeName, 'readwrite'),
            store = tx.objectStore(storeName)

        await store.clear()
        await tx.done
    }
}