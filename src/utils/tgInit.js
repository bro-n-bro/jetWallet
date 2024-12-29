import { inject, watch, computed } from 'vue'
import { useGlobalStore } from '@/store'
import { useRouter } from 'vue-router'


// Redirect to send
function redirectToSend(parsedData) {
    let store = useGlobalStore(),
        router = useRouter()

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


// Telegram WebApp init
export const tgInit = async () => {
    let store = useGlobalStore(),
        i18n = inject('i18n')

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
}


export default tgInit