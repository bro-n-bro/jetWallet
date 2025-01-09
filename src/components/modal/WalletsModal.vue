<template>
    <!-- Wallets modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="emitter.emit('close_wallets_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.profile_title') }}
                </div>

                <!-- Wallets modal data -->
                <div class="list">
                    <div class="item" v-for="(wallet, index) in store.wallets" :key="index" @click.stop.prevent="setWallet(wallet)">
                        <div class="logo">
                            <img src="@/assets/logo.svg" alt="" loading="lazy">

                            <svg class="icon" v-if="store.currentWalletID === wallet.id"><use xlink:href="@/assets/sprite.svg#ic_notification_success"></use></svg>
                        </div>

                        <div class="name">
                            {{ wallet.name }}
                        </div>

                        <button class="edit_btn" @click.stop.prevent="editWalletModal(wallet)">
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_edit"></use></svg>
                        </button>
                    </div>
                </div>

                <!-- Wallets modal add butto -->
                <router-link to="/add_wallet" class="add_btn">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_plus"></use></svg>

                    <span>{{ $t('message.btn_add_new_wallet') }}</span>
                </router-link>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { inject, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { jetPackEventChangeWallet } from '@/utils'


    const store = useGlobalStore(),
        emitter = inject('emitter')


    onBeforeMount(async () => {
        // Get wallets
        await store.getWallets()
    })


    // Set new current wallet
    function setWallet(wallet) {
        // Set current wallet ID
        store.setCurrentWalletID(wallet.id)

        // Event "close_wallets_modal"
        emitter.emit('close_wallets_modal')

        // JetPack event change wallet
        jetPackEventChangeWallet()
    }


    // Edit wallet modal
    function editWalletModal(wallet) {
        // Event "close_wallets_modal"
        emitter.emit('close_wallets_modal')

        // Event "show_edit_wallet_modal"
        emitter.emit('show_edit_wallet_modal', { wallet: JSON.parse(JSON.stringify(wallet)) })
    }
</script>


<style scoped>
    .modal_title
    {
        margin-bottom: 15px;
        padding-left: 10px;
    }


    .list
    {
        display: flex;
        flex-direction: column;

        gap: 8px;
    }


    .item
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 3px;

        transition: .2s linear;

        color: #fff;
        border: 1px solid #1a0242;
        border-radius: 10px;
        background: #06000e;
    }


    .item .logo
    {
        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 48px;
        height: 48px;
        margin-right: 8px;
    }


    .item .logo img
    {
        display: block;

        width: 30px;
        max-width: 100%;
        height: 30px;
        max-height: 100%;
    }


    .item .logo .icon
    {
        position: absolute;
        z-index: 2;
        right: 4px;
        bottom: 4px;

        display: block;

        width: 16px;
        height: 16px;
    }


    .item .name
    {
        font-size: 20px;
        font-weight: 500;

        overflow: hidden;

        width: calc(100% - 108px);

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .item .edit_btn
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 48px;
        height: 48px;
        margin-left: 4px;
    }


    .item .edit_btn .icon
    {
        display: block;

        width: 24px;
        height: 24px;
    }


    .item:hover,
    .item:active
    {
        color: #000;
        background: #fff;
    }



    .add_btn
    {
        font-size: 20px;
        font-weight: 500;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        width: 100%;
        margin-top: 8px;
        padding: 9px 7px;

        text-decoration: none;

        color: currentColor;
        border: 1px solid #fff;
        border-radius: 10px;

        gap: 2px;
    }


    .add_btn .icon
    {
        display: block;

        width: 28px;
        height: 28px;
    }
</style>