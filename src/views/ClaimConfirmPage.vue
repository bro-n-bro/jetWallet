<template>
    <section class="page_container claim_confirm">
        <div class="cont">
            <div class="head">
                <router-link to="/account" class="back_btn">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </router-link>

                <div class="page_title">
                    {{ $t('message.claim_rewards_page_title') }}
                </div>
            </div>


            <div class="data">
                <div class="label">
                    {{ $t('message.details_label') }}

                    <button class="json_btn">
                        <span>{{ $t('message.btn_json') }}</span>
                    </button>
                </div>

                <div class="info_wrap">
                    <div class="info">
                        <div class="logo">
                            <img :src="getNetworkLogo(store.networks[store.currentNetwork].chain_id)" alt="">
                        </div>

                        <div>
                            <div class="title">
                                {{ $t('message.claim_rewards_title') }}
                            </div>

                            <div class="desc">
                                {{ $t('message.claim_rewards_desc') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="memo">
                <div class="label">
                    {{ $t('message.memo_label') }}
                </div>

                <div class="field">
                    <input type="text" class="input big" v-model="memo">
                </div>
            </div>


            <!-- Tx fee -->
            <TxFee />


            <div class="btns">
                <button class="btn" @click.prevent="signTransaction">
                    <span>{{ $t('message.btn_approve') }}</span>
                </button>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref } from 'vue'
    import { useGlobalStore } from '@/store'
    import { getNetworkLogo } from '@/utils'

    // Components
    import TxFee from '@/components/TxFee.vue'


    const store = useGlobalStore(),
        memo = ref('')
</script>


<style scoped>
    .claim_confirm
    {
        background: #170232;
    }


    .head
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-bottom: 10px;
    }


    .back_btn
    {
        position: relative;
        top: 0;
        left: 0;

        margin-left: 6px;
    }


    .page_title
    {
        width: calc(100% - 64px);
        margin-left: auto;
        padding: 0;
    }


    .memo
    {
        margin-top: 12px;
    }


    .label
    {
        font-size: 14px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        margin-bottom: 2px;
        padding: 0 10px;
    }


    .json_btn
    {
        margin-left: auto;
    }


    .info_wrap
    {
        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #5d33cd 0%,#200750 100%);
    }


    .info
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 8px 7px;

        border-radius: 9px;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }


    .info .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 38px;
        height: 38px;

        border-radius: 50%;
    }


    .info .logo img
    {
        display: block;

        width: 100%;
        height: 100%;

        border-radius: 50%;
    }


    .info .logo + *
    {
        width: calc(100% - 46px);
    }


    .info .title
    {
        font-size: 16px;
        font-weight: 500;
    }


    .info .desc
    {
        font-size: 12px;
        font-weight: 200;

        margin-top: 2px;

        color: rgba(255, 255, 255, .80);
    }


    .field
    {
        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #5d33ce 0%,#200750 100%);
    }


    .input
    {
        border-radius: 9px;
        background: #06000e;
    }


    .btns
    {
        padding: 0;
        margin-top: 0;
    }
</style>