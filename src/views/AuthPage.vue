<template>
    <section class="page_container careate_pin_page">
        <div class="cont">
            <div class="page_title">
                {{ $t('message.auth_title') }}
            </div>

            <div class="page_data_wrap">
                <div class="page_data">
                    <Loader v-if="loading" />

                    <div class="pin" :class="{ show: !loading }">
                        <div class="label">
                            {{ $t('message.auth_enter_pin_label') }}
                        </div>

                        <div class="row" :class="{ error: wrongPin }">
                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[0]" maxlength="1" inputmode="numeric" ref="inputRef"
                                    :class="{ active: pinCode[0].length }"
                                    @input="moveFocus($event, 1)"
                                    @keydown.backspace="moveBack($event, 0)">
                            </div>

                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[1]" maxlength="1" inputmode="numeric" :disabled="!pinCode[0].length"
                                    :class="{ active: pinCode[1].length }"
                                    @input="moveFocus($event, 2)"
                                    @keydown.backspace="moveBack($event, 1)">
                            </div>

                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[2]" maxlength="1" inputmode="numeric" :disabled="!pinCode[1].length"
                                    :class="{ active: pinCode[2].length }"
                                    @input="moveFocus($event, 3)"
                                    @keydown.backspace="moveBack($event, 2)">
                            </div>

                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[3]" maxlength="1" inputmode="numeric" :disabled="!pinCode[2].length"
                                    :class="{ active: pinCode[3].length }"
                                    @input="moveFocus($event, 4)"
                                    @keydown.backspace="moveBack($event, 3)">
                            </div>

                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[4]" maxlength="1" inputmode="numeric" :disabled="!pinCode[3].length"
                                    :class="{ active: pinCode[4].length }"
                                    @input="moveFocus($event, 5)"
                                    @keydown.backspace="moveBack($event, 4)">
                            </div>

                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[5]" maxlength="1" inputmode="numeric" :disabled="!pinCode[4].length"
                                    :class="{ active: pinCode[5].length }"
                                    @input="moveFocus($event, 6)"
                                    @keydown.backspace="moveBack($event, 5)">
                            </div>
                        </div>


                        <div class="warning" v-if="userAuthErrorLimit < authErrorLimit">
                            {{ $t('message.auth_error_warning', { count: userAuthErrorLimit }) }}
                        </div>
                    </div>


                    <button class="biometric_btn" @click.prevent="checkBiometricAccess" v-if="isBiometricAvailable && userAuthErrorLimit == authErrorLimit" :class="{ show: !loading }">
                        <span>{{ $t('message.btn_biometric2') }}</span>

                        <svg class="icon" v-if="biometrictype === 'face'">
                            <use xlink:href="@/assets/sprite.svg#ic_biometric_face"></use>
                        </svg>

                        <svg class="icon" v-else>
                            <use xlink:href="@/assets/sprite.svg#ic_biometric_finger"></use>
                        </svg>
                    </button>


                    <div class="btns" :class="{ show: !loading }">
                        <button class="btn" :class="{ disabled: !isFormValid }" @click.prevent="login()" v-if="userAuthErrorLimit < authErrorLimit">
                            <span>{{ $t('message.btn_login') }}</span>
                        </button>
                    </div>


                    <button @click.prevent="deleteAll" style="margin: 20px auto 0; width: 70px;">Удалить всё</button>
                </div>
            </div>
        </div>
    </section>


    <AuthErrorModal v-if="showErrorAuthModal" />
</template>


<script setup>
    import { onBeforeMount, ref, watch, computed } from 'vue'
    import { useRouter } from 'vue-router'
    import { hashDataWithKey } from '@/utils'
    import { getMultipleData, addData, clearData } from '@/utils/db'
    import { useGlobalState } from '@/store'

    // Components
    import Loader from '@/components/Loader.vue'
    import AuthErrorModal from '@/components/modal/AuthErrorModal.vue'


    const router = useRouter(),
        loading = ref(true),
        pinCode = ref(['', '', '', '', '', '']),
        pinDB = ref(''),
        hmacKey = ref(''),
        wrongPin = ref(false),
        userAuthErrorLimit = ref(false),
        isBiometric = ref(false),
        isBiometricAvailable = ref(false),
        biometrictype = ref('finger'),
        { isAuthorized, authErrorLimit } = useGlobalState(),
        showErrorAuthModal = ref(false),
        inputRef = ref(null)


    onBeforeMount(async () => {
        // Get data from DB
        let result = await getMultipleData('wallet', ['pin', 'hmacKey', 'authErrorLimit', 'isBiometric'])

        // Set pin from DB
        pinDB.value = result.pin

        // Set hmacKey from DB
        hmacKey.value = result.hmacKey

        // Set user auth error limit
        userAuthErrorLimit.value = result.authErrorLimit

        // Set biometric status from DB
        isBiometric.value = result.isBiometric

        // Is biometric available
        isBiometricAvailable.value = Telegram.WebApp.BiometricManager.isBiometricAvailable

        // Biometric type
        if (Telegram.WebApp.BiometricManager.biometricType != 'unknown') {
            biometrictype.value = Telegram.WebApp.BiometricManager.biometricType
        }

        // Hide loader
        loading.value = false

        if (isBiometricAvailable.value && isBiometric.value) {
            // Check biometric access
            checkBiometricAccess()
        }
    })


    watch(pinCode.value, () => {
        // Reset focus
        if (pinCode.value[5].length) {
            document.activeElement.blur()
        }

        // Compare pins
        if (pinCode.value[5].length && userAuthErrorLimit.value === authErrorLimit) {
            login()
        }
    })


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


    // Check biometric access
    function checkBiometricAccess() {
        !Telegram.WebApp.isAccessGranted
            ? Telegram.WebApp.BiometricManager.requestAccess({ reason: 'Наш текст' }, () => biometricAuthenticate())
            : biometricAuthenticate()
    }


    // Biometric authenticate
    function biometricAuthenticate() {
        Telegram.WebApp.BiometricManager.authenticate({ reason: 'Наш текст' }, res => {
            if (res) {
                // Auth
                auth(res)
            }
        })
    }


    // Validate form
    const isFormValid = computed(() => pinCode.value[5].length != '')


    // Login
    async function login() {
        // Compare pins
        let compareResult = await comparePINCode()

        compareResult
            // Auth
            ? auth()
            // Set auth error
            : await setAuthError()
    }


    // Compare pin code
    async function comparePINCode() {
        // Encrypt the PIN
        let pinHash = await hashDataWithKey(pinCode.value.join(''), hmacKey.value)

        return pinHash === pinDB.value
    }


    // Set auth error
    async function setAuthError() {
        // Set error
        wrongPin.value = true

        let newLimit = userAuthErrorLimit.value - 1

        // Update limit
        userAuthErrorLimit.value = newLimit

        newLimit
            // Сhange auth limit
            ? await addData('wallet', [['userAuthErrorLimit', newLimit]])
            // Show error auth modal
            : showErrorAuthModal.value = true

        // Clear data
        pinCode.value = ['', '', '', '', '', '']

        // Reset data
        wrongPin.value = false
    }


    // Auth
    async function auth() {
        // Сhange auth limit
        await addData('wallet', [['authErrorLimit', authErrorLimit]])

        // Set authorized status
        isAuthorized.value = true

        // Redirect
        router.push('/account')
    }


    async function deleteAll() {
        await clearData('wallet')

        // Redirect
        router.push('/')
    }
</script>


<style scoped>
    .pin
    {
        position: relative;

        margin-top: 8px;

        opacity: 0;
    }

    .pin.show
    {
        opacity: 1;
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


    .pin .warning
    {
        font-size: 12px;

        position: absolute;
        top: 100%;
        left: 0;

        width: 100%;
        margin-top: 4px;

        text-align: center;

        color: #ff4b4b;
    }



    .biometric_btn
    {
        font-size: 18px;
        font-weight: 500;

        display: block;

        margin: auto auto 25%;

        transition: opacity .2s linear;

        opacity: 0;
    }

    .biometric_btn.show
    {
        opacity: 1;
    }

    .biometric_btn.top
    {
        margin-top: 40px;
    }


    .biometric_btn .icon
    {
        display: block;

        width: 44px;
        height: 44px;
        margin: 0 auto;
    }


    .biometric_btn.disabled
    {
        pointer-events: none;

        opacity: .6;
    }



    /* .input:focus
    {
        color: #170232;
    }

    .input.active:focus
    {
        color: currentColor;
    } */



    .btns
    {
        opacity: 0;
        margin-top: 42px;
    }

    .btns.show
    {
        opacity: 1;
    }
</style>