<template>
    <div class="cont">
        <form action="" class="search">
            <div class="field">
                <input type="text" name="" value="" class="input" placeholder="Search...">
            </div>

            <button type="submit" class="submit_btn">
                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_search"></use></svg>
            </button>
        </form>


        <div class="tokens">
            <div class="count">
                <b>{{ balances.length }}</b> {{ $t('message.available_balance_title') }}
            </div>

            <!-- <pre>{{ balances }}</pre> -->

            <div class="list">
                <div class="token_wrap" v-for="(balance, index) in balances" :key="index">
                    <div class="token">
                        <div class="logo">
                            <img :src="balance.token_info.logo_URIs.svg" :alt="balance.token_info.name" loading="lazy">
                        </div>

                        <div class="denom">
                            {{ balance.token_info.symbol }}
                        </div>

                        <div class="amount">
                            <div class="val">
                                {{ formatTokenAmount(balance.amount, balance.exponent) }}
                            </div>

                            <div class="cost">
                                {{ calcTokenCost(balance.token_info.symbol, formatTokenAmount(balance.amount, balance.exponent)) }} {{ currentCurrencySymbol }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { useGlobalState } from '@/store'
    import { formatTokenAmount } from '@/utils'


    const { balances, calcTokenCost, currentCurrencySymbol } = useGlobalState()
</script>


<style scoped>
    .search
    {
        position: relative;

        margin-top: 10px;
    }


    .search ::-webkit-input-placeholder
    {
        color: rgba(255,255,255,.6);
    }

    .search :-moz-placeholder
    {
        color: rgba(255,255,255,.6);
    }

    .search ::-moz-placeholder
    {
        opacity: 1;
        color: rgba(255,255,255,.6);
    }

    .search :-ms-input-placeholder
    {
        color: rgba(255,255,255,.6);
    }


    .search .field
    {
        padding: 1px;

        border-radius: 23px;
        background: linear-gradient(to bottom,  #5c32cc 0%,#210750 100%);
    }


    .search .input
    {
        font-family: var(--font_family);
        font-size: 16px;
        font-weight: 500;

        display: block;

        width: 100%;
        height: 28px;
        padding: 0 50px 0 15px;

        color: #fff;
        border: none;
        border-radius: 23px;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }


    .search .submit_btn
    {
        position: absolute;
        z-index: 3;
        top: 0;
        right: 16px;
        bottom: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 24px;
        height: 24px;
        margin: auto 0;

        opacity: .6;
    }


    .search .submit_btn .icon
    {
        display: block;

        width: 16px;
        height: 16px;
    }



    .tokens
    {
        margin-top: 12px;
    }


    .tokens .count
    {
        font-size: 14px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        padding: 2px 10px;

        color: rgba(255,255,255,.6);

        gap: 4px;
    }


    .tokens .count b
    {
        color: #fff;
    }


    .tokens .list > * + *
    {
        margin-top: 8px;
    }



    .tokens .token_wrap
    {
        padding: 1px;

        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .tokens .token
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


    .tokens .token .logo
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


    .tokens .token .logo img
    {
        display: block;

        max-width: 100%;
        max-height: 100%;
    }


    .tokens .token .denom
    {
        font-size: 16px;
        font-weight: 500;

        text-transform: uppercase;
    }


    .tokens .token .amount
    {
        font-size: 18px;
        font-weight: 500;

        margin-left: auto;

        text-align: right;
        white-space: nowrap;
    }


    .tokens .token .amount .cost
    {
        font-size: 16px;
        font-weight: 400;

        color: #836b9e;
    }
</style>