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
                                <input type="text" class="input" v-model="secret[0]" @input="validateWord($event.target.value, 0)" @paste="handlePaste" :class="getValidationClass(0)">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[1]" @input="validateWord($event.target.value, 1)" @paste="handlePaste" :class="getValidationClass(1)">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[2]" @input="validateWord($event.target.value, 2)" @paste="handlePaste" :class="getValidationClass(2)">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[3]" @input="validateWord($event.target.value, 3)" @paste="handlePaste" :class="getValidationClass(3)">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[4]" @input="validateWord($event.target.value, 4)" @paste="handlePaste" :class="getValidationClass(4)">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[5]" @input="validateWord($event.target.value, 5)" @paste="handlePaste" :class="getValidationClass(5)">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[6]" @input="validateWord($event.target.value, 6)" @paste="handlePaste" :class="getValidationClass(6)">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[7]" @input="validateWord($event.target.value, 7)" @paste="handlePaste" :class="getValidationClass(7)">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[8]" @input="validateWord($event.target.value, 8)" @paste="handlePaste" :class="getValidationClass(8)">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[9]" @input="validateWord($event.target.value, 9)" @paste="handlePaste" :class="getValidationClass(9)">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[10]" @input="validateWord($event.target.value, 10)" @paste="handlePaste" :class="getValidationClass(10)">
                            </div>

                            <div class="word">
                                <input type="text" class="input" v-model="secret[11]" @input="validateWord($event.target.value, 11)" @paste="handlePaste" :class="getValidationClass(11)">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[12]" @input="validateWord($event.target.value, 12)" @paste="handlePaste" :class="getValidationClass(12)">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[13]" @input="validateWord($event.target.value, 13)" @paste="handlePaste" :class="getValidationClass(13)">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[14]" @input="validateWord($event.target.value, 14)" @paste="handlePaste" :class="getValidationClass(14)">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[15]" @input="validateWord($event.target.value, 15)" @paste="handlePaste" :class="getValidationClass(15)">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[16]" @input="validateWord($event.target.value, 16)" @paste="handlePaste" :class="getValidationClass(16)">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[17]" @input="validateWord($event.target.value, 17)" @paste="handlePaste" :class="getValidationClass(17)">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[18]" @input="validateWord($event.target.value, 18)" @paste="handlePaste" :class="getValidationClass(18)">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[19]" @input="validateWord($event.target.value, 19)" @paste="handlePaste" :class="getValidationClass(19)">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[20]" @input="validateWord($event.target.value, 20)" @paste="handlePaste" :class="getValidationClass(20)">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[21]" @input="validateWord($event.target.value, 21)" @paste="handlePaste" :class="getValidationClass(21)">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[22]" @input="validateWord($event.target.value, 22)" @paste="handlePaste" :class="getValidationClass(22)">
                            </div>

                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[23]" @input="validateWord($event.target.value, 23)" @paste="handlePaste" :class="getValidationClass(23)">
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
    import { importWalletFromMnemonic, importWalletFromPrivateKey } from '@/utils'
    import { addData } from '@/utils/db'


    // Components
    import Loader from '@/components/Loader.vue'


    const router = useRouter(),
        loading = ref(true),
        activeTab = ref(1),
        wallet = ref(null),
        secret = ref([]),
        validateAllWordsResult = ref([]),
        privateKey = ref(''),
        idValidPrivateKey = ref(false),
        isTouchedPrivateKey = ref(false)


    onBeforeMount(async () => {
        // Hide loader
        loading.value = false
    })


    watch(activeTab, () => {
        // Reset data
        secret.value = []
        validateAllWordsResult.value = []
        privateKey.value = ''
        isTouchedPrivateKey.value = false
    })


    // Event handler for pasting text from clipboard
    function handlePaste(e) {
        // Get data from the clipboard
        let clipboardData = e.clipboardData || window.clipboardData,
            pastedText = clipboardData.getData('text'),
            pastedTextArr = pastedText.split(' ')

        if (pastedTextArr.length == 12) {
            // Set active tab
            activeTab.value = 1

            // Set secret
            setTimeout(() => secret.value = pastedTextArr)

            // Validate
            setTimeout(() => validateAllWords())
        }

        if (pastedTextArr.length == 24) {
            // Set active tab
            activeTab.value = 2

            // Set secret
            setTimeout(() => secret.value = pastedTextArr)

            // Validate
            setTimeout(() => validateAllWords())
        }
    }


    // Validate all words
    function validateAllWords() {
        secret.value.map((value, i) => validateWord(value, i))
    }


    // Validate word
    function validateWord(str, i) {
        let result = true

        // Validate length
        if (!str.trim().length) {
            result = false
        }

        // Validate symbols
        let regex = /^[a-z]+$/

        if (!regex.test(str.trim())) {
            result = false
        }

        validateAllWordsResult.value[i] = result
    }


    // Get validate class
    function getValidationClass(i) {
        let result = validateAllWordsResult.value[i]

        if (result === null || result === undefined) {
            return ''
        }

        return result ? 'success' : 'error'
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
            ? wallet.value = await importWalletFromMnemonic(secret.value.join(' '))
            : wallet.value = await importWalletFromPrivateKey(privateKey.value)

        // Save in DB
        await addData('wallet', [
            ['secret', wallet.value.secret.data],
            ['seed', wallet.value.seed]
        ])

        // Redirect
        router.push('/create_pin')
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