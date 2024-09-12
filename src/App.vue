<template>
    <!-- Main component -->
    <component :is="layout" />

    <!-- Virtual keybord overlay -->
    <div class="virtual_keybord_overlay" @click.prevent="emitter.emit('hide_keyboard')"></div>

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
    import { ref, onBeforeMount, inject, computed, onMounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRoute, useRouter } from 'vue-router'
    import { useTitle } from '@vueuse/core'


    const store = useGlobalStore(),
        i18n = inject('i18n'),
        router = useRouter(),
        route = useRoute(),
        emitter = inject('emitter'),
        title = useTitle(),
        layout = computed(() => route.meta.layout || 'default-layout'),
        notificationTimeout = ref(null),
        notificationAnimation = {
            enter: { translateY: '0%' },
            leave: { translateY: '-100%' }
        }


    onBeforeMount(() => {
        // Set page title
        title.value = i18n.global.t('message.page_title')
    })


    onMounted(async () => {
        if (window.Telegram && window.Telegram.WebApp) {
            // Initialize the mini-application
            await Telegram.WebApp.ready()

            // Call the expand method to open to full height
            Telegram.WebApp.expand()

            // Set header color
            Telegram.WebApp.setHeaderColor('#5b3895')

            // Show progress
            Telegram.WebApp.MainButton.showProgress(true)

            // Disable vertical swipes
            Telegram.WebApp.disableVerticalSwipes()

            // Init biometric
            Telegram.WebApp.BiometricManager.init()

            // Qr code received
            Telegram.WebApp.onEvent('qrTextReceived', data => {
                // Close QR popup
                Telegram.WebApp.closeScanQrPopup()

                // Parse data
                let parsedData = data.data.split('|')

                // Redirect to send
                redirectToSend(parsedData)
            })
        }
    })


    // Redirect to send
    function redirectToSend(parsedData) {
        // Change network
        if (store.currentNetwork !== parsedData[1]) {
            // Set new current network
            store.setCurrentNetwork(parsedData[1])

            // Redirect
            setTimeout(() => {
                watch(computed(() => store.isInitialized), () => {
                    if (store.isInitialized && parsedData[0] == 'send') {
                        router.push({
                            path: '/account/send',
                            query: {
                                denom: store.networks[store.currentNetwork].denom,
                                address: parsedData[2],
                                amount: parsedData[3]
                            }
                        })
                    }
                })
            })
        } else {
            // Redirect
            if (parsedData[0] == 'send') {
                router.push({
                    path: '/account/send',
                    query: {
                        denom: store.networks[store.currentNetwork].denom,
                        address: parsedData[2],
                        amount: parsedData[3]
                    }
                })
            }
        }
    }


    // Notifications start event
    function notificationsOnStart(params) {
        // Is collapsible
        if (params.data.isCollapsible) {
            notificationTimeout.value = setTimeout(() => {
                // Show collapsible notification
                let notification = document.querySelector('.notification.collapsible')

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


    // Event "show_keyboard"
    emitter.on('show_keyboard', (field = null) => {
        setTimeout(() => {
            if (field) {
                // Scroll to field
                field.scrollIntoView({ behavior: 'smooth' })
            }

            // Overlay
            let overlay = document.querySelector('.virtual_keybord_overlay')

            if (overlay) {
                // Show overlay
                overlay.style.display = 'block'
            }
        }, 50)
    })


    // Event "hide_keyboard"
    emitter.on('hide_keyboard', () => {
        setTimeout(() => {
            // Overlay
            let overlay = document.querySelector('.virtual_keybord_overlay')

            if (overlay) {
                // Hide overlay
                overlay.style.display = 'none'
            }
        }, 10)
    })


    // Event "show_collapsible_notification"
    emitter.on('show_collapsible_notification', () => {
        if (!notificationTimeout.value) {
            let notification = document.querySelector('.notification.collapsible')

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
</script>