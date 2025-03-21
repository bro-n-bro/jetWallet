<template>
    <!-- Confirm by pin modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data" :class="{ closing: isClosing }">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="closeHandler()">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.confirm_by_pin_title') }}
                </div>

                <!-- Auth -->
                <Auth mode="pin" />
            </div>
        </div>
    </section>


    <!-- Modal overlay -->
    <div class="modal_overlay" :class="{ closing: isClosing }" @click.prevent="closeHandler()"></div>
</template>


<script setup>
    import { ref, inject, onMounted, onUnmounted } from 'vue'

    // Components
    import Auth from '@/components/Auth.vue'


    const emitter = inject('emitter'),
        isClosing = ref(false)


    onMounted(() => {
        // Event "close_any_modal"
        emitter.on('close_any_modal', closeHandler)

        // Event "auth"
        emitter.on('auth', closeHandler)
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('auth', closeHandler)
        emitter.off('close_any_modal', closeHandler)
    })


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "close_confirm_modal"
            emitter.emit('close_confirm_modal')
        }, 200)
    }
</script>


<style scoped>
    .modal_title
    {
        margin-bottom: 29px;
    }
</style>