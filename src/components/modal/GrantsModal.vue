<template>
    <!-- Grants modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="emitter.emit('close_grants_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    {{ $t('message.grants_title') }}
                </div>

                <!-- Stats modal data -->
                <div class="info_wrap">
                    <div class="info">
                        <div class="grant" v-for="(grant, index) in grants" :key="index" v-if="grants.length">
                            <div>
                                <div class="label">Grantee</div>

                                <div class="val">
                                    {{ grant.grantee.slice(0, 9) + '...' + grant.grantee.slice(-6) }}
                                </div>
                            </div>

                            <div>
                                <div class="label">Expiration</div>

                                <div class="val">
                                    <vue-countdown :time="dateCalc(grant.expiration) - new Date()" v-slot="{ days, hours, minutes }">
                                        <span v-if="days > 1">{{ days }} {{ $t('message.unstaking_tokens_finish_days') }}</span>
                                        <span v-if="days == 1">{{ days }} {{ $t('message.unstaking_tokens_finish_day') }}</span>
                                        <span v-if="!days">{{ hours }}h {{ minutes }}m</span>
                                    </vue-countdown>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="grant">
                            <div>
                                <div class="label">Grantee</div>

                                <div class="val">
                                    {{ 'cosmos1p4hc20yrucx4hk4lf68wmuzvsa0rrxkuczh2ew'.slice(0, 9) + '...' + 'cosmos1p4hc20yrucx4hk4lf68wmuzvsa0rrxkuczh2ew'.slice(-6) }}
                                </div>
                            </div>

                            <div>
                                <div class="label">Expiration</div>

                                <div class="val">
                                    <span class="red">Expired</span>

                                    <button class="extend_btn">
                                        <span>Extend</span>
                                    </button>
                                </div>
                            </div>
                        </div> -->

                        <div class="empty" v-else>You don't have any grants yet.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, inject, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { dateCalc } from '@/utils'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        grants = ref([])


    onBeforeMount(async () => {
        // Get grants
        grants.value = await store.getGrants()
    })
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



    .grant + .grant
    {
        margin-top: 16px;
        padding-top: 16px;

        border-top: 2px solid rgba(255,255,255,.2);
    }


    .grant > *
    {
        font-size: 16px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-between;

        white-space: nowrap;
    }


    .grant > * + *
    {
        margin-top: 8px;
    }


    .grant .val
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;

        margin-left: 20px;

        text-align: right;
    }


    .grant .val .red
    {
        color: red;
    }



    .empty
    {
        font-size: 14px;

        padding: 10px;

        text-align: center;
    }
</style>