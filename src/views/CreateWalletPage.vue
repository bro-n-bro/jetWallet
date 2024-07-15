<template>
    <section class="page_container create_wallet_page">
        <div class="cont">
            <div class="page_title">
                {{ $t('message.create_wallet_title') }}
            </div>

            <div class="page_data_wrap">
                <div class="page_data">
                    <Loader v-if="loading" />

                    <template v-else>
                    <router-link class="back_btn" to="/">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                    </router-link>


                    <div class="tabs_wrap">
                        <div class="tabs" :class="{ disabled: !agreed }">
                            <button class="btn" @click.prevent="count = 12" :class="{ active: count === 12 }">
                                <span>{{ $t('message.mnemonic_tab1') }}</span>
                            </button>

                            <button class="btn" @click.prevent="count = 24" :class="{ active: count === 24 }">
                                <span>{{ $t('message.mnemonic_tab2') }}</span>
                            </button>
                        </div>
                    </div>

                    <!-- <pre>{{ wallet }}</pre> -->

                    <div class="mnemonic">
                        <div class="row">
                            <div class="word" v-for="(word, index) in wallet.secret.data.split(' ')" :key="index">
                                <div class="input">{{ word }}</div>
                            </div>

                            <div class="blur" v-if="!agreed"></div>
                        </div>

                        <button class="copy_btn" :disabled="!agreed" @click.prevent="copy(wallet.secret.data)" v-if="isSupported" :class="{green: copied}">
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_copy"></use></svg>

                            <span v-if="!copied">{{ $t('message.btn_copy') }}</span>
                            <span v-else>{{ $t('message.btn_copied') }}</span>
                        </button>
                    </div>


                    <div class="agree" v-if="!agreed">
                        <div>
                            <div class="label">
                                {{ $t('message.create_wallet_agree_label1') }}
                            </div>

                            <label class="checkbox">
                                <input type="checkbox" v-model="agreeFirst" value="true">

                                <div class="check">
                                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                </div>

                                <div>{{ $t('message.create_wallet_agree_checkbox1') }}</div>
                            </label>
                        </div>

                        <div>
                            <div class="label">
                                {{ $t('message.create_wallet_agree_label2') }}
                            </div>

                            <label class="checkbox">
                                <input type="checkbox" v-model="agreeSecond" value="true">

                                <div class="check">
                                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                </div>

                                <div>{{ $t('message.create_wallet_agree_checkbox2') }}</div>
                            </label>
                        </div>
                    </div>


                    <div class="btns">
                        <button class="btn" :class="{disabled: !agreeFirst || !agreeSecond}" @click.prevent="agreed = true" v-if="!agreed">
                            <span>{{ $t('message.btn_show') }}</span>
                        </button>

                        <button class="btn" v-if="agreed" @click.prevent="saveWallet">
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
    import { onBeforeMount, ref, watch, computed } from 'vue'
    import { useRouter } from 'vue-router'
    import { useGlobalStore } from '@/store'
    import { useClipboard } from '@vueuse/core'
    import { generateWallet } from '@/utils'


    // Components
    import Loader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        router = useRouter(),
        loading = ref(true),
        count = ref(12),
        wallet = ref(null),
        agreeFirst = ref(false),
        agreeSecond = ref(false),
        agreed = ref(false),
        { copy, copied, isSupported } = useClipboard()


    onBeforeMount(async () => {
        // Generate wallet
        wallet.value = await generateWallet(count.value)

        // Hide loader
        loading.value = false
    })


    watch(computed(() => count.value), async () => {
        // Generate wallet
        wallet.value = await generateWallet(count.value)
    })


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