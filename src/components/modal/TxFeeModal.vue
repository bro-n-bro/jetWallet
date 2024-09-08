<template>
    <!-- Tx fee modal -->
    <section class="modal">
        <div class="modal_content">
            <!-- Tx fee modal data -->
            <div class="data">
                <!-- Back button -->
                <button class="close_btn" @click.prevent="emitter.emit('close_tx_fee_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.tx_fee_modal_title') }}
                </div>


                <!-- Fee tier -->
                <div class="fee_tier">
                    <div class="label">
                        <!-- Fee tier label -->
                        <span>{{ $t('message.tx_fee_fee_tier_label') }}</span>

                        <!-- Fee tier toggle button -->
                        <button class="toggle_btn" :class="{ enabled: store.TxFee.isRemember }" @click.prevent="store.TxFee.isRemember = !store.TxFee.isRemember">
                            <span>{{ $t('message.tx_fee_remember_label') }}</span>

                            <div class="toggle_wrap">
                                <div class="toggle">
                                    <div class="ball_wrap">
                                        <div class="ball"><svg><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg></div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    <!-- Fee tier values -->
                    <div class="vals_wrap">
                        <div class="vals">
                            <!-- Fee tier values button -->
                            <button class="btn" ref="level_low" :class="{ active: store.TxFee.currentLevel === 'low' }" @click.prevent="store.TxFee.currentLevel = 'low'">
                                <!-- Fee tier values name -->
                                <div class="name">
                                    {{ $t('message.tx_fee_low_label') }}
                                </div>

                                <!-- Fee tier values cost -->
                                <div class="cost">
                                    ~ {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, store.TxFee.userGasAmount * store.TxFee.lowPrice, store.networks[store.currentNetwork].exponent, 'USD'), 'USD') }}$
                                </div>

                                <!-- Fee tier values amount -->
                                <div class="amount">
                                    {{ formatTokenAmount(store.TxFee.userGasAmount * store.TxFee.lowPrice, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }}
                                </div>

                                <!-- Fee tier values denom -->
                                <div class="denom">
                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>
                            </button>

                            <!-- Fee tier values button -->
                            <button class="btn" ref="level_average" :class="{ active: store.TxFee.currentLevel === 'average' }" @click.prevent="store.TxFee.currentLevel = 'average'">
                                <!-- Fee tier values name -->
                                <div class="name">
                                    {{ $t('message.tx_fee_average_label') }}
                                </div>

                                <!-- Fee tier values cost -->
                                <div class="cost">
                                    ~ {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, store.TxFee.userGasAmount * store.TxFee.averagePrice, store.networks[store.currentNetwork].exponent, 'USD'), 'USD') }}$
                                </div>

                                <!-- Fee tier values amount -->
                                <div class="amount">
                                    {{ formatTokenAmount(store.TxFee.userGasAmount * store.TxFee.averagePrice, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }}
                                </div>

                                <!-- Fee tier values denom -->
                                <div class="denom">
                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>
                            </button>

                            <!-- Fee tier values button -->
                            <button class="btn" ref="level_high" :class="{ active: store.TxFee.currentLevel === 'high' }" @click.prevent="store.TxFee.currentLevel = 'high'">
                                <!-- Fee tier values name -->
                                <div class="name">
                                    {{ $t('message.tx_fee_high_label') }}
                                </div>

                                <!-- Fee tier values cost -->
                                <div class="cost">
                                    ~ {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, store.TxFee.userGasAmount * store.TxFee.highPrice, store.networks[store.currentNetwork].exponent, 'USD'), 'USD') }}$
                                </div>

                                <!-- Fee tier values amount -->
                                <div class="amount">
                                    {{ formatTokenAmount(store.TxFee.userGasAmount * store.TxFee.highPrice, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }}
                                </div>

                                <!-- Fee tier values denom -->
                                <div class="denom">
                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>
                            </button>

                            <!-- Roller -->
                            <div class="roller" :style="`width: ${rollerWidth}px; left: ${rollerOffsetLeft}px;`">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Fee token -->
                <div class="fee_token">
                    <!-- Fee token label -->
                    <div class="label">
                        {{ $t('message.tx_fee_fee_token_label') }}
                    </div>

                    <div class="field">
                        <!-- Fee token field -->
                        <input type="text" class="input big" :value="store.networks[store.currentNetwork].token_name" readonly
                            @focus="emitter.emit('show_keyboard')"
                            @blur="emitter.emit('hide_keyboard')">

                        <!-- <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg> -->
                    </div>
                </div>


                <!-- Gas adjustment -->
                <div class="gas_adjustment">
                    <div class="label">
                        <!-- Gas adjustment label -->
                        <span v-if="store.TxFee.isGasAdjustmentAuto">{{ $t('message.tx_fee_gas_adjustment_label') }}</span>
                        <span v-else>{{ $t('message.tx_fee_gas_amount_label') }}</span>

                        <!-- Gas adjustment toggle button -->
                        <button class="toggle_btn" :class="{ enabled: store.TxFee.isGasAdjustmentAuto }" @click.prevent="store.TxFee.isGasAdjustmentAuto = !store.TxFee.isGasAdjustmentAuto">
                            <span>{{ $t('message.tx_fee_auto_label') }}</span>

                            <div class="toggle_wrap">
                                <div class="toggle">
                                    <div class="ball_wrap">
                                        <div class="ball"><svg><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg></div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div class="field" v-if="store.TxFee.isGasAdjustmentAuto">
                        <!-- Gas adjustment field -->
                        <input type="number" class="input big" :value="store.networks[store.currentNetwork].gas_adjustment" disabled
                            @focus="emitter.emit('show_keyboard')"
                            @blur="emitter.emit('hide_keyboard')">
                    </div>

                    <div class="field" v-else>
                        <!-- Gas adjustment field -->
                        <input type="number" inputmode="numeric" class="input big" v-model="store.TxFee.userGasAmount" maxlength="10"
                            @focus="emitter.emit('show_keyboard')"
                            @blur="emitter.emit('hide_keyboard')"
                            @input="validateUserGasAmount($event)">
                    </div>
                </div>


                <!-- Gas adjustment buttons -->
                <div class="btns">
                    <!-- Close button -->
                    <button class="btn" @click.prevent="emitter.emit('close_tx_fee_modal')">
                        <span>{{ $t('message.btn_close') }}</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, inject, watch, computed, onMounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { calcTokenCost, formatTokenCost, formatTokenAmount } from '@/utils'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        level_low = ref(null),
        level_average = ref(null),
        level_high = ref(null),
        levels = {
            low: level_low,
            average: level_average,
            high: level_high
        },
        rollerWidth = ref(null),
        rollerOffsetLeft = ref(null)


    onMounted(() => {
        // Set roller params
        rollerWidth.value = levels[store.TxFee.currentLevel].value.offsetWidth
        rollerOffsetLeft.value = levels[store.TxFee.currentLevel].value.offsetLeft
    })


    watch(computed(() => store.TxFee.currentLevel), () => {
        // Update roller params
        rollerWidth.value = levels[store.TxFee.currentLevel].value.offsetWidth
        rollerOffsetLeft.value = levels[store.TxFee.currentLevel].value.offsetLeft
    })


    watch(computed(() => store.TxFee.isGasAdjustmentAuto), () => {
        // Default gas amount
        store.TxFee.userGasAmount = store.TxFee.gasAmount
    })


    watch(computed(() => store.TxFee.userGasAmount), () => {
        // Enough status
        store.TxFeeIsEnough()
    })


    // Validate user gas amount
    function validateUserGasAmount(e) {
        // Empty or zero
        if (e.target.value <= 0) {
            // Set simulated gas amount
            store.TxFee.userGasAmount = store.TxFee.gasAmount
        }
    }
</script>


<style scoped>
    .modal_title
    {
        margin-bottom: 18px;
    }



    .label
    {
        font-size: 14px;

        margin-bottom: 2px;
        padding: 0 10px;
    }



    .fee_tier .label
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
    }


    .fee_tier .vals_wrap
    {
        margin-top: 4px;
        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #5d33ce 0%,#200750 100%);
    }


    .fee_tier .vals
    {
        position: relative;

        display: flex;
        align-content: stretch;
        align-items: stretch;
        flex-wrap: nowrap;
        justify-content: flex-start;

        padding: 6px;

        border-radius: 9px;
        background: #170232;
    }


    .fee_tier .vals .btn
    {
        position: relative;
        z-index: 2;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 100%;
        padding: 6px 8px;

        text-align: center;

        border-radius: 4px;
    }


    .fee_tier .vals .name
    {
        font-size: 16px;
        font-weight: 500;

        width: 100%;
        padding: 2px 0;
    }


    .fee_tier .vals .cost
    {
        font-size: 12px;

        width: 100%;
        margin-top: 2px;

        opacity: .6;
    }


    .fee_tier .vals .amount,
    .fee_tier .vals .denom
    {
        font-weight: 500;

        margin-top: 2px;
        padding: 2px 0;

        white-space: nowrap;
    }


    .fee_tier .vals .denom
    {
        margin-left: 4px;
    }


    .fee_tier .roller
    {
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        left: 6px;

        height: calc(100% - 12px);
        margin: auto 0;
        padding: 1px;

        transition: .2s linear;

        border-radius: 4px;
        background: linear-gradient(to bottom,  #7544ff 0%,#1a0242 100%);
    }


    .fee_tier .roller span
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: 3px;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }



    .fee_token
    {
        margin-top: 10px;
    }



    .gas_adjustment
    {
        margin-top: 10px;
    }


    .gas_adjustment .label
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
    }



    .field .arr
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



    .toggle_wrap
    {
        margin-left: 10px;
        padding: 1px;

        border-radius: 19px;
        background: linear-gradient(to bottom,  #45097d 0%,#14012f 100%);
    }


    .toggle
    {
        position: relative;

        width: 46px;
        height: 22px;

        border-radius: 19px;
        background: #170232;
    }


    .ball_wrap
    {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 2px;

        width: 18px;
        height: 18px;
        margin: auto 0;
        padding: 1px;

        transition: left .2s linear;

        border-radius: 50%;
        background: linear-gradient(to bottom,  #8632e3 0%,#330c67 100%);
    }


    .ball
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 16px;
        height: 16px;

        color: #fff;
        border-radius: 50%;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }


    .ball svg
    {
        display: block;

        width: 10px;
        height: 10px;

        transition: opacity .2s linear;

        opacity: 0;
    }



    .toggle_btn
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        transition: color .2s linear;

        color: rgba(255,255,255,.6);
    }


    .toggle_btn.enabled
    {
        color: #fff;
    }

    .toggle_btn.enabled .ball_wrap
    {
        left: 26px;

        background: linear-gradient(to bottom,  #68def9 0%,#02294c 100%);
    }


    .toggle_btn.enabled .ball
    {
        background: linear-gradient(to bottom,  #56a8e7 0%,#064894 100%);
    }


    .toggle_btn.enabled .ball svg
    {
        opacity: 1;
    }
</style>