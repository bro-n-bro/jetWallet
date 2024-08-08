<template>
    <div class="pin">
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


        <div class="warning" v-if="userAuthErrorLimit < store.authErrorLimit">
            {{ $t('message.auth_error_warning', { count: userAuthErrorLimit }) }}
        </div>
    </div>


    <button class="biometric_btn" @click.prevent="checkBiometricAccess" v-if="isBiometricAvailable && userAuthErrorLimit == store.authErrorLimit">
        <span>{{ $t('message.btn_biometric2') }}</span>

        <svg class="icon" v-if="biometrictype === 'face'">
            <use xlink:href="@/assets/sprite.svg#ic_biometric_face"></use>
        </svg>

        <svg class="icon" v-else>
            <use xlink:href="@/assets/sprite.svg#ic_biometric_finger"></use>
        </svg>
    </button>


    <div class="btns">
        <button class="btn" :class="{ disabled: !isFormValid }" @click.prevent="login()" v-if="userAuthErrorLimit < store.authErrorLimit">
            <span>{{ $t('message.btn_login') }}</span>
        </button>
    </div>
</template>


<script setup>
    import { onBeforeMount, ref, watch, computed, inject } from 'vue'
    import { useGlobalStore } from '@/store'
    import { hashDataWithKey } from '@/utils'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        pinCode = ref(['', '', '', '', '', '']),
        pinDB = ref(''),
        hmacKey = ref(''),
        wrongPin = ref(false),
        userAuthErrorLimit = ref(false),
        isBiometric = ref(false),
        isBiometricAvailable = ref(false),
        biometricType = ref('finger')


    onBeforeMount(async () => {
        // Get data from DB
        let result = await store.getMultipleData(['pin', 'hmacKey', 'authErrorLimit', 'isBiometric'])

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
            biometricType.value = Telegram.WebApp.BiometricManager.biometricType
        }

        // Check biometric access
        if (isBiometricAvailable.value && isBiometric.value) {
            checkBiometricAccess()
        }
    })


    watch(pinCode.value, () => {
        // Reset focus
        if (pinCode.value[5].length) {
            document.activeElement.blur()
        }

        // Compare pins
        if (pinCode.value[5].length && userAuthErrorLimit.value === store.authErrorLimit) {
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
                // Set event auth
                emitter.emit('auth')
            }
        })
    }


    // Login
    async function login() {
        // Compare pins
        let compareResult = await comparePINCode()

        compareResult
            // Set event auth
            ? emitter.emit('auth')
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
            ? store.updateUserAuthErrorLimit(newLimit)
            // Set event show_error_auth_modal
            : emitter.emit('show_error_auth_modal')

        // Clear data
        pinCode.value = ['', '', '', '', '', '']

        // Reset data
        wrongPin.value = false
    }


    // Validate form
    const isFormValid = computed(() => pinCode.value[5].length != '')
</script>


<style scoped>
    .pin
    {
        position: relative;

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

        margin: auto;
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
</style>