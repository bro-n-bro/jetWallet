<template>
    <section class="page_container inner_page_container send">
        <Loader v-if="isProcess" />

        <div class="cont">
            <div class="head">
                <router-link to="/account" class="back_btn">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </router-link>

                <div class="page_title">
                    {{ $t('message.send_page_title') }}
                </div>
            </div>


            <div class="token_wrap">
                <div class="token">
                    <div class="logo">
                        <img :src="balance.token_info.logo_URIs.svg" :alt="balance.token_info.name" loading="lazy">
                    </div>

                    <div class="denom">
                        {{ balance.token_info.symbol }}
                    </div>

                    <div class="amount">
                        <div class="val">
                            {{ formatTokenAmount(balance.amount, balance.exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }) }}
                        </div>

                        <div class="cost">
                            {{ formatTokenCost(calcTokenCost(balance.token_info.symbol, balance.amount, balance.exponent)) }} {{ store.currentCurrencySymbol }}
                        </div>
                    </div>
                </div>
            </div>


            <div class="address">
                <div class="field_label">
                    {{ $t('message.send_address_label') }}
                </div>

                <div class="field">
                    <input type="text" class="input big" v-model="address"
                        @focus="emitter.emit('show_keyboard')"
                        @blur="emitter.emit('hide_keyboard')"
                        @input="validateAddress($event)">

                    <!-- Scaner -->
                    <QRCode class="in_field" />
                </div>
            </div>


            <div class="amount_field">
                <div class="field_label">
                    {{ $t('message.send_amount_label') }}

                    <div class="cost">
                        {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, (amount * Math.pow(10, store.networks[store.currentNetwork].exponent)), store.networks[store.currentNetwork].exponent)) }}

                        {{ store.currentCurrencySymbol }}
                    </div>
                </div>

                <div class="field">
                    <input type="number" inputmode="numeric" class="input big" v-model="amount" placeholder="0.00"
                        @focus="emitter.emit('show_keyboard')"
                        @blur="emitter.emit('hide_keyboard')"
                        @input="validateAmount($event)">

                    <button type="button" class="max_btn" @click.prevent="setMaxAmount">
                        {{ $t('message.btn_MAX') }}
                    </button>
                </div>
            </div>


            <div class="memo_field">
                <div class="field_label">
                    {{ $t('message.memo_label') }}
                </div>

                <div class="field">
                    <input type="text" class="input big" v-model="memo"
                        @focus="emitter.emit('show_keyboard')"
                        @blur="emitter.emit('hide_keyboard')">
                </div>
            </div>


            <!-- Tx fee -->
            <TxFee v-if="isFormValid" :msgAny />


            <div class="btns">
                <button v-if="!store.networks[store.currentNetwork].currentTxHash" class="btn" @click.prevent="showSignTxModal = true" :class="{ disabled: !store.TxFee.isEnough }">
                    <span>{{ $t('message.btn_send') }}</span>
                </button>

                <button v-else class="btn waiting_btn" @click.prevent="emitter.emit('show_pending_notification')">
                    <span>{{ $t('message.btn_waiting_tx') }}</span>
                </button>
            </div>
        </div>
    </section>


    <!-- Sign transaction -->
    <SignTx v-if="showSignTxModal"/>
</template>


<script setup>
    import { ref, inject, watch, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter, useRoute } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'
    import { calcTokenCost, formatTokenCost, formatTokenAmount, signTx, sendTx, getExplorerLink } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'
    import TxFee from '@/components/TxFee.vue'
    import SignTx from '@/components/modal/SignTx.vue'
    import QRCode from '@/components/account/QRCode.vue'


    const store = useGlobalStore(),
        router = useRouter(),
        route = useRoute(),
        emitter = inject('emitter'),
        i18n = inject('i18n'),
        notification = useNotification(),
        balance = store.balances.find(balance => balance.denom === route.query.denom),
        address = ref(''),
        amount = ref(''),
        memo = ref(''),
        showSignTxModal = ref(false),
        msgAny = ref([]),
        isProcess = ref(false),
        isAmountReady = ref(false),
        isFormValid = ref(computed(() => isAmountReady.value && address.value.length))


    watch(computed(() => isFormValid.value), () => {
        if (isFormValid.value) {
            // Set messeges
            msgAny.value = [{
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: store.currentAddress,
                    toAddress: address.value,
                    amount: [{
                        denom: balance.denom,
                        amount: `${parseFloat(amount.value.toString().replace(',', '.')).toFixed(balance.exponent) * Math.pow(10, balance.exponent)}`
                    }]
                }
            }]
        }
    })


    // Validate address
    function validateAddress(e) {
        let isStartsWith = address.value.startsWith(balance.chain_info.bech32_prefix)

        isStartsWith
            ? e.target.classList.remove('error')
            : e.target.classList.add('error')
    }


    // Set MAX amount
    function setMaxAmount() {
        // Set amount status
        isAmountReady.value = false

        setTimeout(() => {
            // Set amount
            amount.value = formatTokenAmount(balance.amount, balance.exponent)

            // Set amount status
            isAmountReady.value = true
        })
    }


    // Validate amount
    function validateAmount(e) {
        // Set amount status
        isAmountReady.value = false

        setTimeout(() => {
            // Negative value
            if (e.target.value.length && e.target.value <= 0) {
                // Set empty
                amount.value = ''
            }

            // Acceptable value
            if (e.target.value.length && e.target.value > 0 && e.target.value < formatTokenAmount(balance.amount, balance.exponent)){
                // Set amount status
                isAmountReady.value = true
            }

            // More than available balance
            if (e.target.value > formatTokenAmount(balance.amount, balance.exponent)) {
                // Set MAX amount
                setMaxAmount()
            }
        })
    }


    // Send tokens
    async function send() {
        // Set process status
        isProcess.value = true

        try {
            // Update TxFee info
            if (store.TxFee.isRemember) {
                await store.updateTxFeeInfo()
            }

            // Sign Tx
            let txBytes = await signTx(msgAny.value, memo.value)

            // Clean notifications
            notification.notify({
                group: 'default',
                clean: true
            })

            // Show notification
            notification.notify({
                group: 'default',
                speed: 200,
                duration: -100,
                title: i18n.global.t('message.notification_tx_pending_title'),
                type: 'pending',
                data: {
                    explorer_link: getExplorerLink(store.currentNetwork)
                }
            })

            // Send Tx
            sendTx(txBytes)

            // Redirect
            router.push('/account')
        } catch (error) {
            console.log(error)

            // Show error
            showError(error)
        }
    }


    // Show error message
    function showError(error) {
        // Get error code
        let errorText = ''

        // Get error title
        error.code
            ? errorText = i18n.global.t(`message.notification_tx_error_${error.code}`)
            : errorText = i18n.global.t('message.notification_tx_error_rejected')

        // Show notification
        notification.notify({
            group: 'default',
            speed: 200,
            duration: 6000,
            title: 'Tx error',
            text: errorText,
            type: 'error'
        })
    }


    // Event "auth"
    emitter.on('auth', () => {
        // Hide SignTx modal
        showSignTxModal.value = false

        // Send tokens
        send()
    })


    // Event "close_sign_tx_modal"
    emitter.on('close_sign_tx_modal', () => {
        // Hide SignTx modal
        showSignTxModal.value = false
    })
</script>


<style scoped>
    .token_wrap
    {
        display: block;

        margin-bottom: 20px;
        padding: 1px;

        text-decoration: none;

        color: currentColor;
        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .token
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        padding-right: 9px;

        border-radius: 11px;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }


    .token .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 55px;
        height: 55px;
        margin-right: 8px;
        padding: 8px;

        border-radius: 11px;
    }


    .token .logo img
    {
        display: block;

        max-width: 100%;
        max-height: 100%;
    }


    .token .denom
    {
        font-size: 16px;
        font-weight: 500;

        text-transform: uppercase;
    }


    .token .amount
    {
        font-size: 18px;
        font-weight: 500;

        margin-left: auto;

        text-align: right;
        white-space: nowrap;
    }


    .token .amount .cost
    {
        font-size: 16px;
        font-weight: 400;

        color: #836b9e;
    }



    .address .input.big
    {
        padding-right: 55px;
    }



    .amount_field
    {
        margin-top: 10px;
    }


    .amount_field .cost
    {
        margin-left: auto;

        color: rgba(255, 255, 255, .70);
    }



    .memo_field
    {
        margin-top: 10px;
        margin-bottom: auto;
    }


    .field
    {
        position: relative;

        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #5d33ce 0%,#200750 100%);
    }


    .input
    {
        border-radius: 9px;
        background: #170232;
    }


    .btns
    {
        margin-top: 0;
        padding: 0;
    }
</style>