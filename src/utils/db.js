import { openDB, deleteDB } from 'idb'


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
    try {
        let store = await getStore(),
            isFirstRun = localStorage.getItem('firstRun') === null

        deleteDB('bro_db')

        if (isFirstRun) {
            deleteDB('jetWallet')

            localStorage.setItem('firstRun', 'false')
        }

        // Get current DB version
        store.getCurrentDBVersion()

        // Open DB
        return openDB('jetWallet', store.DBVersion, {
            upgrade(db) {
                // Create store if it does not exist
                if (!db.objectStoreNames.contains('global')) {
                    db.createObjectStore('global')
                }

                // Create store if it does not exist
                if (!db.objectStoreNames.contains('secret')) {
                    db.createObjectStore('secret')
                }

                // Create store if it does not exist
                if (!db.objectStoreNames.contains('wallet1')) {
                    db.createObjectStore('wallet1')
                }
            }
        })
    } catch (error) {
        throw new Error(`Error initializing IndexedDB: ${error.message}`)
    }
})()


export async function DBcheckStoreName(name) {
    let store = await getStore()

    try {
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
    } catch (error) {
        throw new Error(`Error checking store name in indexedDB: ${error.message}`)
    }
}


export async function DBgetAllData(storeName) {
    try {
        if (!DB) {
            // Check DB
            DB = await dbPromise
        }

        return DB.getAll(storeName)
    } catch (error) {
        throw new Error(`Error getting data from indexedDB: ${error.message}`)
    }
}


export async function DBgetData(storeName, key) {
    try {
        if (!DB) {
            // Check DB
            DB = await dbPromise
        }

        return DB.get(storeName, key)
    } catch (error) {
        throw new Error(`Error getting data from indexedDB: ${error.message}`)
    }
}


export async function DBgetMultipleData(storeName, keys) {
    try {
        if (!DB) {
            // Check DB
            DB = await dbPromise
        }

        let results = await Promise.all(keys.map(key => DB.get(storeName, key))),
            keyValueMap = {}

        keys.forEach((key, index) => keyValueMap[key] = results[index])

        return keyValueMap
    } catch (error) {
        throw new Error(`Error getting multiple data from indexedDB: ${error.message}`)
    }
}


export async function DBaddData(storeName, data) {
    try {
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
    } catch (error) {
        throw new Error(`Error adding data to indexedDB: ${error.message}`)
    }
}


export async function DBdeleteData(storeName, keys) {
    try {
        if (!DB) {
            // Check DB
            DB = await dbPromise
        }

        let tx = DB.transaction(storeName, 'readwrite'),
            store = tx.objectStore(storeName)

        await Promise.all(keys.map(key => store.delete(key)))

        return tx.done
    } catch (error) {
        throw new Error(`Error deleting data from indexedDB: ${error.message}`)
    }
}


export async function DBclearStore(storeName) {
    try {
        if (!DB) {
            // Check DB
            DB = await dbPromise
        }

        let tx = DB.transaction(storeName, 'readwrite'),
            store = tx.objectStore(storeName)

        await store.clear()
        await tx.done
    } catch (error) {
        throw new Error(`Error clearing store in indexedDB: ${error.message}`)
    }
}


export async function DBclearAllData() {
    try {
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
    } catch (error) {
        throw new Error(`Error clearing all data in indexedDB: ${error.message}`)
    }
}