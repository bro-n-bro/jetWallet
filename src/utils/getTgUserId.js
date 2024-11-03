import { useGlobalStore } from '@/store'


// Get Telegram user ID
export const getTgUserId = data => {
    let store = useGlobalStore()

    // Decode data
    let decodedString = decodeURIComponent(data)

    // Get user params
    let userParams = JSON.parse(new URLSearchParams(decodedString).get('user'))

    // Set data
    if (userParams) {
        store.tgUserId = userParams.id
    }
}


export default getTgUserId