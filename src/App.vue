<template>
    <component :is="layout" />


    <notifications position="top center" group="default">
        <template #body="props">
            <div class="notification" :class="{ success: props.item.type == 'success', error: props.item.type == 'error' }">
                <div class="icon" v-if="props.item.type == 'copied'">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_notification_copied"></use></svg>
                </div>

                <div class="icon" v-if="props.item.type == 'success'">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_notification_success"></use></svg>
                </div>

                <div class="icon" v-if="props.item.type == 'error'">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_notification_error"></use></svg>
                </div>

                <div class="title">
                    {{ props.item.title }}
                </div>

                <div class="text" v-html="props.item.text" v-if="props.item.text"></div>

                <div class="explorer" v-if="props.item.data.tx_hash">
                    <a :href="`https://www.mintscan.io/${store.networks.global[store.currentNetwork].mintscanPrefix}/txs/${props.item.data.tx_hash}`" target="_blank" rel="noopener nofollow">
                        {{ $t('message.notification_explorer_link') }}
                    </a>
                </div>
            </div>
        </template>
    </notifications>
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