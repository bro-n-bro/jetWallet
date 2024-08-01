<template>
    <div class="main">
        <router-view v-slot="{ Component }">
            <!-- <transition name="fade">
                <component :is="Component" />
            </transition> -->

            <component :is="Component" />
        </router-view>
    </div>
</template>
