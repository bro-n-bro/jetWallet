<template>
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <button class="close_btn" @click.prevent="emitter.emit('close_stats_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <div class="modal_title">
                    {{ $t('message.stats_title') }}
                </div>

                <div class="info_wrap">
                    <div class="info">
                        <div>
                            <div class="label">
                                {{ $t('message.stats_token_label') }}
                            </div>

                            <div class="val">
                                <img :src="getNetworkLogo(store.networks[store.currentNetwork].chain_id)" alt="">

                                <span>{{ store.networks[store.currentNetwork].token_name }}</span>
                            </div>
                        </div>

                        <div>
                            <div class="label">
                                {{ $t('message.stats_availabel_label') }}
                            </div>

                            <div class="val">
                                {{ formatTokenAmount(calcAvailabelAmount(), store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }}

                                {{ store.networks[store.currentNetwork].token_name }}

                                <div class="cost">
                                    ({{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, calcAvailabelAmount(), store.networks[store.currentNetwork].exponent)) }}{{ store.currentCurrencySymbol }})
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="label">
                                {{ $t('message.stats_staked_label') }}
                            </div>

                            <div class="val">
                                {{ formatTokenAmount(calcStakedAmount(), store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }}

                                {{ store.networks[store.currentNetwork].token_name }}

                                <div class="cost">
                                    ({{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, calcStakedAmount(), store.networks[store.currentNetwork].exponent)) }}{{ store.currentCurrencySymbol }})
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="label">
                                {{ $t('message.stats_personal_apr_label') }}
                            </div>

                            <div class="val gradient">
                                {{ personalAPR.toFixed(2) }}%
                            </div>
                        </div>

                        <div>
                            <div class="label">
                                {{ $t('message.stats_daily_profit_label') }}
                            </div>

                            <div class="val">
                                {{ formatTokenAmount(dailyProfit, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 3 }).replace(',', '.') }}

                                {{ store.networks[store.currentNetwork].token_name }}

                                <div class="cost">
                                    ({{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, dailyProfit, store.networks[store.currentNetwork].exponent)) }}{{ store.currentCurrencySymbol }})
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="overlay" @click.prevent="emitter.emit('close_stats_modal')"></div>
    </section>
</template>


<script setup>
    import { ref, inject, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { formatTokenAmount, formatTokenCost, calcTokenCost, calcStakedAmount, getNetworkLogo, calcAvailabelAmount } from '@/utils'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        personalAPR = ref(0),
        dailyProfit = ref(0)


    onBeforeMount(async () => {
        // Calc personal APR
        await calcPersonalAPR()

        // Calc daily profit
        calcDailyProfit()
    })


    // Calc personal APR
    async function calcPersonalAPR() {
        let aprs = []

        // Calc
        if (store.stakedBalances.length) {
            // Calc APR with validator commission
            store.stakedBalances.forEach(balance => aprs.push(
                (store.networks[store.currentNetwork].APR * 100) - (store.networks[store.currentNetwork].APR * 100 * balance.validator_info.commission.commission_rates.rate))
            )

            // Calc sum
            let sum = aprs.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

            // Average
            personalAPR.value = sum / aprs.length
        }
    }


    // Calc daily profit
    function calcDailyProfit() {
        // Calc
        dailyProfit.value = calcStakedAmount() * (personalAPR.value / 100) / 365
    }
</script>


<style scoped>
    .modal_title
    {
        padding-left: 10px;
    }



    .info_wrap
    {
        margin-top: 16px;
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



    .info > *
    {
        font-size: 16px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-between;

        white-space: nowrap;
    }


    .info > * + *
    {
        margin-top: 8px;
    }


    .info .val
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;

        margin-left: 20px;

        text-align: right;
    }


    .info .val.gradient
    {
        background: linear-gradient(180deg, #dd93fe 0%, #aa36de 100%);
        -webkit-background-clip: text;
                background-clip: text;

        -webkit-text-fill-color: transparent;
    }


    .info .val img
    {
        display: block;

        width: 18px;
        height: 18px;
        margin-right: 4px;

        border-radius: 50%;
    }


    .info .val .cost
    {
        margin-left: 4px;

        color: #836b9e;
    }
</style>