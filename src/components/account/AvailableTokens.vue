<template>
    <section class="available_tokens">
        <div class="cont">
            <!-- Search -->
            <Search :sliderIndex="1" />

            <Loader v-if="!store.isBalancesGot" />

            <div class="tokens" v-else>
                <div class="count" v-if="searchResult.length === store.balances.length">
                    <b>{{ store.balances.length }}</b> {{ $t('message.available_tokens_title') }}
                </div>

                <div class="list" v-if="searchResult.length">
                    <div class="item" v-for="(balance, index) in searchResult" :key="index" :style="`order: ${parseInt(calcTokenCost(balance.token_info.symbol, balance.amount, balance.exponent) * -1000000)};`">
                        <div class="token_wrap">
                            <div class="token">
                                <div class="logo">
                                    <img :src="balance.token_info.logo_URIs.svg" :alt="balance.token_info.name" loading="lazy">
                                </div>

                                <div class="denom">
                                    {{ balance.token_info.symbol }}
                                </div>

                                <div class="amount">
                                    <div class="val">
                                        {{ formatTokenAmount(balance.amount, balance.exponent).toLocaleString('ru-RU', { maximumFractionDigits: 18 }) }}
                                    </div>

                                    <div class="cost">
                                        {{ formatTokenCost(calcTokenCost(balance.token_info.symbol, balance.amount, balance.exponent)) }} {{ store.currentCurrencySymbol }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="empty" v-else>
                    {{ $t('message.search_empty') }}
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { inject, watch, ref, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { formatTokenAmount, formatTokenCost, calcTokenCost } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'
    import Search from '@/components/Search.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        searchResult = ref([])


    watch(computed(() => store.isBalancesGot), () => {
        // Default search result
        searchResult.value = store.balances
    })


    // Event "search"
    emitter.on('search', ({ query, sliderIndex }) => {
        if (sliderIndex === 1) {
            // Clear search result
            searchResult.value = []

            // Set new result
            for (let key in store.balances) {
                if (store.balances[key].token_info.symbol.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
                    searchResult.value.push(store.balances[key])
                }
            }
        }
    })
</script>


<style scoped>
    .loader_wrap
    {
        position: relative;

        height: auto;
        padding: 20px;

        background: none;
    }


    .available_tokens
    {
        position: relative;
        z-index: 9;

        flex: 1 0 auto;

        background: #170232;
    }


    .searching .available_tokens
    {
        overflow: auto;
        flex: none;

        height: var(--tg-viewport-height);

        overscroll-behavior-y: contain;
    }


    .empty
    {
        font-size: 20px;
        font-weight: 500;

        padding: 10px;

        text-align: center;

        opacity: .7;
    }



    .searching .tokens
    {
        margin: 0;
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


    .tokens .list
    {
        display: flex;
        flex-direction: column;
    }


    .tokens .list > *
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