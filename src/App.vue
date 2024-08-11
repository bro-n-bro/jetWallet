<template>
    <component :is="layout" />


    <notifications position="top left" group="default" width="100%" @start="notificationsOnStart($event)" @destroy="notificationsOnDestroy()">
        <template #body="props">
            <div class="notification" :class="{ pending: props.item.type == 'pending', success: props.item.type == 'success', error: props.item.type == 'error' }">
                <div class="icon" v-if="props.item.type == 'copied'">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_notification_copied"></use></svg>
                </div>

                <div class="icon" v-if="props.item.type == 'pending'">
                    <div class="loader"></div>
                </div>

                <div class="icon" v-if="props.item.type == 'success'">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_notification_success"></use></svg>
                </div>

                <div class="icon" v-if="props.item.type == 'error'">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_notification_error"></use></svg>
                </div>

                <div>
                    <div class="title">
                        {{ props.item.title }}
                    </div>

                    <div class="desc" v-if="props.item.text">
                        {{ props.item.text }}
                    </div>

                    <div class="explorer" v-if="props.item.data.tx_hash">
                        <a :href="`https://www.mintscan.io/${store.networks[store.currentNetwork].mintscanPrefix}/txs/${props.item.data.tx_hash}`" target="_blank" rel="noopener nofollow">
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
    import { useRoute } from 'vue-router'
    import { useTitle } from '@vueuse/core'


    const store = useGlobalStore(),
        i18n = inject('i18n'),
        route = useRoute(),
        title = useTitle(),
        layout = computed(() => route.meta.layout || 'default-layout'),
        notificationTimeout = ref(null)


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


    // Notifications start event
    function notificationsOnStart(params) {
        // Pending type
        if (params.type === 'pending') {
            notificationTimeout.value = setTimeout(() => document.querySelector('.notification.pending').classList.add('small'), store.notificationsPendingDelay)
        }
    }


    // Notifications destroy event
    function notificationsOnDestroy() {
        // Pending type
        notificationTimeout.value = null
    }
</script>