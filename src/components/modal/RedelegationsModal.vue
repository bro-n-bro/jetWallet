<template>
    <!-- Redelegations modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="emitter.emit('close_redelegations_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.redelegations_title') }}
                </div>

                <!-- Redelegations modal data -->
                <div class="info_wrap">
                    <div class="info">
                        <div class="item" v-for="(entry, index) in props.redelegations.entries" :key="index">
                            <!-- Redelegation amount -->
                            <div class="amount">
                                <!-- Redelegation amount value -->
                                <div class="val">
                                    {{ formatTokenAmount(entry.redelegation_entry.initial_balance, store.networks[store.currentNetwork].exponent).toLocaleString('ru-RU', { maximumFractionDigits: 7 }) }}

                                    {{ store.networks[store.currentNetwork].token_name }}
                                </div>

                                <!-- Redelegation amount cost -->
                                <div class="cost">
                                    ({{ formatTokenCost(calcTokenCost(store.networks[store.currentNetwork].token_name, entry.redelegation_entry.initial_balance, store.networks[store.currentNetwork].exponent)) }} {{ store.currentCurrencySymbol }})
                                </div>
                            </div>

                            <!-- Redelegation finish countdown -->
                            <div class="finish">
                                <vue-countdown :time="dateCalc(entry.redelegation_entry.completion_time) - new Date()" v-slot="{ days, hours, minutes }">
                                    <span v-if="days > 1">{{ days }} {{ $t('message.redelegations_finish_days') }}</span>
                                    <span v-if="days == 1">{{ days }} {{ $t('message.redelegations_finish_day') }}</span>
                                    <span v-if="!days">{{ hours }}h {{ minutes }}m</span>
                                </vue-countdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { inject } from 'vue'
    import { useGlobalStore } from '@/store'
    import { calcTokenCost, formatTokenCost, formatTokenAmount, dateCalc } from '@/utils'


    const props = defineProps(['redelegations']),
        store = useGlobalStore(),
        emitter = inject('emitter')
</script>


<style scoped>
    .modal_title
    {
        padding-left: 10px;
    }



    .info_wrap
    {
        margin-top: 16px;
        padding: 1px;

        border-radius: 12px;
        background: linear-gradient(to bottom,  #5e33cf 0%,#210750 100%);
    }


    .info
    {
        position: relative;

        padding: 7px 9px;

        border-radius: 11px;
        background: #06000e;
    }


    .info .item
    {
        font-size: 16px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-between;

        white-space: nowrap;
    }


    .info .item + .item,
    .info > * + *
    {
        margin-top: 8px;
    }


    .info .amount
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;
    }


    .info .cost
    {
        margin-left: 4px;

        color: #836b9e;
    }


    .info .finish
    {
        font-size: 14px;

        color: rgba(183, 140, 230, .80);
    }
</style>