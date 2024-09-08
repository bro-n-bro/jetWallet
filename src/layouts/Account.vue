<template>
    <div class="main">
        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>
    </div>
</template>


<script setup>
    import { ref, inject, onMounted, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        startY = ref(0),
        isPulling = ref(false),
        threshold = 70,
        hasUpdated = ref(false)


    onMounted(() => {
        // Overscroll
        window.addEventListener('touchstart', handleTouchStart, { passive: false })
        window.addEventListener('touchmove', handleTouchMove, { passive: false })
        window.addEventListener('touchend', handleTouchEnd, { passive: false })
    })


    onUnmounted(() => {
        window.removeEventListener('touchstart', handleTouchStart, { passive: false })
        window.removeEventListener('touchmove', handleTouchMove, { passive: false })
        window.removeEventListener('touchend', handleTouchEnd, { passive: false })
    })


    // Handle touch start
    function handleTouchStart(e) {
        if (window.scrollY === 0) {
            startY.value = e.touches[0].pageY
            isPulling.value = true
            hasUpdated.value = false
        }
    }


    // Handle touch move
    function handleTouchMove(e) {
        if (isPulling.value && (store.networks[store.currentNetwork].currentTxHash || store.forcedUnlock)) {
            // Event "show_collapsible_notification"
            emitter.emit('show_collapsible_notification')

            return
        }

        if (!isPulling.value || hasUpdated.value) return

        let currentY = e.touches[0].pageY,
            distance = currentY - startY.value


        if (distance > 0 && distance >= threshold) {
            e.preventDefault()
            e.stopPropagation()

            // Close any modal
            if (store.isAnyModalOpen) {
                // Set event "close_any_modal"
                emitter.emit('close_any_modal')

                isPulling.value = false

                return
            }

            // Updating flag
            hasUpdated.value = true

            // Top loader
            let account = document.querySelector('.account_page')

            if (account) {
                account.classList.add('updating')

                setTimeout(() => account.classList.remove('updating'), 500)

                // Update all balances
                store.updateAllBalances()
            }
        }
    }


    // Handle touch end
    function handleTouchEnd(e) {
        isPulling.value = false
    }
</script>
