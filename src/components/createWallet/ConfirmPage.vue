<template>
    <!-- Confirm create wallet page -->
    <section class="page_container confirm_create_wallet_page">
        <div class="cont">
            <!-- Confirm create wallet page title -->
            <div class="page_title">
                {{ $t('message.create_wallet_confirm_title') }}
            </div>

            <!-- Confirm create wallet page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- Loader -->
                    <Loader v-if="loading" />

                    <!-- Back button -->
                    <router-link class="back_btn" to="/create_wallet">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                    </router-link>

                    <!-- Confirm data -->
                    <div class="confirm">
                        <!-- Confirm first word -->
                        <div>
                            <!-- Confirm word label -->
                            <div class="label">
                                <span>{{ $t('message.confirm_label') }}</span>
                                <span>{{ wordOneNumber }}.</span>
                            </div>

                            <!-- Confirm word options -->
                            <div class="options">
                                <div v-for="(word, index) in wordOneOptions" :key="index">
                                    <button class="btn" :class="{ selected: wordOneAnswer === word }" @click.prevent="wordOneAnswer = word">
                                        <span>{{ word }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Confirm second word -->
                        <div>
                            <!-- Confirm word label -->
                            <div class="label">
                                <span>{{ $t('message.confirm_label') }}</span>
                                <span>{{ wordTwoNumber }}.</span>
                            </div>

                            <!-- Confirm word options -->
                            <div class="options">
                                <div v-for="(word, index) in wordTwoOptions" :key="index">
                                    <button class="btn" :class="{ selected: wordTwoAnswer === word }" @click.prevent="wordTwoAnswer = word">
                                        <span>{{ word }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Show seed phrase -->
                    <div class="show_seed_phrase" v-if="failures >= store.confirmSeedsErrorLimit">
                        <button class="btn" @click.prevent="emitter.emit('show_seed_phrase_hint_modal')">
                            {{ $t('message.btn_show_seed_phrase') }}
                        </button>
                    </div>

                    <!-- Confirm create wallet page buttons -->
                    <div class="btns">
                        <!-- Next button -->
                        <div class="btn" :class="{ disabled: !wordOneAnswer || !wordTwoAnswer }" @click.prevent="check()">
                            <span>{{ $t('message.btn_next') }}</span>
                        </div>
                    </div>

                    <!-- Confirm create wallet page text -->
                    <div class="exp">
                        {{ $t('message.confirm_exp') }}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Wrong seeds modal -->
    <transition name="fade">
    <WrongSeedsModal v-if="showWrongSeedsModal" />
    </transition>

    <!-- Seed phrase hint modal -->
    <transition name="modal">
    <SeedPhraseHintModal v-if="showSeedPhraseHintModal" :mnemonic="mnemonic" />
    </transition>

    <!-- Overlay -->
    <transition name="fade">
    <div class="modal_overlay" @click.prevent="emitter.emit('close_any_modal')" v-if="showWrongSeedsModal || showSeedPhraseHintModal"></div>
    </transition>
</template>


<script setup>
    import { ref, onBeforeMount, inject } from 'vue'
    import { useRouter } from 'vue-router'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'
    import * as bip39 from 'bip39'

    // Components
    import Loader from '@/components/Loader.vue'
    import WrongSeedsModal from '@/components/modal/WrongSeedsModal.vue'
    import SeedPhraseHintModal from '@/components/modal/SeedPhraseHintModal.vue'


    const props = defineProps(['isAdding']),
        store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        notification = useNotification(),
        i18n = inject('i18n'),
        loading = ref(true),
        mnemonic = ref(null),
        mnemonicArr = ref([]),
        wordlist = bip39.wordlists.english,
        wordOneOptions = ref([]),
        wordTwoOptions = ref([]),
        wordOneNumber = ref(null),
        wordTwoNumber = ref(null),
        wordOneAnswer = ref(null),
        wordTwoAnswer = ref(null),
        showWrongSeedsModal = ref(false),
        showSeedPhraseHintModal = ref(false),
        failures = ref(0)


    onBeforeMount(async () => {
        // Get mnemonic
        mnemonic.value = await store.getSecret()
        mnemonicArr.value = mnemonic.value.split(' ')

        // Get random words
        getRandomWords()

        // Generate options
        wordOneOptions.value = generateOptions(mnemonicArr.value[wordOneNumber.value - 1])
        wordTwoOptions.value = generateOptions(mnemonicArr.value[wordTwoNumber.value - 1])

        // Hide loader
        loading.value = false
    })


    // Get random words
    function getRandomWords() {
        let min = 1,
            max = mnemonicArr.value.length

        // Generate the first random number
        wordOneNumber.value = Math.floor(Math.random() * (max - min + 1)) + min

        // Generate the second random number
        do {
            wordTwoNumber.value = Math.floor(Math.random() * (max - min + 1)) + min
        } while (wordOneNumber.value === wordTwoNumber.value)
    }


    // Generate options
    function generateOptions(word) {
        let result = [],
            randomIndex = Math.floor(Math.random() * 6),
            usedWords = new Set()

        // Set right option
        result[randomIndex] = word
        usedWords.add(word)

        // Fill the remaining positions with random options
        for (let i = 0; i < 6; i++) {
            if (i !== randomIndex) {
                let randomOption

                // Get random option
                do {
                    let randomOptionIndex = Math.floor(Math.random() * wordlist.length)

                    randomOption = wordlist[randomOptionIndex]
                } while (usedWords.has(randomOption))

                // Set option
                result[i] = randomOption
                usedWords.add(randomOption)
            }
        }

        return result
    }


    // Validate answers
    function validateAnswers() {
        let result = true

        // Check first word
        if (wordOneAnswer.value !== mnemonicArr.value[wordOneNumber.value - 1]) {
            result = false
        }

        // Check second word
        if (wordTwoAnswer.value !== mnemonicArr.value[wordTwoNumber.value - 1]) {
            result = false
        }

        return result
    }


    // Check
    async function check() {
        // Show loader
        loading.value = true

        // Validate answers
        let result = validateAnswers()

        if (result) {
            // Save
            await save()
        } else {
            // Set a failed attempt
            failures.value++

            // Show wrong seeds modal
            showWrongSeedsModal.value = true

            // Hide loader
            loading.value = false
        }
    }


    // Save
    async function save() {
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
    }


    // Event "close_wrong_seeds_modal"
    emitter.on('close_wrong_seeds_modal', () => {
        // Hide wrong seeds modal
        showWrongSeedsModal.value = false

        // Get random words
        getRandomWords()

        // Generate options
        wordOneOptions.value = generateOptions(mnemonicArr.value[wordOneNumber.value - 1])
        wordTwoOptions.value = generateOptions(mnemonicArr.value[wordTwoNumber.value - 1])
    })


    // Event "show_seed_phrase_hint_modal"
    emitter.on('show_seed_phrase_hint_modal', () => {
        // Show seed phrase hint modal
        showSeedPhraseHintModal.value = true

        // Update status
        store.isAnyModalOpen = true
    })


    // Event "close_seed_phrase_hint_modal"
    emitter.on('close_seed_phrase_hint_modal', () => {
        // Reset errors limit
        failures.value = 0

        // Hide seed phrase hint modal
        showSeedPhraseHintModal.value = false

        // Update status
        store.isAnyModalOpen = false
    })


    // Event "close_any_modal"
    emitter.on('close_any_modal', () => {
        // Event "close_seed_phrase_hint_modal"
        emitter.emit('close_seed_phrase_hint_modal')

        // Update status
        store.isAnyModalOpen = false
    })
</script>


<style scoped>
    .back_btn
    {
        top: 10px;
        left: 10px;
    }



    .confirm
    {
        display: flex;
        flex-direction: column;

        margin-top: 58px;

        gap: 10px;
    }


    .confirm .label
    {
        font-size: 14px;

        margin-bottom: 2px;
        padding: 0 10px;
    }


    .confirm .options
    {
        display: flex;
        align-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: flex-start;

        gap: 10px;
    }


    .confirm .options .btn
    {
        font-size: 14px;
        font-weight: 500;

        padding: 1px;

        color: #fff;
        border-radius: 6px;
        background: linear-gradient(to bottom, #5c32cc 0%, #210750 100%);
    }


    .confirm .options .btn span
    {
        display: block;

        padding: 5px 9px;

        border-radius: 5px;
        background: #170232;
    }


    .confirm .options .btn.selected
    {
        background: linear-gradient(to bottom, #6ae1fb 0%, #02294b 100%);
    }


    .confirm .options .btn.selected span
    {
        background: linear-gradient(to bottom, #59aaea 0%, #024390 100%);
    }



    .show_seed_phrase
    {
        font-size: 14px;
        line-height: 100%;

        margin-top: 18px;

        text-align: center;
    }


    .show_seed_phrase .btn
    {
        padding: 3px 6px;

        text-decoration: underline;

        text-decoration-thickness: 1px;
    }



    .exp
    {
        font-size: 12px;

        margin-top: 6px;
    }
</style>


