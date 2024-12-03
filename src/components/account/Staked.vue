<template>
    <!-- Staked section -->
    <div class="staked_section">
        <!-- Balance -->
        <div class="balance">
            <!-- Balance label -->
            <div class="label">
                {{ $t('message.stacked_balance_title') }}
            </div>

            <!-- Loader -->
            <Loader v-if="!store.isInitialized || !store.isStakedBalancesGot" />

            <!-- Balance value -->
            <div v-else class="val">
                <span @click.prevent="store.updateAllBalances()">
                    {{ formatTokenCost(calcStakedBalancesCost()) + store.currentCurrencySymbol }}
                </span>
            </div>

            <!-- Address -->
            <KeepAlive>
            <Address />
            </KeepAlive>
        </div>


        <!-- Actions -->
        <div class="actions">
            <!-- Stake button -->
            <router-link to="/account/stake" class="btn stake_btn" :class="{ disabled: !store.isBalancesGot && !store.isStakedBalancesGot }">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_stake"></use></svg>
                </div>

                <div>{{ $t('message.btn_stake') }}</div>
            </router-link>

            <!-- Unstake button -->
            <router-link to="/account/unstake" class="btn" :class="{ disabled: !store.isBalancesGot }">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_unstake"></use></svg>
                </div>

                <div>{{ $t('message.btn_unstake') }}</div>
            </router-link>

            <!-- Redelegate button -->
            <router-link to="/account/redelegate" class="btn" :class="{ disabled: !store.isStakedBalancesGot }">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_redelegate"></use></svg>
                </div>

                <div>{{ $t('message.btn_redelegate') }}</div>
            </router-link>
        </div>


        <!-- Android Animation -->
        <AndroidAnimation v-if="store.isBalancesGot && store.isStakedBalancesGot && props.swiperActiveIndex === 1 && device.vendor !== 'Apple'" />

        <!-- IOS Animation -->
        <IOSAnimation v-if="store.isBalancesGot && store.isStakedBalancesGot && props.swiperActiveIndex === 1 && device.vendor === 'Apple'" />
    </div>
</template>


<script setup>
    import { formatTokenCost, calcStakedBalancesCost } from '@/utils'
    import { useGlobalStore } from '@/store'
    import UAParser from 'ua-parser-js'

    // Components
    import Loader from '@/components/Loader.vue'
    import Address from '@/components/account/Address.vue'
    import AndroidAnimation from '@/components/account/AndroidAnimation.vue'
    import IOSAnimation from '@/components/account/IOSAnimation.vue'


    const props = defineProps(['swiperActiveIndex']),
        store = useGlobalStore(),
        parser = new UAParser(),
        device = parser.getDevice()
</script>


<style scoped>
    .staked_section
    {
        position: relative;
        z-index: 3;

        height: 296px;
        overflow: hidden;
        padding: 97px 22px 19px;
        border-radius: 0 0 20px 20px;
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