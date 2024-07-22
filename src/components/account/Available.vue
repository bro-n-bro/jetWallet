<template>
    <div class="available_section">
        <Loader v-if="!store.isBalancesGot" />

        <!-- Balance -->
        <div class="balance" v-else>
            <div class="label">
                {{ $t('message.current_balance_title') }}
            </div>

            <div class="val">
                {{ formatTokenCost(calcBalancesCost()) }}
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

                <div>{{ $t('message.btn_send') }}</div>
            </router-link>

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

        height: 82px;

        background: none;
    }
</style>