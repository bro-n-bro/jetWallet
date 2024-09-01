<template>
    <!-- Current address -->
    <div class="address" @click.prevent="copyHandler">
        <!-- Current address icon -->
        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_copy2"></use></svg>

        <!-- Current address value -->
        <span>{{ store.currentAddress.slice(0, 9) + '...' + store.currentAddress.slice(-6) }}</span>
    </div>
</template>


<script setup>
    import { inject } from 'vue'
    import { useClipboard } from '@vueuse/core'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'


    const store = useGlobalStore(),
        i18n = inject('i18n'),
        notification = useNotification(),
        { copy } = useClipboard()


    // Copy handler
    function copyHandler() {
        // Copy
        copy(store.currentAddress)

        // Clean notifications
        notification.notify({
            group: 'default',
            clean: true
        })

        // Show notification
        notification.notify({
            group: 'default',
            speed: 200,
            duration: 750,
            title: i18n.global.t('message.notification_copied_title'),
            type: 'copied'
        })
    }
</script>


<style scoped>
    .address
    {
        font-size: 12px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        padding: 2px;

        cursor: pointer;
        transition: .2s linear;

        border-radius: 5px;
        background: #5b3895;

        gap: 4px;
    }


    .address .icon
    {
        display: block;

        width: 14px;
        height: 14px;
    }


    .address:active
    {
        color: #5b3895;
        background: #fff;
    }
</style>