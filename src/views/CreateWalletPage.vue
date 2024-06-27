<template>
    <section class="page_container careate_wallet_page">
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
                        <div class="tabs" :class="{disabled: !agreed}">
                            <button class="btn" @click.prevent="count = 12" :class="{ active: count === 12 }">
                                <span>12 words</span>
                            </button>

                            <button class="btn" @click.prevent="count = 24" :class="{ active: count === 24 }">
                                <span>24 words</span>
                            </button>
                        </div>
                    </div>

                    <!-- <pre>{{ wallet }}</pre> -->

                    <div class="mnemonic">
                        <div class="row">
                            <div v-for="(word, index) in wallet.secret.data.split(' ')" :key="index">
                                <div class="number">{{ index + 1 }}.</div>
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
                                {{ $t('message.careate_wallet_agree_label1') }}
                            </div>

                            <label class="checkbox">
                                <input type="checkbox" v-model="agreeFirst" value="true">

                                <div class="check">
                                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                </div>

                                <div>{{ $t('message.careate_wallet_agree_checkbox1') }}</div>
                            </label>
                        </div>

                        <div>
                            <div class="label">
                                {{ $t('message.careate_wallet_agree_label2') }}
                            </div>

                            <label class="checkbox">
                                <input type="checkbox" v-model="agreeSecond" value="true">

                                <div class="check">
                                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                                </div>

                                <div>{{ $t('message.careate_wallet_agree_checkbox2') }}</div>
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
    import { useClipboard } from '@vueuse/core'
    import { generateWallet } from '@/utils'
    import { addData } from '@/utils/db'


    // Components
    import Loader from '@/components/Loader.vue'


    const router = useRouter(),
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
        await addData('wallet', [
            ['secret', wallet.value.secret.data],
            ['seed', wallet.value.seed]
        ])

        // Go to confirm
        router.push('/create_wallet_confirm')
    }
</script>


<style scoped>
    .mnemonic .row
    {
        position: relative;

        align-content: stretch;
        align-items: stretch;

        margin-bottom: -10px;
        margin-left: -8px;
    }


    .mnemonic .row > *
    {
        position: relative;

        width: calc(33.333% - 8px);
        margin-bottom: 10px;
        margin-left: 8px;
    }


    .mnemonic .row .blur
    {
        position: absolute;
        z-index: 3;
        top: -9px;
        left: 0;

        width: calc(100% + 8px);
        height: calc(100% + 8px);
        margin: 0;

        border-radius: 14px;
        background: rgba(217, 217, 217, .50);

                backdrop-filter: blur(5.65px);
        -webkit-backdrop-filter: blur(5.65px);
    }


    .mnemonic .input
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        padding-left: 27px;
    }


    .mnemonic .number
    {
        font-size: 12px;
        font-weight: 500;

        position: absolute;
        z-index: 2;
        top: 0;
        left: 8px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        height: 100%;

        user-select: none;
    }



    .mnemonic .copy_btn
    {
        font-size: 14px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        margin: 8px auto 0;

        transition: .2s linear;
    }


    .mnemonic .copy_btn .icon
    {
        display: block;

        width: 24px;
        height: 24px;
        margin-right: 4px;
    }


    .mnemonic .copy_btn.green
    {
        color: #00aa63;
    }


    .mnemonic .copy_btn:disabled
    {
        pointer-events: none;

        opacity: .2;
    }



    .agree
    {
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
</style>