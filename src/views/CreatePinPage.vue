<template>
    <!-- Create pin page -->
    <section class="page_container careate_pin_page">
        <div class="cont">
            <!-- Create pin page title -->
            <div class="page_title">
                {{ $t('message.create_pin_title') }}
            </div>

            <!-- Create pin page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- Loader -->
                    <Loader v-if="loading" />

                    <!-- Wallet name -->
                    <div class="wallet_name">
                        <!-- Wallet name label -->
                        <div class="field_label">
                            {{ $t('message.create_pin_wallet_name_label') }}
                        </div>

                        <!-- Wallet name field -->
                        <div class="field">
                            <input type="text" class="input big" v-model="walletName"
                                :placeholder="$t('message.create_pin_wallet_name_placeholder')"
                                :class="{ error: !idValidWalletName && isTouchedWalletName, success: idValidWalletName && isTouchedWalletName }"
                                @input="validateWalletName"
                                @focus="emitter.emit('show_keyboard')"
                                @blur="emitter.emit('hide_keyboard')">
                        </div>
                    </div>

                    <!-- Pin code -->
                    <div class="pin">
                        <!-- Pin code label -->
                        <div class="field_label">
                            {{ $t('message.create_pin_create_pin_label') }}
                        </div>

                        <div class="row">
                            <!-- Pin code field -->
                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[0]" maxlength="1" inputmode="numeric"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    @input="moveFocus($event, 1)"
                                    @keydown.backspace="moveBack($event, 0)">
                            </div>

                            <!-- Pin code field -->
                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[1]" maxlength="1" inputmode="numeric" :disabled="!pinCode[0].length"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    @input="moveFocus($event, 2)"
                                    @keydown.backspace="moveBack($event, 1)">
                            </div>

                            <!-- Pin code field -->
                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[2]" maxlength="1" inputmode="numeric" :disabled="!pinCode[1].length"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    @input="moveFocus($event, 3)"
                                    @keydown.backspace="moveBack($event, 2)">
                            </div>

                            <!-- Pin code field -->
                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[3]" maxlength="1" inputmode="numeric" :disabled="!pinCode[2].length"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    @input="moveFocus($event, 4)"
                                    @keydown.backspace="moveBack($event, 3)">
                            </div>

                            <!-- Pin code field -->
                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[4]" maxlength="1" inputmode="numeric" :disabled="!pinCode[3].length"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    @input="moveFocus($event, 5)"
                                    @keydown.backspace="moveBack($event, 4)">
                            </div>

                            <!-- Pin code field -->
                            <div class="field">
                                <input type="password" class="input big" v-model="pinCode[5]" maxlength="1" inputmode="numeric" :disabled="!pinCode[4].length"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    @input="moveFocus($event, 6)"
                                    @keydown.backspace="moveBack($event, 5)">
                            </div>
                        </div>
                    </div>

                    <!-- Confirm pin code -->
                    <div class="pin">
                        <!-- Confirm pin code label -->
                        <div class="field_label">
                            {{ $t('message.create_pin_confirm_pin_label') }}
                        </div>

                        <div class="row" :class="{ error: confirmPinCode[5].length && !isPinMatching, success: confirmPinCode[5].length && isPinMatching }">
                            <!-- Confirm pin code field -->
                            <div class="field">
                                <input type="password" class="input big" v-model="confirmPinCode[0]" maxlength="1" inputmode="numeric" :disabled="!pinCode[3].length"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    @input="moveFocus($event, 1)"
                                    @keydown.backspace="moveBack($event, 0)">
                            </div>

                            <!-- Confirm pin code field -->
                            <div class="field">
                                <input type="password" class="input big" v-model="confirmPinCode[1]" maxlength="1" inputmode="numeric" :disabled="!confirmPinCode[0].length"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    @input="moveFocus($event, 2)"
                                    @keydown.backspace="moveBack($event, 1)">
                            </div>

                            <!-- Confirm pin code field -->
                            <div class="field">
                                <input type="password" class="input big" v-model="confirmPinCode[2]" maxlength="1" inputmode="numeric" :disabled="!confirmPinCode[1].length"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    @input="moveFocus($event, 3)"
                                    @keydown.backspace="moveBack($event, 2)">
                            </div>

                            <!-- Confirm pin code field -->
                            <div class="field">
                                <input type="password" class="input big" v-model="confirmPinCode[3]" maxlength="1" inputmode="numeric" :disabled="!confirmPinCode[2].length"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    @input="moveFocus($event, 4)"
                                    @keydown.backspace="moveBack($event, 3)">
                            </div>

                            <!-- Confirm pin code field -->
                            <div class="field">
                                <input type="password" class="input big" v-model="confirmPinCode[4]" maxlength="1" inputmode="numeric" :disabled="!confirmPinCode[3].length"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    @input="moveFocus($event, 5)"
                                    @keydown.backspace="moveBack($event, 4)">
                            </div>

                            <!-- Confirm pin code field -->
                            <div class="field">
                                <input type="password" class="input big" v-model="confirmPinCode[5]" maxlength="1" inputmode="numeric" :disabled="!confirmPinCode[4].length"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    @input="moveFocus($event, 6)"
                                    @keydown.backspace="moveBack($event, 5)">
                            </div>
                        </div>
                    </div>

                    <!-- Biometric button -->
                    <button class="biometric_btn" @click.prevent="toggleBiometric" v-if="isBiometricAvailable" :class="{ enabled: isBiometricEnabled }">
                        <!-- Biometric button icon -->
                        <svg class="icon" v-if="biometrictype === 'face'">
                            <use xlink:href="@/assets/sprite.svg#ic_biometric_face"></use>
                        </svg>

                        <!-- Biometric button icon -->
                        <svg class="icon" v-else>
                            <use xlink:href="@/assets/sprite.svg#ic_biometric_finger"></use>
                        </svg>

                        <!-- Biometric button text -->
                        <span>{{ $t('message.btn_biometric') }}</span>

                        <!-- Biometric button toggle -->
                        <div class="toggle_wrap">
                            <div class="toggle">
                                <div class="ball_wrap">
                                    <div class="ball"><svg><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg></div>
                                </div>
                            </div>
                        </div>
                    </button>

                    <!-- Create pin page buttons -->
                    <div class="btns">
                        <!-- Next button -->
                        <div class="btn" :class="{ disabled: !isFormValid }" @click.prevent="save()">
                            <span>{{ $t('message.btn_next') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { onBeforeMount, ref, computed, inject } from 'vue'
    import { useRouter } from 'vue-router'
    import { useGlobalStore } from '@/store'

    // Components
    import Loader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        loading = ref(true),
        walletName = ref(''),
        idValidWalletName = ref(false),
        isTouchedWalletName = ref(false),
        pinCode = ref(['', '', '', '', '', '']),
        confirmPinCode = ref(['', '', '', '', '', '']),
        isBiometricEnabled = ref(false),
        isBiometricAvailable = ref(false),
        biometrictype = ref('finger')


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
            ? Telegram.WebApp.BiometricManager.requestAccess({ reason: '' }, () => biometricAuthenticate())
            : biometricAuthenticate()
    }


    // Biometric authenticate
    function biometricAuthenticate() {
        Telegram.WebApp.BiometricManager.authenticate({ reason: '' }, async res => {
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

        // Save in DB
        await store.createWallet({
            pinCode: pinCode.value,
            walletName: walletName.value,
            isBiometricEnabled: isBiometricEnabled.value
        })

        // Redirect
        router.push('/wallet_created')
    }
</script>


<style scoped>
    .pin
    {
        margin-top: 8px;
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