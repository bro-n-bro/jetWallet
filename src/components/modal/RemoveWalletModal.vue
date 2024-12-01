<template>
    <!-- Remove wallet modal -->
    <section class="page_container inner_page_container remove_wallet">
        <div class="cont">
            <!-- Remove wallet head -->
            <div class="head">
                <!-- Back button -->
                <button class="back_btn" @click="emitter.emit('close_remove_wallet_modal')">
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
    <transition name="modal">
    <ConfirmModal v-if="showConfirmModal" :wallet="props.wallet" />
    </transition>

    <!-- Overlay -->
    <transition name="fade">
    <div class="modal_overlay" @click.prevent="emitter.emit('close_any_modal')" v-if="showConfirmModal"></div>
    </transition>
</template>


<script setup>
    import { inject, ref } from 'vue'
    import { useGlobalStore } from '@/store'

    // Components
    import ConfirmModal from '@/components/modal/RemoveWalletConfirmModal.vue'


    const props = defineProps(['wallet']),
        store = useGlobalStore(),
        emitter = inject('emitter'),
        name = ref(''),
        idValidWalletName = ref(false),
        isTouchedWalletName = ref(false),
        showConfirmModal = ref(false)


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


    // Open confirm modal
    function openConfirmModal() {
        // Show confirm modal
        showConfirmModal.value = true

        // Update status
        store.isAnyModalOpen = true
    }


    // Event "close_remove_wallet_confirm_modal"
    emitter.on('close_remove_wallet_confirm_modal', () => {
        // Hide confirm modal
        showConfirmModal.value = false

        // Update status
        store.isAnyModalOpen = false
    })


    // Event "close_any_modal"
    emitter.on('close_any_modal', () => {
        // Hide confirm modal
        showConfirmModal.value = false

        // Update status
        store.isAnyModalOpen = false
    })
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

        background: #170232;
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