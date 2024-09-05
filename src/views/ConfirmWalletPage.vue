<template>
    <!-- Confirm create wallet page -->
    <section class="page_container confirm_create_wallet_page">
        <div class="cont">
            <!-- Confirm create wallet page title -->
            <div class="page_title">
                {{ $t('message.create_wallet_confirm_title') }}
            </div>

            <!-- Confirm create wallet page data -->
            <div class="page_data_wrap">
                <div class="page_data">
                    <!-- Loader -->
                    <Loader v-if="loading" />

                    <!-- Back button -->
                    <router-link class="back_btn" to="/create_wallet">
                        <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                    </router-link>

                    <!-- Confirm data -->
                    <div class="confirm">
                        <div class="row">
                            <!-- Confirm first word -->
                            <div>
                                <!-- Confirm word label -->
                                <div class="label">
                                    <span>{{ $t('message.confirm_label') }}</span>
                                    <span>{{ wordOneNumber }}.</span>
                                </div>

                                <!-- Confirm word field -->
                                <input type="text" class="input" v-model="wordOne"
                                    @keyup="validateFirstWord()"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    :class="{
                                        success: validWordOne && isValidWordOne,
                                        error: validWordOne && !isValidWordOne
                                    }">
                            </div>

                            <!-- Confirm second word -->
                            <div>
                                <!-- Confirm word label -->
                                <div class="label">
                                    <span>{{ $t('message.confirm_label') }}</span>
                                    <span>{{ wordTwoNumber }}.</span>
                                </div>

                                <!-- Confirm word field -->
                                <input type="text" class="input" v-model="wordTwo"
                                    @keyup="validateSecondWord()"
                                    @focus="emitter.emit('show_keyboard')"
                                    @blur="emitter.emit('hide_keyboard')"
                                    :class="{
                                        success: validWordTwo && isValidWordTwo,
                                        error: validWordTwo && !isValidWordTwo
                                    }">
                            </div>
                        </div>
                    </div>

                    <!-- Confirm create wallet page image -->
                    <div class="image">
                        <img src="@/assets/index_page_img.svg" alt="" loading="lazy">
                    </div>

                    <!-- Confirm create wallet page buttons -->
                    <div class="btns">
                        <!-- Next button -->
                        <div class="btn" :class="{ disabled: !isValidWordOne || !isValidWordTwo }" @click.prevent="save()">
                            <span>{{ $t('message.btn_next') }}</span>
                        </div>

                        <!-- Next button -->
                        <!-- <button class="btn" @click.prevent="save">
                            <span>{{ $t('message.btn_next') }}</span>
                        </button> -->
                    </div>

                    <!-- Confirm create wallet page text -->
                    <div class="exp">
                        {{ $t('message.confirm_exp') }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, onBeforeMount, inject } from 'vue'
    import { useRouter } from 'vue-router'
    import { useGlobalStore } from '@/store'

    // Components
    import Loader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        router = useRouter(),
        emitter = inject('emitter'),
        loading = ref(true),
        wordOneNumber = ref(0),
        wordTwoNumber = ref(0),
        wordOne = ref(''),
        wordTwo = ref(''),
        validWordOne = ref(false),
        validWordTwo = ref(false),
        isValidWordOne = ref(false),
        isValidWordTwo = ref(false)


    onBeforeMount(async () => {
        // Get secret from DB
        if (store.secret != 'undefined') {
            let min = 1,
                max = store.secret.split(' ').length

            // Generate the first random number
            wordOneNumber.value = Math.floor(Math.random() * (max - min + 1)) + min

            // Generate the second random number
            do {
                wordTwoNumber.value = Math.floor(Math.random() * (max - min + 1)) + min
            } while (wordOneNumber.value === wordTwoNumber.value)

            // Hide loader
            loading.value = false
        }
    })


    // Validate first word
    function validateFirstWord() {
        validWordOne.value = true

        wordOne.value === store.secret.split(' ')[wordOneNumber.value - 1]
            ? isValidWordOne.value = true
            : isValidWordOne.value = false
    }


    // Validate second word
    function validateSecondWord() {
        validWordTwo.value = true

        wordTwo.value === store.secret.split(' ')[wordTwoNumber.value - 1]
            ? isValidWordTwo.value = true
            : isValidWordTwo.value = false
    }


    // Save
    async function save() {
        // Show loader
        loading.value = true

        // Set router
        router.push('/create_pin')
    }
</script>


<style scoped>
    .confirm
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-top: 54px;
        padding: 11px 13px;

        border-radius: 10px;
        background: #b44ae4;
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
        justify-content: space-between;

        width: calc(50% - 5px);
    }


    .confirm .label
    {
        font-size: 12px;

        display: flex;
        align-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: space-between;

        width: 48px;
    }


    .confirm .input
    {
        width: calc(100% - 56px);
    }



    .image
    {
        margin-top: auto;
        padding-top: 24px;
    }


    .image img
    {
        display: block;

        max-width: 100%;
        margin: 0 auto;
    }



    .exp
    {
        font-size: 12px;

        margin-top: 6px;
    }
</style>


