<template>
    <section class="main_section">
        <!-- Network selection -->
        <NetworkChooser />


        <!-- Scaner -->
        <QRCode />


        <!-- Balance -->
        <div class="balance">
            <!-- Currency -->
            <CurrentCurrency />

            <div class="label">
                {{ $t('message.current_balance_title') }}
            </div>

            <div class="val">9,999,999.99</div>

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
    </section>
</template>


<script setup>
    // Components
    // import NetworkChooser from '@/components/account/NetworkChooser.vue'
    import QRCode from '@/components/account/QRCode.vue'
    import CurrentCurrency from '@/components/account/main/Currency.vue'
    import CurrentAddress from '@/components/account/main/Currency.vue'
</script>


<style scoped>
.main_section
{
    position: relative;

    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    padding: 12px 12px 24px;

    border-radius: 0 0 15px 15px;
}


.main_section:before
{
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: '';
    pointer-events: none;

    opacity: .8;
    border-radius: inherit;
    background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
}


.main_section > *
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

    width: 100%;
    margin-top: 24px;

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
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
    margin-top: 20px;
    padding: 0 10px;
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