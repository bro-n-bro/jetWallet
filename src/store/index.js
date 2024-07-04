import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'


export const useGlobalState = createGlobalState(
    () => {
        // State
        const isAuthorized = ref(false)

        return { isAuthorized }
    }
)