<template>
    <Loader v-if="loading" />

    <section class="page_container careate_wallet_page" v-else>
        <div class="cont">
            <div class="tabs" :class="{disabled: !agreed}">
                <button class="btn" @click.prevent="count = 12" :class="{ active: count === 12 }">12 words</button>

                <button class="btn" @click.prevent="count = 24" :class="{ active: count === 24 }">24 words</button>
            </div>

            <!-- <pre>{{ wallet }}</pre> -->

            <div class="mnemonic">
                <div class="row">
                    <div v-for="(word, index) in wallet.secret.data.split(' ')" :key="index">
                        <input type="text" class="input" readonly :value="word">
                    </div>

                    <div class="blur" v-if="!agreed"></div>
                </div>

                <button class="copy_btn" :disabled="!agreed" @click.prevent="copy(wallet.secret.data)" v-if="isSupported" :class="{green: copied}">
                    <span v-if="!copied">{{ $t('message.btn_copy') }}</span>
                    <span v-else>{{ $t('message.btn_copied') }}</span>
                </button>
            </div>


            <div class="agree" v-if="!agreed">
                <div>
                    <div class="label">Какой-то текст</div>

                    <label class="checkbox">
                        <input type="checkbox" v-model="agreeFirst" value="true">

                        <div class="check">
                            <!-- <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg> -->
                        </div>

                        <div>Текст чекбокса</div>
                    </label>
                </div>

                <div>
                    <div class="label">Какой-то текст</div>

                    <label class="checkbox">
                        <input type="checkbox" v-model="agreeSecond" value="true">

                        <div class="check">
                            <!-- <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg> -->
                        </div>

                        <div>Текст чекбокса</div>
                    </label>
                </div>
            </div>


            <div class="btns">
                <button class="btn" :class="{disabled: !agreeFirst || !agreeSecond}" @click.prevent="agreed = true" v-if="!agreed">
                    {{ $t('message.btn_show') }}
                </button>

                <button class="btn" v-if="agreed" @click.prevent="saveWallet">
                    {{ $t('message.btn_next') }}
                </button>
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


    .tabs.disabled
    {
        pointer-events: none;

        opacity: .5;
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


    .mnemonic .row .blur
    {
        position: absolute;
        z-index: 5;
        top: 0;
        right: 0;

        width: calc(100% - 12px);
        height: calc(100% - 12px);
        margin: 0;

        opacity: .9;
        background: #fff;
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


    .mnemonic .copy_btn
    {
        font-size: 14px;

        display: block;

        margin: 12px auto 0;

        transition: .2s linear;
    }


    .mnemonic .copy_btn.green
    {
        color: green;
    }


    .mnemonic .copy_btn:disabled
    {
        pointer-events: none;

        opacity: .5;
    }



    .agree
    {
        padding-top: 24px;
    }


    .agree > *
    {
        margin-top: 12px;
    }


    .agree .label
    {
        margin-bottom: 10px;
    }


    .agree .checkbox
    {
        font-size: 14px;
        line-height: 20px;

        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        min-height: 20px;
        padding-left: 31px;

        cursor: pointer;
    }


    .agree .checkbox input
    {
        display: none;
    }


    .agree .checkbox .check
    {
        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 20px;
        height: 20px;

        border: 1px solid currentColor;
    }


    .agree .checkbox .check .icon
    {
        display: block;

        width: 14px;
        height: 7px;

        content: '';
        transition: opacity .2s linear;

        opacity: 0;
    }


    .agree .checkbox input:checked ~ .check
    {
        background: #fff;
    }

    .agree .checkbox input:checked ~ .check .icon
    {
        opacity: 1;
    }



    .btns
    {
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