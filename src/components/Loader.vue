<template>
    <!-- Loader wrap -->
    <div class="loader_wrap">
        <!-- Loader -->
        <div class="loader"><span></span></div>
    </div>
</template>


<style>
    .loader_wrap
    {
        position: absolute;
        z-index: 7;
        top: 0;
        left: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 100%;
        height: 100%;

        border-radius: inherit;
        background: rgba(0, 0, 0, .5);
    }


    .loader
    {
        position: relative;

        width: 32px;
        height: 32px;
        margin: 0 auto;
    }


    .loader span
    {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 100%;
        margin: auto;
    }

    .loader span::before,
    .loader span::after
    {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 100%;
        margin: auto;

        content: '';
        animation: loader-1 1.5s cubic-bezier(.075, .820, .165, 1.000) infinite;

        opacity: 0;
        border: 2px solid #fff;
        border-radius: 50%;
    }

    .loader span::after
    {
        animation: loader-2 1.5s cubic-bezier(.075, .820, .165, 1.000) .25s infinite;
    }


    @-webkit-keyframes loader-1
    {
        0%
        {
            -webkit-transform: translate3d(0, 0, 0) scale(0);

            opacity: 1;
        }

        100%
        {
            -webkit-transform: translate3d(0, 0, 0) scale(1.5);

            opacity: 0;
        }
    }

    @keyframes loader-1
    {
        0%
        {
            transform: translate3d(0, 0, 0) scale(0);

            opacity: 1;
        }

        100%
        {
            transform: translate3d(0, 0, 0) scale(1.5);

            opacity: 0;
        }
    }


    @-webkit-keyframes loader-2
    {
        0%
        {
            -webkit-transform: translate3d(0, 0, 0) scale(0);

            opacity: 1;
        }

        100%
        {
            -webkit-transform: translate3d(0, 0, 0) scale(1);

            opacity: 0;
        }
    }

    @keyframes loader-2
    {
        0%
        {
            transform: translate3d(0, 0, 0) scale(0);

            opacity: 1;
        }

        100%
        {
            transform: translate3d(0, 0, 0) scale(1);

            opacity: 0;
        }
    }

</style>