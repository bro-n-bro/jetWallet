<template>
    <div ref="swipeable" @touchstart="handleTouchStart" @touchmove="handleTouchMove" :class="{ swiped: isSwiped }">
        <slot name="validator"></slot>

        <slot name="cancel_btn"></slot>
    </div>
</template>


<script setup>
    import { ref } from 'vue'


    const swipeable = ref(null),
        minSwipeDistance = 20,
        startX = ref(0),
        deltaX = ref(0),
        isSwiped = ref(false)


    // Handle touch start
    function handleTouchStart(e) {
        startX.value = e.touches[0].clientX
    }


    // Handle touch move
    function handleTouchMove(e) {
        let touch = e.touches[0]

        // Calc horizontal offset
        deltaX.value = touch.clientX - startX.value

        // Direction definitions
        deltaX.value > minSwipeDistance
            ? isSwiped.value = false
            : isSwiped.value = true
    }
</script>