<template>
    <section class="index_page">
        <div class="cont">
            <div class="btns">
                <router-link to="/create_wallet" class="btn create_btn">
                    {{ $t('message.btn_create_wallet') }}
                </router-link>

                <router-link to="/import_wallet" class="btn import_btn">
                    {{ $t('message.btn_import_wallet') }}
                </router-link>
            </div>
        </div>
    </section>
</template>


<script setup>

</script>


<style scoped>
    .cont
    {
        display: flex;
        flex-direction: column;
    }


    .btns
    {
        margin-top: auto;
        padding-top: 24px;
    }


    .btns .btn
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 100%;
        height: 50px;

        text-align: center;
        text-decoration: none;

        color: #fff;
        border: 1px solid;
        border-radius: 10px;
    }


    .btns .btn + .btn
    {
        margin-top: 12px;
    }
</style>
