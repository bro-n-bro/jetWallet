<template>
    <!-- Unstake confirm modal -->
    <section class="page_container inner_page_container unstake_confirm" :class="{ closing: isClosing }">
        <!-- Loader -->
        <Loader v-if="isProcess" />

        <div class="cont">
            <!-- Unstake confirm head -->
            <div class="head">
                <!-- Back button -->
                <button class="back_btn" @click="closeHandler()">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </button>

                <!-- Unstake confirm title -->
                <div class="page_title">
                    {{ $t('message.unstake_confirm_page_title') }}
                </div>
            </div>


            <!-- Unstake confirm data -->
            <div class="data">
                <!-- Unstake confirm label -->
                <div class="field_label">
                    {{ $t('message.details_label') }}
                </div>

                <!-- Unstake confirm info -->
                <div class="info_wrap">
                    <div class="info">
                        <!-- Validator -->
                        <div class="validator">
                            <!-- Validator logo -->
                            <div class="logo">
                                <img :src="`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${store.networks[store.currentNetwork].prefix}/moniker/${store.unstakeCurrentValidator.operator_address}.png`" alt="" loading="lazy" @error="imageLoadError($event)">

                                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>
                            </div>

                            <div>
                                <!-- Validator moniker -->
                                <div class="moniker">
                                    {{ store.unstakeCurrentValidator.description.moniker }}
                                </div>

                                <!-- Validator voting power -->
                                <div class="voting_power">
                                    {{ (votingPower * 100).toFixed(2) }}% {{ $t('message.stake_confirm_voting_power') }}
                                </div>
                            </div>
                        </div>


                        <!-- Unstake confirm APR -->
                        <div class="apr">
                            <span>
                                <!-- Unstake confirm APR label -->
                                {{ $t('message.stake_APR_label') }}<br>

                                <!-- Unstake confirm value -->
                                {{ ((store.networks[store.currentNetwork].APR * 100) - (store.networks[store.currentNetwork].APR * 100 * store.unstakeCurrentValidator.commission.commission_rates.rate)).toFixed(2) }}%
                            </span>
                        </div>


                        <!-- Unstake confirm features -->
                        <div class="features">
                            <!-- Unstake confirm feature -->
                            <div>
                                <!-- Unstake confirm features label -->
                                <div class="label">
                                    {{ $t('message.stake_confirm_token_label') }}
                                </div>

                                <!-- Unstake confirm features value -->
                                <div class="val">
                                    <img :src="getNetworkLogo(store.networks[store.currentNetwork].chain_id)" alt="">

                                    <span>{{ store.networks[store.currentNetwork].token_name }}</span>
                                </div>
                            </div>

                            <!-- Unstake confirm feature -->
                            <div>
                                <!-- Unstake confirm features label -->
                                <div class="label">
                                    {{ $t('message.stake_confirm_amount_label') }}
                                </div>

                                <!-- Unstake confirm features value -->
                                <div class="val">
                                    {{ props.amount }}

                                    {{ store.networks[store.currentNetwork].token_name }}

                                    <span class="cost">
                                        ({{ formatTokenCost(currencyConversion(props.amount, store.networks[store.currentNetwork].token_name)) }}{{ store.currentCurrencySymbol }})
                                    </span>
                                </div>
                            </div>

                            <!-- Unstake confirm feature -->
                            <div>
                                <!-- Unstake confirm features label -->
                                <div class="label">
                                    {{ $t('message.stake_confirm_commission_label') }}
                                </div>

                                <!-- Unstake confirm features value -->
                                <div class="val">
                                    {{ (store.unstakeCurrentValidator.commission.commission_rates.rate * 100).toLocaleString('ru-RU', { maximumFractionDigits: 2 }).replace(',', '.') }}%
                                </div>
                            </div>

                            <!-- Unstake confirm feature -->
                            <div>
                                <!-- Unstake confirm features label -->
                                <div class="label">
                                    {{ $t('message.stake_confirm_unbonding_period_label') }}
                                </div>

                                <!-- Unstake confirm features value -->
                                <div class="val">
                                    {{ store.networks[store.currentNetwork].unbondingTime }}

                                    {{ $t('message.stake_unbonding_time_unit') }}
                                </div>
                            </div>

                            <!-- Unstake confirm feature -->
                            <div>
                                <!-- Unstake confirm features label -->
                                <div class="label">
                                    {{ $t('message.stake_confirm_fee_label') }}
                                </div>

                                <!-- Unstake confirm features value -->
                                <div class="val">
                                    {{ feeCost.toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }}

                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Unstake confirm memo -->
            <div class="memo">
                <!-- Unstake confirm label -->
                <div class="field_label">
                    {{ $t('message.memo_label') }}
                </div>

                <div class="field">
                    <!-- Unstake confirm field -->
                    <input type="text" class="input big" v-model="memo"
                        :placeholder="$t('message.placeholder_memo')">
                </div>
            </div>


            <!-- Unstake confirm buttons -->
            <div class="btns">
                <!-- Confirm button -->
                <button class="btn" @click.prevent="openSignTxModal()">
                    <span>{{ $t('message.btn_confirm_unstake') }}</span>
                </button>
            </div>
        </div>
    </section>


    <!-- Sign transaction modal -->
    <SignTxModal v-if="showSignTxModal"/>
</template>


<script setup>
    import { ref, inject, computed, onBeforeMount, onUnmounted, onMounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'
    import { currencyConversion, formatTokenCost, formatTokenAmount, getNetworkLogo, imageLoadError, signTx, sendTx, getExplorerLink } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'
    import SignTxModal from '@/components/modal/SignTxModal.vue'


    const props = defineProps(['amount', 'msgAny']),
        store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        i18n = inject('i18n'),
        notification = useNotification(),
        showSignTxModal = ref(false),
        votingPower = ref(0),
        memo = ref(''),
        feeCost = computed(() => formatTokenAmount(store.TxFee.userGasAmount * store.TxFee[`${store.TxFee.currentLevel}Price`], store.TxFee.balance.exponent)),
        isProcess = ref(false),
        isClosing = ref(false)


    onBeforeMount(() => {
        // Calc voting power
        calcVotingPower()
    })


    onMounted(() => {
        // Event "auth"
        emitter.on('auth', auth)

        // Event "close_sign_tx_modal"
        emitter.on('close_sign_tx_modal', closeSignTxModal)
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('auth', auth)
        emitter.off('close_sign_tx_modal', closeSignTxModal)
    })


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "close_stake_confirm_modal"
            emitter.emit('close_unstake_confirm_modal')
        }, 200)
    }


    // Calc voting power
    async function calcVotingPower() {
        try {
            // Get total bonded tokens
            await store.getTotalBondedTokens()

            // Set data
            votingPower.value = store.unstakeCurrentValidator.tokens / store.networks[store.currentNetwork].totalBondedTokens
        } catch (error) {
            console.error(`Components/Modal/UnstakeConfirmModal.vue: ${error.message}`)
        }
    }


    // Undelegate tokens
    async function undelegate() {
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
                console.error(`Components/Modal/UnstakeConfirmModal.vue: ${error.message}`)

                // Show error
                showError(error)
            })

            // Redirect
            router.push('/account')
        } catch (error) {
            console.error(`Components/Modal/UnstakeConfirmModal.vue: ${error.message}`)

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


    // Open SignTx modal
    function openSignTxModal() {
        // Show SignTx modal
        showSignTxModal.value = true

        // Update status
        store.isAnyModalOpen = true
    }


    // Close SignTx modal
    function closeSignTxModal() {
        // Show SignTx modal
        showSignTxModal.value = false

        // Update status
        store.isAnyModalOpen = false
    }


    // Auth
    function auth() {
        // Close modal
        closeHandler()

        // Undelegate tokens
        undelegate()
    }
</script>


<style scoped>
    .unstake_confirm
    {
        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        animation: .25s slideLeft forwards linear;

        background: #170232;
    }


    .unstake_confirm.closing
    {
        animation: .25s slideRight forwards linear;
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


    .features .val img
    {
        display: block;

        width: 18px;
        height: 18px;
        margin-right: 4px;

        border-radius: 50%;
    }


    .features .val .cost
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