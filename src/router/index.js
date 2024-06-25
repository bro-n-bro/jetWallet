import { createRouter, createWebHistory } from 'vue-router'

import defaultLayout from '@/layouts/Default.vue'


const routes = [
    {
		path: '/',
		name: 'MainPage',
		component: () => import('../views/IndexPage.vue'),
		meta: {
			layout: defaultLayout
		}
	},
	{
		path: '/create_wallet',
		name: 'CreateWallet',
		component: () => import('../views/CreateWalletPage.vue'),
		meta: {
			layout: defaultLayout
		}
	},
	{
		path: '/create_wallet_confirm',
		name: 'CreateWalletConfirm',
		component: () => import('../views/CreateWalletConfirmPage.vue'),
		meta: {
			layout: defaultLayout
		}
	},
	{
		path: '/create_pin',
		name: 'CreatePin',
		component: () => import('../views/CreatePinPage.vue'),
		meta: {
			layout: defaultLayout
		}
	},
	{
		path: '/wallet_created',
		name: 'WalletCreated',
		component: () => import('../views/WalletCreatedPage.vue'),
		meta: {
			layout: defaultLayout
		}
	},
	{
		path: '/account',
		name: 'Account',
		component: () => import('../views/AccountPage.vue'),
		meta: {
			layout: defaultLayout
		}
	},
	{
		path: '/import_wallet',
		name: 'ImportWallet',
		component: () => import('../views/ImportWalletPage.vue'),
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
