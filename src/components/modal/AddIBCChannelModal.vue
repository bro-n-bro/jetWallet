<template>
    <!-- Add IBC channel modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data" :class="{ closing: isClosing }">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="closeHandler()">
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
                            @input="validateName()">

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
                            :placeholder="$t('message.placeholder_source_channel_ID')"
                            @input="validateName()">

                        <!-- Paste button -->
                        <button class="paste_btn" @click.prevent="pasteFromClipboard('channel')">
                            {{ $t('message.btn_paste') }}
                        </button>
                    </div>
                </div>


                <!-- Add IBC channel error -->
                <div class="error_text" v-if="isAlreadyExists">
                    {{ $t('message.add_IBC_channel_error_already_exists') }}
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


    <!-- Modal overlay -->
    <div class="modal_overlay" :class="{ closing: isClosing }" @click.prevent="closeHandler()"></div>
</template>


<script setup>
    import { ref, inject, onBeforeMount, onMounted, onUnmounted, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'


    const props = defineProps(['channelForEdit']),
        store = useGlobalStore(),
        emitter = inject('emitter'),
        i18n = inject('i18n'),
        notification = useNotification(),
        userChannels = ref(null),
        chainIDInput = ref(null),
        chain_ID = ref(props.channelForEdit?.info.chain_id || ''),
        channel_ID = ref(props.channelForEdit?.channel_id || ''),
        isAlreadyExists = ref(false),
        isFormValid = ref(computed(() =>
            channel_ID.value.length &&
            chain_ID.value.length &&
            !isAlreadyExists.value
        )),
        isClosing = ref(false)


    onBeforeMount(async () => {
        // Load user channels
        userChannels.value = await store.getAllUserChannels()
    })


    onMounted(() => {
        // Event "close_any_modal"
        emitter.on('close_any_modal', closeHandler)
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('close_any_modal', closeHandler)
    })


    // Close modal
    function closeHandler(reload = false) {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "close_wallets_modal"
            emitter.emit('close_add_IBC_channel_modal', {
                reload: reload
            })
        }, 200)
    }


    // Paste from clipboard
    function pasteFromClipboard(type) {
        navigator.clipboard.readText().then(clipboardData => {
            if (type === 'chain') {
                // Set data
                chain_ID.value = clipboardData
            }

            if (type === 'channel') {
                // Set data
                channel_ID.value = clipboardData
            }

            // Validate name
            validateName()
        })
    }


    // Validate name
    function validateName() {
        if (userChannels.value !== undefined) {
            // Find duplicate
            let exists = userChannels.value.some(el =>
                el.info?.pretty_name &&
                el.info.pretty_name === `${chain_ID.value} (${(channel_ID.value.split('-'))[1]})` &&
                el.info.pretty_name !== props.channelForEdit?.info?.pretty_name
            )

            // Set status
            exists
                ? isAlreadyExists.value = true
                : isAlreadyExists.value = false
        }
    }


    // Save
    async function save() {
        try {
            if (!props.channelForEdit) {
                // Set user channel
                await store.setUserChannel({
                    info: {
                        chain_id: chain_ID.value,
                        pretty_name: `${chain_ID.value} (${(channel_ID.value.split('-'))[1]})`
                    },
                    channel_id: channel_ID.value
                })
            } else {
                // Set user channel
                await store.updateUserChannel({
                    old: props.channelForEdit,
                    info: {
                        chain_id: chain_ID.value,
                        pretty_name: `${chain_ID.value} (${(channel_ID.value.split('-'))[1]})`
                    },
                    channel_id: channel_ID.value
                })
            }

            // Show notification
            notification.notify({
                group: 'default',
                speed: 200,
                duration: 1000,
                title: i18n.global.t('message.notification_add_user_channel_success'),
                type: 'success',
            })

            // Close modal
            closeHandler(true)
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


    .error_text
    {
        margin-top: 8px;
        padding: 0 10px;

        color: #ff4b4b;
    }
</style>