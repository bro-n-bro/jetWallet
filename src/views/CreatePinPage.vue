<template>
    <section class="page_container careate_pin_page">
        <div class="cont">
            <div class="page_title">
                {{ $t('message.create_pin_title') }}
            </div>

            <div class="page_data_wrap">
                <div class="page_data">
                    <Loader v-if="loading" />

                    <template v-else>
                    <router-link class="back_btn" to="/create_wallet">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                    </router-link>

                    <div class="wallet_name">
                        <div class="label">
                            {{ $t('message.create_pin_wallet_name_label') }}
                        </div>

                        <div class="field">
                            <input type="text" class="input big" v-model="walletName" :placeholder="$t('message.create_pin_wallet_name_placeholder')" :class="{ error: !idValidWalletName && isTouchedWalletName, success: idValidWalletName && isTouchedWalletName }" @input="validateWalletName">
                        </div>
                    </div>

                    <div class="create_pin">
                        <div class="label">
                            {{ $t('message.create_pin_create_pin_label') }}
                        </div>

                        <div class="row">
                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[0]" maxlength="1" inputmode="numeric"
                                    @input="moveFocus($event, 1)"
                                    @keydown.backspace="moveBack($event, 0)">
                            </div>

                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[1]" maxlength="1" inputmode="numeric" :disabled="!pinCode[0].length"
                                    @input="moveFocus($event, 2)"
                                    @keydown.backspace="moveBack($event, 1)">
                            </div>

                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[2]" maxlength="1" inputmode="numeric" :disabled="!pinCode[1].length"
                                    @input="moveFocus($event, 3)"
                                    @keydown.backspace="moveBack($event, 2)">
                            </div>

                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[3]" maxlength="1" inputmode="numeric" :disabled="!pinCode[2].length"
                                    @input="moveFocus($event, 4)"
                                    @keydown.backspace="moveBack($event, 3)">
                            </div>
                        </div>
                    </div>

                    <div class="confirm_pin">
                        <div class="label">
                            {{ $t('message.create_pin_confirm_pin_label') }}
                        </div>

                        <div class="row" :class="{ error: confirmPinCode[3].length && !isPinMatching, success: confirmPinCode[3].length && isPinMatching }">
                            <div class="field">
                                <input type="password" class="input big" v-model="confirmPinCode[0]" maxlength="1" inputmode="numeric" :disabled="!pinCode[3].length"
                                    @input="moveFocus($event, 1)"
                                    @keydown.backspace="moveBack($event, 0)">
                            </div>

                            <div class="field">
                                <input type="password" class="input big" v-model="confirmPinCode[1]" maxlength="1" inputmode="numeric" :disabled="!confirmPinCode[0].length"
                                    @input="moveFocus($event, 2)"
                                    @keydown.backspace="moveBack($event, 1)">
                            </div>

                            <div class="field">
                                <input type="password" class="input big" v-model="confirmPinCode[2]" maxlength="1" inputmode="numeric" :disabled="!confirmPinCode[1].length"
                                    @input="moveFocus($event, 3)"
                                    @keydown.backspace="moveBack($event, 2)">
                            </div>

                            <div class="field">
                                <input type="password" class="input big" v-model="confirmPinCode[3]" maxlength="1" inputmode="numeric" :disabled="!confirmPinCode[2].length"
                                    @input="moveFocus($event, 4)"
                                    @keydown.backspace="moveBack($event, 3)">
                            </div>
                        </div>
                    </div>

                    <button class="biometric_btn" :class="{ disabled: !isFormValid }" @click.prevent="getBiometric">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_biometric"></use></svg>

                        <span>{{ $t('message.btn_biometric') }}</span>
                    </button>

                    <div class="btns">
                        <button class="btn" :class="{ disabled: !isFormValid }" @click.prevent="save">
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
    import { onBeforeMount, ref, computed } from 'vue'
    import { useRouter } from 'vue-router'
    import { hashDataWithKey, generateHMACKey } from '@/utils/'
    import { addData } from '@/utils/db'


    // Components
    import Loader from '@/components/Loader.vue'


    const router = useRouter(),
        loading = ref(true),
        walletName = ref(''),
        idValidWalletName = ref(false),
        isTouchedWalletName = ref(false),
        pinCode = ref(['', '', '', '']),
        confirmPinCode = ref(['', '', '', ''])


    onBeforeMount(() => {
        // Hide loader
        loading.value = false
    })


    // Validate wallet name
    function validateWalletName() {
        // Validate length
        walletName.value.trim().length
            ? idValidWalletName.value = true
            : idValidWalletName.value = false

        // Touched status
        isTouchedWalletName.value = true
    }


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


    // Validate form
    const isFormValid = computed(() => {
        return confirmPinCode.value[3].length != '' && isPinMatching.value && idValidWalletName.value
    })


    // Get biometric
    async function getBiometric() {
        if (!Telegram.WebApp.BiometricManager.isInited) {
            await Telegram.WebApp.BiometricManager.init()
        }

        if (await Telegram.WebApp.BiometricManager.isBiometricAvailable()) {
            let result = await Telegram.WebApp.BiometricManager.authenticate()

            if (result) {
                console.log('Biometric authentication successful:', result);
                alert('Authentication successful!');
            } else {
                alert('Authentication failed.');
            }
        }
    }


    // Save data
    async function save() {
        // Show loader
        loading.value = true

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
.wallet_name
{
    margin-top: 54px;
}



.label
{
    font-size: 14px;

    margin-bottom: 2px;
    padding: 0 10px;
}


.create_pin,
.confirm_pin
{
    margin-top: 8px;
}


.create_pin .row,
.confirm_pin .row
{
    flex-wrap: nowrap;
}


.create_pin .row > *,
.confirm_pin .row > *
{
    width: 100%;
}


.create_pin .row > * + *,
.confirm_pin .row > * + *
{
    margin-left: 14px;
}


.create_pin .input,
.confirm_pin .input
{
    font-size: 20px;

    text-align: center;
}


.confirm_pin .error .input
{
    border-color: #f00;
}

.confirm_pin .success .input
{
    border-color: #00aa63;
}



.biometric_btn
{
    font-size: 18px;
    font-weight: 500;

    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    margin: 12px auto 0;

    transition: opacity .2s linear;
}


.biometric_btn .icon
{
    display: block;

    width: 28px;
    height: 28px;
    margin-right: 12px;
}


.biometric_btn.disabled
{
    pointer-events: none;

    opacity: .6;
}



</style>