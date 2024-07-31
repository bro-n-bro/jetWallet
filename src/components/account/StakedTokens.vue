<template>
    <section class="stake_tokens">
        <div class="cont">
            <!-- Search -->
            <Search :sliderIndex="2" />

            <!-- <pre>{{ store.stakedBalances }}</pre> -->

            <Loader v-if="!store.isStakedBalancesGot" />

            <div class="tokens" v-else>
                <div class="count" v-if="searchResult.length === store.stakedBalances.length">
                    <b>{{ store.stakedBalances.length }}</b> {{ $t('message.staked_tokens_title') }}
                </div>

                <div class="list" v-if="searchResult.length">
                    <div class="item" v-for="(item, index) in searchResult" :key="index" :style="`order: ${parseInt(calcTokenCost(item.balance.token_info.symbol, item.balance.amount, item.balance.exponent) * -1000000)};`">
                        <div class="token_wrap">
                            <div class="token">
                                <div class="logo">
                                    <img :src="item.balance.token_info.logo_URIs.svg" :alt="item.balance.token_info.name" loading="lazy">
                                </div>

                                <div>
                                    <div class="denom">
                                        {{ item.balance.token_info.symbol }}
                                    </div>

                                    <div class="validator">
                                        <div class="label">
                                            {{ $t('message.staked_tokens_validator_label') }}
                                        </div>

                                        <div class="moniker">
                                            {{ item.validator_info.description.moniker }}
                                        </div>

                                        <div class="logo">
                                            <img :src="`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${store.networks[store.currentNetwork].prefix}/moniker/${item.validator_info.operator_address}.png`" alt="" loading="lazy">
                                        </div>
                                    </div>
                                </div>

                                <div class="amount">
                                    <div class="val">
                                        {{ formatTokenAmount(item.balance.amount, item.balance.exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }) }}
                                    </div>

                                    <div class="cost">
                                        {{ formatTokenCost(calcTokenCost(item.balance.token_info.symbol, item.balance.amount, item.balance.exponent)) }} {{ store.currentCurrencySymbol }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="empty" v-else>
                    {{ $t('message.search_empty_validator') }}
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


    watch(computed(() => store.isStakedBalancesGot), () => {
        // Default search result
        searchResult.value = store.stakedBalances
    })


    // Event "search"
    emitter.on('search', ({ query, sliderIndex }) => {
        if (sliderIndex === 2) {
            // Clear search result
            searchResult.value = []

            // Set new result
            for (let key in store.stakedBalances) {
                if (store.stakedBalances[key].validator_info.description.moniker.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
                    searchResult.value.push(store.stakedBalances[key])
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


    .stake_tokens
    {
        position: relative;
        z-index: 9;

        flex: 1 0 auto;

        background: #170232;
    }


    .searching .stake_tokens
    {
        overflow: auto;
        flex: none;

        height: var(--tg-viewport-stable-height);
        margin-bottom: -14px;
        padding-bottom: 14px;

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
        justify-content: space-between;

        padding: 7px;

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

        width: 28px;
        height: 28px;
        margin-right: 8px;

        border-radius: 50%;
    }


    .tokens .token .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: 50%;
    }


    .tokens .token .logo > *
    {
        width: calc(100% - 192px);
    }


    .tokens .token .denom
    {
        font-size: 16px;
        font-weight: 500;

        text-transform: uppercase;
    }


    .tokens .token .validator
    {
        font-size: 14px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-between;

        color: rgba(183, 140, 230, .80);
    }


    .tokens .token .validator .label
    {
        margin-right: 2px;
    }


    .tokens .token .validator .logo
    {
        width: 18px;
        min-width: 18px;
        height: 18px;
        margin-left: 4px;

        border-radius: 50%;
    }


    .tokens .token .validator .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: 50%;
    }


    .tokens .token .validator .moniker
    {
        overflow: hidden;

        max-width: 100%;

        white-space: nowrap;
        text-overflow: ellipsis;
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