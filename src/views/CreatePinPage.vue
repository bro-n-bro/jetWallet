<template>
    <Loader v-if="loading" />

    <section class="page_container careate_pin_page" v-else>
        <div class="cont">
            <div class="page_title">Name your wallet</div>

            <router-link to="/create_wallet" class="back_btn">
                <!-- <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg> -->
                <span>Back</span>
            </router-link>


            <div class="wallet_name">
                <div class="label">Wallet name:</div>

                <div class="field">
                    <input type="text" class="input" v-model="walletName" placeholder="name">
                </div>
            </div>


            <div class="create_pin">
                <div class="label">Create pin:</div>

                <div class="row">
                    <div class="field">
                        <input type="text" class="input" v-model="pinCode[0]" maxlength="1"
                            @input="moveFocus($event, 1)"
                            @keydown.backspace="moveBack($event, 0)">
                    </div>

                    <div class="field">
                        <input type="text" class="input" v-model="pinCode[1]" maxlength="1" :disabled="!pinCode[0].length"
                            @input="moveFocus($event, 2)"
                            @keydown.backspace="moveBack($event, 1)">
                    </div>

                    <div class="field">
                        <input type="text" class="input" v-model="pinCode[2]" maxlength="1" :disabled="!pinCode[1].length"
                            @input="moveFocus($event, 3)"
                            @keydown.backspace="moveBack($event, 2)">
                    </div>

                    <div class="field">
                        <input type="text" class="input" v-model="pinCode[3]" maxlength="1" :disabled="!pinCode[2].length"
                            @input="moveFocus($event, 4)"
                            @keydown.backspace="moveBack($event, 3)">
                    </div>
                </div>
            </div>


            <div class="confirm_pin">
                <div class="label">Repeat pin:</div>

                <div class="row" :class="{ error: confirmPinCode[3].length && !isPinMatching, success: confirmPinCode[3].length && isPinMatching }">
                    <div class="field">
                        <input type="text" class="input" v-model="confirmPinCode[0]" maxlength="1" :disabled="!pinCode[3].length"
                            @input="moveFocus($event, 1)"
                            @keydown.backspace="moveBack($event, 0)">
                    </div>

                    <div class="field">
                        <input type="text" class="input" v-model="confirmPinCode[1]" maxlength="1" :disabled="!confirmPinCode[0].length"
                            @input="moveFocus($event, 2)"
                            @keydown.backspace="moveBack($event, 1)">
                    </div>

                    <div class="field">
                        <input type="text" class="input" v-model="confirmPinCode[2]" maxlength="1" :disabled="!confirmPinCode[1].length"
                            @input="moveFocus($event, 3)"
                            @keydown.backspace="moveBack($event, 2)">
                    </div>

                    <div class="field">
                        <input type="text" class="input" v-model="confirmPinCode[3]" maxlength="1" :disabled="!confirmPinCode[2].length"
                            @input="moveFocus($event, 4)"
                            @keydown.backspace="moveBack($event, 3)">
                    </div>
                </div>
            </div>


            <button class="biometric_btn">
                <!-- <svg class="icon"><use xlink:href="#/assets/sprite.svg#ic_"></use></svg> -->
                <span>Turn on biometric security</span>
            </button>


            <div class="btns">
                <button class="btn" :class="{ disabled: !confirmPinCode[3].length || !isPinMatching }" @click.prevent="save">
                    {{ $t('message.btn_next') }}
                </button>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { onBeforeMount, ref, computed } from 'vue'
    import { useRouter } from 'vue-router'
    import { hashDataWithKey, generateHMACKey } from '@/utils/'
    import { addData } from '@/utils/db'


    // Components
    import Loader from '@/components/Loader.vue'


    const router = useRouter(),
        loading = ref(true),
        walletName = ref(''),
        pinCode = ref(['', '', '', '']),
        confirmPinCode = ref(['', '', '', ''])


    onBeforeMount(() => {
        // Hide loader
        loading.value = false
    })


    // Move focus
    function moveFocus(event, nextIndex) {
        if (event.target.value.length >= 1 && nextIndex < 4) {
            event.target.closest('.row').querySelector(`.field:nth-child(${nextIndex + 1}) input`).focus()
        }
    }


    // Move back
    function moveBack(event, currentIndex) {
        setTimeout(() => {
            if (event.target.value.length === 0 && currentIndex > 0) {
                event.target.closest('.row').querySelector(`.field:nth-child(${currentIndex}) input`).select()
            }
        })
    }


    // Validate pin code
    const isPinMatching = computed(() => {
        return pinCode.value.join('') === confirmPinCode.value.join('')
    })


    // Save data
    async function save() {
        // Generate HMAC key
        let hmacKey = await generateHMACKey()

        // Save in DB
        await addData('wallet', [
            ['hmacKey', hmacKey],
            ['pin', await hashDataWithKey(pinCode.value.join(''), hmacKey)],
            ['name', walletName.value]
        ])

        // Go to confirm
        router.push('/wallet_created')
    }
</script>


<style scoped>
.label
{
    margin-bottom: 5px;
    padding: 0 10px;
}


.input
{
    font-family: var(--font_family);

    display: block;
    flex-shrink: var(--font-size);

    width: 100%;
    height: 40px;
    padding: 0 9px;

    color: #fff;
    border: 1px solid #fff;
    border-radius: 10px;
    background: none;
}


.input:disabled
{
    opacity: .5;
}


.error .input
{
    border-color: red;
}

.success .input
{
    border-color: green;
}


.create_pin,
.confirm_pin
{
    margin-top: 8px;
}


.create_pin .row,
.confirm_pin .row
{
    margin-left: -14px;
}


.create_pin .row > *,
.confirm_pin .row > *
{
    width: calc(25% - 14px);
    margin-left: 14px;
}



.biometric_btn
{
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    margin: 20px auto 0;
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


.btns .btn.disabled
{
    pointer-events: none;

    opacity: .5;
}
</style>