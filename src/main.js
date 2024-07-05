import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './locale'
import mitt from 'mitt'


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


// Vue provide
app.provide('i18n', i18n)
app.provide('emitter', emitter)


// Mount
app.mount('#app')
