<template>
    <router-link :to="`/account/send?denom=${props.balance.denom}`" class="token_wrap" :class="{ current: isCurrentToken(props.balance.denom) }">
        <div class="token">
            <!-- Token logo -->
            <div class="logo">
                <img src="@/assets/boom_token_logo.svg" alt="" v-if="props.balance.old_base_denom === 'uboom'">
                <img :src="props.balance.token_info.logo_URIs.svg" alt="" v-else-if="props.balance.token_info.logo_URIs.svg">
                <img :src="props.balance.token_info.logo_URIs.png" alt="" v-else>

                <!-- Token check -->
                <div class="check" v-if="isCurrentToken(props.balance.denom)">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                </div>
            </div>

            <!-- Token denom -->
            <!-- <div class="denom">
                {{ props.balance.token_info.symbol }}
            </div> -->

            <div class="denom">
                <span v-if="props.balance.old_base_denom === 'drop' || props.balance.old_base_denom === 'udatom'">d{{ props.balance.token_info.symbol }}</span>
                <span v-else-if="props.balance.old_base_denom === 'uboom'">BOOM</span>
                <span v-else>{{ props.balance.token_info.symbol }}</span>
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


    const props = defineProps({
        balance: {
            type: Object,
            default: () => ({})
        },
        currentToken: {
            type: Object,
            default: () => ({
                denom: ''
            })
        }
    }),
        store = useGlobalStore()


    // Is current token
    function isCurrentToken(denom) {
        return denom === props.currentToken.denom
    }
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
        position: relative;

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

        width: 100%;
        height: 100%;
    }


    .token .check
    {
        position: absolute;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: calc(100% - 8px);
        height: calc(100% - 8px);
        margin: auto;

        border-radius: 50%;
        background: rgba(53, 12, 107, .65);

        inset: 0;
    }


    .token .check svg
    {
        display: block;

        width: 20px;
        height: 20px;
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


    .token_wrap:active,
    .token_wrap.current
    {
        background: linear-gradient(180deg, #dc92fe 0%, #310446 100%);
    }

    .token_wrap:active .token,
    .token_wrap.current .token
    {
        background: linear-gradient(180deg, #af60d3 0%, #56007e 100%);
    }
</style>