<template>
    <component :is="layout" />
</template>


<script setup>
    import { onBeforeMount, inject, computed, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import { useTitle } from '@vueuse/core'


    const i18n = inject('i18n'),
        route = useRoute(),
        title = useTitle(),
        layout = computed(() => route.meta.layout || 'default-layout')


    onBeforeMount(() => {
        // Set title
        title.value = i18n.global.t('message.page_title')
    })


    onMounted(async () => {
        if (window.Telegram && window.Telegram.WebApp) {
            // Initialize the mini-application
            await Telegram.WebApp.ready()

            // Disable vertical swipes
            Telegram.WebApp.disableVerticalSwipes()

            // Set header color
            Telegram.WebApp.setHeaderColor('#5b3895')

            // Show progress
            Telegram.WebApp.MainButton.showProgress(true)

            // Call the expand method to open to full height
            Telegram.WebApp.expand()

            // Init biometric
            Telegram.WebApp.BiometricManager.init()
        }
    })
</script>