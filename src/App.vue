<template>
    <!-- Loader -->
    <Loader v-if="isReseting" />

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
    import { useRoute, useRouter } from 'vue-router'
    import { useTitle, useNetwork } from '@vueuse/core'
    import { convertArrayBuffersToUint8Arrays, getTgUserId } from '@/utils'
    import { DBgetData } from '@/utils/db'

    // Components
    import Loader from '@/components/Loader.vue'
    import RedirectModal from '@/components/modal/RedirectModal.vue'
    import ConnectWalletModal from '@/components/jetPack/ConnectWallet.vue'
    import SendTxModal from '@/components/jetPack/SendTx.vue'


    const store = useGlobalStore(),
        i18n = inject('i18n'),
        router = useRouter(),
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


    onBeforeMount(async () => {
        // Set page title
        title.value = i18n.global.t('message.page_title')

        // Set analytics
        if (process.env.VUE_APP_IS_PRODUCTION === 'true') {
            var _paq = window._paq = window._paq || [];
			/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
			_paq.push(['trackPageView']);
			_paq.push(['enableLinkTracking']);
			(function() {
			var u="//metrics.jetwallet.app/";
			_paq.push(['setTrackerUrl', u+'matomo.php']);
			_paq.push(['setSiteId', '1']);
			var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
			g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
			})();
        }

        // Get telegram user ID
        if (window.Telegram && window.Telegram.WebApp) {
            getTgUserId(Telegram.WebApp.initData)
        }

        // Create RTCPeer
        store.RTCPeer = new Peer(`jw-${store.tgBotId}-${store.tgUserId}`)

        // New connection
        store.RTCPeer.on('connection', conn => {
            // Save connection
            store.RTCConnections[conn.peer] = conn

            // Processing data receipt
            conn.on('data', data => {
                // Save request
                store.jetPackRequest = convertArrayBuffersToUint8Arrays(data)

                // Connect wallet
                if (store.jetPackRequest.method === 'connectWallet') {
                    if (store.currentAddress) {
                        // Show connect wallet modal
                        showConnectWalletModal.value = true
                    } else {
                        // Watch for changes in the current address
                        let stopWatch = watch(computed(() => store.currentAddress), () => {
                            if (store.currentAddress) {
                                // Stop watch
                                stopWatch()

                                // Show connect wallet modal
                                showConnectWalletModal.value = true
                            }
                        })
                    }
                }

                // Switch network
                if (store.jetPackRequest.method === 'switchChain') {
                    // Get connection
                    let connection = store.RTCConnections[store.jetPackRequest.data.peer_id]

                    // Switch
                    store.jetPackSwitchNetwork()
                        .then(() => {
                            // Watch for changes in the current address
                            let stopWatch = watch(computed(() => store.currentAddress), () => {
                                if (store.currentAddress.length) {
                                    // Stop watch
                                    stopWatch()

                                    // Send response
                                    if (connection) {
                                        connection.send({
                                            type: 'switchChain',
                                            requestId: store.jetPackRequest.data.request_id,
                                            chain_id: store.jetPackRequest.data.chain_id,
                                            address: store.currentAddress,
                                        })
                                    }
                                }
                            })
                        }).catch(() => {
                            // Send response
                            if (connection) {
                                connection.send({
                                    type: 'error',
                                    requestId: store.jetPackRequest.data.request_id,
                                    message: i18n.global.t('message.jp_chain_not_found')
                                })
                            }
                        })
                }

                // Get balances
                if (store.jetPackRequest.method === 'loadBalances') {
                    // Get connection
                    let connection = store.RTCConnections[store.jetPackRequest.data.peer_id]

                    if (store.isBalancesGot) {
                        // Send response
                        if (connection) {
                            connection.send({
                                type: 'balances',
                                requestId: store.jetPackRequest.data.request_id,
                                balances: store.balances
                            })
                        }
                    } else {
                        // Watch for changes in the balance receipt status
                        let stopWatch = watch(computed(() => store.isBalancesGot), () => {
                            if (store.isBalancesGot) {
                                // Stop watch
                                stopWatch()

                                // Send response
                                if (connection) {
                                    connection.send({
                                        type: 'balances',
                                        requestId: store.jetPackRequest.data.request_id,
                                        balances: store.balances
                                    })
                                }
                            }
                        })
                    }
                }

                // Send Tx
                if (store.jetPackRequest.method === 'sendTx') {
                    // Show send Tx modal
                    showSendTxModal.value = true
                }
            })
        })


        // Clear Peer on close
        window.addEventListener('beforeunload', () => {
            // Close all connections on close
            Object.keys(store.RTCConnections).forEach(key => store.RTCConnections[key].close())

            // Close Peer
            store.RTCPeer.destroy()
        })


        // Telegram WebApp settings
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

            // Age modal
            await store.getAgeConfirmed()

            if (!store.isAgeConfirmed) {
                Telegram.WebApp.showConfirm(i18n.global.t('message.age_modal_text'), async result => {
                    result
                        ? await store.setAgeConfirmed() // Approve age
                        : Telegram.WebApp.close() // Reject age
                })
            }

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


    onMounted(() => {
        // window.onerror = function (message, source, lineno, colno, error) {
		// 	console.log(`Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\n${error ? 'Stack: ' + error.stack : ''}`)

        //     // Clean notifications
        //     notification.notify({
        //         group: 'default',
        //         clean: true
        //     })

        //     // Show notification
        //     notification.notify({
        //         group: 'default',
        //         speed: 200,
        //         duration: -100,
        //         title: i18n.global.t('message.notification_error_title'),
        //         type: 'error'
        //     })

		// 	return true
		// }

		// window.addEventListener('unhandledrejection', function (event) {
		// 	console.log(`Unhandled Promise Rejection:\n${event.reason}`)

        //     // Clean notifications
        //     notification.notify({
        //         group: 'default',
        //         clean: true
        //     })

        //     // Show notification
        //     notification.notify({
        //         group: 'default',
        //         speed: 200,
        //         duration: -100,
        //         title: i18n.global.t('message.notification_error_title'),
        //         type: 'error'
        //     })

		// 	event.preventDefault()
		// })
    })


    watch(computed(() => store.isInitialized), () => {
        // Connect wallet
        if (store.jetPackRequest && store.jetPackRequest.method === 'connectWallet') {
            if (store.currentAddress) {
                // Show connect wallet modal
                showConnectWalletModal.value = true
            } else {
                // Watch for changes in the current address
                let stopWatch = watch(computed(() => store.currentAddress), () => {
                    if (store.currentAddress) {
                        // Stop watch
                        stopWatch()

                        // Show connect wallet modal
                        showConnectWalletModal.value = true
                    }
                })
            }
        }
    })


    // Wallet change
    watch(computed(() => store.currentWalletID), async (newValue, oldValue) => {
        if (oldValue) {
            console.log(777)
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
            console.log(9999)
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


    // Redirect to send
    function redirectToSend(parsedData) {
        // Change network
        if (store.currentNetwork !== parsedData[1]) {
            // Redirect
            router.push({ path: '/account' })

            // Set new current network
            store.setCurrentNetwork(parsedData[1])

            // Wait isInitialized
            let stopWatch = watch(computed(() => store.isInitialized), () => {
                if (store.isInitialized && parsedData[0] === 'send') {
                    // Stop watch
                    stopWatch()

                    // Redirect to send page
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
        } else {
            // Redirect to send
            if (parsedData[0] === 'send') {
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


    // Event "close_connect_wallet_modal"
    emitter.on('close_connect_wallet_modal', () => {
        // Hide connect wallet modal
        showConnectWalletModal.value = false
    })


    // Event "close_send_tx_modal"
    emitter.on('close_send_tx_modal', () => {
        // Hide send Tx modal
        showSendTxModal.value = false
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