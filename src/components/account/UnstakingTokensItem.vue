<template>
    <div ref="swipeable" @touchstart="handleTouchStart" @touchmove="handleTouchMove" :class="{ swiped: isSwiped }">
        <slot name="validator"></slot>

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
        if (store.networks[store.currentNetwork].isunstakingCancelSupport) {
            startX.value = e.touches[0].clientX
        }
    }


    // Handle touch move
    function handleTouchMove(e) {
        if (store.networks[store.currentNetwork].isunstakingCancelSupport) {
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