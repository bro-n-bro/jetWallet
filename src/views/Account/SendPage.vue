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
                        <img src="@/assets/boom_token_logo.svg" alt="" v-if="balance.old_base_denom === 'uboom'">
                        <img :src="balance.token_info.logo_URIs.svg" alt="" v-else-if="balance.token_info.logo_URIs.svg">
                        <img :src="balance.token_info.logo_URIs.png" alt="" v-else>
                    </div>

                    <!-- Send page token denom -->
                    <!-- <div class="denom">
                        {{ balance.token_info.symbol }}
                    </div> -->

                    <div class="denom">
                        <span v-if="balance.old_base_denom === 'drop' || balance.old_base_denom === 'udatom'">d{{ balance.token_info.symbol }}</span>
                        <span v-else-if="balance.old_base_denom === 'uboom'">BOOM</span>
                        <span v-else>{{ balance.token_info.symbol }}</span>
                    </div>

                    <!-- Send page token amount -->
                    <div class="amount">
                        <div class="val">
                            {{ formatTokenAmount(balance.amount, balance.exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }).replace(',', '.') }}
                        </div>

                        <div class="cost">
                            {{ formatTokenCost(calcTokenCost(balance.token_info.symbol, balance.amount, balance.exponent)) }}

                            {{ store.currentCurrencySymbol }}
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
                <div class="info_wrap" @click.prevent="openChainsModal()" v-if="!store.IBCSendCurrentChain" :class="{ disabled: balance.denom.toLowerCase() !== store.networks[store.currentNetwork].denom.toLowerCase() }">
                    <div class="info">
                        <div class="placeholder">
                            {{ $t('message.send_destination_chain_placeholder') }}
                        </div>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>

                <!-- Send page destination chain info -->
                <div class="chain_wrap" @click.prevent="openChainsModal()" v-else :class="{ disabled: balance.denom.toLowerCase() !== store.networks[store.currentNetwork].denom.toLowerCase() }">
                    <div class="chain">
                        <!-- Send page destination chain logo -->
                        <div class="logo">
                            <img :src="getNetworkLogo(store.IBCSendCurrentChain?.info?.chain_id)" alt=""
                                @error="imageLoadError($event)"
                                @load="imageLoadSuccess($event)">

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
                        {{ formatTokenCost(calcTokenCost(balance.token_info.symbol, (amount * Math.pow(10, balance.exponent)), balance.exponent)) }}

                        {{ store.currentCurrencySymbol }}
                    </div>
                </div>

                <!-- Send page amount field -->
                <div class="field">
                    <input type="number" inputmode="decimal" class="input big" v-model="amount"
                        :placeholder="$t('message.placeholder_amount', { token: balance.token_info.symbol })"
                        @input="validateAmount()">

                    <!-- Send page amount max. button -->
                    <button type="button" class="max_btn" @click.prevent="setMaxAmount()">
                        {{ $t('message.btn_MAX') }}
                    </button>
                </div>
            </div>


            <!-- Tx fee -->
            <TxFee v-if="isFormValid" :msgAny txType="send" />


            <!-- Send page button -->
            <div class="btns">
                <!-- Send button -->
                <button v-if="!store.networks[store.currentNetwork].currentTxHash" class="btn" @click.prevent="showSendConfirmModal = true" :class="{ disabled: !store.TxFee.isEnough }">
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
    <ChainsModal v-if="showChainsModal" />

    <!-- Tokens modal -->
    <TokensModal v-if="showTokensModal" :currentToken="balance" />

    <!-- Send confirm modal -->
    <SendConfirmModal v-if="showSendConfirmModal" :balance :amount :msgAny :type="activeTab" />
</template>


<script setup>
    import { ref, inject, watch, onMounted, computed, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRoute } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'
    import { fromBech32 } from '@cosmjs/encoding'
    import { ibc } from 'chain-registry'
    import { calcTokenCost, formatTokenCost, formatTokenAmount, getNetworkLogo, imageLoadError, imageLoadSuccess, convertAddress } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'
    import TokensModal from '@/components/modal/TokensModal.vue'
    import TxFee from '@/components/TxFee.vue'
    import ChainsModal from '@/components/modal/ChainsModal.vue'
    import QRCodeScanner from '@/components/account/QRCodeScanner.vue'
    import SendConfirmModal from '@/components/modal/SendConfirmModal.vue'


    const store = useGlobalStore(),
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
        showTokensModal = ref(false),
        showChainsModal = ref(false),
        showSendConfirmModal = ref(false),
        msgAny = ref([]),
        isProcess = ref(false),
        isAmountReady = ref(false),
        isAddressValid = ref(false),
        isFormValid = ref(computed(() =>
            isAmountReady.value &&
            isAddressValid.value &&
            (activeTab.value !== 2 || store.IBCSendCurrentChain !== null)
        ))


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


        // Event "close_chains_modal"
        emitter.on('close_chains_modal', closeChainsModal)

        // Event "close_tokens_modal"
        emitter.on('close_tokens_modal', closeTokensModal)

        // Event "close_send_confirm_modal"
        emitter.on('close_send_confirm_modal', closeSendConfirmModal)
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('close_chains_modal', closeChainsModal)
        emitter.off('close_tokens_modal', closeTokensModal)
        emitter.off('close_send_confirm_modal', closeSendConfirmModal)

        Telegram.WebApp.offEvent('qrTextReceived')
    })


    watch(computed(() => activeTab.value), () => {
        // Update roller params
        rollerWidth.value = tabs[activeTab.value - 1].value.offsetWidth
        rollerOffsetLeft.value = tabs[activeTab.value - 1].value.offsetLeft

        // Update data
        updateData()
    })


    watch(computed(() => store.IBCSendCurrentChain), () => {
        if (store.IBCSendCurrentChain !== null) {
            // Set user address
            address.value = convertAddress(store.currentAddress, store.IBCSendCurrentChain.info.bech32_prefix)
        }

        if (store.IBCSendCurrentChain !== null && address.value) {
            // Validate address
            validateAddress()
        }
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
        // Send message
        if (isFormValid.value && activeTab.value === 1) {
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

        // IBC send message
        if (isFormValid.value && activeTab.value === 2) {
            let channelID = null

            // Set channel id
            if (store.IBCSendCurrentChain.channel_id !== undefined) {
                channelID = store.IBCSendCurrentChain.channel_id
            } else {
                channelID = store.IBCSendCurrentChain.chain_1.chain_name === store.currentNetwork
                    ? store.IBCSendCurrentChain.channels[0].chain_1.channel_id
                    : store.IBCSendCurrentChain.channels[0].chain_2.channel_id
            }

            // Set messeges
            msgAny.value = [{
                typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
                value: {
                    sender: store.currentAddress,
                    receiver: address.value,
                    sourceChannel: channelID,
                    sourcePort: 'transfer',
                    token: {
                        denom: balance.value.denom,
                        amount: `${parseFloat(amount.value.toString().replace(',', '.')).toFixed(balance.value.exponent) * Math.pow(10, balance.value.exponent)}`
                    },
                    timeoutHeight: {},
                    timeoutTimestamp: (Date.now() + 60000) * 1e6
                }
            }]
        }
    })


    // Update data
    function updateData() {
        // Reset data
        store.IBCSendCurrentChain = null
        address.value = ''
        amount.value = ''
        isProcess.value = false
        isAmountReady.value = false
        isAddressValid.value = false

        // Remove error classes
        addressInput.value.classList.remove('error')
        addressInput.value.classList.remove('success')

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

        // Get token home chain
        if (activeTab.value === 2 && balance.value.denom.toLowerCase().startsWith('ibc/')) {
            // Get chain
            let chain = ibc
                .filter(el => (el.chain_1.chain_name === store.currentNetwork && el.chain_2.chain_name === balance.value.chain_info.chain_name) || (el.chain_2.chain_name === store.currentNetwork && el.chain_1.chain_name === balance.value.chain_info.chain_name))
                .filter((el, index, self) =>
                    self.findIndex(t =>
                        (t.chain_1.chain_name === el.chain_1.chain_name && t.chain_2.chain_name === el.chain_2.chain_name) ||
                        (t.chain_1.chain_name === el.chain_2.chain_name && t.chain_2.chain_name === el.chain_1.chain_name)
                    ) === index
                )

            if(chain.length) {
                // Get chain name
                chain[0].info = balance.value.chain_info

                // Set data
                store.IBCSendCurrentChain = chain[0]
            }

            // Set user address
            address.value = convertAddress(store.currentAddress, balance.value.chain_info.bech32_prefix)
        }

        // Close any modal
        emitter.emit('update_data')
    }


    // Validate address
    function validateAddress() {
        // Address status
        isAddressValid.value = false

        try {
            let { prefix, data } = fromBech32(address.value)

            // For send
            if (activeTab.value === 1) {
                // Check
                if (prefix === store.networks[store.currentNetwork].prefix && data.length == store.networks[store.currentNetwork].address_length) {
                    // Toggle classes
                    addressInput.value.classList.remove('error')
                    addressInput.value.classList.add('success')

                    // Address status
                    setTimeout(() => isAddressValid.value = true)
                } else {
                    // Toggle classes
                    addressInput.value.classList.remove('success')
                    addressInput.value.classList.add('error')
                }
            }

            // For IBC send
            if (activeTab.value === 2) {
                if (store.IBCSendCurrentChain !== null && store.IBCSendCurrentChain.channel_id === undefined) {
                    // Check
                    if (prefix === store.IBCSendCurrentChain.info.bech32_prefix) {
                        // Toggle classes
                        addressInput.value.classList.remove('error')
                        addressInput.value.classList.add('success')

                        // Address status
                        setTimeout(() => isAddressValid.value = true)
                    } else {
                        // Toggle classes
                        addressInput.value.classList.remove('success')
                        addressInput.value.classList.add('error')
                    }
                } else {
                    // Toggle classes
                    addressInput.value.classList.remove('success')
                    addressInput.value.classList.remove('error')

                    // Address status
                    setTimeout(() => isAddressValid.value = true)
                }
            }
        } catch (error) {
            if (store.IBCSendCurrentChain?.channel_id === undefined) {
                // Toggle classes
                addressInput.value.classList.remove('success')
                addressInput.value.classList.add('error')
            }
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
            // Separator replacement
            Number(String(amount.value).replace(/,/g, "."))

            // Negative value
            if (String(amount.value).length && amount.value < 0) {
                // Set empty
                amount.value = ''
            }

            // Acceptable value
            if (amount.value && amount.value > 0 && amount.value < formatTokenAmount(balance.value.amount, balance.value.exponent)) {
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

                // For send
                if (activeTab.value === 1) {
                    // Check
                    if (prefix == store.networks[store.currentNetwork].prefix && data.length == store.networks[store.currentNetwork].address_length) {
                        // Set data
                        address.value = clipboardData

                        // Validate address
                        validateAddress()
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
                }

                // For IBC send
                if (activeTab.value === 2 && store.IBCSendCurrentChain !== null && store.IBCSendCurrentChain.channel_id === undefined) {
                    // Check
                    if (prefix === store.IBCSendCurrentChain.info.bech32_prefix) {
                        // Set data
                        address.value = clipboardData

                        // Validate address
                        validateAddress()
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
                } else {
                    // Set data
                    address.value = clipboardData
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


    // Open chains modal
    function openChainsModal() {
        // Show chains modal
        showChainsModal.value = true
    }


    // Close chains modal
    function closeChainsModal() {
        // Hide send confirm modal
        showChainsModal.value = false
    }


    // Open tokens modal
    function openTokensModal() {
        // Show tokens modal
        showTokensModal.value = true
    }


    // Close tokens modal
    function closeTokensModal() {
        // Hide tokens modal
        showTokensModal.value = false
    }


    // Close send confirm modal
    function closeSendConfirmModal() {
        // Hide send confirm modal
        showSendConfirmModal.value = false
    }
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

        width: 100%;
        height: 100%;
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


    .destination_chain .info_wrap.disabled,
    .destination_chain .chain_wrap.disabled
    {
        pointer-events: none;
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


    .destination_chain .disabled .chain .arr
    {
        display: none;
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
        margin-bottom: auto;
        padding-bottom: 40px;
    }


    .amount_field .cost
    {
        margin-left: auto;

        color: rgba(255, 255, 255, .70);
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