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
                <div class="chain_id_field">
                    <!-- Add IBC chain ID label -->
                    <div class="field_label">
                        {{ $t('message.add_IBC_channel_chain_label') }}
                    </div>

                    <!-- Add IBC chain ID field -->
                    <div class="field">
                        <input type="text" class="input big" v-model="chain_ID" ref="chainIDInput"
                            :placeholder="$t('message.placeholder_chain_ID')"
                            @input="validateChainId()">

                        <!-- Paste button -->
                        <button class="paste_btn" @click.prevent="pasteFromClipboard('chain')">
                            {{ $t('message.btn_paste') }}
                        </button>
                    </div>
                </div>


                <!-- Add IBC channel ID -->
                <div class="channel_id_field">
                    <!-- Add IBC channel ID label -->
                    <div class="field_label">
                        {{ $t('message.add_IBC_channel_id_label') }}
                    </div>

                    <!-- Add IBC channel ID field -->
                    <div class="field">
                        <input type="text" class="input big" v-model="channel_ID"
                            :placeholder="$t('message.placeholder_source_channel_ID')">

                        <!-- Paste button -->
                        <button class="paste_btn" @click.prevent="pasteFromClipboard('channel')">
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
    import { ref, inject, onUnmounted, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'
    import { chains } from 'chain-registry'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        i18n = inject('i18n'),
        notification = useNotification(),
        chainIDInput = ref(null),
        currentChain = ref(null),
        chain_ID = ref(''),
        channel_ID = ref(''),
        isFormValid = ref(computed(() => channel_ID.value.length && currentChain.value))


    onUnmounted(() => {
        // Unlisten events
        emitter.off('close_add_IBC_channel_modal')
    })


    // Validate chain ID
    function validateChainId() {
        // Get chain info from chain registry
        let chainInfo = chains.find(el => el.chain_id === chain_ID.value)

        if (chainInfo !== undefined) {
            // Set data
            currentChain.value = chainInfo

            // Toggle classes
            chainIDInput.value.classList.remove('error')
            chainIDInput.value.classList.add('success')
        } else {
            // Reset data
            currentChain.value = null

            // Toggle classes
            chainIDInput.value.classList.remove('success')
            chainIDInput.value.classList.add('error')
        }
    }


    // Paste from clipboard
    function pasteFromClipboard(type) {
        navigator.clipboard.readText().then(clipboardData => {
            if (type === 'chain') {
                // Set data
                chain_ID.value = clipboardData

                // Validate chain ID
                validateChainId()
            }

            if (type === 'channel') {
                // Set data
                channel_ID.value = clipboardData
            }
        })
    }


    // Save
    async function save() {
        try {
            // Change pretty_name
            currentChain.value.pretty_name = currentChain.value.pretty_name + '-' + (channel_ID.value.split('-'))[1]

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



    .chain_id_field
    {
        margin-bottom: 14px;
    }


    .chain_id_field .input.big,
    .channel_id_field .input.big
    {
        padding-right: 71px;
    }



    .paste_btn
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