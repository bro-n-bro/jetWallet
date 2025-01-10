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


    <!-- Validators modal -->
    <transition name="from_right">
    <ConnectWalletModal v-if="showConnectWalletModal" />
    </transition>

    <!-- Validators modal -->
    <transition name="from_right">
    <SendTxModal v-if="showSendTxModal" />
    </transition>

    <!-- Sign transaction modal -->
    <transition name="modal">
    <RedirectModal v-if="store.showRedirectModal"/>
    </transition>

    <!-- Overlay -->
    <transition name="fade">
    <div class="modal_overlay" @click.prevent="emitter.emit('close_redirect_modal')" v-if="store.showRedirectModal"></div>
    </transition>
</template>


<script setup>
    import { ref, reactive, onBeforeMount, onMounted, inject, watch, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'
    import { useRoute } from 'vue-router'
    import { useTitle, useNetwork } from '@vueuse/core'
    import { convertArrayBuffersToUint8Arrays, tgInit, getTgUserId, jetPackConnectWallet, jetPackDeleteConnection, jetPackGetBalances, jetPackSwitchChain } from '@/utils'
    import { DBgetData } from '@/utils/db'

    // Components
    import Loader from '@/components/Loader.vue'
    import RedirectModal from '@/components/modal/RedirectModal.vue'
    import ConnectWalletModal from '@/components/jetPack/ConnectWallet.vue'
    import SendTxModal from '@/components/jetPack/SendTx.vue'


    const store = useGlobalStore(),
        i18n = inject('i18n'),
        route = useRoute(),
        emitter = inject('emitter'),
        title = useTitle(),
        isReseting = ref(false),
        layout = computed(() => route.meta.layout || 'default-layout'),
        notification = useNotification(),
        notificationTimeout = ref(null),
        notificationAnimation = {
            enter: { translateY: '0%' },
            leave: { translateY: '-100%' }
        },
        network = reactive(useNetwork()),
        showConnectWalletModal = ref(false),
        showSendTxModal = ref(false)


    onBeforeMount(() => {
        // Set page title
        title.value = i18n.global.t('message.page_title')

        // Set analytics
        // if (process.env.VUE_APP_IS_PRODUCTION === 'true') {
        //     var _paq = window._paq = window._paq || [];
		// 	/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
		// 	_paq.push(['trackPageView']);
		// 	_paq.push(['enableLinkTracking']);
		// 	(function() {
		// 	var u="//metrics.jetwallet.app/";
		// 	_paq.push(['setTrackerUrl', u+'matomo.php']);
		// 	_paq.push(['setSiteId', '1']);
		// 	var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
		// 	g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
		// 	})();
        // }

        // Get telegram user ID
        if (window.Telegram && window.Telegram.WebApp) {
            getTgUserId(Telegram.WebApp.initData)
        }

        // Telegram WebApp init
        tgInit()
    })


    onMounted(() => {
        // Create RTCPeer
        store.RTCPeer = new Peer(`jw-${store.tgBotId}-${store.tgUserId}`)

        // New connection
        store.RTCPeer.on('connection', conn => {
            // If there is already one
            if (store.RTCConnections[conn.peer]) {
                // JetPack delete connection
                jetPackDeleteConnection(conn)
            } else {
                // Save connection
                store.RTCConnections[conn.peer] = conn

                // Save connection status
                store.isRTCConnected = true

                // Processing data receipt
                conn.on('data', data => {
                    // Save request
                    store.jetPackRequest = convertArrayBuffersToUint8Arrays(data)

                    // Connect wallet
                    if (store.jetPackRequest.method === 'connectWallet') {
                        // JetPack connect wallet
                        jetPackConnectWallet(emitter)
                    }

                    // Switch chain
                    if (store.jetPackRequest.method === 'switchChain') {
                        // JetPack switch chain
                        jetPackSwitchChain(i18n)
                    }

                    // Get balances
                    if (store.jetPackRequest.method === 'loadBalances') {
                        // JetPack get balances
                        jetPackGetBalances()
                    }

                    // Send Tx
                    if (store.jetPackRequest.method === 'sendTx') {
                        // Show send Tx modal
                        showSendTxModal.value = true
                    }
                })


                // Handle disconnection event
                conn.on('close', () => {
                    // JetPack delete connection
                    jetPackDeleteConnection(conn)
                })

                conn.on('disconnected', () => {
                    // JetPack delete connection
                    jetPackDeleteConnection(conn)
                })
            }
        })


        // Clear Peer on close
        window.addEventListener('beforeunload', () => {
            // Close all connections
            Object.values(store.RTCConnections).forEach(el => el.close())

            // Close Peer
            if (store.RTCPeer) {
                store.RTCPeer.destroy()
            }
        })
    })


    watch(computed(() => store.isInitialized), () => {
        // Connect wallet
        if (store.jetPackRequest && store.jetPackRequest.method === 'connectWallet') {
            // JetPack connect wallet
            jetPackConnectWallet(emitter)
        }
    })


    // Wallet change
    watch(computed(() => store.currentWalletID), async (newValue, oldValue) => {
        if (oldValue) {
            // Get wallets
            let DBWallets = await DBgetData('global', 'wallets')

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
    })


    // Network change
    watch(computed(() => store.currentNetwork), async () => {
        if (store.isInitialized || store.forcedUnlock) {
            // Clean notifications
            notification.notify({
                group: 'default',
                clean: true
            })

            // Reinit APP
            await store.initApp()
        }
    })


    // Offline mode
    watch(computed(() => network.isOnline), async () => {
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


    // Event "show_connect_wallet_modal"
    emitter.on('show_connect_wallet_modal', () => {
        // Show connect wallet modal
        showConnectWalletModal.value = true
    })


    // Event "close_connect_wallet_modal"
    emitter.on('close_connect_wallet_modal', () => {
        // Hide connect wallet modal
        showConnectWalletModal.value = false
    })


    // Event "close_send_tx_modal"
    emitter.on('close_send_tx_modal', async () => {
        // Hide send Tx modal
        showSendTxModal.value = false

        // Check Tx result
        if (store.networks[store.currentNetwork].currentTxHash) {
            // Check Tx
            await store.checkTxResult()

            if (store.networks[store.currentNetwork].currentTxHash) {
                // Set listener current tx
                store.setListenerCurrentTx()
            }
        }
    })


    // Event "show_redirect_modal"
    emitter.on('show_redirect_modal', () => {
        // Hide redirect modal
        store.showRedirectModal = true
    })


    // Event "close_redirect_modal"
    emitter.on('close_redirect_modal', () => {
        // Hide redirect modal
        store.showRedirectModal = false
    })


    // Event "start_reseting"
    emitter.on('start_reseting', () => {
        // Show loader
        isReseting.value = true

        // Hide loader
        setTimeout(() => isReseting.value = false, 300)
    })
</script>