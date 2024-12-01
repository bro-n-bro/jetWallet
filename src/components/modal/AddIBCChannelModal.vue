<template>
    <!-- Add IBC channel modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="emitter.emit('close_add_IBC_channel_modal', { reload: false })">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.add_IBC_channel_title') }}
                </div>


                <!-- Add IBC channel chain -->
                <div class="chain_field">
                    <!-- Add IBC channel label -->
                    <div class="field_label">
                        {{ $t('message.add_IBC_channel_chain_label') }}
                    </div>

                    <!-- Add IBC channel field -->
                    <div class="field">
                        <div class="selected" v-if="currentChain && !showSelectChain" @click.prevent="showSelectChain = true">
                            <!-- Chain logo -->
                            <div class="logo">
                                <img :src="getNetworkLogo(currentChain.chain_id)" alt="" @error="imageLoadError($event)">

                                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>
                            </div>

                            <div>
                                <!-- Chain name -->
                                <div class="name">
                                    {{ currentChain.pretty_name }}
                                </div>
                            </div>
                        </div>

                        <div class="select" v-if="showSelectChain">
                            <input type="text" class="input big" v-model="searchQuery"
                                :placeholder="$t('message.add_IBC_channel_chain_placeholder')"
                                @input="search()">

                            <div class="list" v-if="searchResult.length">
                                <!-- Chains item -->
                                <div class="item" v-for="(chain, index) in searchResult" :key="index">
                                    <div class="chain_wrap" @click.prevent="setChain(chain)" :class="{ current: currentChain?.chain_id === chain.chain_id }">
                                        <!-- Chain -->
                                        <div class="chain">
                                            <!-- Chain logo -->
                                            <div class="logo">
                                                <img :src="getNetworkLogo(chain.chain_id)" alt="" @error="imageLoadError($event)">

                                                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_user"></use></svg>
                                            </div>

                                            <div>
                                                <!-- Chain name -->
                                                <div class="name">
                                                    {{ chain.pretty_name }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Empty search -->
                            <div class="empty" v-else>
                                {{ $t('message.search_empty_chains') }}
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Add IBC channel ID -->
                <div class="channel_id_field">
                    <!-- Add IBC channel label -->
                    <div class="field_label">
                        {{ $t('message.add_IBC_channel_id_label') }}
                    </div>

                    <!-- Add IBC channel field -->
                    <div class="field">
                        <input type="text" class="input big" v-model="channel_ID"
                            :placeholder="$t('message.placeholder_source_channel_ID')">

                        <!-- Paste button -->
                        <button class="paste_btn" @click.prevent="pasteFromClipboard()">
                            {{ $t('message.btn_paste') }}
                        </button>
                    </div>
                </div>


                <!-- Add IBC channel buttons -->
                <div class="btns">
                    <!-- Save button -->
                    <button class="btn" @click.prevent="save()" :class="{ disabled: !isFormValid }">
                        <span>{{ $t('message.btn_save') }}</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, inject, onBeforeMount, onUnmounted, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'
    import { chains } from 'chain-registry'
    import { imageLoadError, getNetworkLogo } from '@/utils'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        i18n = inject('i18n'),
        notification = useNotification(),
        chainsList = ref([]),
        searchQuery = ref(''),
        searchResult = ref([]),
        currentChain = ref(null),
        channel_ID = ref(''),
        showSelectChain = ref(true),
        isFormValid = ref(computed(() => channel_ID.value.length && currentChain.value))


    onBeforeMount(() => {
        // Get chains
        chainsList.value = chains

        // Clear chains
        chainsList.value = chainsList.value.filter(el =>
            el.chain_id !== undefined &&
            el.chain_id != 1 &&
            el.chain_id != 30 &&
            el.network_type === 'mainnet'
        )

        // Default search result
        searchResult.value = chainsList.value
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('close_add_IBC_channel_modal')
    })


    // Search
    function search() {
        // Clear search result
        searchResult.value = []

        // Set new result
        for (let key in chainsList.value) {
            if (chainsList.value[key].pretty_name.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase())) {
                searchResult.value.push(chainsList.value[key])
            }
        }
    }


    function setChain(chain) {
        // Set data
        currentChain.value = chain

        // Hide select chain
        showSelectChain.value = false
    }


    // Paste from clipboard
    function pasteFromClipboard() {
        navigator.clipboard.readText().then(clipboardData => {
            // Set data
            channel_ID.value = clipboardData
        })
    }


    // Save
    async function save() {
        try {
            // Change pretty_name
            currentChain.value.pretty_name = currentChain.value.pretty_name + (channel_ID.value.split('-'))[1]

            // Set user channel
            await store.setUserChannel({
                info: currentChain.value,
                channel_id: channel_ID.value
            })

            // Show notification
            notification.notify({
                group: 'default',
                speed: 200,
                duration: 1000,
                title: i18n.global.t('message.notification_add_user_channel_success'),
                type: 'success',
            })

            // Event "close_add_IBC_channel_modal"
            emitter.emit('close_add_IBC_channel_modal', { reload: true })
        } catch (error) {
            console.log(error)
        }
    }
</script>


<style scoped>
    .modal_title
    {
        margin-bottom: 18px;
    }



    .chain_field
    {
        margin-bottom: 14px;
    }


    .chain_field .selected
    {
        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        padding: 13px 15px;

        border-radius: 11px;
        background: #170232;

        gap: 4px;
    }


    .chain_field .selected .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 28px;
        height: 28px;

        border-radius: 50%;
    }


    .chain_field .selected .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: inherit;
    }


    .chain_field .selected .logo .icon
    {
        display: none;

        width: 20px;
        height: 20px;
    }


    .chain_field .selected .logo img.hide
    {
        display: none;
    }

    .chain_field .selected .logo img.hide + .icon
    {
        display: block;
    }


    .chain_field .selected .logo + *
    {
        width: calc(100% - 32px);
    }


    .chain_field .selected .name
    {
        font-size: 18px;
        font-weight: 500;

        overflow: hidden;

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .chain_field .select
    {
        padding: 4px 8px 0;

        border-radius: 9px;
        background: #06000e;
    }


    .chain_field .select .input
    {
        margin-bottom: 4px;
        padding: 0 7px;

        border-color: transparent;
        border-bottom: 1px solid rgba(255, 255, 255, .60);
        border-radius: 0;
        background: none;
    }


    .chain_field .list
    {
        display: flex;
        overflow: auto;
        flex-direction: column;

        height: 140px;
        padding-bottom: 4px;

        overscroll-behavior-y: contain;
    }


    .chain_field .list::-webkit-scrollbar
    {
        width: 4px;
        height: 4px;

        border-radius: 3px;
        background-color: none;
    }


    .chain_field .list::-webkit-scrollbar-thumb
    {
        border-radius: 3px;
        background-color: #950fff;
    }



    .chain_field .empty
    {
        font-size: 18px;
        font-weight: 500;

        padding: 8px 8px 12px;

        text-align: center;

        opacity: .7;
    }


    .chain_field .chain
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 8px;

        transition: .2s linear;

        border-radius: 6px;

        gap: 4px;
    }


    .chain_field .chain .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 28px;
        height: 28px;

        border-radius: 50%;
    }


    .chain_field .chain .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: inherit;
    }


    .chain_field .chain .logo .icon
    {
        display: none;

        width: 20px;
        height: 20px;
    }


    .chain_field .chain .logo img.hide
    {
        display: none;
    }

    .chain_field .chain .logo img.hide + .icon
    {
        display: block;
    }


    .chain_field .chain .logo + *
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        width: calc(100% - 32px);

        gap: 4px;
    }


    .chain_field .chain .name
    {
        font-size: 16px;

        overflow: hidden;

        width: calc(100% - 32px);

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .chain_field .chain .delete_btn
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 28px;
        height: 28px;
    }


    .chain_field .chain .delete_btn .icon
    {
        display: block;

        width: 28px;
        height: 28px;
    }


    .chain_field .chain:hover,
    .chain_field .current .chain
    {
        color: #170232;
        background: #fff;
    }



    .channel_id_field .input.big
    {
        padding-right: 71px;
    }


    .channel_id_field .paste_btn
    {
        font-size: 16px;
        font-weight: 500;

        position: absolute;
        z-index: 3;
        top: 0;
        right: 16px;

        height: 100%;
    }



    .field
    {
        position: relative;

        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #5d33ce 0%,#200750 100%);
    }


    .input
    {
        border-radius: 9px;
        background: #06000e;
    }
</style>