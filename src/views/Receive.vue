<template>
    <section class="page_container inner_page_container receive">
        <div class="cont">
            <div class="head">
                <router-link to="/account" class="back_btn">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </router-link>

                <div class="page_title">
                    {{ $t('message.receive_page_title') }}
                </div>
            </div>


            <div class="qr_code">
                <div class="code">
                    <QRCodeVue3
                        :key="qrKey"
                        :width="200"
                        :height="200"
                        :value="`send|${store.currentAddress}|${amount}`"
                        :image="`/qrcode_logo_cosmoshub.png`"
                        :imageOptions="{ hideBackgroundDots: false, imageSize: 0.5, margin: 0 }"
                        :dotsOptions="{
                            type: 'square',
                            color: '#000000'
                        }"
                        :backgroundOptions="{ color: '#ffffff' }"
                        :cornersSquareOptions="{ type: 'square', color: '#000000' }"
                        :cornersDotOptions="{ type: 'square', color: '#000000' }" />
                </div>

                <div class="address">
                    {{ store.currentAddress }}
                </div>
            </div>


            <div class="amount" v-if="amount">
                <div @click.prevent="showAmountModal = true">
                    {{ amount.toLocaleString('ru-RU', { maximumFractionDigits: 7 }) }}

                    {{ store.networks[store.currentNetwork].token_name }}

                    <div class="cost">
                        (~ {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, (amount * Math.pow(10, store.networks[store.currentNetwork].exponent)), store.networks[store.currentNetwork].exponent, 'USD'), 'USD') }}$)
                    </div>
                </div>

                <button class="reset_btn" @click.prevent="amount = ''">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_reset"></use></svg>
                </button>
            </div>


            <!-- Action -->
            <div class="actions">
                <button class="btn" @click.prevent="copyHandler">
                    <div class="icon">
                        <svg><use xlink:href="@/assets/sprite.svg#ic_send"></use></svg>
                    </div>

                    <div>{{ $t('message.btn_copy_small') }}</div>
                </button>

                <button class="btn" @click.prevent="showAmountModal = true">
                    <div class="icon">
                        <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
                    </div>

                    <div>{{ $t('message.btn_amount') }}</div>
                </button>

                <button class="btn" @click.prevent="share()" v-if="isShareSupported">
                    <div class="icon">
                        <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
                    </div>

                    <div>{{ $t('message.btn_share') }}</div>
                </button>
            </div>
        </div>
    </section>

    <!-- Amount modal -->
    <AmountModal v-if="showAmountModal" :amount />
</template>


<script setup>
    import { ref, inject, onUnmounted, watch, computed, onBeforeMount } from 'vue'
    import { useClipboard } from '@vueuse/core'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'
    import { calcTokenCost, formatTokenCost } from '@/utils'

    // Components
    import QRCodeVue3 from 'qrcode-vue3'
    import AmountModal from '@/components/modal/ReceiveAmountModal.vue'


    const store = useGlobalStore(),
        i18n = inject('i18n'),
        emitter = inject('emitter'),
        notification = useNotification(),
        { copy } = useClipboard(),
        showAmountModal = ref(false),
        amount = ref(''),
        qrKey = ref(0),
        isShareSupported = ref(false)


    onBeforeMount(() => isShareSupported.value = navigator.share)


    onUnmounted(() => {
        // Unlisten events
        emitter.off('close_receive_amount_modal')
    })


    // Update qr code
    watch(computed(() => amount.value), () => qrKey.value += 1)


    // Copy handler
    function copyHandler() {
        // Copy
        copy(store.currentAddress)

        // Show notification
        notification.notify({
            group: 'default',
            speed: 200,
            duration: 750,
            title: i18n.global.t('message.notification_copied_title'),
            type: 'copied'
        })
    }


    // Share
    function share() {
        if (isShareSupported.value) {
            navigator.share({
                title: 'Jet Wallet',
                text: 'Check this out!',
                url: 'https://t.me/cosmos_wallet_bot',
            })
            .catch(error => console.error(error))
        }
    }


    // Event "change_receive_amount"
    emitter.on('change_receive_amount', ({ new_amount }) => {
        // Set amount
        amount.value = new_amount
    })


    // Event "close_receive_amount_modal"
    emitter.on('close_receive_amount_modal', () => {
        // Hide amount modal
        showAmountModal.value = false
    })
</script>


<style scoped>
    .receive
    {
        background: #170232;
    }



    .qr_code
    {
        width: 220px;
        max-width: 100%;
        margin: 10px auto auto;
        padding: 10px;

        border-radius: 10px;
        background: #fff;
    }


    .qr_code .code
    {
        width: 200px;
        height: 200px;
    }


    .qr_code .address
    {
        font-size: 16px;
        font-weight: 600;

        margin-top: 8px;

        text-align: center;
        word-break: break-all;

        color: #000;
    }



    .amount
    {
        font-size: 18px;
        font-weight: 500;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        margin-top: auto;
        margin-top: 24px;

        text-decoration-thickness: 1px;
        text-decoration-line: underline;
    }


    .amount > div
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    }


    .amount .cost
    {
        margin-left: 6px;

        opacity: .6;
    }


    .amount .reset_btn
    {
        width: 19px;
        height: 19px;
        margin-left: 8px;
    }


    .amount .reset_btn svg
    {
        display: block;

        width: 100%;
        height: 100%;
    }



    .actions
    {
        display: flex;
        align-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: space-around;

        padding: 24px 0 13px;
    }


    .actions .btn
    {
        font-size: 12px;

        position: relative;

        transition: opacity .2s linear;
        text-align: center;
        text-decoration: none;

        color: currentColor;
    }


    .actions .btn .icon
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 44px;
        height: 44px;
        margin: 0 auto 4px;

        background: url(@/assets/bg_action_btn.svg) 0 0/100% 100% no-repeat;
    }


    .actions .btn .icon svg
    {
        display: block;

        width: 22px;
        height: 22px;
    }
</style>