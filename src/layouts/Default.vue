<template>
    <div class="main">
        <!-- Router view -->
        <!-- <transition name="fade">
            <RouterView />
        </transition> -->

        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>
