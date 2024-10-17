<template>
    <!-- Networks chooser -->
    <div class="choose_network" ref="target" :class="{ disabled: !store.forcedUnlock && (!store.isInitialized || !store.isBalancesGot || (store.networks[store.currentNetwork]?.is_staking_available && !store.isStakedBalancesGot) || (store.networks[store.currentNetwork]?.is_staking_available && !store.isRewardsGot)) }">
        <!-- Current chain -->
        <div class="btn" @click.prevent="showDropdown = !showDropdown" :class="{ active: showDropdown }">
            <!-- Current chain logo -->
            <div class="logo">
                <img :src="getNetworkLogo(store.networks[store.currentNetwork].chain_id)" alt="">
            </div>

            <!-- Current chain name -->
            <div class="name">
                {{ store.networks[store.currentNetwork].name }}
            </div>

            <!-- Current chain arrow -->
            <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
        </div>


        <!-- Dropdown -->
        <div class="mini_modal" v-show="showDropdown">
            <div class="scroll">
                <!-- Chain -->
                <div v-for="(network, index) in store.networks" :key="index">
                    <div class="network" :class="{ active: store.currentNetwork == network.alias }" @click.prevent="changeNetwork(network.alias)" v-if="store.currentNetwork != network.alias">
                        <!-- Chain logo -->
                        <div class="logo">
                            <img :src="getNetworkLogo(network.chain_id)" alt="">
                        </div>

                        <!-- Chain name -->
                        <div class="name">
                            {{ network.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref } from 'vue'
    import { useGlobalStore } from '@/store'
    import { onClickOutside } from '@vueuse/core'
    import { getNetworkLogo } from '@/utils'


    const store = useGlobalStore(),
        showDropdown = ref(false),
        target = ref(null)


    // Click outside
    onClickOutside(target, () => showDropdown.value = false)


    // Change network
    function changeNetwork(chain) {
        // Hide dropdown
        showDropdown.value = false

        // Set current network
        store.setCurrentNetwork(chain)
    }
</script>


<style scoped>
    .choose_network
    {
        position: absolute;
        z-index: 9;
        top: 11px;
        left: 8px;

        transition: opacity .2s linear;
    }


    .choose_network.disabled
    {
        pointer-events: none;

        opacity: .5;
    }



    .choose_network .btn
    {
        font-size: 12px;
        line-height: 100%;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        min-width: 148px;
        padding: 6px 10px;

        text-align: left;
        white-space: nowrap;

        border-radius: 8px;
        background: #5b3895;
    }


    .choose_network .btn .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 28px;
        height: 28px;
        margin-right: 12px;
    }


    .choose_network .btn .logo img
    {
        display: block;

        max-width: 100%;
        max-height: 100%;
    }


    .choose_network .btn .name
    {
        width: calc(100% - 60px);
    }


    .choose_network .btn .arr
    {
        display: block;

        width: 12px;
        height: 8px;
        margin-left: 8px;

        transition: transform .2s linear;
    }


    .choose_network .btn.active
    {
        border-radius: 8px 8px 0 0;
    }

    .choose_network .btn.active .arr
    {
        transform: rotate(180deg);
    }



    .choose_network .mini_modal
    {
        position: absolute;
        top: 100%;
        left: 0;

        width: 100%;
        padding: 0 10px 6px;

        border-radius: 0 0 8px 8px;
        background: #5b3895;
    }


    .choose_network .scroll
    {
        display: flex;
        overflow: auto;
        flex-direction: column;

        max-height: 345px;
        padding-top: 4px;

        gap: 8px;
        overscroll-behavior-y: contain;
    }


    .choose_network .scroll::-webkit-scrollbar
    {
        width: 4px;
        height: 4px;
    }


    .choose_network .network
    {
        font-size: 12px;
        line-height: 100%;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        width: 100%;
        padding: 2px 4px;

        transition: background .2s linear;
        text-align: left;

        border-radius: 4px;
    }


    .choose_network .network .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 28px;
        height: 28px;
    }


    .choose_network .network .logo img
    {
        display: block;

        max-width: 100%;
        max-height: 100%;
    }


    .choose_network .network .name
    {
        width: calc(100% - 40px);
    }


    .choose_network .network:active
    {
        background: #a072ea;
    }


    .choose_network .scroll > *:empty
    {
        display: none;
    }
</style>