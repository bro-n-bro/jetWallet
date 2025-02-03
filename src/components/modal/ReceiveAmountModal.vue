<template>
    <!-- Receive amount modal -->
    <section class="modal">
        <div class="modal_content">
            <!-- Receive amount data -->
            <div class="data" :class="{ closing: isClosing }">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="closeHandler()">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.receive_amount_title') }}
                </div>

                <!-- Amount -->
                <div class="amount_field">
                     <!-- Amount label -->
                    <div class="field_label">
                        {{ $t('message.receive_amount_label') }}

                         <!-- Amount cost -->
                        <div class="cost">
                            {{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, (amount * Math.pow(10, store.networks[store.currentNetwork].exponent)), store.networks[store.currentNetwork].exponent)) }}

                            {{ store.currentCurrencySymbol }}
                        </div>
                    </div>

                    <div class="field">
                         <!-- Amount field -->
                        <input type="number" inputmode="decimal" class="input big" v-model="amount" placeholder="0.00"
                            @input="validateAmount($event)">
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- Modal overlay -->
    <div class="modal_overlay" :class="{ closing: isClosing }" @click.prevent="closeHandler()"></div>
</template>


<script setup>
    import { ref, inject, onMounted, onUnmounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import { calcTokenCost, formatTokenCost } from '@/utils'


    const props = defineProps(['amount']),
        store = useGlobalStore(),
        emitter = inject('emitter'),
        amount = ref(props.amount),
        isClosing = ref(false)


    onMounted(() => {
        // Event "close_any_modal"
        emitter.on('close_any_modal', closeHandler)
    })


    onUnmounted(() => {
        // Unlisten events
        emitter.off('close_any_modal', closeHandler)
    })


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "close_receive_amount_modal"
            emitter.emit('close_receive_amount_modal')
        }, 200)
    }


    // Validate amount
    function validateAmount(e) {
        setTimeout(() => {
            // Negative value
            if (e.target.value.length && e.target.value <= 0) {
                // Set empty
                amount.value = ''
            }

            // Set event 'change_receive_amount'
            emitter.emit('change_receive_amount', { new_amount: amount.value })
        })
    }
</script>


<style scoped>
    .modal_content
    {
        min-height: 0;
    }



    .amount_field
    {
        margin-top: 17px;
    }


    .amount_field .cost
    {
        margin-left: auto;

        color: rgba(255, 255, 255, .70);
    }


    .field
    {
        position: relative;

        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #5d33ce 0%,#200750 100%);
    }


    .input
    {
        border-radius: 9px;
        background: #170232;
    }
</style>