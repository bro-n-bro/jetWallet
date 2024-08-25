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
                        :width="200"
                        :height="200"
                        :value="`${store.currentAddress}`"
                        :image="'/qrcode_logo_cosmoshub.png'"
                        :imageOptions="{ hideBackgroundDots: false, imageSize: 1, margin: 0 }"
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


            <!-- Action -->
            <div class="actions">
                <button class="btn" @click.prevent="copyHandler">
                    <div class="icon">
                        <svg><use xlink:href="@/assets/sprite.svg#ic_send"></use></svg>
                    </div>

                    <div>{{ $t('message.btn_copy_small') }}</div>
                </button>

                <button class="btn">
                    <div class="icon">
                        <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
                    </div>

                    <div>{{ $t('message.btn_amount') }}</div>
                </button>

                <button class="btn">
                    <div class="icon">
                        <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
                    </div>

                    <div>{{ $t('message.btn_share') }}</div>
                </button>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { inject } from 'vue'
    import { useClipboard } from '@vueuse/core'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'

    // Components
    import QRCodeVue3 from 'qrcode-vue3'


    const store = useGlobalStore(),
        i18n = inject('i18n'),
        notification = useNotification(),
        { copy } = useClipboard()


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
    margin: 10px auto 0;
    padding: 10px;

    border-radius: 10px;
    background: #fff;
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



.actions
{
    display: flex;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-around;

    margin-top: auto;
    padding: 25px 0 13px;
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