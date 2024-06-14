import { createRouter, createWebHistory } from 'vue-router'

import defaultLayout from '@/layouts/Default.vue'


const routes = [
    {
		path: '/',
		name: 'MainPage',
		component: () => import('../views/IndePage.vue'),
		meta: {
			layout: defaultLayout
		}
	},
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
