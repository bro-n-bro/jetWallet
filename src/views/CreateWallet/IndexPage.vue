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
                        <button class="copy_btn" :disabled="!agreed"  @click.prevent="copyHandler()">
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_copy"></use></svg>

                            <span>{{ $t('message.btn_copy') }}</span>
                        </button>
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
</template>


<script setup>
    import { onBeforeMount, ref, inject, watch, computed, nextTick } from 'vue'
    import { useRouter } from 'vue-router'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'
    import { useClipboard } from '@vueuse/core'
    import { generateWallet } from '@/utils'

    // Components
    import Loader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        router = useRouter(),
        i18n = inject('i18n'),
        notification = useNotification(),
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
        { copy } = useClipboard()


    onBeforeMount(async () => {
        // Generate wallet
        wallet.value = await generateWallet(count.value)

        // Hide loader
        loading.value = false
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

        // Go to confirm
        router.push('/confirm_wallet')
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



    .agree + .btns
    {
        margin-top: 0;
    }
</style>