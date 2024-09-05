<template>
    <!-- Available tokens -->
    <section class="available_tokens">
        <div class="cont">
            <!-- Search -->
            <Search source="availabels" />

            <!-- Loader -->
            <Loader v-if="!store.isInitialized || !store.isBalancesGot" />

            <!-- Tokens -->
            <div class="tokens" v-else>
                <!-- Tokens count -->
                <div class="count" v-if="searchResult.length === store.balances.length">
                    <b>{{ store.balances.length }}</b> {{ $t('message.available_tokens_title') }}
                </div>

                <!-- Tokens list -->
                <div class="list" v-if="searchResult.length">
                    <!-- Tokens item -->
                    <div class="item" v-for="(balance, index) in searchResult" :key="index" :style="`order: ${parseInt(calcTokenCost(balance.token_info.symbol, balance.amount, balance.exponent) * -1000000)};`">
                        <!-- Tokens token -->
                        <AvailableTokensItem :balance />
                    </div>
                </div>

                <!-- Tokens empty -->
                <div class="empty" v-else>
                    {{ $t('message.search_empty') }}
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
    import AvailableTokensItem from '@/components/account/AvailableTokensItem.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        searchResult = ref([])


    onBeforeMount(() => {
        if (store.isBalancesGot) {
            // Default search result
            searchResult.value = store.balances
        }
    })


    watch(computed(() => store.isBalancesGot), () => {
        if (store.isBalancesGot) {
            // Default search result
            searchResult.value = store.balances
        }
    })


    // Event "search"
    emitter.on('search', ({ query, source }) => {
        if (source === 'availabels') {
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