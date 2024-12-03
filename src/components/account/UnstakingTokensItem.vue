<template>
    <div ref="swipeable" :class="{ swiped: isSwiped }"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
    >
        <!-- Token validator -->
        <slot name="validator"></slot>

        <!-- Token cancel button -->
        <slot name="cancel_btn"></slot>
    </div>
</template>


<script setup>
    import { ref } from 'vue'
    import { useGlobalStore } from '@/store'


    const store = useGlobalStore(),
        swipeable = ref(null),
        minSwipeDistance = 30,
        startX = ref(0),
        deltaX = ref(0),
        isSwiped = ref(false)


    // Handle touch start
    function handleTouchStart(e) {
        if (store.networks[store.currentNetwork].isUnstakingCancelSupport) {
            startX.value = e.touches[0].clientX
        }
    }


    // Handle touch move
    function handleTouchMove(e) {
        if (store.networks[store.currentNetwork].isUnstakingCancelSupport) {
            let touch = e.touches[0]

            // Calc horizontal offset
            deltaX.value = touch.clientX - startX.value

            // Direction definitions
            deltaX.value > minSwipeDistance
                ? isSwiped.value = false
                : isSwiped.value = true
        }
    }
</script>