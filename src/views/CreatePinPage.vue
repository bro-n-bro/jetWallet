<template>
    <section class="page_container careate_pin_page">
        <div class="cont">
            <div class="page_title">
                {{ $t('message.create_pin_title') }}
            </div>

            <div class="page_data_wrap">
                <div class="page_data">
                    <Loader v-if="loading" />

                    <!-- <router-link class="back_btn" to="/create_wallet">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                    </router-link> -->

                    <div class="wallet_name">
                        <div class="label">
                            {{ $t('message.create_pin_wallet_name_label') }}
                        </div>

                        <div class="field">
                            <input type="text" class="input big" v-model="walletName" :placeholder="$t('message.create_pin_wallet_name_placeholder')" :class="{ error: !idValidWalletName && isTouchedWalletName, success: idValidWalletName && isTouchedWalletName }" @input="validateWalletName">
                        </div>
                    </div>

                    <div class="pin">
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

                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[4]" maxlength="1" inputmode="numeric" :disabled="!pinCode[3].length"
                                    @input="moveFocus($event, 5)"
                                    @keydown.backspace="moveBack($event, 4)">
                            </div>

                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[5]" maxlength="1" inputmode="numeric" :disabled="!pinCode[4].length"
                                    @input="moveFocus($event, 6)"
                                    @keydown.backspace="moveBack($event, 5)">
                            </div>
                        </div>
                    </div>

                    <div class="pin">
                        <div class="label">
                            {{ $t('message.create_pin_confirm_pin_label') }}
                        </div>

                        <div class="row" :class="{ error: confirmPinCode[5].length && !isPinMatching, success: confirmPinCode[5].length && isPinMatching }">
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

                            <div class="field">
                                <input type="password" class="input big" v-model="confirmPinCode[4]" maxlength="1" inputmode="numeric" :disabled="!confirmPinCode[3].length"
                                    @input="moveFocus($event, 5)"
                                    @keydown.backspace="moveBack($event, 4)">
                            </div>

                            <div class="field">
                                <input type="password" class="input big" v-model="confirmPinCode[5]" maxlength="1" inputmode="numeric" :disabled="!confirmPinCode[4].length"
                                    @input="moveFocus($event, 6)"
                                    @keydown.backspace="moveBack($event, 5)">
                            </div>
                        </div>
                    </div>

                    <button class="biometric_btn" @click.prevent="toggleBiometric" v-if="isBiometricAvailable" :class="{ enabled: isBiometricEnabled }">
                        <svg class="icon" v-if="biometrictype === 'face'">
                            <use xlink:href="@/assets/sprite.svg#ic_biometric_face"></use>
                        </svg>

                        <svg class="icon" v-else>
                            <use xlink:href="@/assets/sprite.svg#ic_biometric_finger"></use>
                        </svg>

                        <span>{{ $t('message.btn_biometric') }}</span>

                        <div class="toggle_wrap">
                            <div class="toggle">
                                <div class="ball_wrap">
                                    <div class="ball"><svg><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg></div>
                                </div>
                            </div>
                        </div>
                    </button>

                    <div class="btns">
                        <button class="btn" :class="{ disabled: !isFormValid }" @click.prevent="save()">
                            <span>{{ $t('message.btn_next') }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { onBeforeMount, ref, computed } from 'vue'
    import { useRouter } from 'vue-router'
    import { hashDataWithKey, generateHMACKey } from '@/utils'
    import { addData } from '@/utils/db'
    import { useGlobalState } from '@/store'

    // Components
    import Loader from '@/components/Loader.vue'


    const router = useRouter(),
        loading = ref(true),
        walletName = ref(''),
        idValidWalletName = ref(false),
        isTouchedWalletName = ref(false),
        pinCode = ref(['', '', '', '', '', '']),
        confirmPinCode = ref(['', '', '', '', '', '']),
        isBiometricEnabled = ref(false),
        isBiometricAvailable = ref(false),
        biometrictype = ref('finger'),
        { isAuthorized, authErrorLimit } = useGlobalState()


    onBeforeMount(() => {
        // Is biometric available
        isBiometricAvailable.value = Telegram.WebApp.BiometricManager.isBiometricAvailable

        // Biometric type
        if (Telegram.WebApp.BiometricManager.biometricType != 'unknown') {
            biometrictype.value = Telegram.WebApp.BiometricManager.biometricType
        }

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
        if (event.target.value.length >= 1 && nextIndex < 6) {
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
        return confirmPinCode.value[5].length != '' && isPinMatching.value && idValidWalletName.value
    })


    // Toggle biometric
    function toggleBiometric() {
        !isBiometricEnabled.value
            ? checkBiometricAccess()
            : isBiometricEnabled.value = false
    }


    // Check biometric access
    function checkBiometricAccess() {
        !Telegram.WebApp.isAccessGranted
            ? Telegram.WebApp.BiometricManager.requestAccess({ reason: 'Наш текст' }, () => biometricAuthenticate())
            : biometricAuthenticate()
    }


    // Biometric authenticate
    function biometricAuthenticate() {
        Telegram.WebApp.BiometricManager.authenticate({ reason: 'Наш текст' }, async res => {
            if (res) {
                // Set biometric status
                isBiometricEnabled.value = true
            }
        })
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
            ['name', walletName.value],
            ['isRegister', true],
            ['isBiometric', isBiometricEnabled.value],
            ['authErrorLimit', authErrorLimit]
        ])

        // Set authorized status
        isAuthorized.value = true

        // Redirect
        router.push('/wallet_created')
    }
</script>


<style scoped>
    .pin
    {
        margin-top: 8px;
    }


    .pin .label
    {
        font-size: 14px;

        margin-bottom: 2px;
        padding: 0 10px;
    }


    .pin .row
    {
        flex-wrap: nowrap;
    }


    .pin .row > *
    {
        width: 100%;
    }


    .pin .row > * + *
    {
        margin-left: 10px;
    }


    .pin .input
    {
        font-size: 20px;

        text-align: center;
    }


    .pin .error .input
    {
        border-color: #f00;
    }

    .pin .success .input
    {
        border-color: #00aa63;
    }



    .biometric_btn
    {
        font-size: 16px;
        font-weight: 500;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        margin: 30px auto 0;

        transition: opacity .2s linear;
    }


    .biometric_btn .icon
    {
        display: block;

        width: 26px;
        height: 26px;
        margin-right: 12px;
    }


    .biometric_btn .toggle_wrap
    {
        margin-left: 10px;
        padding: 1px;

        border-radius: 19px;
        background: linear-gradient(to bottom,  #45097d 0%,#14012f 100%);
    }


    .biometric_btn .toggle
    {
        position: relative;

        width: 46px;
        height: 22px;

        border-radius: 19px;
        background: #170232;
    }


    .biometric_btn .ball_wrap
    {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 2px;

        width: 18px;
        height: 18px;
        margin: auto 0;
        padding: 1px;

        transition: left .2s linear;

        border-radius: 50%;
        background: linear-gradient(to bottom,  #8632e3 0%,#330c67 100%);
    }


    .biometric_btn .ball
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 16px;
        height: 16px;

        color: #fff;
        border-radius: 50%;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }


    .biometric_btn .ball svg
    {
        display: block;

        width: 10px;
        height: 10px;

        transition: opacity .2s linear;

        opacity: 0;
    }


    .biometric_btn.enabled .ball_wrap
    {
        left: 26px;

        background: linear-gradient(to bottom,  #68def9 0%,#02294c 100%);
    }


    .biometric_btn.enabled .ball
    {
        background: linear-gradient(to bottom,  #56a8e7 0%,#064894 100%);
    }


    .biometric_btn.enabled .ball svg
    {
        opacity: 1;
    }
</style>