<template>
    <section class="claim_rewards">
        <div class="cont">
            <div class="data_wrap">
                <div class="data">
                    <Loader v-if="!store.isRewardsGot" />

                    <template v-else>
                    <div class="info">
                        <div class="title">
                            {{ $t('message.claim_rewards_title') }}
                        </div>

                        <div class="cost">
                            ~ <div class="odometer" v-odometer="rewardsCost"></div> $
                        </div>
                    </div>

                    <router-link to="/account/claim_confirm" class="btn" :disabled="!rewardsCost">
                        <span>{{ $t('message.btn_claim') }}</span>
                    </router-link>

                    <button class="spoler_btn" @click.prevent="showDropdown = !showDropdown" :class="{ active: showDropdown }" v-if="rewardsCost">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                    </button>

                    <div class="dropdown" v-show="showDropdown">
                        <div class="list">
                            <div class="token_wrap" v-for="(balance, index) in store.rewardsBalances" :key="index" :style="`order: ${parseInt(calcTokenCost(balance.token_info.symbol, balance.amount, balance.exponent) * -1000000)};`">
                                <div class="token">
                                    <div class="logo">
                                        <img :src="balance.token_info.logo_URIs.svg" :alt="balance.token_info.name" loading="lazy">
                                    </div>

                                    <div>
                                        <div class="denom">
                                            {{ balance.token_info.symbol }}
                                        </div>

                                        <div class="cost">
                                            ~ <div class="odometer" v-odometer="rewardsCost"></div> $
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
    import { ref, watch, computed, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { calcTokenCost, calcRewardsBalancesCost, calcStakedBalancesCost } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        showDropdown = ref(false),
        rewardsCost = ref(null),
        secondProfit = ref(0),
        stakedBalancesCost = ref(0),
        intervalID = ref(null)


    onBeforeMount(() => {
        if (store.isRewardsGot) {
            // Set rewards cost
            rewardsCost.value = calcRewardsBalancesCost('USD')
        }
    })


    watch(computed(() => store.isInitialized), async () => {
        // Get rewards
        if (store.isInitialized) {
            await store.getRewards()
        }
    })


    watch(computed(() => store.isStakedBalancesGot), () => {
        if (store.isStakedBalancesGot) {
            // Get Staked balances cost
            stakedBalancesCost.value = calcStakedBalancesCost('USD')

            // Set second percent
            if (stakedBalancesCost.value) {
                secondProfit.value = stakedBalancesCost.value * store.networks[store.currentNetwork].APR / (365 * 24 * 60 * 60)
            }
        }
    })


    watch(computed(() => store.isRewardsGot), () => {
        // Clear interval
        clearInterval(intervalID.value)

        if (store.isRewardsGot) {
            // Set rewards cost
            rewardsCost.value = calcRewardsBalancesCost('USD')

            // Update rewards with timeout
            if (!rewardsCost.value && stakedBalancesCost.value) {
                setTimeout(async () => await store.getRewards(), 3000)
            }

            // Update rewards cost
            if (rewardsCost.value !== null) {
                intervalID.value = setInterval(() => rewardsCost.value += secondProfit.value * 2.5, 3000)
            }
        }
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


    .account_page.searching .claim_rewards
    {
        display: none;
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

        height: 60px;

        background: none;
    }


    .loader_wrap > *
    {
        width: 24px;
        height: 24px;
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

        position: relative;

        width: 71px;
        height: 34px;
        margin: 2px 0 2px auto;
        padding: 1px;

        text-align: center;
        text-decoration: none;

        color: currentColor;
        border-radius: 8px;
        background: linear-gradient(to bottom,  #67c3f8 0%,#2474ca 100%);
    }


    .btn span
    {
        line-height: 30px;

        display: block;

        height: 32px;

        border-radius: 7px;
        background: linear-gradient(to bottom,  #66baf8 0%,#2e89eb 100%);
    }


    .btn:disabled
    {
        pointer-events: none;

        opacity: .5;
        background: #5b3895;
    }


    .btn:disabled span
    {
        background: none;
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