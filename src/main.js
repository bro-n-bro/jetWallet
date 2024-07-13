import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import i18n from './locale'
import mitt from 'mitt'

import { vFocus } from './directives/v-focus'


// Events
const emitter = mitt()


// Create App
const app = createApp(App)


// Vue use
app.use(router)
app.use(i18n)


// Vue provide
app.provide('i18n', i18n)
app.provide('emitter', emitter)


// Directives
app.directive('focus', vFocus)


// Mount
app.mount('#app')
