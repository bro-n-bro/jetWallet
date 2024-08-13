<template>
    <div class="stacked_section">
        <!-- Balance -->
        <div class="balance">
            <div class="label">
                {{ $t('message.stacked_balance_title') }}
            </div>

            <Loader v-if="!store.isStakedBalancesGot" />

            <div v-else class="val" @click.prevent="updateBalances">
                {{ formatTokenCost(calcStakedBalancesCost()) }}
            </div>

            <!-- Address -->
            <Address />
        </div>


        <!-- Action -->
        <div class="actions">
            <router-link to="/account" class="btn">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_send"></use></svg>
                </div>

                <div>{{ $t('message.btn_stake') }}</div>
            </router-link>

            <router-link to="/account" class="btn">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
                </div>

                <div>{{ $t('message.btn_unstake') }}</div>
            </router-link>

            <router-link to="/account" class="btn">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
                </div>

                <div>{{ $t('message.btn_restake') }}</div>
            </router-link>
        </div>
    </div>
</template>


<script setup>
    import { formatTokenCost, calcStakedBalancesCost } from '@/utils'
    import { useGlobalStore } from '@/store'

    // Components
    import Loader from '@/components/Loader.vue'
    import Address from '@/components/account/Address.vue'


    const store = useGlobalStore()


    // Update balances
    function updateBalances() {
        // Get staked balances
        store.getStakedBalances()

        // Get rewards
        store.getRewards()
    }
</script>


<style scoped>
    .stacked_section
    {
        position: relative;
        z-index: 3;

        height: 265px;
        padding: 75px 22px 25px;
    }


    .loader_wrap
    {
        position: relative;

        height: 48px;

        background: none;
    }


    .loader_wrap > *
    {
        width: 20px;
        height: 20px;
    }
</style>