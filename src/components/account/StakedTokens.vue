<template>
    <!-- Staked tokens -->
    <section class="staked_tokens">
        <div class="cont">
            <!-- Search -->
            <Search source="staked" />

            <!-- Loader -->
            <Loader v-if="!store.isInitialized || !store.isStakedBalancesGot" />

            <!-- Tokens -->
            <div class="tokens" v-else>
                <!-- Tokens count -->
                <div class="count" v-if="searchResult.length === store.stakedBalances.length">
                    <b>{{ store.stakedBalances.length }}</b> {{ $t('message.staked_tokens_title') }}
                </div>

                <!-- Tokens list -->
                <div class="list" v-if="searchResult.length">
                    <!-- Tokens item -->
                    <div class="item" v-for="item in searchResult" :key="item.denom" :style="`order: ${parseInt(calcTokenCost(item.balance.token_info.symbol, item.balance.amount, item.balance.exponent) * -1000000)};`">
                        <!-- Tokens token -->
                        <StakedTokensItem :item />
                    </div>
                </div>

                <!-- Tokens empty -->
                <div class="empty" v-else>
                    {{ $t('message.search_empty_validator') }}
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { inject, watch, ref, computed, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { calcTokenCost } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'
    import Search from '@/components/Search.vue'
    import StakedTokensItem from '@/components/account/StakedTokensItem.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        searchResult = ref([])


    onBeforeMount(() => {
        if (store.isStakedBalancesGot) {
            // Default search result
            searchResult.value = store.stakedBalances
        }
    })


    watch(computed(() => store.isStakedBalancesGot), () => {
        if (store.isStakedBalancesGot) {
            // Default search result
            searchResult.value = store.stakedBalances
        }
    })


    // Event "search"
    emitter.on('search', ({ query, source }) => {
        if (source === 'staked') {
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


    .staked_tokens
    {
        position: relative;
        z-index: 9;

        flex: 1 0 auto;

        background: #170232;
    }


    .searching .staked_tokens
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
</style>