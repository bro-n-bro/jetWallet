<template>
    <div class="available_section">
        <!-- Balance -->
        <div class="balance">
            <div class="label">
                {{ $t('message.current_balance_title') }}
            </div>

            <Loader v-if="!store.isBalancesGot" />

            <div v-else class="val" @click.prevent="updateBalances">
                {{ formatTokenCost(calcBalancesCost()) }}
            </div>

            <!-- Address -->
            <Address />
        </div>


        <!-- Action -->
        <div class="actions">
            <button class="btn" @click.prevent="emitter.emit('search_focus')">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_send"></use></svg>
                </div>

                <div>{{ $t('message.btn_send') }}</div>
            </button>

            <router-link to="/account" class="btn">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
                </div>

                <div>{{ $t('message.btn_receive') }}</div>
            </router-link>

            <button class="btn" @click.prevent="emitter.emit('swiper_slideTo', { index: 1 })">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
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


    // Update balances
    function updateBalances() {
        // Get balances
        store.getBalances()
    }
</script>


<style scoped>
    .available_section
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