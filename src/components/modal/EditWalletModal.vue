<template>
    <!-- Edit wallet modal -->
    <section class="page_container inner_page_container edit_wallet">
        <div class="cont">
            <!-- Edit wallet head -->
            <div class="head">
                <!-- Back button -->
                <button class="back_btn" @click="emitter.emit('close_edit_wallet_modal', { back: true })">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </button>

                <!-- Edit wallet title -->
                <div class="page_title">
                    {{ props.wallet.name }}
                </div>

                <!-- Edit wallet save button -->
                <button class="save_btn" @click.prevent="save()" v-if="newName !== props.wallet.name && idValidWalletName">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                </button>

                <!-- Edit wallet remove button -->
                <button class="remove_btn" @click.prevent="remove(props.wallet)">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_remove"></use></svg>
                </button>
            </div>


            <!-- Edit wallet new name -->
            <div class="name">
                <div class="field" :class="{ error: !idValidWalletName && isTouchedWalletName, success: idValidWalletName && isTouchedWalletName }">
                    <!-- Edit wallet new name logo -->
                    <div class="logo">
                        <img src="@/assets/logo.svg" alt="" loading="lazy">
                    </div>

                    <!-- Edit wallet new name field -->
                    <input type="text" class="input big" v-model="newName"
                        @input="validateWalletName()">
                </div>
            </div>


            <!-- Seed parase -->
            <div class="seed_parase">
                <!-- Seed phrase data -->
                <div class="mnemonic_wrap" v-if="mnemonic">
                    <div class="mnemonic">
                        <div v-for="(word, index) in mnemonic.split(' ')" :key="index">
                            {{ index + 1 }}. {{ word }}
                        </div>
                    </div>
                </div>

                <img src="@/assets/fake_seed_phrase.png" alt="" class="img" v-else>

                <!-- Mnemonic copy button -->
                <button class="copy_btn" v-if="mnemonic" @click.prevent="copyHandler()">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_copy"></use></svg>

                    <span>{{ $t('message.btn_copy') }}</span>
                </button>

                <!-- Seed parase buttons -->
                <div class="btns" v-if="!mnemonic">
                    <!-- Show button -->
                    <button class="btn" @click.prevent="openSignTxModal()">
                        <span>{{ $t('message.btn_show_seed_phrase') }}</span>
                    </button>
                </div>

                <!-- Seed parase exp -->
                <div class="exp" v-if="!mnemonic">
                    {{ $t('message.edit_wallet_seep_phrase_exp') }}
                </div>
            </div>
        </div>
    </section>


    <!-- Sign transaction modal -->
    <transition name="modal">
    <SignTxModal v-if="showSignTxModal"/>
    </transition>

    <!-- Overlay -->
    <transition name="fade">
    <div class="modal_overlay" @click.prevent="emitter.emit('close_sign_tx_modal')" v-if="showSignTxModal"></div>
    </transition>
</template>


<script setup>
    import { inject, ref, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'
    import { useClipboard } from '@vueuse/core'

    // Components
    import SignTxModal from '@/components/modal/SignTxModal.vue'


    const props = defineProps(['wallet']),
        store = useGlobalStore(),
        emitter = inject('emitter'),
        i18n = inject('i18n'),
        notification = useNotification(),
        newName = ref(props.wallet.name),
        idValidWalletName = ref(false),
        isTouchedWalletName = ref(false),
        mnemonic = ref(null),
        showSignTxModal = ref(false),
        { copy } = useClipboard()


    onUnmounted(() => {
        // Unlisten events
        emitter.off('auth')
        emitter.off('close_sign_tx_modal')
    })


    // Validate wallet name
    function validateWalletName() {
        // Validate length
        newName.value.trim().length
            ? idValidWalletName.value = true
            : idValidWalletName.value = false

        // Name uniqueness validation
        if (idValidWalletName.value) {
            let nameExists = store.wallets.some(wallet =>
                wallet.name === newName.value && wallet.id !== props.wallet.id
            )

            !nameExists
                ? idValidWalletName.value = true
                : idValidWalletName.value = false
        }

        // Touched status
        isTouchedWalletName.value = true
    }


    // Save new name
    async function save() {
        // Update
        await store.updateWallet({
            wallet: props.wallet,
            new_name: newName.value
        })

        // Event "close_edit_wallet_modal"
        emitter.emit('close_edit_wallet_modal', { back: true })

        // Event "show_wallets_modal"
        emitter.emit('show_wallets_modal')

        // Show notification
        notification.notify({
            group: 'default',
            speed: 200,
            duration: 1000,
            title: i18n.global.t('message.notification_wallet_update_success'),
            type: 'success',
        })
    }


    // Remove wallet
    async function remove(wallet) {
        // Event "close_edit_wallet_modal"
        emitter.emit('close_edit_wallet_modal', { back: false })

        // Event "show_remove_wallet_modal"
        emitter.emit('show_remove_wallet_modal', { wallet })
    }


    // Open SignTx modal
    function openSignTxModal() {
        // Show SignTx modal
        showSignTxModal.value = true
    }


    // Copy handler
    function copyHandler() {
        // Copy
        copy(mnemonic.value)

        // Clean notifications
        notification.notify({
            group: 'default',
            clean: true
        })

        // Show notification
        notification.notify({
            group: 'default',
            speed: 200,
            duration: 750,
            title: i18n.global.t('message.notification_copied_title'),
            type: 'copied'
        })
    }


    // Event "auth"
    emitter.on('auth', async () => {
        // Event "close_sign_tx_modal"
        emitter.emit('close_sign_tx_modal')

        // Get mnemonic
        mnemonic.value = await store.getSecret(true)
    })


    // Event "close_sign_tx_modal"
    emitter.on('close_sign_tx_modal', () => {
        // Hide SignTx modal
        showSignTxModal.value = false
    })
</script>


<style scoped>
    .edit_wallet
    {
        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: #170232;
    }


    .edit_wallet .head
    {
        height: 48px;
        margin-bottom: 0;
    }


    .page_title
    {
        overflow: hidden;

        padding-right: 90px;

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .save_btn
    {
        position: absolute;
        top: 0;
        right: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 48px;
        height: 48px;
    }


    .save_btn .icon
    {
        display: block;

        width: 16px;
        height: 16px;
    }


    .remove_btn
    {
        position: absolute;
        top: 0;
        right: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 48px;
        height: 48px;
    }


    .save_btn + .remove_btn
    {
        right: 48px;
    }


    .remove_btn .icon
    {
        display: block;

        width: 14px;
        height: 16px;
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


    .logo
    {
        position: absolute;
        z-index: 3;
        top: 0;
        bottom: 0;
        left: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 48px;
        height: 48px;
        margin: auto 0;

        pointer-events: none;
    }


    .logo img
    {
        display: block;

        width: 30px;
        max-width: 100%;
        height: 30px;
        max-height: 100%;
    }


    .input,
    .input:focus
    {
        padding-left: 52px;

        border-radius: 9px;
        background: #06000e;
    }



    .seed_parase
    {
        margin-top: 14px;
    }


    .seed_parase .mnemonic_wrap
    {
        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom, #5d33ce 0%, #200750 100%);
    }


    .seed_parase .mnemonic
    {
        font-size: 16px;

        padding: 7px 5px;

        border-radius: 9px;
        background: #06000e;

        column-gap: 8px;
        column-count: 2;
    }


    .seed_parase .mnemonic > *
    {
        padding: 2px 8px 2px 4px;

        transform: translateZ(0);

        --webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid;
    }


    .seed_parase .mnemonic > * + *
    {
        margin-top: 8px;
    }


    .seed_parase .img
    {
        display: block;

        width: 100%;
    }


    .seed_parase .copy_btn
    {
        font-size: 14px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        margin: 20px auto 0;
        padding: 3px 6px;

        transition: .2s linear;

        gap: 4px;
    }


    .seed_parase .copy_btn .icon
    {
        display: block;

        width: 24px;
        height: 24px;
    }


    .seed_parase .copy_btn.green
    {
        color: #00aa63;
    }


    .seed_parase .btns
    {
        margin-top: 14px;
        padding: 0;
    }


    .seed_parase .exp
    {
        font-size: 14px;
        line-height: 100%;

        padding: 3px 24px 3px 16px;
    }
</style>