<template>
    <div class="main_section">
        <!-- Balance -->
        <div class="balance">
            <div class="label">
                {{ $t('message.current_balance_title') }}
            </div>

            <div class="val">
                {{ calcBalancesCost() }}
            </div>

            <!-- Address -->
            <CurrentAddress />
        </div>


        <!-- Action -->
        <div class="actions">
            <router-link to="/account" class="btn">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_send"></use></svg>
                </div>

                <div>{{ $t('message.btn_send') }}</div>
            </router-link>

            <router-link to="/account" class="btn">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
                </div>

                <div>{{ $t('message.btn_receive') }}</div>
            </router-link>

            <router-link to="/account" class="btn">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
                </div>

                <div>{{ $t('message.btn_stake') }}</div>
            </router-link>
        </div>
    </div>
</template>


<script setup>
    import { calcBalancesCost } from '@/utils'

    // Components
    import CurrentAddress from '@/components/account/main/Address.vue'
</script>


<style scoped>
    .main_section
    {
        position: relative;
        z-index: 3;
    }


    .balance
    {
        display: flex;
        align-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: center;

        text-align: center;
    }


    .balance .val
    {
        font-size: 38px;
        font-weight: 700;

        width: 100%;
    }



    .actions
    {
        display: flex;
        align-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-top: 20px;
    }


    .actions .btn
    {
        font-size: 12px;

        text-align: center;
        text-decoration: none;

        color: currentColor;
    }


    .actions .btn .icon
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 44px;
        height: 44px;
        margin: 0 auto 4px;

        background: url(@/assets/bg_action_btn.svg) 0 0/100% 100% no-repeat;
    }


    .actions .btn .icon svg
    {
        display: block;

        width: 22px;
        height: 22px;
    }
</style>