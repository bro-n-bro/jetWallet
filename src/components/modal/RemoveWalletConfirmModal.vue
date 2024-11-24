<template>
    <!-- Remove wallet confirm modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="emitter.emit('close_remove_wallet_confirm_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.remove_wallet_confirm_title') }}
                </div>

                <!-- Pin code -->
                <div class="pin">
                    <!-- Pin code label -->
                    <div class="field_label">
                        {{ $t('message.auth_enter_pin_label') }}
                    </div>

                    <div class="row" :class="{ error: !isPinValid && isTouchedPinCode, success: isPinValid && isTouchedPinCode }">
                        <!-- Pin code field -->
                        <div class="field">
                            <input type="password" class="input big" v-model="pinCode[0]" maxlength="1" inputmode="numeric" ref="inputRef"
                                :class="{ active: pinCode[0].length }"
                                @input="moveFocus($event, 1)"
                                @keydown.backspace="moveBack($event, 0)">
                        </div>

                        <!-- Pin code field -->
                        <div class="field">
                            <input type="password" class="input big" v-model="pinCode[1]" maxlength="1" inputmode="numeric" :disabled="!pinCode[0].length"
                                :class="{ active: pinCode[1].length }"
                                @input="moveFocus($event, 2)"
                                @keydown.backspace="moveBack($event, 1)">
                        </div>

                        <!-- Pin code field -->
                        <div class="field">
                            <input type="password" class="input big" v-model="pinCode[2]" maxlength="1" inputmode="numeric" :disabled="!pinCode[1].length"
                                :class="{ active: pinCode[2].length }"
                                @input="moveFocus($event, 3)"
                                @keydown.backspace="moveBack($event, 2)">
                        </div>

                        <!-- Pin code field -->
                        <div class="field">
                            <input type="password" class="input big" v-model="pinCode[3]" maxlength="1" inputmode="numeric" :disabled="!pinCode[2].length"
                                :class="{ active: pinCode[3].length }"
                                @input="moveFocus($event, 4)"
                                @keydown.backspace="moveBack($event, 3)">
                        </div>

                        <!-- Pin code field -->
                        <div class="field">
                            <input type="password" class="input big" v-model="pinCode[4]" maxlength="1" inputmode="numeric" :disabled="!pinCode[3].length"
                                :class="{ active: pinCode[4].length }"
                                @input="moveFocus($event, 5)"
                                @keydown.backspace="moveBack($event, 4)">
                        </div>

                        <!-- Pin code field -->
                        <div class="field">
                            <input type="password" class="input big" v-model="pinCode[5]" maxlength="1" inputmode="numeric" :disabled="!pinCode[4].length"
                                :class="{ active: pinCode[5].length }"
                                @input="moveFocus($event, 6)"
                                @keydown.backspace="moveBack($event, 5)">
                        </div>
                    </div>
                </div>


                <!-- Remove wallet confirm modal buttons -->
                <div class="btns">
                    <!-- Delete button -->
                    <button class="btn" @click.prevent="remove()" :class="{ disabled: !isPinValid }">
                        <span>{{ $t('message.btn_remove') }}</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, inject, onBeforeMount, watch } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useRouter } from 'vue-router'
    import { useNotification } from '@kyvg/vue3-notification'
    import { hashDataWithKey } from '@/utils'
    import { DBgetMultipleData } from '@/utils/db'


    const props = defineProps(['wallet']),
        store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        notification = useNotification(),
        i18n = inject('i18n'),
        pinCode = ref(['', '', '', '', '', '']),
        pinDB = ref(''),
        hmacKey = ref(''),
        isTouchedPinCode = ref(false),
        isPinValid = ref(false)


    onBeforeMount(async () => {
        // Get data from DB
        let DBData = await DBgetMultipleData('global', ['pin', 'hmacKey'])

        // Set pin from DB
        pinDB.value = DBData.pin

        // Set hmacKey from DB
        hmacKey.value = DBData.hmacKey
    })


    watch(pinCode.value, async() => {
        // Touched status
        isTouchedPinCode.value = true

        // Reset focus
        if (pinCode.value[5].length) {
            document.activeElement.blur()
        }

        // Compare pins
        isPinValid.value = await comparePINCode()
    })


    // Compare pin code
    async function comparePINCode() {
        // Encrypt the PIN
        let pinHash = await hashDataWithKey(pinCode.value.join(''), hmacKey.value)

        return pinHash === pinDB.value
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


    // Remove wallet
    async function remove() {
        if (store.wallets.length > 1) {
            // Remove
            await store.removeWallet(props.wallet)

            // Event "close_remove_wallet_confirm_modal"
            emitter.emit('close_remove_wallet_confirm_modal')

            // Event "close_remove_wallet_modal"
            emitter.emit('close_remove_wallet_modal')

            // Event "close_edit_wallet_modal"
            emitter.emit('close_edit_wallet_modal', { back: false })

            // Event "show_wallets_modal"
            emitter.emit('show_wallets_modal')

            // Show notification
            notification.notify({
                group: 'default',
                speed: 200,
                duration: 1000,
                title: i18n.global.t('message.notification_wallet_remove_success', { name: props.wallet.name }),
                type: 'success',
            })
        } else {
            // Event "start_reseting"
            emitter.emit('start_reseting')

            // Clear all data
            await store.clearAllData()

            // Redirect
            router.push('/')
        }
    }
</script>


<style scoped>
    .pin
    {
        padding: 0 15px;
        margin-top: 29px;
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
</style>