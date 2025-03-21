<template>
    <!-- Remove wallet modal -->
    <section class="page_container inner_page_container remove_wallet" :class="{ closing: isClosing }">
        <div class="cont">
            <!-- Remove wallet head -->
            <div class="head">
                <!-- Back button -->
                <button class="back_btn" @click="closeHandler()">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </button>

                <!-- Remove wallet title -->
                <div class="page_title">
                    {{ $t('message.remove_wallet_title') }}

                    <span>{{ props.wallet.name }}</span>
                </div>
            </div>

            <!-- Remove wallet name -->
            <div class="name">
                <div class="field" :class="{ error: !idValidWalletName && isTouchedWalletName, success: idValidWalletName && isTouchedWalletName }">
                    <!-- Edit wallet name field -->
                    <input type="text" class="input big" v-model="name"
                        :placeholder="$t('message.placeholder_wallet_name')"
                        @input="validateWalletName()"
                        @keydown="preventPaste"
                        @paste="preventPaste"
                        @beforeinput="preventPaste">
                </div>
            </div>

            <!-- Remove wallet desc -->
            <div class="desc">
                {{ $t('message.remove_wallet_desc') }}
            </div>

            <!-- Remove wallet modal buttons -->
            <div class="btns">
                <!-- Understood button -->
                <button class="btn" @click.prevent="openConfirmModal()" :class="{ disabled: !idValidWalletName }">
                    <span>{{ $t('message.btn_remove') }}</span>
                </button>
            </div>
        </div>
    </section>


    <!-- Confirm modal -->
    <ConfirmModal v-if="showConfirmModal"/>
</template>


<script setup>
    import { ref, inject, onMounted, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'

    // Components
    import ConfirmModal from '@/components/modal/ConfirmByPinModal.vue'


    const props = defineProps(['wallet']),
        store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        notification = useNotification(),
        i18n = inject('i18n'),
        name = ref(''),
        idValidWalletName = ref(false),
        isTouchedWalletName = ref(false),
        showConfirmModal = ref(false),
        isClosing = ref(false)


    onMounted(() => {
        // Event "auth"
        emitter.on('auth', auth)

        // Event "close_confirm_modal"
        emitter.on('close_confirm_modal', closeConfirmModal)
    })

    onUnmounted(() => {
        // Unlisten events
        emitter.off('auth', auth)
        emitter.off('close_confirm_modal', closeConfirmModal)
    })


    // Close modal
    function closeHandler(back = true) {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "close_remove_wallet_modal"
            emitter.emit('close_remove_wallet_modal', {
                back: back
            })
        }, 200)
    }


    // Validate wallet name
    function validateWalletName(e) {
        // Validate length
        name.value.trim().length
            ? idValidWalletName.value = true
            : idValidWalletName.value = false

        // Not the same
        name.value === props.wallet.name
            ? idValidWalletName.value = true
            : idValidWalletName.value = false

        // Touched status
        isTouchedWalletName.value = true
    }


    // Prevent paste
    function preventPaste(e) {
        // Prohibition
        if (e.type === 'keydown' && e.ctrlKey && e.key === 'v') {
            e.preventDefault()
        }

        // Prohibition
        if (e.type === 'paste' || e.inputType === 'insertFromPaste') {
            e.preventDefault()
        }
    }


    // Event "auth"
    async function auth() {
        try {
            if (store.wallets.length > 1) {
                // Remove
                await store.removeWallet(props.wallet)

                // Close confirm modal
                closeConfirmModal()

                // Event "close_edit_wallet_modal"
                emitter.emit('close_edit_wallet_modal', {
                    back: false
                })

                // Close modal
                closeHandler(false)

                setTimeout(() => {
                    // Event "show_wallets_modal"
                    emitter.emit('show_wallets_modal')
                }, 200)

                // Show notification
                notification.notify({
                    group: 'default',
                    speed: 200,
                    duration: 1000,
                    title: i18n.global.t('message.notification_wallet_remove_success', { name: props.wallet.name }),
                    type: 'success',
                })
            } else {
                // Event "start_reseting"
                emitter.emit('start_reseting')

                // Clear all data
                await store.clearAllData()

                // Redirect
                setTimeout(() => router.push('/'))
            }
        } catch (error) {
            console.error(`Components/Modal/RemoveWalletModal.vue: ${error.message}`)
        }
    }


    // Open confirm modal
    function openConfirmModal() {
        // Show confirm modal
        showConfirmModal.value = true

        // Update status
        store.isAnyModalOpen = true
    }


    // Close confirm modal
    function closeConfirmModal() {
        // Hide confirm modal
        showConfirmModal.value = false

        // Update status
        store.isAnyModalOpen = false
    }
</script>


<style scoped>
    .remove_wallet
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


    .remove_wallet.closing
    {
        animation: .25s slideRight forwards linear;
    }


    .remove_wallet .head
    {
        min-height: 48px;
        margin-bottom: 10px;
        padding-top: 10px;
    }


    .page_title span
    {
        display: block;
        overflow: hidden;

        white-space: nowrap;
        text-overflow: ellipsis;

        color: #ffc700;
    }


    .field
    {
        position: relative;

        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #5d33ce 0%,#200750 100%);
    }


    .field.error
    {
        background: #f00;
    }

    .field.success
    {
        background: #00aa63;
    }


    .input,
    .input:focus
    {
        border-radius: 9px;
        background: #06000e;
    }


    .desc
    {
        font-size: 12px;
        line-height: 100%;

        margin-top: 10px;
        padding: 0 8px;
    }
</style>