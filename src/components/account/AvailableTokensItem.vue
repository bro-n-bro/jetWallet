<template>
    <router-link :to="`/account/send?denom=${props.balance.denom}`" class="token_wrap">
        <div class="token">
            <!-- Token logo -->
            <div class="logo">
                <img :src="props.balance.token_info.logo_URIs.svg" alt="" loading="lazy">
            </div>

            <!-- Token denom -->
            <div class="denom">
                {{ props.balance.token_info.symbol }}
            </div>

            <!-- Token amount -->
            <div class="amount">
                <!-- Token amount value -->
                <div class="val">
                    {{ formatTokenAmount(props.balance.amount, props.balance.exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }).replace(',', '.') }}
                </div>

                <!-- Token amount cost -->
                <div class="cost">
                    {{ formatTokenCost(calcTokenCost(props.balance.token_info.symbol, props.balance.amount, props.balance.exponent)) }}

                    {{ store.currentCurrencySymbol }}
                </div>
            </div>
        </div>
    </router-link>
</template>


<script setup>
    import { useGlobalStore } from '@/store'
    import { formatTokenAmount, formatTokenCost, calcTokenCost } from '@/utils'


    const props = defineProps(['balance']),
        store = useGlobalStore()
</script>


<style scoped>
    .token_wrap
    {
        display: block;

        padding: 1px;

        text-decoration: none;

        color: currentColor;
        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .token
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        padding-right: 9px;

        border-radius: 11px;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
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


    .token .denom
    {
        font-size: 16px;
        font-weight: 500;

        text-transform: uppercase;
    }


    .token .amount
    {
        font-size: 18px;
        font-weight: 500;

        margin-left: auto;

        text-align: right;
        white-space: nowrap;
    }


    .token .amount .cost
    {
        font-size: 16px;
        font-weight: 400;

        color: #836b9e;
    }
</style>