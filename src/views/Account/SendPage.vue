<template>
    <!-- Send page -->
    <section class="page_container inner_page_container send">
        <!-- Loader -->
        <Loader v-if="isProcess" />

        <div class="cont">
            <!-- Send page head -->
            <div class="head">
                <!-- Back button -->
                <router-link to="/account" class="back_btn">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </router-link>

                <!-- Tabs -->
                <div class="tabs_wrap">
                    <div class="tabs">
                        <!-- Tab send -->
                        <button class="btn" ref="tab1" @click.prevent="activeTab = 1" :class="{ active: activeTab === 1 }">
                            <span>{{ $t('message.send_page_tab1') }}</span>
                        </button>

                        <!-- Tab IBC send -->
                        <button class="btn" ref="tab2" @click.prevent="activeTab = 2" :class="{ active: activeTab === 2 }">
                            <span>{{ $t('message.send_page_tab2') }}</span>
                        </button>

                        <!-- Tabs roller -->
                        <div class="roller" :style="`width: ${rollerWidth}px; left: ${rollerOffsetLeft}px;`">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Send page token -->
            <div class="token_wrap" @click.prevent="openTokensModal()" v-if="balance">
                <div class="token">
                    <!-- Send page token logo -->
                    <div class="logo">
                        <img :src="balance.token_info.logo_URIs.svg" alt="" loading="lazy">
                    </div>

                    <!-- Send page token denom -->
                    <div class="denom">
                        {{ balance.token_info.symbol }}
                    </div>

                    <!-- Send page token amount -->
                    <div class="amount">
                        <div class="val">
                            {{ formatTokenAmount(balance.amount, balance.exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }).replace(',', '.') }}
                        </div>

                        <div class="cost">
                            {{ formatTokenCost(calcTokenCost(balance.token_info.symbol, balance.amount, balance.exponent)) }} {{ store.currentCurrencySymbol }}
                        </div>
                    </div>
                </div>
            </div>


            <!-- Send page default token -->
            <div class="token_wrap" @click.prevent="openTokensModal()" v-else>
                <div class="token">
                    <!-- Send page token logo -->
                    <div class="logo">
                        <img :src="getNetworkLogo(store.networks[store.currentNetwork].chain_id)" alt="">
                    </div>

                    <!-- Send page token denom -->
                    <div class="denom">
                        {{ store.networks[store.currentNetwork].token_name }}
                    </div>

                    <!-- Send page token amount -->
                    <div class="amount">
                        <div class="val">0</div>

                        <div class="cost">
                            0.00 {{ store.currentCurrencySymbol }}
                        </div>
                    </div>
                </div>
            </div>


            <!-- Send page destination chain -->
            <div class="destination_chain" v-if="activeTab === 2">
                <!-- Send page destination chain label -->
                <div class="field_label">
                    {{ $t('message.send_destination_chain_label') }}
                </div>

                <!-- Send page destination chain info -->
                <div class="info_wrap" @click.prevent="openChainsModal()" v-if="!store.IBCSendCurrentChain">
                    <div class="info">
                        <div class="placeholder">
                            {{ $t('message.send_destination_chain_placeholder') }}
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>

                <!-- Send page destination chain info -->
                <div class="chain_wrap" @click.prevent="openChainsModal()" v-else>
                    <div class="chain">
                        <!-- Send page destination chain logo -->
                        <div class="logo">
                            <img :src="getNetworkLogo(store.IBCSendCurrentChain?.info.chain_id)" alt="" @error="imageLoadError($event)">

                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>
                        </div>

                        <div>
                            <!-- Send page destination chain name -->
                            <div class="name">
                                {{ store.IBCSendCurrentChain?.info.pretty_name }}
                            </div>
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>
            </div>


            <!-- Send page recipient address -->
            <div class="address">
                <!-- Send page recipient address label -->
                <div class="field_label">
                    {{ $t('message.send_address_label') }}
                </div>

                <!-- Send page recipient address field -->
                <div class="field">
                    <input type="text" class="input big" v-model="address" ref="addressInput"
                        :placeholder="$t('message.placeholder_address')"
                        @input="validateAddress()"
                        @paste="validateAddress()">

                    <!-- Paste button -->
                    <button class="paste_btn" @click.prevent="pasteFromClipboard()">
                        {{ $t('message.btn_paste') }}
                    </button>

                    <!-- QR code scanner -->
                    <QRCodeScanner class="in_field" />
                </div>
            </div>


            <!-- Send page amount -->
            <div class="amount_field">
                <!-- Send page amount label -->
                <div class="field_label">
                    {{ $t('message.send_amount_label') }}

                    <!-- Send page amount cost -->
                    <div class="cost">
                        {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, (amount * Math.pow(10, store.networks[store.currentNetwork].exponent)), store.networks[store.currentNetwork].exponent)) }}

                        {{ store.currentCurrencySymbol }}
                    </div>
                </div>

                <!-- Send page amount field -->
                <div class="field">
                    <input type="number" inputmode="numeric" class="input big" v-model="amount"
                        :placeholder="$t('message.placeholder_amount', { token: balance.token_info.symbol })"
                        @input="validateAmount()">

                    <!-- Send page amount max. button -->
                    <button type="button" class="max_btn" @click.prevent="setMaxAmount">
                        {{ $t('message.btn_MAX') }}
                    </button>
                </div>
            </div>


            <!-- Send page memo -->
            <div class="memo_field">
                <!-- Send page memo label -->
                <div class="field_label">
                    {{ $t('message.memo_label') }}
                </div>

                <!-- Send page memo field -->
                <div class="field">
                    <input type="text" class="input big" v-model="memo"
                        :placeholder="$t('message.placeholder_memo')">
                </div>
            </div>


            <!-- Tx fee -->
            <TxFee v-if="isFormValid" :msgAny txType="send" />


            <!-- Send page button -->
            <div class="btns">
                <!-- Send button -->
                <button v-if="!store.networks[store.currentNetwork].currentTxHash" class="btn" @click.prevent="openSignTxModal()" :class="{ disabled: !store.TxFee.isEnough }">
                    <span>{{ $t('message.btn_send') }}</span>
                </button>

                <!-- Waiting button -->
                <button v-else class="btn waiting_btn" @click.prevent="emitter.emit('show_collapsible_notification')">
                    <span>{{ $t('message.btn_waiting_tx') }}</span>
                </button>
            </div>
        </div>
    </section>


    <!-- Chains modal -->
    <transition name="from_right">
    <ChainsModal v-if="showChainsModal" />
    </transition>

    <!-- Tokens modal -->
    <transition name="from_right">
    <TokensModal v-if="showTokensModal" :currentToken="balance" />
    </transition>

    <!-- Sign transaction modal -->
    <transition name="modal">
    <SignTxModal v-if="showSignTxModal"/>
    </transition>

    <!-- Overlay -->
    <transition name="fade">
    <div class="modal_overlay" @click.prevent="emitter.emit('close_any_modal')" v-if="showSignTxModal"></div>
    </transition>
</template>


<script setup>
    import { ref, inject, watch, onMounted, computed, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter, useRoute } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'
    import { fromBech32 } from '@cosmjs/encoding'
    import { calcTokenCost, formatTokenCost, formatTokenAmount, signTx, sendTx, getExplorerLink, getNetworkLogo, imageLoadError } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'
    import TokensModal from '@/components/modal/TokensModal.vue'
    import TxFee from '@/components/TxFee.vue'
    import SignTxModal from '@/components/modal/SignTxModal.vue'
    import ChainsModal from '@/components/modal/ChainsModal.vue'
    import QRCodeScanner from '@/components/account/QRCodeScanner.vue'


    const store = useGlobalStore(),
        router = useRouter(),
        route = useRoute(),
        emitter = inject('emitter'),
        i18n = inject('i18n'),
        notification = useNotification(),
        activeTab = ref(1),
        tab1 = ref(null),
        tab2 = ref(null),
        tabs = [tab1, tab2],
        rollerWidth = ref(null),
        rollerOffsetLeft = ref(null),
        balance = ref(store.balances.find(balance => balance.denom === route.query.denom)),
        addressInput = ref(null),
        address = ref(route.query.address || ''),
        amount = ref(route.query.amount || ''),
        memo = ref(''),
        showTokensModal = ref(false),
        showSignTxModal = ref(false),
        showChainsModal =ref(false),
        msgAny = ref([]),
        isProcess = ref(false),
        isAmountReady = ref(false),
        isAddressValid = ref(false),
        isFormValid = ref(computed(() => isAmountReady.value && isAddressValid.value))


    onMounted(() => {
        // Validate address
        if (address.value) {
            validateAddress()
        }

        // Validate amount
        if (amount.value) {
            validateAmount()
        }

        // Qr code received
        Telegram.WebApp.onEvent('qrTextReceived', () => {
            // Update data
            updateData()
        })

        // Set roller params
        rollerWidth.value = tabs[activeTab.value - 1].value.offsetWidth
        rollerOffsetLeft.value = tabs[activeTab.value - 1].value.offsetLeft
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('auth')
        emitter.off('close_sign_tx_modal')

        Telegram.WebApp.offEvent('qrTextReceived')
    })


    watch(computed(() => activeTab.value), () => {
        // Update roller params
        rollerWidth.value = tabs[activeTab.value - 1].value.offsetWidth
        rollerOffsetLeft.value = tabs[activeTab.value - 1].value.offsetLeft
    })


    watch(computed(() => route.query.denom), () => {
        // Update data
        updateData()
    })


    watch(computed(() => route.query.address), () => {
        // Update data
        updateData()
    })


    watch(computed(() => isFormValid.value), () => {
        if (isFormValid.value) {
            // Set messeges
            msgAny.value = [{
                typeUrl: '/cosmos.bank.v1beta1.MsgSend',
                value: {
                    fromAddress: store.currentAddress,
                    toAddress: address.value,
                    amount: [{
                        denom: balance.value.denom,
                        amount: `${parseFloat(amount.value.toString().replace(',', '.')).toFixed(balance.value.exponent) * Math.pow(10, balance.value.exponent)}`
                    }]
                }
            }]
        }
    })


    // Update data
    function updateData() {
        // Reset data
        address.value = ''
        amount.value = ''
        memo.value = ''
        isProcess.value = false
        isAmountReady.value = false
        isAddressValid.value = false

        // Remove error classes
        addressInput.value.classList.remove('error')

        // Update balance
        balance.value = store.balances.find(balance => balance.denom === route.query.denom)

        // Parse query data
        if (route.query.address) {
            // Set data
            address.value = route.query.address

            // Validate address
            validateAddress()
        }

        // if (route.query.amount) {
        //     // Set data
        //     amount.value = route.query.amount

        //     // Validate amount
        //     validateAmount()
        // }

        // Close any modals
        emitter.emit('close_any_modal')
    }


    // Validate address
    function validateAddress() {
        try {
            let { prefix, data } = fromBech32(address.value)

            // Check
            if (prefix == store.networks[store.currentNetwork].prefix && data.length == store.networks[store.currentNetwork].address_length) {
                // Toggle classes
                addressInput.value.classList.remove('error')

                // Address status
                isAddressValid.value = true
            } else {
                // Toggle classes
                addressInput.value.classList.add('error')

                // Address status
                isAddressValid.value = false
            }
        } catch (error) {
            // Toggle classes
            addressInput.value.classList.add('error')

            // Address status
            isAddressValid.value = false
        }
    }


    // Set MAX amount
    function setMaxAmount() {
        // Set amount status
        isAmountReady.value = false

        setTimeout(() => {
            // Set amount
            amount.value = formatTokenAmount(balance.value.amount, balance.value.exponent)

            // Set amount status
            isAmountReady.value = true
        })
    }


    // Validate amount
    function validateAmount() {
        // Set amount status
        isAmountReady.value = false

        setTimeout(() => {
            // Negative value
            if (amount.value.length && amount.value <= 0) {
                // Set empty
                amount.value = ''
            }

            // Acceptable value
            if (amount.value && amount.value > 0 && amount.value < formatTokenAmount(balance.value.amount, balance.value.exponent)){
                // Set amount status
                isAmountReady.value = true
            }

            // More than available balance
            if (amount.value > formatTokenAmount(balance.value.amount, balance.value.exponent)) {
                // Set MAX amount
                setMaxAmount()
            }
        })
    }


    // Paste from clipboard
    function pasteFromClipboard() {
        navigator.clipboard.readText().then(clipboardData => {
            // Validate address
            try {
                let { prefix, data } = fromBech32(clipboardData)

                // Check
                if (prefix == store.networks[store.currentNetwork].prefix && data.length == store.networks[store.currentNetwork].address_length) {
                    // Set data
                    address.value = clipboardData
                } else {
                    // Show notification
                    notification.notify({
                        group: 'default',
                        speed: 200,
                        duration: 1000,
                        title: i18n.global.t('message.notification_tx_error_title'),
                        text: i18n.global.t('message.notification_error_invalid_paste_title'),
                        type: 'error'
                    })
                }
            } catch (error) {
                // Show notification
                notification.notify({
                    group: 'default',
                    speed: 200,
                    duration: 1000,
                    title: i18n.global.t('message.notification_tx_error_title'),
                    text: i18n.global.t('message.notification_error_invalid_paste_title'),
                    type: 'error'
                })
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
                    isCollapsible: true,
                    explorer_link: getExplorerLink(store.currentNetwork)
                }
            })

            // Send Tx
            sendTx(txBytes).catch(error => {
                console.log(error)

                // Show error
                showError(error)
            })

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
        // Set process status
        isProcess.value = false

        // Get error code
        let errorText = ''

        // Get error title
        error.code
            ? errorText = i18n.global.t(`message.notification_tx_error_${error.code}`)
            : errorText = i18n.global.t('message.notification_tx_error_rejected')

        // Clean notifications
        notification.notify({
            group: 'default',
            clean: true
        })

        // Show notification
        notification.notify({
            group: 'default',
            speed: 200,
            duration: 6000,
            title: i18n.global.t('message.notification_tx_error_title'),
            text: errorText,
            type: 'error'
        })

        // Clear tx hash
        store.networks[store.currentNetwork].currentTxHash = null

        // Reset Tx Fee
        store.resetTxFee()
    }


    // Open tokens modal
    function openTokensModal() {
        // Show tokens modal
        showTokensModal.value = true
    }


    // Open SignTx modal
    function openSignTxModal() {
        // Show SignTx modal
        showSignTxModal.value = true

        // Update status
        store.isAnyModalOpen = true
    }


    // Open chains modal
    function openChainsModal() {
        // Show chains modal
        showChainsModal.value = true
    }


    // Event "auth"
    emitter.on('auth', () => {
        // Hide SignTx modal
        showSignTxModal.value = false

        // Update status
        store.isAnyModalOpen = false

        // Send tokens
        send()
    })


    // Event "close_chains_modal"
    emitter.on('close_chains_modal', () => {
        // Hide chains modal
        showChainsModal.value = false
    })


    // Event "close_tokens_modal"
    emitter.on('close_tokens_modal', () => {
        // Hide tokens modal
        showTokensModal.value = false
    })


    // Event "close_sign_tx_modal"
    emitter.on('close_sign_tx_modal', () => {
        // Hide SignTx modal
        showSignTxModal.value = false

        // Update status
        store.isAnyModalOpen = false
    })


    // Event "close_any_modal"
    emitter.on('close_any_modal', () => {
        // Hide tokens modal
        showTokensModal.value = false

        // Hide SignTx modal
        showSignTxModal.value = false

        // Update status
        store.isAnyModalOpen = false
    })
</script>


<style scoped>
    .send
    {
        background: #170232;
    }


    .tabs_wrap
    {
        margin-bottom: 0;
    }


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


    .destination_chain
    {
        margin-bottom: 10px;
    }


    .destination_chain .info_wrap,
    .destination_chain .chain_wrap
    {
        padding: 1px;

        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .destination_chain .info
    {
        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        height: 46px;
        padding: 0 15px;

        cursor: pointer;

        border-radius: 11px;
        background: #06000e;
    }


    .destination_chain .info .placeholder
    {
        font-size: 16px;
        font-weight: 500;

        opacity: .6;
    }


    .destination_chain .info .arr
    {
        position: absolute;
        z-index: 3;
        top: 0;
        right: 16px;
        bottom: 0;

        display: block;

        width: 28px;
        height: 28px;
        margin: auto 0;

        transform: rotate(-90deg);
    }


    .destination_chain .chain
    {
        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        padding: 5px 7px;

        border-radius: 11px;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }


    .destination_chain .chain .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 44px;
        height: 44px;
        margin-right: 8px;
        padding: 6px;

        border-radius: 50%;
        background: #950fff;
    }


    .destination_chain .chain .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: inherit;
    }


    .destination_chain .chain .logo .icon
    {
        display: none;

        width: 24px;
        height: 24px;
    }


    .destination_chain .chain .logo img.hide
    {
        display: none;
    }

    .destination_chain .chain .logo img.hide + .icon
    {
        display: block;
    }


    .destination_chain .chain .logo + *
    {
        width: calc(100% - 100px);
    }


    .destination_chain .chain .name
    {
        font-size: 18px;
        font-weight: 500;

        overflow: hidden;

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .destination_chain .chain .arr
    {
        position: absolute;
        z-index: 3;
        top: 0;
        right: 16px;
        bottom: 0;

        display: block;

        width: 28px;
        height: 28px;
        margin: auto 0;

        transform: rotate(-90deg);
    }



    .address .input.big
    {
        padding-right: 119px;
    }


    .address .paste_btn
    {
        font-size: 16px;
        font-weight: 500;

        position: absolute;
        z-index: 3;
        top: 0;
        right: 54px;

        height: 100%;
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
        padding-bottom: 40px;
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
        background: #06000e;
    }


    .btns
    {
        margin-top: 0;
        padding: 0;
    }
</style>