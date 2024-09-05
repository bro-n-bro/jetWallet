import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './locale'
import mitt from 'mitt'
import Notifications from '@kyvg/vue3-notification'
import velocity from 'velocity-animate'
import { register } from 'swiper/element/bundle'
import VueCountdown from '@chenfengyuan/vue-countdown'

import { vFocus } from './directives/v-focus'
import { vParallax } from './directives/v-parallax'
import { vOdometer } from './directives/v-odometer'


// Events
const emitter = mitt()


// Create App
const app = createApp(App)


// Pinia
const pinia = createPinia()


// Vue use
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(Notifications, { velocity })


// Vue provide
app.provide('i18n', i18n)
app.provide('emitter', emitter)


// Directives
app.directive('focus', vFocus)
app.directive('parallax', vParallax)
app.directive('odometer', vOdometer)


// Swiper - register
register()


// VueCountdown
app.component(VueCountdown.name, VueCountdown)


// Mount
app.mount('#app')
