<template>
    <!-- Loader -->
    <Loader v-if="isReseting || layout === 'default-layout'" :class="{ no_bg: layout === 'default-layout' }" />

    <!-- Main component -->
    <component :is="layout" v-else />

    <!-- Notifications -->
    <notifications position="top left" group="default" width="100%" animation-type="velocity" :animation="notificationAnimation"
        @start="notificationsOnStart($event)"
        @destroy="notificationsOnDestroy()"
    >
        <template #body="props">
            <div class="notification" :class="{
                pending: props.item.type == 'pending',
                success: props.item.type == 'success',
                error: props.item.type == 'error',
                collapsible: props.item.data.isCollapsible
            }">
                <!-- Notifications icon -->
                <div class="icon" v-if="props.item.type == 'copied'">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_notification_copied"></use></svg>
                </div>

                <!-- Notifications icon -->
                <div class="icon" v-if="props.item.type == 'pending'">
                    <div class="loader"></div>
                </div>

                <!-- Notifications icon -->
                <div class="icon" v-if="props.item.type == 'success'">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_notification_success"></use></svg>
                </div>

                <!-- Notifications icon -->
                <div class="icon" v-if="props.item.type == 'error'">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_notification_error"></use></svg>
                </div>

                <div>
                    <!-- Notifications title -->
                    <div class="title">
                        {{ props.item.title }} {{ props.item.text }}
                    </div>

                    <!-- Notifications explorer link -->
                    <div class="explorer" v-if="props.item.data.explorer_link">
                        <a :href="props.item.data.explorer_link" target="_blank" rel="noopener nofollow">
                            {{ $t('message.notification_explorer_link') }}
                        </a>
                    </div>
                </div>
            </div>
        </template>
    </notifications>
</template>


<script setup>
    import { ref, reactive, onBeforeMount, inject, watch, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'
    import { useRoute } from 'vue-router'
    import { useTitle, useNetwork } from '@vueuse/core'
    import { tgInit } from '@/utils'
    import { DBgetData } from '@/utils/db'

    // Components
    import Loader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        i18n = inject('i18n'),
        route = useRoute(),
        emitter = inject('emitter'),
        layout = computed(() => route.meta.layout || 'default-layout'),
        title = useTitle(),
        isReseting = ref(false),
        network = reactive(useNetwork()),
        notification = useNotification(),
        notificationTimeout = ref(null),
        notificationAnimation = {
            enter: { translateY: '0%' },
            leave: { translateY: '-100%' }
        }


    onBeforeMount(async () => {
        try {
            // Set page title
            title.value = i18n.global.t('message.page_title')

            // Telegram WebApp init
            await tgInit()
        } catch (error) {
            console.error(`App.vue: ${error.message}`)
        }
    })


    // Wallet change
    watch(computed(() => store.currentWalletID), async (newValue, oldValue) => {
        try {
            if (oldValue) {
                // Get wallets
                const DBWallets = await DBgetData('global', 'wallets')

                if (DBWallets !== undefined) {
                    // Clean notifications
                    notification.notify({
                        group: 'default',
                        clean: true
                    })

                    // Reinit APP
                    await store.initApp()
                }
            }
        } catch (error) {
            console.error(`App.vue: ${error.message}`)
        }
    })


    // Network change
    watch(computed(() => store.currentNetwork), async () => {
        try {
            if (store.isInitialized || store.forcedUnlock) {
                // Clean notifications
                notification.notify({
                    group: 'default',
                    clean: true
                })

                // Reinit APP
                await store.initApp()
            }
        } catch (error) {
            console.error(`App.vue: ${error.message}`)
        }
    })


    // Offline mode
    watch(computed(() => network.isOnline), () => {
        // Clean notifications
        notification.notify({
            group: 'default',
            clean: true
        })

        // Offline
        if (!network.isOnline) {
            // Show notification
            notification.notify({
                group: 'default',
                speed: 200,
                duration: -100,
                title: i18n.global.t('message.notification_offline_title'),
                type: 'error'
            })
        }
    })


    // Notifications start event
    function notificationsOnStart(params) {
        // Is collapsible
        if (params.data.isCollapsible) {
            notificationTimeout.value = setTimeout(() => {
                // Show collapsible notification
                const notification = document.querySelector('.notification.collapsible')

                if (notification) {
                    // Add notification class
                    notification.classList.add('small')
                }

                // Clear timeout
                notificationTimeout.value = null
            }, store.notificationsCollapsingDelay)
        }
    }


    // Notifications destroy event
    function notificationsOnDestroy() {
        // Clear timeout
        notificationTimeout.value = null
    }


    // Event "show_collapsible_notification"
    emitter.on('show_collapsible_notification', () => {
        if (!notificationTimeout.value) {
            const notification = document.querySelector('.notification.collapsible')

            if (notification) {
                // Show collapsible notification
                notification.classList.remove('small')

                // Hide collapsible notification
                notificationTimeout.value = setTimeout(() => {
                    if (notification) {
                        // Add notification class
                        notification.classList.add('small')
                    }

                    // Clear timeout
                    notificationTimeout.value = null
                }, store.notificationsCollapsingDelay)
            }
        }
    })


    // Event "start_reseting"
    emitter.on('start_reseting', () => {
        // Show loader
        isReseting.value = true

        // Hide loader
        setTimeout(() => isReseting.value = false, 300)
    })
</script>