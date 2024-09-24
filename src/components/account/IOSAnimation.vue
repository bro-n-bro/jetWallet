<template>
    <div class="IOS_ace" :style="`height: ${topHeight}px;`" :class="{ show: !loading }"></div>

    <div class="IOS_animation" :class="{ show: !loading }">
        <div class="top" :style="`height: ${topHeight}px;`"></div>

        <div class="bottom" :style="`height: ${bottomHeight}px;`"></div>

        <canvas id="canvas"></canvas>
    </div>
</template>


<script setup>
    import { ref, watch, computed, onMounted, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { calcAvailableAmount, calcStakedAmount, calcUnstakingAmount } from '@/utils'


    const store = useGlobalStore(),
        c = ref({}),
        ctx = ref({}),
        w = ref(0),
        h = ref(0),
        clearColor = ref('rgba(0,0,0,.1)'),
        max = ref(10),
        drops = ref([]),
        loading = ref(true),
        topHeight = ref(0),
        bottomHeight = ref(0),
        availableAmount = calcAvailableAmount(),
        stakedAmount = calcStakedAmount(),
        unstakingAmount = calcUnstakingAmount()


    onBeforeMount(() => {
        // Total tokens
        let sumAmounts = parseInt(availableAmount) + parseInt(stakedAmount),
            totalHeight = 266

        // Get heights
        topHeight.value = Math.floor(totalHeight * 0.25 * (stakedAmount / sumAmounts))
        bottomHeight.value = Math.floor(totalHeight * 0.25 * (availableAmount / sumAmounts))
    })


    onMounted(() => {
        if (store.isUnstakingBalancesGot && store.unstakingBalances.length) {
            // Init animation
            c.value = document.getElementById('canvas')
            ctx.value = c.value.getContext('2d')
            w.value = c.value.width = window.innerWidth
            h.value = c.value.height = window.innerHeight
            max.value = Math.ceil(10 * (unstakingAmount / stakedAmount))

            init()
            anim()

            // Show animation
            setTimeout(() => loading.value = false, 750)
        }

        // Set resize event
        window.addEventListener('resize', resize)
    })


    watch(computed(() => store.isUnstakingBalancesGot), () => {
        if (store.isUnstakingBalancesGot && store.unstakingBalances.length) {
            // Init animation
            c.value = document.getElementById('canvas')
            ctx.value = c.value.getContext('2d')
            w.value = c.value.width = window.innerWidth
            h.value = c.value.height = window.innerHeight
            max.value = Math.ceil(10 * (unstakingAmount / stakedAmount))

            init()
            anim()

            // Show animation
            setTimeout(() => loading.value = false, 750)
        }
    })


    function O() {}

    O.prototype = {
        init: function() {
            this.x = random(0, w.value)
            this.y = 0
            this.color = '#fff'
            this.w = 2
            this.h = 1
            this.vy = random(4, 5)
            this.vw = 3
            this.vh = 1
            this.size = 2
            this.hit = h.value
            this.a = 1
            this.va = .96
        },

        draw: function() {
            if (this.y > this.hit) {
                ctx.value.beginPath()
                ctx.value.moveTo(this.x, this.y - this.h / 2)

                ctx.value.bezierCurveTo(
                    this.x + this.w / 2, this.y - this.h / 2,
                    this.x + this.w / 2, this.y + this.h / 2,
                    this.x, this.y + this.h / 2)

                ctx.value.bezierCurveTo(
                    this.x - this.w / 2, this.y + this.h / 2,
                    this.x - this.w / 2, this.y - this.h / 2,
                    this.x, this.y - this.h / 2)

                ctx.value.strokeStyle = 'rgba(255, 255, 255, '+this.a+')'
                ctx.value.stroke()
                ctx.value.closePath()

            } else {
                ctx.value.fillStyle = this.color
                ctx.value.fillRect(this.x, this.y, this.size, this.size * 5)
            }

            this.update()
        },

        update: function() {
            if(this.y < this.hit){
                this.y += this.vy
            } else {
                if(this.a > .03){
                    this.w += this.vw
                    this.h += this.vh

                    if(this.w > 100){
                        this.a *= this.va
                        this.vw *= .98
                        this.vh *= .98
                    }
                } else {
                    this.init()
                }
            }
        }
    }


    function random(min, max) {
        return Math.random() * (max - min) + min
    }


    function resize(){
        w.value = c.value.width = window.innerWidth
        h.value = c.value.height = window.innerHeight
    }


    function init(){
        for(var i = 0; i < max.value; i++){
            (function(j){
                setTimeout(function(){
                    var o = new O()

                    o.init()

                    drops.value.push(o)
                }, j * 200)
            }(i))
        }
    }


    function anim() {
        ctx.value.fillStyle = clearColor.value
        ctx.value.fillRect(0, 0, w.value, h.value)

        for(var i in drops.value){
            drops.value[i].draw()
        }

        requestAnimationFrame(anim)
    }
</script>


<style>
    .IOS_ace
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;

        display: block;

        width: 100%;

        transition: .35s linear;
        transform: translate3d(0, -100%, 0);
        pointer-events: none;

        opacity: 0;
        background: url(@/assets/bg_ace.svg) 0 0/cover no-repeat;
    }

    .IOS_ace.show
    {
        transform: translate3d(0, 0, 0);

        opacity: .2;
    }


    .IOS_animation
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        transition: opacity .35s linear;
        pointer-events: none;

        opacity: 0;
    }


    .IOS_animation .top,
    .IOS_animation .bottom
    {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;

        width: 100%;

        transition: transform .35s linear .1s;
        transform: translate3d(0, -100%, 0);

        background: #fff;
    }


    .IOS_animation .bottom
    {
        top: auto;
        bottom: 0;

        transform: translate3d(0, 100%, 0);

        background: url(@/assets/bg_wave.svg) 0 0/cover no-repeat;
    }


    /* .IOS_animation canvas
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 100%;
    } */


    .IOS_animation.show
    {
        opacity: .1;
    }


    .IOS_animation.show .top,
    .IOS_animation.show .bottom
    {
        transform: translate3d(0, 0, 0);
    }
</style>