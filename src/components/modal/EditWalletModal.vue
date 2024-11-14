<template>
    <!-- Edit wallet modal -->
    <section class="page_container inner_page_container edit_wallet">
        <div class="cont">
            <!-- Edit wallet head -->
            <div class="head">
                <!-- Back button -->
                <button class="back_btn" @click="emitter.emit('close_edit_wallet_modal')">
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
                <button class="remove_btn" @click.prevent="remove()">
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
        </div>
    </section>
</template>


<script setup>
    import { inject, ref } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'


    const props = defineProps(['wallet']),
        store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        notification = useNotification(),
        i18n = inject('i18n'),
        newName = ref(props.wallet.name),
        idValidWalletName = ref(false),
        isTouchedWalletName = ref(false)


    // Validate wallet name
    function validateWalletName() {
        // Validate length
        newName.value.trim().length
            ? idValidWalletName.value = true
            : idValidWalletName.value = false

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
        emitter.emit('close_edit_wallet_modal')

        // Event "show_profile_modal"
        emitter.emit('show_profile_modal')

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
    async function remove() {
        if (store.wallets.length > 1) {
            // Remove
            await store.removeWallet(props.wallet)

            // // Set defaul wallet if deleted current
            // if (props.wallet.id === store.currentWalletID) {
            //     await store.setCurrentWalletID()
            // }

            // Event "close_edit_wallet_modal"
            emitter.emit('close_edit_wallet_modal')

            // Event "show_profile_modal"
            emitter.emit('show_profile_modal')

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
            router.push('/')
        }
    }
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
</style>