<template>
    <!-- Create wallet page -->
    <section class="page_container create_wallet_page">
        <div class="cont">
            <!-- Create wallet page title -->
            <div class="page_title">
                {{ $t('message.create_wallet_title') }}
            </div>

            <!-- Create wallet page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- Loader -->
                    <Loader v-if="loading" />

                    <template v-else>
                    <!-- Back button -->
                    <router-link class="back_btn" to="/">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                    </router-link>


                    <!-- Tabs -->
                    <div class="tabs_wrap">
                        <div class="tabs" :class="{ disabled: !agreed }">
                            <!-- Tab 12 words -->
                            <button class="btn" ref="tab1" @click.prevent="activeTab = 1; count = 12" :class="{ active: activeTab === 1 }">
                                <span>{{ $t('message.mnemonic_tab1') }}</span>
                            </button>

                            <!-- Tab 24 words -->
                            <button class="btn" ref="tab2" @click.prevent="activeTab = 2; count = 24" :class="{ active: activeTab === 2 }">
                                <span>{{ $t('message.mnemonic_tab2') }}</span>
                            </button>

                            <!-- Tabs roller -->
                            <div class="roller" :style="`width: ${rollerWidth}px; left: ${rollerOffsetLeft}px;`">
                                <span></span>
                            </div>
                        </div>
                    </div>


                    <!-- Mnemonic -->
                    <div class="mnemonic">
                        <div class="row">
                            <!-- Mnemonic words -->
                            <div class="word" v-for="(word, index) in wallet.secret.data.split(' ')" :key="index">
                                <!-- Mnemonic field -->
                                <div class="input">{{ word }}</div>
                            </div>

                            <!-- Mnemonic blur -->
                            <div class="blur" v-if="!agreed"></div>
                        </div>

                        <!-- Mnemonic copy button -->
                        <button class="copy_btn" :disabled="!agreed" @click.prevent="copyHandler()">
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_copy"></use></svg>

                            <span>{{ $t('message.btn_copy') }}</span>
                        </button>
                    </div>


                    <!-- Advanced -->
                    <div class="advanced" v-if="agreed">
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


                    <!-- Agree -->
                    <div class="agree" v-if="!agreed">
                        <div>
                            <!-- Agree label -->
                            <div class="label">
                                {{ $t('message.create_wallet_agree_label1') }}
                            </div>

                            <!-- Agree checkbox -->
                            <label class="checkbox">
                                <input type="checkbox" v-model="agreeFirst" value="true">

                                <div class="check">
                                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                </div>

                                <div>{{ $t('message.create_wallet_agree_checkbox1') }}</div>
                            </label>
                        </div>

                        <div>
                            <!-- Agree label -->
                            <div class="label">
                                {{ $t('message.create_wallet_agree_label2') }}
                            </div>

                            <!-- Agree checkbox -->
                            <label class="checkbox">
                                <input type="checkbox" v-model="agreeSecond" value="true">

                                <div class="check">
                                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                </div>

                                <div>{{ $t('message.create_wallet_agree_checkbox2') }}</div>
                            </label>
                        </div>
                    </div>


                    <!-- Create wallet page button -->
                    <div class="btns">
                        <!-- Show button -->
                        <div class="btn" :class="{ disabled: !agreeFirst || !agreeSecond }" @click.prevent="agreed = true" v-if="!agreed">
                            <span>{{ $t('message.btn_show') }}</span>
                        </div>

                        <!-- Next button -->
                        <div class="btn" v-else @click.prevent="saveWallet()">
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
    import { ref, inject, watch, computed, nextTick, onBeforeMount, onMounted, onUnmounted } from 'vue'
    import { useRouter } from 'vue-router'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'
    import { useClipboard } from '@vueuse/core'
    import { generateWallet } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'
    import DerivationPathModal from '@/components/modal/DerivationPathModal.vue'


    const props = defineProps(['isAdding']),
        store = useGlobalStore(),
        router = useRouter(),
        i18n = inject('i18n'),
        notification = useNotification(),
        emitter = inject('emitter'),
        loading = ref(true),
        count = ref(12),
        wallet = ref(null),
        agreeFirst = ref(false),
        agreeSecond = ref(false),
        agreed = ref(false),
        activeTab = ref(1),
        tab1 = ref(null),
        tab2 = ref(null),
        tabs = [tab1, tab2],
        rollerWidth = ref(null),
        rollerOffsetLeft = ref(null),
        { copy } = useClipboard(),
        showAdvanced = ref(false),
        showDerivationPathModal = ref(false),
        derivationPathPart1 = ref(0),
        derivationPathPart2 = ref(0),
        derivationPathPart3 = ref(0)


    onBeforeMount(async () => {
        // Generate wallet
        wallet.value = await generateWallet(count.value)

        // Hide loader
        loading.value = false
    })


    onMounted(() => {
        // Event "close_derivation_path_modal"
        emitter.on('close_derivation_path_modal', closeDerivationPathModal)
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('close_derivation_path_modal', closeDerivationPathModal)
    })


    watch(computed(() => loading.value), async () => {
        if (!loading.value) {
            // Wait
            await nextTick()

            // Set roller params
            rollerWidth.value = tabs[activeTab.value - 1].value.offsetWidth
            rollerOffsetLeft.value = tabs[activeTab.value - 1].value.offsetLeft
        }
    })


    watch(computed(() => activeTab.value), async () => {
        // Update roller params
        rollerWidth.value = tabs[activeTab.value - 1].value.offsetWidth
        rollerOffsetLeft.value = tabs[activeTab.value - 1].value.offsetLeft

        // Generate wallet
        wallet.value = await generateWallet(count.value)
    })


    // Copy handler
    function copyHandler() {
        // Copy
        copy(wallet.value.secret.data)

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


    // Save wallet
    async function saveWallet() {
        // Show loader
        loading.value = true

        // Save in DB
        await store.setSecret(wallet.value.secret.data)

        // Save derivation path
        store.tempDerivationPath = `m/44'/118'/${derivationPathPart1.value}'/${derivationPathPart2.value}/${derivationPathPart3.value}`

        props.isAdding
            // Go to confirm
            ? router.push('/add_wallet/confirm')
            // Go to confirm
            : router.push('/confirm_wallet')
    }


    // Close derivation path modal
    function closeDerivationPathModal() {
        // Hide derivation path modal
        showDerivationPathModal.value = false
    }
</script>


<style scoped>
    .mnemonic .input
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;
    }



    .agree
    {
        margin-top: auto;
        padding-top: 18px;
    }


    .agree > *
    {
        margin-top: 8px;
    }


    .agree .label
    {
        font-size: 14px;
        line-height: 100%;

        margin-bottom: 4px;

        color: #ffc700;
    }



    .btns
    {
        margin-top: 0;
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