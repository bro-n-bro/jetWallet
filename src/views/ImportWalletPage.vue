<template>
    <section class="page_container import_wallet_page">
        <div class="cont">
            <div class="page_title">
                {{ $t('message.import_wallet_title') }}
            </div>

            <div class="page_data_wrap">
                <div class="page_data">
                    <Loader v-if="loading" />

                    <template v-else>
                    <router-link class="back_btn" to="/">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                    </router-link>

                    <div class="tabs_wrap">
                        <div class="tabs">
                            <button class="btn" @click.prevent="activeTab = 1" :class="{ active: activeTab === 1 }">
                                <span>{{ $t('message.mnemonic_tab1') }}</span>
                            </button>

                            <button class="btn" @click.prevent="activeTab = 2" :class="{ active: activeTab === 2 }">
                                <span>{{ $t('message.mnemonic_tab2') }}</span>
                            </button>

                            <button class="btn" @click.prevent="activeTab = 3" :class="{ active: activeTab === 3 }">
                                <span>{{ $t('message.mnemonic_tab3') }}</span>
                            </button>
                        </div>
                    </div>

                    <div class="mnemonic" v-if="activeTab != 3">
                        <div class="row">
                            <div class="word">
                                <input type="text" class="input" v-model="secret[0]" @input="validateWord">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[1]" @input="validateWord">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[2]" @input="validateWord">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[3]" @input="validateWord">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[4]" @input="validateWord">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[5]" @input="validateWord">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[6]" @input="validateWord">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[7]" @input="validateWord">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[8]" @input="validateWord">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[9]" @input="validateWord">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[10]" @input="validateWord">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[11]" @input="validateWord">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[12]" @input="validateWord">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[13]" @input="validateWord">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[14]" @input="validateWord">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[15]" @input="validateWord">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[16]" @input="validateWord">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[17]" @input="validateWord">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[18]" @input="validateWord">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[19]" @input="validateWord">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[20]" @input="validateWord">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[21]" @input="validateWord">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[22]" @input="validateWord">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[23]" @input="validateWord">
                            </div>
                        </div>

                        <div class="exp">
                            {{ $t('message.import_wallet_exp') }}
                        </div>
                    </div>


                    <div class="private_key" v-else>
                        <div class="field">
                            <input type="text" class="input big" v-model="privateKey" :class="{ error: !idValidPrivateKey && isTouchedPrivateKey, success: idValidPrivateKey && isTouchedPrivateKey }" @input="validatePrivateKey">
                        </div>

                        <div class="exp">
                            {{ $t('message.import_wallet_exp') }}
                        </div>
                    </div>


                    <div class="btns">
                        <button class="btn" :class="{ disabled: !isFormValid }" @click.prevent="save">
                            <span>{{ $t('message.btn_next') }}</span>
                        </button>
                    </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, onBeforeMount, watch, computed } from 'vue'
    import { useRouter } from 'vue-router'
    import { importWalletFromMnemonic, importWalletFromPrivateKey } from '@/utils/'


    // Components
    import Loader from '@/components/Loader.vue'


    const router = useRouter(),
        loading = ref(true),
        activeTab = ref(1),
        wallet = ref(null),
        secret = ref([]),
        privateKey = ref(''),
        idValidPrivateKey = ref(false),
        isTouchedPrivateKey = ref(false)


    onBeforeMount(() => {
        // Hide loader
        loading.value = false
    })


    watch(activeTab, () => {
        // Reset data
        secret.value = []
        privateKey.value = ''
        isTouchedPrivateKey.value = false
    })


    // Validate word
    function validateWord(e) {
        let result = []


        // Validate length
        e.target.value.trim().length
            ? result.push(true)
            : result.push(false)


        // Validate symbols
        let regex = /^[a-z]+$/

        result.push(regex.test(e.target.value.trim()))


        // Set class
        if (result.every(value => value === true)) {
            e.target.classList.remove('error')
            e.target.classList.add('success')
        } else {
            e.target.classList.remove('success')
            e.target.classList.add('error')
        }
    }


    // Validate private key
    function validatePrivateKey() {
        // Validate length
        privateKey.value.trim().length
            ? idValidPrivateKey.value = true
            : idValidPrivateKey.value = false

        // Touched status
        isTouchedPrivateKey.value = true
    }


    // Validate form
    const isFormValid = computed(() => {
        let result = false

        switch (activeTab.value) {
            case 1:
                result = secret.value.length === 12 && secret.value.every(el => el !== '')
                break;

            case 2:
                result = secret.value.length === 24 && secret.value.every(el => el !== '')
                break;

            default:
                result = idValidPrivateKey.value
                break;
        }

        return result
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
    .tabs_wrap
    {
        margin-top: 54px;
    }



    .exp
    {
        font-size: 12px;

        margin-top: 8px;
    }
</style>