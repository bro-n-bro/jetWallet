<template>
    <div class="search">
        <button class="back_btn" @click.prevent="setBlurEvent">
            <span><svg><use xlink:href="@/assets/sprite.svg#ic_arrow_hor"></use></svg></span>
        </button>

        <div class="field">
            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_search"></use></svg>

            <input type="text" v-model="query" class="input" :placeholder="$t('message.search_placeholder')" @focus="setFocusEvent" @blur="setBlurEvent" @input="setEnterEvent">

            <button class="clear_btn" v-if="query.length" @click.prevent="clearField">
                <svg><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
            </button>
        </div>
    </div>
</template>


<script setup>
    import { ref, inject } from 'vue'


    const props = defineProps(['sliderIndex']),
        emitter = inject('emitter'),
        query = ref('')


    // Set focus event
    function setFocusEvent() {
        setTimeout(() => emitter.emit('search_focus'), 100)
    }


    // Set blur event
    function setBlurEvent() {
        setTimeout(() => emitter.emit('search_blur'), 100)
    }


    // Set enter event
    function setEnterEvent() {
        emitter.emit('search', { query: query.value, sliderIndex: props.sliderIndex })
    }


    // Clear field
    function clearField() {
        //clear data
        query.value = ''

        // Set event
        emitter.emit('search', { query: query.value, sliderIndex: props.sliderIndex })
    }
</script>


<style scoped>
    .search
    {
        position: sticky;
        z-index: 5;
        top: 0;

        padding: 12px 0;

        background: #170232;
    }


    .search ::-webkit-input-placeholder
    {
        color: rgba(255,255,255,.6);
    }

    .search :-moz-placeholder
    {
        color: rgba(255,255,255,.6);
    }

    .search ::-moz-placeholder
    {
        opacity: 1;
        color: rgba(255,255,255,.6);
    }

    .search :-ms-input-placeholder
    {
        color: rgba(255,255,255,.6);
    }


    .search .back_btn
    {
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        left: 0;

        visibility: hidden;

        width: 28px;
        height: 28px;
        margin: auto 0;
        padding: 1px;

        transition: .2s linear;

        opacity: 0;
        border-radius: 50%;
        background: linear-gradient(to bottom,  #5c32cc 0%,#210750 100%);
    }


    .search .back_btn span
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 26px;
        height: 26px;

        border-radius: 50%;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }


    .search .back_btn svg
    {
        display: block;

        width: 20px;
        height: 20px;
    }


    .searching .search .back_btn
    {
        visibility: visible;

        opacity: 1;
    }


    .search .field
    {
        position: relative;
        z-index: 2;

        width: 100%;
        margin-left: auto;
        padding: 1px;

        transition: width .2s linear;

        border-radius: 23px;
        background: linear-gradient(to bottom,  #5c32cc 0%,#210750 100%);
    }


    .searching .search .field
    {
        width: calc(100% - 40px);
    }


    .search .icon
    {
        position: absolute;
        z-index: 3;
        top: 0;
        bottom: 0;
        left: 10px;

        display: block;

        width: 16px;
        height: 16px;
        margin: auto 0;

        pointer-events: none;
    }


    .search .input
    {
        font-family: var(--font_family);
        font-size: 16px;
        font-weight: 500;

        display: block;

        width: 100%;
        height: 28px;
        padding: 0 39px 2px;

        color: #fff;
        border: none;
        border-radius: 23px;
        background: radial-gradient(130.57% 114.69% at 50% 0%, rgba(148, 56, 248, .70) 0%, rgba(89, 21, 167, .70) 50.94%, rgba(53, 12, 107, .70) 85.09%);
    }


    .clear_btn
    {
        position: absolute;
        z-index: 2;
        top: 0;
        right: 6px;
        bottom: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 24px;
        height: 24px;
        margin: auto 0;
    }


    .clear_btn svg
    {
        display: block;

        width: 18px;
        height: 18px;
    }
</style>