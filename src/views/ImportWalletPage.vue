<template>
    <Loader v-if="loading" />

    <section class="page_container import_wallet_page" v-else>
        <div class="cont">
            <div class="page_title">Import Existing Wallet</div>

            <router-link to="/" class="back_btn">
                <!-- <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg> -->
                <span>Back</span>
            </router-link>


            <div class="tabs" :class="{disabled: !agreed}">
                <button class="btn" @click.prevent="activeTab = 1" :class="{ active: activeTab === 1 }">12 words</button>

                <button class="btn" @click.prevent="activeTab = 2" :class="{ active: activeTab === 2 }">24 words</button>

                <button class="btn" @click.prevent="activeTab = 3" :class="{ active: activeTab === 3 }">Private Key</button>
            </div>


            <div class="mnemonic" v-if="activeTab != 3">
                <div class="row">
                    <div>
                        <input type="text" class="input" v-model="secret[0]">
                    </div>

                    <div>
                        <input type="text" class="input" v-model="secret[1]">
                    </div>

                    <div>
                        <input type="text" class="input" v-model="secret[2]">
                    </div>

                    <div>
                        <input type="text" class="input" v-model="secret[3]">
                    </div>

                    <div>
                        <input type="text" class="input" v-model="secret[4]">
                    </div>

                    <div>
                        <input type="text" class="input" v-model="secret[5]">
                    </div>

                    <div>
                        <input type="text" class="input" v-model="secret[6]">
                    </div>

                    <div>
                        <input type="text" class="input" v-model="secret[7]">
                    </div>

                    <div>
                        <input type="text" class="input" v-model="secret[8]">
                    </div>

                    <div>
                        <input type="text" class="input" v-model="secret[9]">
                    </div>

                    <div>
                        <input type="text" class="input" v-model="secret[10]">
                    </div>

                    <div>
                        <input type="text" class="input" v-model="secret[11]">
                    </div>

                    <div v-if="activeTab === 2">
                        <input type="text" class="input" v-model="secret[12]">
                    </div>

                    <div v-if="activeTab === 2">
                        <input type="text" class="input" v-model="secret[13]">
                    </div>

                    <div v-if="activeTab === 2">
                        <input type="text" class="input" v-model="secret[14]">
                    </div>

                    <div v-if="activeTab === 2">
                        <input type="text" class="input" v-model="secret[15]">
                    </div>

                    <div v-if="activeTab === 2">
                        <input type="text" class="input" v-model="secret[16]">
                    </div>

                    <div v-if="activeTab === 2">
                        <input type="text" class="input" v-model="secret[17]">
                    </div>

                    <div v-if="activeTab === 2">
                        <input type="text" class="input" v-model="secret[18]">
                    </div>

                    <div v-if="activeTab === 2">
                        <input type="text" class="input" v-model="secret[19]">
                    </div>

                    <div v-if="activeTab === 2">
                        <input type="text" class="input" v-model="secret[20]">
                    </div>

                    <div v-if="activeTab === 2">
                        <input type="text" class="input" v-model="secret[21]">
                    </div>

                    <div v-if="activeTab === 2">
                        <input type="text" class="input" v-model="secret[22]">
                    </div>

                    <div v-if="activeTab === 2">
                        <input type="text" class="input" v-model="secret[23]">
                    </div>
                </div>

                <div class="exp">Enter your recovery phrase here to restore your wallet.<br>  Or click on any blank and paste the entire phrase.</div>
            </div>


            <div class="private_key" v-else>
                <div class="field">
                    <input type="text" class="input" v-model="privateKey">
                </div>

                <div class="exp">Enter your recovery phrase here to restore your wallet.<br>  Or click on any blank and paste the entire phrase.</div>
            </div>


            <div class="btns">
                <button class="btn" @click.prevent="save" :class="{ disabled: !wallet }">
                    {{ $t('message.btn_next') }}
                </button>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, onBeforeMount, watch } from 'vue'
    import { useRouter } from 'vue-router'
    import { importWalletFromMnemonic, importWalletFromPrivateKey } from '@/utils/'


    // Components
    import Loader from '@/components/Loader.vue'


    const router = useRouter(),
        loading = ref(true),
        activeTab = ref(1),
        wallet = ref(null),
        secret = ref([]),
        privateKey = ref('')


    onBeforeMount(() => {
        // Hide loader
        loading.value = false
    })


    watch(activeTab, () => {
        // Reset data
        secret.value = []
        privateKey.value = ''
    })


    // Save data
    async function save() {
        // Import wallet
        activeTab != 3
            ? wallet.value = await importWalletFromMnemonic()
            : wallet.value = await importWalletFromPrivateKey(privateKey.value)

        // Save in DB
        await addData('wallet', [
            ['secret', wallet.value.secret.data],
            ['seed', wallet.value.seed]
        ])

        // Go to confirm
        router.push('/create_wallet_confirm')
    }
</script>


<style scoped>
.tabs
{
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    margin: 0 auto 24px;
    padding: 4px;

    border-radius: 20px;
}


.tabs .btn
{
    font-size: 14px;

    padding: 0 19px;

    transition: .2s linear;

    border: 1px solid;
    border-radius: 20px;
}


.tabs .btn.active
{
    color: #000;
    background: #fff;
}



.mnemonic
{
    margin-bottom: auto;
}


.mnemonic .row
{
    position: relative;

    align-content: stretch;
    align-items: stretch;

    margin-bottom: -12px;
    margin-left: -12px;
}


.mnemonic .row > *
{
    width: calc(33.333% - 12px);
    margin-bottom: 12px;
    margin-left: 12px;
}


.mnemonic .input
{
    font-family: var(--font_family);
    font-size: 14px;

    display: block;

    width: 100%;
    height: 28px;
    padding: 0 11px;

    color: currentColor;
    border: 1px solid;
    background: #000;
}

.mnemonic .input:-webkit-autofill
{
    -webkit-box-shadow: inset 0 0 0 50px var(--form_bg_color) !important;
}


.mnemonic .exp
{
    margin-top: 12px;
}



.private_key
{
    margin-bottom: auto;
}


.private_key .input
{
    font-family: var(--font_family);

    display: block;
    flex-shrink: var(--font-size);

    width: 100%;
    height: 40px;
    padding: 0 9px;

    color: #fff;
    border: 1px solid #fff;
    border-radius: 10px;
    background: none;
}


.private_key .input.error
{
    border-color: red;
}

.private_key .input.success
{
    border-color: green;
}


.private_key .exp
{
    margin-top: 12px;
}



.btns
{
    margin-top: auto;
    padding-top: 24px;
}


.btns .btn
{
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
    height: 50px;

    text-align: center;
    text-decoration: none;

    color: #fff;
    border: 1px solid;
    border-radius: 10px;
}


.btns .btn.disabled
{
    pointer-events: none;

    opacity: .5;
}







</style>