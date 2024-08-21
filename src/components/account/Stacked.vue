<template>
    <div class="staked_section">
        <!-- Balance -->
        <div class="balance">
            <div class="label">
                {{ $t('message.stacked_balance_title') }}
            </div>

            <Loader v-if="!store.isInitialized || !store.isStakedBalancesGot" />

            <div v-else class="val">
                <span @click.prevent="store.updateAllBalances()">{{ formatTokenCost(calcStakedBalancesCost()) }}</span>
            </div>

            <!-- Address -->
            <Address />
        </div>


        <!-- Action -->
        <div class="actions">
            <router-link to="/account/stake" class="btn stake_btn" :class="{ disabled: !store.isBalancesGot && !store.isStakedBalancesGot }">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_send"></use></svg>
                </div>

                <div>{{ $t('message.btn_stake') }}</div>
            </router-link>

            <router-link to="/account" class="btn" :class="{ disabled: !store.stakedBalances.length }">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
                </div>

                <div>{{ $t('message.btn_unstake') }}</div>
            </router-link>

            <router-link to="/account" class="btn" :class="{ disabled: !store.stakedBalances.length }">
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
</script>


<style scoped>
    .staked_section
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