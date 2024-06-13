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
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
