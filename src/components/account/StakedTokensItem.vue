<template>
    <div class="token_wrap">
        <div class="token">
            <!-- Token logo -->
            <div class="logo">
                <img :src="props.item.balance.token_info.logo_URIs.svg" alt="" v-if="props.item.balance.token_info.logo_URIs.svg">
                <img :src="props.item.balance.token_info.logo_URIs.png" alt="" v-else>
            </div>

            <div>
                <!-- Token denom -->
                <div class="denom">
                    {{ props.item.balance.token_info.symbol }}
                </div>

                <!-- Token validator -->
                <div class="validator">
                    <!-- Token validator label -->
                    <div class="label">
                        {{ $t('message.staked_tokens_validator_label') }}
                    </div>

                    <!-- Token validator moniker -->
                    <div class="moniker">
                        {{ props.item.validator_info?.description?.moniker }}
                    </div>

                    <!-- Token validator logo -->
                    <div class="logo">
                        <img :src="`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${store.networks[store.currentNetwork].prefix}/moniker/${props.item.validator_info?.operator_address}.png`" alt="" loading="lazy" @error="imageLoadError($event)">

                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>
                    </div>
                </div>
            </div>

            <!-- Token amount -->
            <div class="amount">
                <!-- Token amount value -->
                <div class="val">
                    {{ formatTokenAmount(props.item.balance.amount, props.item.balance.exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }).replace(',', '.') }}
                </div>

                <!-- Token amount cost -->
                <div class="cost">
                    {{ formatTokenCost(calcTokenCost(props.item.balance.token_info.symbol, props.item.balance.amount, props.item.balance.exponent)) }}

                    {{ store.currentCurrencySymbol }}
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { useGlobalStore } from '@/store'
    import { formatTokenAmount, formatTokenCost, calcTokenCost, imageLoadError } from '@/utils'


    const props = defineProps(['item']),
        store = useGlobalStore()
</script>


<style scoped>
    .token_wrap
    {
        padding: 1px;

        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .token
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 7px;

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

        width: 28px;
        height: 28px;
        margin-right: 8px;

        border-radius: 50%;
    }


    .token .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: 50%;
    }


    .token .logo > *
    {
        width: calc(100% - 192px);
    }


    .token .denom
    {
        font-size: 16px;
        font-weight: 500;

        text-transform: uppercase;
    }


    .token .validator
    {
        font-size: 14px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-between;

        color: rgba(183, 140, 230, .80);
    }


    .token .validator .label
    {
        margin-right: 2px;
    }


    .token .validator .logo
    {
        width: 18px;
        min-width: 18px;
        height: 18px;
        margin-left: 4px;

        border-radius: 50%;
        background: #950fff;
    }


    .token .validator .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: inherit;
    }


    .token .validator .logo .icon
    {
        display: none;

        width: 16px;
        height: 16px;
    }


    .token .validator .logo img.hide
    {
        display: none;
    }

    .token .validator .logo img.hide + .icon
    {
        display: block;
    }


    .token .validator .moniker
    {
        overflow: hidden;

        max-width: 100%;

        white-space: nowrap;
        text-overflow: ellipsis;
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


    .token_wrap:active
    {
        background: linear-gradient(180deg, #dc92fe 0%, #310446 100%);
    }

    .token_wrap:active .token
    {
        background: linear-gradient(180deg, #af60d3 0%, #56007e 100%);
    }
</style>