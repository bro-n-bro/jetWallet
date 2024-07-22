<template>
    <section class="claim_rewards">
        <div class="cont">
            <div class="data_wrap">
                <div class="data">
                    <!-- <pre>{{ store.rewardsBalances }}</pre> -->

                    <Loader v-if="!store.isRewardsGot" />

                    <template v-else>
                    <div class="info">
                        <div class="title">
                            {{ $t('message.claim_rewards_title') }}
                        </div>

                        <div class="cost">
                            ~ <div class="odometer" v-odometer="rewardsCost"></div> {{ store.currentCurrencySymbol }}
                        </div>
                    </div>

                    <button class="btn">
                        {{ $t('message.btn_claim') }}
                    </button>

                    <button class="spoler_btn" @click.prevent="showDropdown = !showDropdown" :class="{ active: showDropdown }">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                    </button>

                    <div class="dropdown" v-show="showDropdown">
                        <div class="list">
                            <div class="token_wrap" v-for="(balance, index) in filteredRewardsBalances" :key="index" :style="`order: ${parseInt(calcTokenCost(balance.token_info.symbol, balance.amount, balance.exponent) * -1000000)};`">
                                <div class="token">
                                    <div class="logo">
                                        <img :src="balance.token_info.logo_URIs.svg" :alt="balance.token_info.name" loading="lazy">
                                    </div>

                                    <div>
                                        <div class="denom">
                                            {{ balance.token_info.symbol }}
                                        </div>

                                        <div class="cost">
                                            {{ formatTokenCost(calcTokenCost(balance.token_info.symbol, balance.amount, balance.exponent)) }} {{ store.currentCurrencySymbol }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, onBeforeMount, watch, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { formatTokenCost, calcTokenCost, calcRewardsBalancesCost, calcStakedBalancesCost } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        showDropdown = ref(false),
        rewardsCost = ref(0),
        secondProfit = ref(0),
        stakedBalancesCost = ref(0),
        filteredRewardsBalances = ref(store.rewardsBalances.filter(balance => balance.chain_info.chain_id == store.networks[store.currentNetwork].chain_id))


    onBeforeMount(async () => {
        // Get rewards
        if (store.isInitialized) {
            await store.getRewards()
        }
    })


    watch(computed(() => store.isInitialized), async () => {
        // Get rewards
        await store.getRewards()
    })


    watch(computed(() => store.isStakedBalancesGot), () => {
        // Get Staked balances cost
        stakedBalancesCost.value = calcStakedBalancesCost()

        // Set second percent
        secondProfit.value = stakedBalancesCost.value * store.networks[store.currentNetwork].APR / (365 * 24 * 60 * 60)

        console.log(secondProfit.value)
    })


    watch(computed(() => store.isRewardsGot), () => {
        // Set rewards cost
        rewardsCost.value = calcRewardsBalancesCost()

        // Update rewards cost
        setInterval(() => rewardsCost.value += secondProfit.value * 3, 3000)
    })
</script>


<style scoped>
.claim_rewards
{
    position: relative;
    z-index: 9;

    padding-top: 12px;

    background: #170232;
}


.data_wrap
{
    padding: 1px;

    border-radius: 12px;
    background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
}


.data
{
    position: relative;

    display: flex;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;

    padding: 5px 9px;

    border-radius: 11px;
    background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
}



.loader_wrap
{
    position: relative;

    height: 63.23px;

    background: none;
}



.title
{
    font-size: 14px;
    font-weight: 500;

    color: #b78ce6;
}



.cost
{
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;

    white-space: nowrap;
}


.cost .odometer
{
    margin: 0 4px;
}



.btn
{
    font-size: 16px;
    font-weight: 700;
    line-height: 100%;

    width: 71px;
    height: 34px;
    margin-left: auto;

    border-radius: 8px;
    background: #5b3895;
}



.spoler_btn
{
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
    height: 22px;
}


.spoler_btn .icon
{
    display: block;

    width: 10px;
    height: 11px;

    transition: .2s linear;
}


.spoler_btn.active .icon
{
    transform: rotate(180deg);
}



.list
{
    display: flex;
    flex-direction: column;
}



.token
{
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
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


.token .logo + *
{
    width: calc(100% - 63px);
}


.token .denom
{
    font-size: 16px;
    font-weight: 500;

    text-transform: uppercase;
}


.token .price
{
    font-size: 16px;
    font-weight: 500;
}


</style>