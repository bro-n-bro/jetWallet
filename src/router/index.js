import { createRouter, createWebHistory } from 'vue-router'
import { getData } from '@/utils/db'
import { useGlobalState } from '@/store'

import defaultLayout from '@/layouts/Default.vue'


const routes = [
    {
		path: '/',
		name: 'MainPage',
		component: () => import('../views/IndexPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['register']
		}
	},
	{
		path: '/create_wallet',
		name: 'CreateWallet',
		component: () => import('../views/CreateWalletPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['register']
		}
	},
	{
		path: '/confirm_wallet',
		name: 'CreateWalletConfirm',
		component: () => import('../views/ConfirmWalletPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['register']
		}
	},
	{
		path: '/create_pin',
		name: 'CreatePin',
		component: () => import('../views/CreatePinPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['register']
		}
	},
	{
		path: '/wallet_created',
		name: 'WalletCreated',
		component: () => import('../views/WalletCreatedPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['not_register']
		}
	},
	{
		path: '/account',
		name: 'Account',
		component: () => import('../views/AccountPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['not_authorized']
		}
	},
	{
		path: '/import_wallet',
		name: 'ImportWallet',
		component: () => import('../views/ImportWalletPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['register']
		}
	},
	{
		path: '/auth',
		name: 'Auth',
		component: () => import('../views/AuthPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['not_register', 'authorized']
		}
	},
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeResolve(async (to, from, next) => {
	let isRegister = await getData('wallet', 'isRegister'),
		{ isAuthorized } = useGlobalState()

	// Check access
	to.matched.some(record => {
		let access = record.meta.accessDenied

		if(access.length) {
			// Not register
			if(access.includes('not_register') && !isRegister) {
				next({ name: 'MainPage' })

				return false
			}

			// Register
			if(access.includes('register') && isRegister) {
				next({ name: 'Account' })

				return false
			}

			// Not authorized
			if(access.includes('not_authorized') && !isAuthorized.value) {
				next({ name: 'Auth' })

				return false
			}

			// Authorized
			if(access.includes('authorized') && isAuthorized.value) {
				next({ name: 'Account' })

				return false
			}
		}
	})

	next()
})


export default router
