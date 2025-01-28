<template>
    <!-- Confirm by pin modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="emitter.emit('close_confirm_modal')">
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
</template>


<script setup>
    import { inject } from 'vue'

    // Components
    import Auth from '@/components/Auth.vue'


    const emitter = inject('emitter')
</script>


<style scoped>
    .modal_title
    {
        margin-bottom: 29px;
    }
</style>