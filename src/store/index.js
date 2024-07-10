import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'


export const useGlobalState = createGlobalState(
    () => {
        // State
        const isAuthorized = ref(false),
            authErrorLimit = 4


        return { isAuthorized, authErrorLimit }
    }
)