<template>
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <button class="close_btn" @click.prevent="emitter.emit('close_tx_fee_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <div class="modal_title">
                    {{ $t('message.tx_fee_modal_title') }}
                </div>


                <div class="fee_tier">
                    <div class="label">
                        <span>{{ $t('message.tx_fee_fee_tier_label') }}</span>

                        <button class="toggle_btn" :class="{ enabled: store.TxFee.remember }" @click.prevent="store.TxFee.remember = !store.TxFee.remember">
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

                    <div class="vals_wrap">
                        <div class="vals">
                            <button class="btn" :class="{ active: store.TxFee.currentPrice === 'Low' }" @click.prevent="store.TxFee.currentPrice = 'Low'">
                                <div class="name">
                                    {{ $t('message.tx_fee_low_label') }}
                                </div>

                                <div class="cost"><$0.01</div>

                                <div class="amount">
                                    {{ store.TxFee.priceLow }}
                                </div>

                                <div class="denom">
                                    {{ store.TxFee.currentSymbol }}
                                </div>
                            </button>

                            <button class="btn" :class="{ active: store.TxFee.currentPrice === 'Average' }" @click.prevent="store.TxFee.currentPrice = 'Average'">
                                <div class="name">
                                    {{ $t('message.tx_fee_average_label') }}
                                </div>

                                <div class="cost"><$0.01</div>

                                <div class="amount">
                                    {{ store.TxFee.priceAverage }}
                                </div>

                                <div class="denom">
                                    {{ store.TxFee.currentSymbol }}
                                </div>
                            </button>

                            <button class="btn" :class="{ active: store.TxFee.currentPrice === 'High' }" @click.prevent="store.TxFee.currentPrice = 'High'">
                                <div class="name">
                                    {{ $t('message.tx_fee_high_label') }}
                                </div>

                                <div class="cost"><$0.01</div>

                                <div class="amount">
                                    {{ store.TxFee.priceHigh }}
                                </div>

                                <div class="denom">
                                    {{ store.TxFee.currentSymbol }}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>


                <div class="fee_token">
                    <div class="label">
                        {{ $t('message.tx_fee_fee_token_label') }}
                    </div>

                    <div class="field">
                        <input type="text" class="input big" :value="store.TxFee.currentSymbol" readonly>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
                    </div>
                </div>


                <div class="gas_adjustment">
                    <div class="label">
                        <span>{{ $t('message.tx_fee_gas_adjustment_label') }}</span>

                        <button class="toggle_btn" :class="{ enabled: store.TxFee.gasAdjustmentAuto }" @click.prevent="store.TxFee.gasAdjustmentAuto = !store.TxFee.gasAdjustmentAuto">
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

                    <div class="field">
                        <input type="number" class="input big" v-model="gasAdjustment" :disabled="store.TxFee.gasAdjustmentAuto">
                    </div>
                </div>


                <div class="btns">
                    <button class="btn" @click.prevent="emitter.emit('close_tx_fee_modal')">
                        <span>{{ $t('message.btn_close') }}</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="overlay" @click.prevent="emitter.emit('close_tx_fee_modal')"></div>
    </section>
</template>


<script setup>
    import { inject, ref, computed } from 'vue'
    import { useGlobalStore } from '@/store'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        gasAdjustment = computed(() => store.TxFee.gasAdjustmentAuto ? store.networks[store.currentNetwork].gas_adjustment : ref(''))
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


    .fee_tier .vals .btn.active
    {
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