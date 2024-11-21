<template>
    <!-- Chains page -->
    <section class="page_container inner_page_container chains_page">
        <div class="cont">
            <!-- Chains page head -->
            <div class="head">
                <!-- Back button -->
                <button class="back_btn" @click="emitter.emit('close_chains_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </button>

                <!-- Chains page title -->
                <div class="page_title">
                    {{ $t('message.chains_page_title') }}
                </div>
            </div>

            <!-- Search -->
            <Search source="chains" />

            <!-- Chains -->
            <div class="chains">
                <!-- Chains list -->
                <div class="list" v-if="searchResult.length">
                    <!-- Chains item -->
                    <div class="item" v-for="(chain, index) in searchResult" :key="index">
                        <div class="chain_wrap" @click.prevent="setChain(chain)" :class="{ current: isCurrentChain(chain.info.chain_id) }">
                            <!-- Chain -->
                            <div class="chain">
                                <!-- Chain logo -->
                                <div class="logo">
                                    <img :src="getNetworkLogo(chain.info.chain_id)" alt="" @error="imageLoadError($event)">

                                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>

                                    <!-- Chain check -->
                                    <div class="check" v-if="isCurrentChain(chain.info.chain_id)">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                    </div>
                                </div>

                                <div>
                                    <!-- Chain name -->
                                    <div class="name">
                                        {{ chain.info.pretty_name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Empty search -->
                <div class="empty" v-else>
                    {{ $t('message.search_empty_validator') }}
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, inject, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { chains, ibc } from 'chain-registry'
    import { imageLoadError, getNetworkLogo } from '@/utils'

    // Components
    import Search from '@/components/Search.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        chainsList = ref([]),
        searchResult = ref([])


    onBeforeMount(() => {
        // Get chains
        chainsList.value = ibc
            .filter(el => el.chain_1.chain_name === store.currentNetwork)
            .filter((el, index, self) =>
                self.findIndex(t => t.chain_2.chain_name === el.chain_2.chain_name) === index
            )

        // Get chain names
        chainsList.value.forEach(el => {
            el.info = chains.find(chain => chain.chain_name === el.chain_2.chain_name)
        })

        // Default search result
        searchResult.value = chainsList.value
    })


    // Is current chain
    function isCurrentChain(chainID) {
        // Check
        if (store.IBCSendCurrentChain && store.IBCSendCurrentChain.info.chain_id === chainID) {
            return true
        }
    }


    function setChain(chain) {
        // Set data
        store.IBCSendCurrentChain = chain

        // Event "close_chains_modal"
        emitter.emit('close_chains_modal')
    }


    // Event "search"
    emitter.on('search', ({ query, source }) => {
        if (source === 'chains') {
            // Clear search result
            searchResult.value = []

            // Set new result
            for (let key in chainsList.value) {
                if (chainsList.value[key].info.pretty_name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
                    searchResult.value.push(chainsList.value[key])
                }
            }
        }
    })
</script>


<style scoped>
    .chains_page
    {
        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: #170232;
    }


    .chains_page .head
    {
        margin-bottom: 0;
    }



    .loader_wrap
    {
        position: relative;

        height: auto;
        padding: 20px;

        background: none;
    }



    .chains
    {
        overflow: auto;

        width: calc(100% + 32px);
        height: calc(var(--tg-viewport-stable-height) - 110px);
        margin: 0 -16px;
        padding: 0 16px 12px;

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


    .chains .list
    {
        display: flex;
        flex-direction: column;
    }


    .chains .list > *
    {
        margin-top: 8px;
    }



    .chains .chain_wrap
    {
        padding: 1px;

        cursor: pointer;

        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .chains .chain
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 5px 7px;

        border-radius: 11px;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }


    .chains .chain .logo
    {
        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 44px;
        height: 44px;
        margin-right: 8px;
        padding: 6px;

        border-radius: 50%;
        background: #950fff;
    }


    .chains .chain .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: inherit;
    }


    .chains .chain .logo .icon
    {
        display: none;

        width: 24px;
        height: 24px;
    }


    .chains .chain .logo img.hide
    {
        display: none;
    }

    .chains .chain .logo img.hide + .icon
    {
        display: block;
    }


    .chains .chain .check
    {
        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 100%;
        height: 100%;

        border-radius: 50%;
        background: rgba(53, 12, 107, .65);
    }


    .chains .chain .check svg
    {
        display: block;

        width: 20px;
        height: 20px;
    }


    .chains .chain .logo + *
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        width: calc(100% - 52px);
    }


    .chains .chain .name
    {
        font-size: 18px;
        font-weight: 500;

        overflow: hidden;

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .chains .chain_wrap.current
    {
        background: linear-gradient(180deg, #dc92fe 0%, #310446 100%);
    }

    .chains .current .chain
    {
        background: linear-gradient(180deg, #af60d3 0%, #56007e 100%);
    }
</style>