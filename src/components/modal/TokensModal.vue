<template>
    <!-- Tokens page -->
    <section class="page_container inner_page_container tokens_page">
        <div class="cont">
            <!-- Tokens page head -->
            <div class="head">
                <!-- Back button -->
                <button class="back_btn" @click="emitter.emit('close_tokens_modal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg>
                </button>

                <!-- Tokens page title -->
                <div class="page_title">
                    {{ $t('message.tokens_page_title') }}
                </div>
            </div>

            <!-- Available tokens -->
            <AvailableTokens class="inside_modal" :currentToken="props.currentToken" />
        </div>
    </section>
</template>


<script setup>
    import { inject } from 'vue'

    // Components
    import AvailableTokens from '@/components/account/AvailableTokens.vue'


    const props = defineProps(['currentToken']),
        emitter = inject('emitter')
</script>


<style scoped>
    .tokens_page
    {
        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: #170232;
    }


    .tokens_page .head
    {
        margin-bottom: 0;
    }



    .loader_wrap
    {
        position: relative;

        height: auto;
        padding: 20px;

        background: none;
    }
</style>