<template>
    <!-- Import wallet page -->
    <section class="page_container import_wallet_page">
        <div class="cont">
            <!-- Import wallet page title -->
            <div class="page_title">
                {{ $t('message.import_wallet_title') }}
            </div>

            <!-- Import wallet page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- Loader -->
                    <Loader v-if="loading" />

                    <template v-else>
                    <!-- Back button -->
                    <router-link v-if="props.isAdding" class="back_btn" to="/add_wallet">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                    </router-link>

                    <router-link v-else class="back_btn" to="/">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                    </router-link>

                    <!-- Tabs -->
                    <div class="tabs_wrap">
                        <div class="tabs">
                            <!-- Tab 12 words -->
                            <button class="btn" ref="tab1" @click.prevent="activeTab = 1" :class="{ active: activeTab === 1 }">
                                {{ $t('message.mnemonic_tab1') }}
                            </button>

                            <!-- Tab 24 words -->
                            <button class="btn" ref="tab2" @click.prevent="activeTab = 2" :class="{ active: activeTab === 2 }">
                                {{ $t('message.mnemonic_tab2') }}
                            </button>

                            <!-- Tab Private Key -->
                            <button class="btn" ref="tab3" @click.prevent="activeTab = 3" :class="{ active: activeTab === 3 }">
                                {{ $t('message.mnemonic_tab3') }}
                            </button>

                            <!-- Tabs roller -->
                            <div class="roller" :style="`width: ${rollerWidth}px; left: ${rollerOffsetLeft}px;`">
                                <span></span>
                            </div>
                        </div>
                    </div>

                    <!-- Mnemonic -->
                    <div class="mnemonic" v-if="activeTab != 3">
                        <div class="row">
                            <!-- Mnemonic word -->
                            <div class="word">
                                <input type="text" class="input" v-model="secret[0]"
                                    @input="validateWord($event.target.value, 0)"
                                    @paste="handlePaste" :class="getValidationClass(0)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word">
                                <input type="text" class="input" v-model="secret[1]"
                                    @input="validateWord($event.target.value, 1)"
                                    @paste="handlePaste" :class="getValidationClass(1)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word">
                                <input type="text" class="input" v-model="secret[2]"
                                    @input="validateWord($event.target.value, 2)"
                                    @paste="handlePaste" :class="getValidationClass(2)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word">
                                <input type="text" class="input" v-model="secret[3]"
                                    @input="validateWord($event.target.value, 3)"
                                    @paste="handlePaste" :class="getValidationClass(3)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word">
                                <input type="text" class="input" v-model="secret[4]"
                                    @input="validateWord($event.target.value, 4)"
                                    @paste="handlePaste" :class="getValidationClass(4)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word">
                                <input type="text" class="input" v-model="secret[5]"
                                    @input="validateWord($event.target.value, 5)"
                                    @paste="handlePaste" :class="getValidationClass(5)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word">
                                <input type="text" class="input" v-model="secret[6]"
                                    @input="validateWord($event.target.value, 6)"
                                    @paste="handlePaste" :class="getValidationClass(6)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word">
                                <input type="text" class="input" v-model="secret[7]"
                                    @input="validateWord($event.target.value, 7)"
                                    @paste="handlePaste" :class="getValidationClass(7)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word">
                                <input type="text" class="input" v-model="secret[8]"
                                    @input="validateWord($event.target.value, 8)"
                                    @paste="handlePaste" :class="getValidationClass(8)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word">
                                <input type="text" class="input" v-model="secret[9]"
                                    @input="validateWord($event.target.value, 9)"
                                    @paste="handlePaste" :class="getValidationClass(9)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word">
                                <input type="text" class="input" v-model="secret[10]"
                                    @input="validateWord($event.target.value, 10)"
                                    @paste="handlePaste" :class="getValidationClass(10)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word">
                                <input type="text" class="input" v-model="secret[11]"
                                    @input="validateWord($event.target.value, 11)"
                                    @paste="handlePaste" :class="getValidationClass(11)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[12]"
                                    @input="validateWord($event.target.value, 12)"
                                    @paste="handlePaste" :class="getValidationClass(12)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[13]"
                                    @input="validateWord($event.target.value, 13)"
                                    @paste="handlePaste" :class="getValidationClass(13)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[14]"
                                    @input="validateWord($event.target.value, 14)"
                                    @paste="handlePaste" :class="getValidationClass(14)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[15]"
                                    @input="validateWord($event.target.value, 15)"
                                    @paste="handlePaste" :class="getValidationClass(15)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[16]"
                                    @input="validateWord($event.target.value, 16)"
                                    @paste="handlePaste" :class="getValidationClass(16)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[17]"
                                    @input="validateWord($event.target.value, 17)"
                                    @paste="handlePaste" :class="getValidationClass(17)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[18]"
                                    @input="validateWord($event.target.value, 18)"
                                    @paste="handlePaste" :class="getValidationClass(18)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[19]"
                                    @input="validateWord($event.target.value, 19)"
                                    @paste="handlePaste" :class="getValidationClass(19)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[20]"
                                    @input="validateWord($event.target.value, 20)"
                                    @paste="handlePaste" :class="getValidationClass(20)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[21]"
                                    @input="validateWord($event.target.value, 21)"
                                    @paste="handlePaste" :class="getValidationClass(21)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[22]"
                                    @input="validateWord($event.target.value, 22)"
                                    @paste="handlePaste" :class="getValidationClass(22)">
                            </div>

                            <!-- Mnemonic word -->
                            <div class="word" v-if="activeTab === 2">
                                <input type="text" class="input" v-model="secret[23]"
                                    @input="validateWord($event.target.value, 23)"
                                    @paste="handlePaste" :class="getValidationClass(23)">
                            </div>
                        </div>

                        <!-- Import wallet page exp -->
                        <div class="exp" v-html="$t('message.import_wallet_exp')"></div>
                    </div>


                    <!-- Import private key -->
                    <div class="private_key" v-else>
                        <div class="field">
                            <!-- Import private key field -->
                            <input type="text" class="input big" v-model="privateKey"
                                :class="{
                                    error: !idValidPrivateKey && isTouchedPrivateKey,
                                    success: idValidPrivateKey && isTouchedPrivateKey
                                }"
                                @input="validatePrivateKey()"
                                @paste="validatePrivateKey()"
                            >
                        </div>

                        <!-- Import private key exp -->
                        <div class="exp" v-html="$t('message.import_wallet_exp2')"></div>
                    </div>


                    <!-- Advanced -->
                    <div class="advanced" v-if="activeTab !== 3">
                        <button class="btn" @click.prevent="showAdvanced = true" v-if="!showAdvanced">
                            <span>{{ $t('message.btn_advanced') }}</span>
                        </button>

                        <div v-else>
                            <div class="label">
                                {{ $t('message.create_wallet_derivation_path_label') }} <span @click.prevent="showDerivationPathModal = true">?</span>
                            </div>

                            <div class="field">
                                <span>m/44'/118'/</span>

                                <input type="text" class="input" v-model="derivationPathPart1">

                                <span>'/</span>

                                <input type="text" class="input" v-model="derivationPathPart2">

                                <span>/</span>

                                <input type="text" class="input" v-model="derivationPathPart3">
                            </div>
                        </div>
                    </div>


                    <!-- Import wallet page button -->
                    <div class="btns">
                        <!-- Next button -->
                        <div class="btn" :class="{ disabled: !isFormValid }" @click.prevent="save()">
                            <span>{{ $t('message.btn_next') }}</span>
                        </div>
                    </div>
                    </template>
                </div>
            </div>
        </div>
    </section>


    <!-- Derivation path modal -->
    <DerivationPathModal v-if="showDerivationPathModal" />
</template>


<script setup>
    import { ref, onBeforeMount, onMounted, onUnmounted, watch, computed, inject } from 'vue'
    import { useRouter } from 'vue-router'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'
    import { importWalletFromMnemonic, importWalletFromPrivateKey } from '@/utils'
    import { fromHex } from '@cosmjs/encoding'
    import { Secp256k1 } from '@cosmjs/crypto'

    // Components
    import Loader from '@/components/Loader.vue'
    import DerivationPathModal from '@/components/modal/DerivationPathModal.vue'


    const props = defineProps(['isAdding']),
        store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        notification = useNotification(),
        i18n = inject('i18n'),
        loading = ref(true),
        activeTab = ref(1),
        tab1 = ref(null),
        tab2 = ref(null),
        tab3 = ref(null),
        tabs = [tab1, tab2, tab3],
        rollerWidth = ref(null),
        rollerOffsetLeft = ref(null),
        wallet = ref(null),
        secret = ref([]),
        validateAllWordsResult = ref([]),
        privateKey = ref(''),
        idValidPrivateKey = ref(false),
        isTouchedPrivateKey = ref(false),
        showAdvanced = ref(false),
        showDerivationPathModal = ref(false),
        derivationPathPart1 = ref(0),
        derivationPathPart2 = ref(0),
        derivationPathPart3 = ref(0)


    onBeforeMount(() => {
        // Hide loader
        loading.value = false
    })


    onMounted(() => {
        // Set roller params
        rollerWidth.value = tabs[activeTab.value - 1].value.offsetWidth
        rollerOffsetLeft.value = tabs[activeTab.value - 1].value.offsetLeft

        // Event "close_derivation_path_modal"
        emitter.on('close_derivation_path_modal', closeDerivationPathModal)
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('close_derivation_path_modal', closeDerivationPathModal)
    })


    watch(activeTab, () => {
        // Reset data
        secret.value = []
        validateAllWordsResult.value = []
        privateKey.value = ''
        isTouchedPrivateKey.value = false

        // Update roller params
        rollerWidth.value = tabs[activeTab.value - 1].value.offsetWidth
        rollerOffsetLeft.value = tabs[activeTab.value - 1].value.offsetLeft
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
        let regex = /^[a-z]+$/i

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
    async function validatePrivateKey() {
        let result = true

        try {
            // Validate length
            if (!privateKey.value.trim().length) {
                result = result ? result = false : result
            }

            // Validate bytes length
            let privateKeyParsed = fromHex(privateKey.value.trim())

            if (privateKeyParsed.length !== 32) {
                result = result ? result = false : result
            }

            // Try generate public key
            let publicKey = await Secp256k1.makeKeypair(privateKeyParsed)

            if (!publicKey) {
                result = result ? result = false : result
            }

            // Valid status
            idValidPrivateKey.value = result

            // Touched status
            isTouchedPrivateKey.value = true

            return result
        } catch (error) {
            console.error(`Components/CreateWallet/ImportPage.vue: ${error.message}`)

            // Valid status
            idValidPrivateKey.value = false

            // Touched status
            isTouchedPrivateKey.value = true

            return false
        }
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
        try {
            // Import wallet
            if (activeTab.value != 3) {
                // Import
                wallet.value = await importWalletFromMnemonic(secret.value.join(' ').toLocaleLowerCase(), null, store.defaultDerivationPath)

                // Save in DB
                await store.setSecret(wallet.value.secret.data)

                // Save derivation path
                store.tempDerivationPath = `m/44'/118'/${derivationPathPart1.value}'/${derivationPathPart2.value}/${derivationPathPart3.value}`
            } else {
                // Import
                wallet.value = await importWalletFromPrivateKey(privateKey.value)

                // Save in DB
                await store.setPrivateKey(privateKey.value)
            }

            if (props.isAdding) {
                // Save in DB
                await store.createWallet({
                    isAdding: true
                })

                // Redirect
                router.push('/account')

                // Event "show_wallets_modal"
                emitter.emit('show_wallets_modal')

                // Show notification
                notification.notify({
                    group: 'default',
                    speed: 200,
                    duration: 1000,
                    title: i18n.global.t('message.notification_wallet_added_success'),
                    type: 'success',
                })
            } else {
                // Redirect
                router.push('/create_pin')
            }

        } catch (error) {
            console.error(`Components/CreateWallet/CreatePage.vue: ${error.message}`)
        }
    }


    // Close derivation path modal
    function closeDerivationPathModal() {
        // Hide derivation path modal
        showDerivationPathModal.value = false
    }
</script>


<style scoped>
    .tabs_wrap
    {
        margin-top: 54px;
    }



    .input
    {
        text-transform: lowercase;
    }



    .exp
    {
        font-size: 12px;

        margin-top: 8px;
    }



    .advanced
    {
        margin-top: 25px;
        margin-bottom: auto;

        text-align: center;
    }


    .advanced .btn
    {
        font-size: 14px;
        line-height: 10px;

        padding: 1px;

        cursor: pointer;
        transition: opacity .2s linear;

        border-radius: 8px;
        background: linear-gradient(to bottom,  #da91fc 0%,#300345 100%);
    }


    .advanced .btn span
    {
        display: block;

        padding: 9px 19px;

        border-radius: 7px;
        background: linear-gradient(to bottom, #ad5dd1 0%, #580280 100%);
    }


    .advanced .btn:active span
    {
        background: linear-gradient(to bottom,  #580280 0%,#ac5dd1 100%);
    }


    .advanced > div
    {
        text-align: left;
    }


    .advanced .label
    {
        font-size: 14px;
        font-weight: 500;

        margin-bottom: 10px;
    }


    .advanced .label span
    {
        line-height: 17px;

        display: inline-block;

        width: 17px;
        height: 17px;

        text-align: center;
        vertical-align: middle;

        border-radius: 50%;
        background: rgba(0, 0, 0, .70);
    }


    .advanced .field
    {
        font-size: 12px;
        font-weight: 500;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        padding-left: 11px;

        gap: 4px;
    }


    .advanced .input
    {
        width: 66px;
    }
</style>