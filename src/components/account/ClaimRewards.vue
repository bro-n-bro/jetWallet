<template>
    <!-- Claim rewards -->
    <section class="claim_rewards">
        <div class="cont">
            <!-- Claim rewards data -->
            <div class="data_wrap">
                <div class="data">
                    <!-- Loader -->
                    <Loader v-if="!store.isInitialized || !isReady" />


                    <template v-else>
                    <!-- Claim rewards info -->
                    <div class="info">
                        <!-- Claim rewards title -->
                        <div class="title">
                            {{ $t('message.claim_rewards_title') }}
                        </div>

                        <!-- Claim rewards cost -->
                        <div class="cost">
                            ≈ <div class="odometer" v-odometer="rewardsCost"></div> $
                        </div>
                    </div>


                    <!-- Claim rewards button -->
                    <router-link to="/account/claim_confirm" class="btn" :class="{ disabled: !rewardsCost }">
                        <span>{{ $t('message.btn_claim') }}</span>
                    </router-link>


                    <!-- Claim rewards spoler button -->
                    <button class="spoler_btn" @click.prevent="showDropdown = !showDropdown" :class="{ active: showDropdown }" v-if="rewardsCost">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                    </button>


                    <!-- Claim rewards dropdown -->
                    <div class="dropdown" v-show="showDropdown">
                        <!-- Claim rewards list -->
                        <div class="list">
                            <div class="token_wrap" v-for="(balance, index) in store.rewardsBalances" :key="index">
                                <!-- Claim rewards token -->
                                <ClaimRewardsItem :balance :rewardsCost />
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
    import { ref, watch, computed, onBeforeMount, onBeforeUnmount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { calcRewardsBalancesCost, calcStakedBalancesCost } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'
    import ClaimRewardsItem from '@/components/account/ClaimRewardsItem.vue'


    const store = useGlobalStore(),
        isReady = ref(false),
        showDropdown = ref(false),
        rewardsCost = ref(0),
        secondProfit = ref(0),
        stakedBalancesCost = ref(0),
        intervalID = ref(null)


    onBeforeMount(async() => {
        if (store.isInitialized) {
            // Get rewards
            await getRewards()
        }
    })


    onBeforeUnmount(() => {
        // Clear interval
        clearInterval(intervalID.value)
    })


    watch(computed(() => store.isInitialized), async () => {
        if (store.isInitialized) {
            // Clear interval
            clearInterval(intervalID.value)
        }

        // Get rewards
        await getRewards()
    })


    watch(computed(() => store.isRewardsGot), () => {
        // Ready status
        isReady.value = false

        // Clear interval
        clearInterval(intervalID.value)

        if (store.isRewardsGot) {
            // Calc second profit
            calcSecondProfit()

            // Update rewards cost
            updateRewardsCost()

            // Ready status
            isReady.value = true
        }
    })


    // Get rewards
    async function getRewards() {
        if (store.isInitialized) {
            // Ready status
            isReady.value = false

            // Get rewards
            await store.getRewards()
        }
    }


    // Calc second profit
    function calcSecondProfit() {
        // Get Staked balances cost
        stakedBalancesCost.value = calcStakedBalancesCost('USD')

        // Set second percent
        secondProfit.value = stakedBalancesCost.value * store.networks[store.currentNetwork].APR / (365 * 24 * 60 * 60)
    }


    // Update rewards cost
    function updateRewardsCost() {
        // Set rewards cost
        rewardsCost.value = calcRewardsBalancesCost('USD')

        // Update rewards with timeout
        if (!rewardsCost.value && stakedBalancesCost.value) {
            // setTimeout(async () => await getRewards(), 5000)
        }

        // Update rewards cost
        if (rewardsCost.value != null) {
            intervalID.value = setInterval(() => rewardsCost.value += secondProfit.value * 2.5, 3000)
        }
    }
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


    .btn.disabled
    {
        pointer-events: none;

        opacity: .5;
        background: #5b3895;
    }


    .btn.disabled span
    {
        background: none;
    }


    .btn:active span
    {
        background: linear-gradient(to bottom,  #195fa8 0%,#66baf7 100%);
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
</style>