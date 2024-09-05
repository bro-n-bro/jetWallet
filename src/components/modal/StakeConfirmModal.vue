<template>
    <!-- Stake confirm modal -->
    <section class="page_container inner_page_container stake_confirm">
        <!-- Loader -->
        <Loader v-if="isProcess" />

        <div class="cont">
            <!-- Stake confirm head -->
            <div class="head">
                <!-- Back button -->
                <button class="back_btn" @click="emitter.emit('close_stake_confirm_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </button>

                <!-- Stake confirm title -->
                <div class="page_title">
                    {{ $t('message.stake_confirm_page_title') }}
                </div>
            </div>

            <!-- Stake confirm data -->
            <div class="data">
                <!-- Stake confirm label -->
                <div class="field_label">
                    {{ $t('message.details_label') }}
                </div>

                <!-- Stake confirm info -->
                <div class="info_wrap">
                    <div class="info">
                        <!-- Validator -->
                        <div class="validator">
                            <!-- Validator logo -->
                            <div class="logo">
                                <img :src="`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${store.networks[store.currentNetwork].prefix}/moniker/${store.stakeCurrentValidator.operator_address}.png`" alt="" loading="lazy" @error="imageLoadError($event)">

                                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>
                            </div>

                            <div>
                                <!-- Validator moniker -->
                                <div class="moniker">
                                    {{ store.stakeCurrentValidator.description.moniker }}
                                </div>

                                <!-- Validator voting power -->
                                <div class="voting_power">
                                    {{ (votingPower * 100).toFixed(2) }}% {{ $t('message.stake_confirm_voting_power') }}
                                </div>
                            </div>
                        </div>

                        <!-- Validator APR -->
                        <div class="apr">
                            <span>
                                <!-- Validator APR label -->
                                {{ $t('message.stake_APR_label') }}<br>

                                <!-- Validator APR value -->
                                {{ ((store.networks[store.currentNetwork].APR * 100) - (store.networks[store.currentNetwork].APR * 100 * store.stakeCurrentValidator.commission.commission_rates.rate)).toFixed(2) }}%
                            </span>
                        </div>

                        <!-- Stake confirm features -->
                        <div class="features">
                            <!-- Stake confirm feature -->
                            <div>
                                <!-- Stake confirm feature label -->
                                <div class="label">
                                    {{ $t('message.stake_confirm_token_label') }}
                                </div>

                                <!-- Stake confirm feature value -->
                                <div class="val">
                                    <img :src="getNetworkLogo(store.networks[store.currentNetwork].chain_id)" alt="">

                                    <span>{{ store.networks[store.currentNetwork].token_name }}</span>
                                </div>
                            </div>

                            <!-- Stake confirm feature -->
                            <div>
                                <!-- Stake confirm feature label -->
                                <div class="label">
                                    {{ $t('message.stake_confirm_amount_label') }}
                                </div>

                                <!-- Stake confirm feature value -->
                                <div class="val">
                                    {{ props.amount }}

                                    {{ store.networks[store.currentNetwork].token_name }}

                                    <span class="currency">
                                        ({{ formatTokenCost(currencyConversion(props.amount, store.networks[store.currentNetwork].token_name)) }}{{ store.currentCurrencySymbol }})
                                    </span>
                                </div>
                            </div>

                            <!-- Stake confirm feature -->
                            <div>
                                <!-- Stake confirm feature label -->
                                <div class="label">
                                    {{ $t('message.stake_confirm_daily_profit_label') }}
                                </div>

                                <!-- Stake confirm feature value -->
                                <div class="val">
                                    ~{{ dailyProfit.toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }}

                                    {{ store.networks[store.currentNetwork].token_name }}

                                    <span class="currency">({{ formatTokenCost(currencyConversion(dailyProfit, store.networks[store.currentNetwork].token_name)) }}{{ store.currentCurrencySymbol }})</span>
                                </div>
                            </div>

                            <!-- Stake confirm feature -->
                            <div>
                                <!-- Stake confirm feature label -->
                                <div class="label">
                                    {{ $t('message.stake_confirm_commission_label') }}
                                </div>

                                <!-- Stake confirm feature value -->
                                <div class="val">
                                    {{ (store.stakeCurrentValidator.commission.commission_rates.rate * 100).toLocaleString('ru-RU', { maximumFractionDigits: 2 }).replace(',', '.') }}%
                                </div>
                            </div>

                            <!-- Stake confirm feature -->
                            <div>
                                <!-- Stake confirm feature label -->
                                <div class="label">
                                    {{ $t('message.stake_confirm_unbonding_period_label') }}
                                </div>

                                <!-- Stake confirm feature value -->
                                <div class="val">
                                    {{ store.networks[store.currentNetwork].unbondingTime }}

                                    {{ $t('message.stake_unbonding_time_unit') }}
                                </div>
                            </div>

                            <!-- Stake confirm feature -->
                            <div>
                                <!-- Stake confirm feature label -->
                                <div class="label">
                                    {{ $t('message.stake_confirm_fee_label') }}
                                </div>

                                <!-- Stake confirm feature value -->
                                <div class="val">
                                    {{ feeCost.toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }}

                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Stake confirm memo -->
            <div class="memo">
                <!-- Stake confirm memo label -->
                <div class="field_label">
                    {{ $t('message.memo_label') }}
                </div>

                <div class="field">
                    <!-- Stake confirm memo field -->
                    <input type="text" class="input big" v-model="memo"
                        @focus="emitter.emit('show_keyboard')"
                        @blur="emitter.emit('hide_keyboard')">
                </div>
            </div>


            <!-- Stake confirm buttons -->
            <div class="btns">
                <!-- Confirm button -->
                <button class="btn" @click.prevent="showSignTxModal = true">
                    <span>{{ $t('message.btn_confirm_stake') }}</span>
                </button>
            </div>
        </div>
    </section>


    <!-- Sign transaction -->
    <SignTx v-if="showSignTxModal"/>
</template>


<script setup>
    import { ref, inject, computed, onBeforeMount, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'
    import { currencyConversion, formatTokenCost, formatTokenAmount, getNetworkLogo, imageLoadError, signTx, sendTx, getExplorerLink } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'
    import SignTx from '@/components/modal/SignTx.vue'


    const props = defineProps(['amount', 'msgAny']),
        store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        i18n = inject('i18n'),
        notification = useNotification(),
        showSignTxModal = ref(false),
        votingPower = ref(0),
        dailyProfit = ref(0),
        memo = ref(''),
        feeCost = computed(() => formatTokenAmount(store.TxFee.userGasAmount * store.TxFee[`${store.TxFee.currentLevel}Price`], store.TxFee.balance.exponent)),
        isProcess = ref(false)


    onBeforeMount(() => {
        // Calc voting power
        calcVotingPower()

        // Calc daily profit
        calcDailyProfit()
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('auth')
        emitter.off('close_sign_tx_modal')
    })


    // Calc voting power
    async function calcVotingPower() {
        // Get total bonded tokens
        await store.getTotalBondedTokens()

        // Set data
        votingPower.value = store.stakeCurrentValidator.tokens / store.networks[store.currentNetwork].totalBondedTokens
    }


    // Calc daily profit
    function calcDailyProfit() {
        // Set data
        dailyProfit.value = props.amount * ((store.networks[store.currentNetwork].APR - store.networks[store.currentNetwork].APR * store.stakeCurrentValidator.commission.commission_rates.rate) / 100) / 365
    }


    // Delegate tokens
    async function delegate() {
        // Set process status
        isProcess.value = true

        try {
            // Update TxFee info
            if (store.TxFee.isRemember) {
                await store.updateTxFeeInfo()
            }

            // Sign Tx
            let txBytes = await signTx(props.msgAny, memo.value)

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

            // Check Tx result
            store.checkTxResult()

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


    // Event "auth"
    emitter.on('auth', () => {
        // Hide SignTx modal
        showSignTxModal.value = false

        // Delegate tokens
        delegate()
    })


    // Event "close_sign_tx_modal"
    emitter.on('close_sign_tx_modal', () => {
        // Hide SignTx modal
        showSignTxModal.value = false
    })
</script>


<style scoped>
    .stake_confirm
    {
        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: #170232;
    }



    .info_wrap
    {
        padding: 1px;

        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .info
    {
        position: relative;

        padding: 7px 9px;

        border-radius: 11px;
        background: #06000e;
    }



    .validator
    {
        display: flex;
        align-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-bottom: 20px;
        padding-right: 60px;
    }


    .validator .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 38px;
        height: 38px;
        margin-right: 6px;
        padding: 6px;

        border-radius: 50%;
        background: #950fff;
    }


    .validator .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: inherit;
    }


    .validator .logo .icon
    {
        display: none;

        width: 24px;
        height: 24px;
    }


    .validator .logo img.hide
    {
        display: none;
    }

    .validator .logo img.hide + .icon
    {
        display: block;
    }


    .validator .logo + *
    {
        align-self: center;

        width: calc(100% - 44px);
    }


    .validator .moniker
    {
        font-size: 16px;
        font-weight: 500;

        overflow: hidden;

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .validator .voting_power
    {
        font-size: 12px;
        font-weight: 200;
    }



    .apr
    {
        font-size: 12px;

        position: absolute;
        top: 9px;
        right: 9px;

        padding: 2px 6px;

        text-align: center;

        border-radius: 4px;
        background: #170232;
    }


    .apr span
    {
        display: block;

        background: linear-gradient(180deg, #dd93fe 0%, #aa36de 100%);
        -webkit-background-clip: text;
                background-clip: text;

        -webkit-text-fill-color: transparent;
    }



    .features > *
    {
        font-size: 16px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
    }


    .features > * + *
    {
        margin-top: 8px;
    }


    .features .val
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;
    }


    .features .label
    {
        font-size: inherit;

        display: block;

        margin: 0;
        padding: 0;
    }


    .features .val img
    {
        display: block;

        width: 18px;
        height: 18px;
        margin-right: 4px;

        border-radius: 50%;
    }


    .features .val .currency
    {
        color: #836b9e;
    }



    .memo
    {
        margin-top: 12px;
        margin-bottom: auto;
    }



    .field
    {
        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #5d33ce 0%,#200750 100%);
    }


    .input
    {
        border-radius: 9px;
        background: #06000e;
    }
</style>