<template>
    <section class="main_section">
        <!-- Network selection -->
        <NetworkChooser />


        <!-- Scaner -->
        <button class="qr_code_btn">
            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_scaner"></use></svg>
        </button>


        <!-- Balance -->
        <div class="balance">
            <button class="currency">USD</button>

            <div class="label">Current balance</div>

            <div class="val">9,999,999.99</div>

            <div class="address" @click.prevent="copy('0x09fe...kjacsja')">
                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_copy2"></use></svg>

                <span>0x09fe...kjacsja</span>
            </div>
        </div>


        <!-- Action -->
        <div class="actions">
            <router-link to="/account" class="btn">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_send"></use></svg>
                </div>

                <div>Send</div>
            </router-link>

            <router-link to="/account" class="btn">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
                </div>

                <div>Receive</div>
            </router-link>

            <router-link to="/account" class="btn">
                <div class="icon">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_receive"></use></svg>
                </div>

                <div>Stake</div>
            </router-link>
        </div>
    </section>
</template>


<script setup>
    import { useClipboard } from '@vueuse/core'

    // Components
    // import NetworkChooser from '@/components/account/NetworkChooser.vue'


    const { copy } = useClipboard()
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



.qr_code_btn
{
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    width: 28px;
    height: 28px;
    margin-left: auto;

    background: url(@/assets/bg_action_btn.svg) 0 0/100% 100% no-repeat;
}


.qr_code_btn .icon
{
    display: block;

    width: 14px;
    height: 14px;
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


.balance .currency
{
    font-size: 12px;

    position: absolute;
    top: 2px;
    right: 0;

    padding: 0 4px;

    white-space: nowrap;

    border-radius: 5px;
    background: #5b3895;
}


.balance .val
{
    font-size: 38px;
    font-weight: 700;

    width: 100%;
}


.balance .address
{
    font-size: 12px;

    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    padding: 2px;

    cursor: pointer;

    border-radius: 5px;
    background: #5b3895;
}


.balance .address .icon
{
    display: block;

    width: 14px;
    height: 14px;
    margin-right: 4px;
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