<template>
    <Loader v-if="loading" />

    <section class="page_container careate_wallet_confirm_page" v-else>
        <div class="cont">
            <div class="confirm">
                <div class="label">Words:</div>

                <div class="row">
                    <div>
                        <span class="number">{{ wordOneNumber }}.</span>

                        <input type="text" class="input" v-model="wordOne" @keyup="validateWordOne" :class="{
                            success: validWordOne && isValidWordOne,
                            error: validWordOne && !isValidWordOne
                        }">
                    </div>

                    <div>
                        <span class="number">{{ wordTwoNumber }}.</span>

                        <input type="text" class="input" v-model="wordTwo" @keyup="validateWordTwo" :class="{
                            success: validWordTwo && isValidWordTwo,
                            error: validWordTwo && !isValidWordTwo
                        }">
                    </div>
                </div>
            </div>

            <div class="btns">
                <router-link to="/account" class="btn" :class="{ disabled: !isValidWordOne && !isValidWordTwo }">
                    {{ $t('message.btn_next') }}
                </router-link>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, onBeforeMount } from 'vue'
    import { getData } from '@/utils/db'


    // Components
    import Loader from '@/components/Loader.vue'


    const loading = ref(true),
        wordOneNumber = ref(0),
        wordTwoNumber = ref(0),
        wordOne = ref(''),
        wordTwo = ref(''),
        secret = ref(''),
        validWordOne = ref(false),
        validWordTwo = ref(false),
        isValidWordOne = ref(false),
        isValidWordTwo = ref(false)


    onBeforeMount(async () => {
        // Get secret from indexedDB
        secret.value = await getData('wallet', 'secret')

        let min = 1,
            max = secret.value.split(' ').length

        // Generate the first random number
        wordOneNumber.value = Math.floor(Math.random() * (max - min + 1)) + min

        // Generate the second random number
        do {
            wordTwoNumber.value = Math.floor(Math.random() * (max - min + 1)) + min
        } while (wordOneNumber.value === wordTwoNumber.value)

        // Hide loader
        loading.value = false
    })


    // Validate word one
    function validateWordOne() {
        console.log('sdgsdgsdg')
        validWordOne.value = true

        wordOne.value === secret.value.split(' ')[wordOneNumber.value - 1]
            ? isValidWordOne.value = true
            : isValidWordOne.value = false
    }


    // Validate word two
    function validateWordTwo() {
        validWordTwo.value = true

        wordTwo.value === secret.value.split(' ')[wordTwoNumber.value - 1]
            ? isValidWordTwo.value = true
            : isValidWordTwo.value = false
    }
</script>


<style scoped>
    .confirm
    {
        padding: 20px;

        background: #333;
    }


    .confirm .label
    {
        margin-bottom: 10px;
    }


    .confirm .row
    {
        justify-content: space-between;
    }


    .confirm .row > *
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: flex-start;

        width: calc(50% - 10px);
    }


    .confirm .number
    {
        margin-right: 6px;

        white-space: nowrap;
    }


    .confirm .input
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

    .confirm .input.error
    {
        border-color: red;
    }

    .confirm .input.success
    {
        border-color: green;
    }

    .confirm .input:-webkit-autofill
    {
        -webkit-box-shadow: inset 0 0 0 50px var(--form_bg_color) !important;
    }


    .btns
    {
        margin-top: auto;
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


    .btns .btn + .btn
    {
        margin-top: 12px;
    }



    .btns .btn.disabled
    {
        pointer-events: none;

        opacity: .5;
    }
</style>


