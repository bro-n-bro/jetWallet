<template>
    <div class="network_chooser" ref="target">
        <button class="btn" @click.prevent="showDropdown = !showDropdown" :class="{ active: showDropdown }">
            <div class="logo">
                <img :src="getNetworkLogo(store.networks.multisend[store.currentNetwork].chainId)" alt="">
            </div>

            <div>
                <div class="name">{{ store.networks.multisend[store.multisendCurrentNetwork].name }}</div>
                <div class="token">{{ store.networks.multisend[store.multisendCurrentNetwork].token_name }}</div>
            </div>

            <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver2"></use></svg>
        </button>


        <div class="mini_modal" v-show="showDropdown">
            <!-- Search -->
            <Search />

            <div class="scroll_wrap" v-if="Object.keys(searchResult).length">
                <div class="scroll">
                    <div v-for="(network, index) in searchResult" :key="index"
                        :class="{ favorited: store.multisendFavorites[network.chainId] }"
                    >
                        <router-link class="network"
                            :class="{ active: store.multisendCurrentNetwork == network.alias }"
                            :to="`/multisend/${network.alias}`"
                            @click="showDropdown = !showDropdown"
                        >
                            <div class="logo">
                                <img :src="getNetworkLogo(network.chainId)" alt="" loading="lazy">
                            </div>

                            <div>
                                <div class="name">{{ network.name }}</div>
                                <div class="token">{{ network.token_name }}</div>
                            </div>

                            <button class="favorite_btn" :class="{ active: store.multisendFavorites[network.chainId] }" @click.stop.prevent="toggleFavorite(network.chainId)">
                                <svg><use xlink:href="@/assets/sprite.svg#ic_favorite"></use></svg>

                                <svg><use xlink:href="@/assets/sprite.svg#ic_favorite_a"></use></svg>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="empty" v-else>
                {{ $t('message.search_empty') }}
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref, onBeforeMount, inject } from 'vue'
    import { useGlobalStore } from '@/stores'
    import { onClickOutside } from '@vueuse/core'
    import { getNetworkLogo } from '@/utils'

    // Components
    import Search from '@/components/Search.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        showDropdown = ref(false),
        target = ref(null),
        searchResult = ref(null)


    onBeforeMount(() => {
        // Default search result
        searchResult.value = store.networks.multisend
    })


    // Toggle favorite
    function toggleFavorite(chainId) {
        store.multisendFavorites[chainId] = !store.multisendFavorites[chainId]
    }


    // Click outside
    onClickOutside(target, e => showDropdown.value = false)


    // Event "search"
    emitter.on('search', ({ query }) => {
        // Clear search result
        searchResult.value = []

        // Set new result
        for (let key in store.networks.multisend) {
            if (store.networks.multisend[key].name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
                searchResult.value.push(store.networks.multisend[key])
            }
        }
    })
</script>


<style scoped>
    .choose_network
    {
        position: relative;
        z-index: 9;

        width: 300px;
        max-width: 100%;
    }


    .choose_network .btn
    {
        position: relative;
        z-index: 3;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        width: 100%;
        height: 50px;
        padding: 4px 20px 4px 4px;

        text-align: left;

        border-radius: 42px;
        background: linear-gradient(129deg, #a42dff 27.86%, #410094 92.64%);
    }


    .choose_network .btn .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 42px;
        height: 42px;
        margin-right: 10px;
        padding: 4px;

        border-radius: 50%;
        background: #2e3148;
    }

    .choose_network .btn .logo img
    {
        display: block;

        max-width: 100%;
        max-height: 100%;
    }

    .choose_network .btn .logo + *
    {
        width: calc(100% - 96px);
    }


    .choose_network .btn .name
    {
        font-size: 18px;
        font-weight: 600;
        line-height: 120%;

        overflow: hidden;

        white-space: nowrap;
        text-transform: lowercase;
        text-overflow: ellipsis;
    }

    .choose_network .btn .name::first-letter
    {
        text-transform: uppercase;
    }


    .choose_network .btn .token
    {
        font-size: 12px;
        font-weight: 500;
        line-height: 120%;

        opacity: .6;
    }


    .choose_network .btn .arr
    {
        display: block;

        width: 24px;
        height: 20px;
        margin-left: auto;

        transition: transform .2s linear;
    }


    .choose_network .btn.active
    {
        background: none;
    }

    .choose_network .btn.active .arr
    {
        transform: rotate(180deg);
    }



    .choose_network .mini_modal
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;

        width: 100%;
        padding: 62px 10px 10px;

        border-radius: 26px;
        background: linear-gradient(129deg, #a42dff 27.86%, #410094 92.64%);
    }


    .choose_network .empty
    {
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        line-height: 120%;

        padding: 24px 20px;

        color: rgba(255,255,255,.4);
        border-radius: 20px;
        background: #141414;
    }


    .choose_network .scroll_wrap
    {
        overflow: hidden;

        padding-right: 4px;

        border-radius: 20px;
        background: #141414;
    }


    .choose_network .scroll
    {
        display: flex;
        overflow: auto;
        flex-direction: column;

        max-height: 345px;
        padding: 10px 6px 10px 10px;

        overscroll-behavior-y: contain;
    }

    .choose_network .scroll::-webkit-scrollbar
    {
        width: 4px;
        height: 4px;
    }


    .choose_network .scroll > *
    {
        order: 3;
    }

    .choose_network .scroll > *.favorited
    {
        order: 1;
    }

    .choose_network .scroll > * + *
    {
        margin-top: 5px;
    }


    .choose_network .network
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        width: 100%;
        padding: 4px 8px 4px 4px;

        transition: background .2s linear;
        text-align: left;
        text-decoration: none;

        color: currentColor;
        border-radius: 8px;
    }


    .choose_network .network .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 42px;
        height: 42px;
        margin-right: 10px;
        padding: 4px;

        border-radius: 50%;
        background: #2e3148;
    }


    .choose_network .network .logo img
    {
        display: block;

        max-width: 100%;
        max-height: 100%;
    }


    .choose_network .network .logo + *
    {
        width: calc(100% - 98px);
    }


    .choose_network .network .name
    {
        font-weight: 600;
        line-height: 120%;

        text-transform: lowercase;
    }

    .choose_network .network .name::first-letter
    {
        text-transform: uppercase;
    }


    .choose_network .network .token
    {
        font-size: 10px;
        font-weight: 500;
        line-height: 120%;

        margin-top: 2px;

        opacity: .6;
    }


    .choose_network .network .favorite_btn
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 42px;
        height: 42px;
        margin-left: auto;

        transition: .2s linear;

        opacity: .3;
    }


    .choose_network .network .favorite_btn svg
    {
        display: block;

        width: 100%;
        height: 100%;
    }


    .choose_network .network .favorite_btn svg + svg
    {
        display: none;
    }


    .choose_network .network .favorite_btn:hover
    {
        opacity: 1;
    }

    .choose_network .network .favorite_btn.active
    {
        opacity: 1;
        color: #ffba35;
    }

    .choose_network .network .favorite_btn.active svg
    {
        display: none;
    }

    .choose_network .network .favorite_btn.active svg + svg
    {
        display: block;
    }


    .choose_network .network:hover,
    .choose_network .network.active
    {
        background: #262626;
    }
</style>