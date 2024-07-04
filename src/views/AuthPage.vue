<template>
    <section class="page_container careate_pin_page">
        <div class="cont">
            <div class="page_title">
                {{ $t('message.auth_title') }}
            </div>

            <div class="page_data_wrap">
                <div class="page_data">
                    <Loader v-if="loading" />

                    <template v-else>
                    <div class="pin">
                        <div class="label">
                            {{ $t('message.create_pin_create_pin_label') }}
                        </div>

                        <div class="row" :class="{ error: wrongPin }">
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

                        <!-- <div class="warning">You have 3 attempts left</div> -->
                    </div>

                    <button class="biometric_btn" @click.prevent="getBiometric">
                        <span>{{ $t('message.btn_biometric2') }}</span>

                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_biometric"></use></svg>
                    </button>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { onBeforeMount, ref, watch } from 'vue'
    import { useRouter } from 'vue-router'
    import { hashDataWithKey } from '@/utils'
    import { getData } from '@/utils/db'
    import { useGlobalState } from '@/store'

    // Components
    import Loader from '@/components/Loader.vue'


    const router = useRouter(),
        loading = ref(true),
        pinCode = ref(['', '', '', '', '', '']),
        pinDB = ref(''),
        hmacKey = ref(''),
        wrongPin = ref(false),
        { isAuthorized } = useGlobalState()


    onBeforeMount(async () => {
        // Get pin from DB
        pinDB.value = await getData('wallet', 'pin')

        // Get hmacKey from DB
        hmacKey.value = await getData('wallet', 'hmacKey')

        // Hide loader
        loading.value = false
    })


    watch(pinCode.value, async () => {
        // Reset data
        wrongPin.value = false

        // Compare pins
        if (pinCode.value[5].length) {
            // Encrypt the PIN
            let pinHash = await hashDataWithKey(pinCode.value.join(''), hmacKey.value)

            // Check the PIN
            if (pinHash === pinDB.value) {
                // Set authorized status
                isAuthorized.value = true

                // Redirect
                router.push('/account')
            } else {
                // Set error
                wrongPin.value = true
            }
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

    margin: auto auto 25%;

    transition: opacity .2s linear;
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