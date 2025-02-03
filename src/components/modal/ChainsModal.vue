<template>
    <!-- Chains page -->
    <section class="page_container inner_page_container chains_page" :class="{ closing: isClosing }">
        <div class="cont">
            <!-- Chains page head -->
            <div class="head">
                <!-- Back button -->
                <button class="back_btn" @click="closeHandler()">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </button>

                <!-- Chains page title -->
                <div class="page_title">
                    {{ $t('message.chains_page_title') }}
                </div>

                <!-- Add chain butoo -->
                <button class="add_chain_btn" @click.prevent="openAddIBCChannelModal()">
                    <span>
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_plus"></use></svg>

                        {{ $t('message.btn_add_chain') }}
                    </span>
                </button>
            </div>

            <!-- Search -->
            <Search source="chains" />

            <!-- Chains -->
            <div class="chains">
                <!-- Chains list -->
                <div class="list" v-if="searchResult.length">
                    <!-- Chains item -->
                    <div class="item" v-for="(chain) in searchResult" :key="chain.info.chain_id">
                        <div class="chain_wrap" @click.prevent="setChain(chain)" :class="{ current: isCurrentChain(chain.info.pretty_name) }">
                            <!-- Chain -->
                            <div class="chain">
                                <!-- Chain logo -->
                                <div class="logo">
                                    <img :src="getNetworkLogo(chain.info?.chain_id)" alt=""
                                        @error="imageLoadError($event)"
                                        @load="imageLoadSuccess($event)">

                                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>

                                    <!-- Chain check -->
                                    <div class="check" v-if="isCurrentChain(chain.info.pretty_name)">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                    </div>
                                </div>

                                <div>
                                    <!-- Chain name -->
                                    <div class="name">
                                        {{ chain.info.pretty_name }}
                                    </div>

                                    <!-- Delete button -->
                                     <button class="delete_btn" v-if="chain.channel_id" @click.stop.prevent="deleteUserChannel(chain)">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_remove"></use></svg>
                                     </button>

                                    <!-- Edit button -->
                                    <button class="edit_btn" v-if="chain.channel_id" @click.stop.prevent="editUserChannel(chain)">
                                        <svg><use xlink:href="@/assets/sprite.svg#ic_edit"></use></svg>
                                    </button>
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


    <!-- Add IBC channel modal -->
    <AddIBCChannelModal v-if="showAddIBCChannelModal" :channelForEdit />
</template>


<script setup>
    import { ref, inject, onBeforeMount, onMounted, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { chains, ibc } from 'chain-registry'
    import { imageLoadError, imageLoadSuccess, getNetworkLogo } from '@/utils'

    // Components
    import Search from '@/components/Search.vue'
    import AddIBCChannelModal from '@/components/modal/AddIBCChannelModal.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        chainsList = ref([]),
        searchResult = ref([]),
        channelForEdit = ref(null),
        showAddIBCChannelModal = ref(false),
        isClosing = ref(false)


    onBeforeMount(async () => {
        // Load chains
        await loadChains()
    })


    onMounted(() => {
        // Event "close_add_IBC_channel_modal"
        emitter.on('close_add_IBC_channel_modal', closeAddIBCChannelModal)
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('close_add_IBC_channel_modal', closeAddIBCChannelModal)
    })


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "close_tokens_modal"
            emitter.emit('close_chains_modal')
        }, 200)
    }


    // Load chains
    async function loadChains() {
        // Get chains
        chainsList.value = ibc
            .filter(el => el.chain_1.chain_name === store.currentNetwork || el.chain_2.chain_name === store.currentNetwork)
            .filter((el, index, self) =>
                self.findIndex(t =>
                    (t.chain_1.chain_name === el.chain_1.chain_name && t.chain_2.chain_name === el.chain_2.chain_name) ||
                    (t.chain_1.chain_name === el.chain_2.chain_name && t.chain_2.chain_name === el.chain_1.chain_name)
                ) === index
            )

        // Get chain names
        chainsList.value.forEach(el => {
            let findChain = el.chain_2.chain_name === store.currentNetwork ? el.chain_1.chain_name : el.chain_2.chain_name

            // Get chain name
            el.info = chains.find(chain => chain.chain_name === findChain)
        })

        // Clear chains list
        chainsList.value = chainsList.value.filter(el => el.info !== undefined)

        // Load user channels
        let userChannels = await store.getAllUserChannels()

        // Merge arrays
        if (userChannels !== undefined) {
            chainsList.value = [...userChannels, ...chainsList.value]
        }

        // Default search result
        searchResult.value = chainsList.value
    }


    // Is current chain
    function isCurrentChain(name) {
        // Check
        if (store.IBCSendCurrentChain && store.IBCSendCurrentChain.info.pretty_name === name) {
            return true
        }
    }


    // Set chain
    function setChain(chain) {
        // Set data
        store.IBCSendCurrentChain = chain

        // Close modal
        closeHandler()
    }


    // Delete user channel
    async function deleteUserChannel(chain) {
        // Delete user channel
        await store.deleteUserChannel(chain.info.pretty_name)

        // Reload chains
        await loadChains()
    }


    // Edit user channel
    function editUserChannel(chain) {
        // Set channel for edit
        channelForEdit.value = chain

        // Show add IBC channel modal
        showAddIBCChannelModal.value = true

        // Update status
        store.isAnyModalOpen = true
    }


    // Open add IBC channel modal
    function openAddIBCChannelModal() {
        // Set channel for edit
        channelForEdit.value = null

        // Show add IBC channel modal
        showAddIBCChannelModal.value = true

        // Update status
        store.isAnyModalOpen = true
    }


    // Close add IBC channel modal
    async function closeAddIBCChannelModal({ reload }) {
        if (reload) {
            // Reload chains
            await loadChains()
        }

        // Hide add IBC channel modal
        showAddIBCChannelModal.value = false
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

        animation: .25s slideLeft forwards linear;

        background: #170232;
    }


    .chains_page.closing
    {
        animation: .25s slideRight forwards linear;
    }


    .chains_page .head
    {
        margin-bottom: 0;
    }


    .add_chain_btn
    {
        font-size: 12px;
        font-weight: 500;

        position: absolute;
        top: 10px;
        right: 16px;

        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #6be3fd 0%,#002749 100%);
    }


    .add_chain_btn .icon
    {
        display: block;

        width: 28px;
        height: 28px;
    }


    .add_chain_btn span
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        padding: 3px 15px 3px 8px;

        border-radius: 9px;
        background: linear-gradient(to bottom, #5badec 0%, #01428f 100%);
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

        gap: 4px;
    }


    .chains .chain .name
    {
        font-size: 18px;
        font-weight: 500;

        overflow: hidden;

        width: calc(100% - 72px);

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .chains .chain .delete_btn,
    .chains .chain .edit_btn
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 32px;
        height: 24px;
    }


    .chains .chain .delete_btn svg,
    .chains .chain .edit_btn svg
    {
        display: block;

        width: 18px;
        height: 18px;
    }

    .chains .chain .edit_btn svg
    {
        width: 24px;
        height: 24px;
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