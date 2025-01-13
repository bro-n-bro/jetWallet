<template>
    <div class="token">
        <!-- Claim rewards token logo -->
        <div class="logo">
            <img :src="props.balance.token_info.logo_URIs.svg" alt="" v-if="props.balance.token_info.logo_URIs.svg">
            <img :src="props.balance.token_info.logo_URIs.png" alt="" v-else>
        </div>

        <div>
            <!-- Claim rewards token denom -->
            <div class="denom">
                {{ props.balance.token_info.symbol }}
            </div>

            <!-- Claim rewards token cost -->
            <div class="cost">
                ~ <div class="odometer" v-odometer="props.rewardsCost"></div> $
            </div>
        </div>
    </div>
</template>


<script setup>
    const props = defineProps(['balance', 'rewardsCost'])
</script>


<style scoped>
    .token
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        width: 100%;
    }


    .token .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 55px;
        height: 55px;
        margin-right: 8px;
        padding: 8px;

        border-radius: 11px;
    }


    .token .logo img
    {
        display: block;

        max-width: 100%;
        max-height: 100%;
    }


    .token .logo + *
    {
        width: calc(100% - 63px);
    }


    .token .denom
    {
        font-size: 16px;
        font-weight: 500;

        text-transform: uppercase;
    }


    .token .price
    {
        font-size: 16px;
        font-weight: 500;
    }


    .token .cost
    {
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        white-space: nowrap;
    }


    .token .cost .odometer
    {
        margin: 0 4px;
    }
</style>