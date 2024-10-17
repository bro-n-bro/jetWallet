<template>
    <!-- Available section -->
    <div class="available_section">
        <!-- Balance -->
        <div class="balance">
            <!-- Balance label -->
            <div class="label">
                {{ $t('message.current_balance_title') }}
            </div>

            <!-- Loader -->
            <Loader v-if="!store.isInitialized || !store.isBalancesGot" />

            <!-- Balance value -->
            <div v-else class="val">
                <span @click.prevent="store.updateAllBalances()">
                    {{ formatTokenCost(calcBalancesCost()) }}
                </span>
            </div>

            <!-- Address -->
            <KeepAlive>
            <Address />
            </KeepAlive>
        </div>


        <!-- Actions -->
        <div class="actions">
            <!-- Send button -->
            <button class="btn" @click.prevent="emitter.emit('search_focus')">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_send"></use></svg>
                </div>

                <div>{{ $t('message.btn_send') }}</div>
            </button>

            <!-- Receive button -->
            <router-link to="/account/receive" class="btn" :class="{ disabled: !store.currentAddress }">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
                </div>

                <div>{{ $t('message.btn_receive') }}</div>
            </router-link>

            <!-- Stake button -->
            <button class="btn" @click.prevent="emitter.emit('swiper_slideTo', { index: 1 })" :class="{ disabled: !store.networks[store.currentNetwork]?.is_staking_available }">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_stake"></use></svg>
                </div>

                <div>{{ $t('message.btn_stake') }}</div>
            </button>
        </div>
    </div>
</template>


<script setup>
    import { inject } from 'vue'
    import { formatTokenCost, calcBalancesCost } from '@/utils'
    import { useGlobalStore } from '@/store'

    // Components
    import Loader from '@/components/Loader.vue'
    import Address from '@/components/account/Address.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter')
</script>


<style scoped>
    .available_section
    {
        position: relative;
        z-index: 3;

        height: 266px;
        padding: 67px 22px 19px;
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