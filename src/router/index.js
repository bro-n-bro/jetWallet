import { createRouter, createWebHistory } from 'vue-router'
import { DBgetData } from '@/utils/db'
import { useGlobalStore } from '@/store'

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
	{
		path: '/account/claim_confirm',
		name: 'ClaimConfirm',
		component: () => import('../views/ClaimConfirmPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['not_authorized']
		}
	},
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeResolve(async (to, from, next) => {
	let store = useGlobalStore(),
		isRegister = await DBgetData('wallet', 'isRegister')

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
			else if(access.includes('register') && isRegister) {
				next({ name: 'Auth' })

				return false
			}

			// Not authorized
			else if(access.includes('not_authorized') && !store.isAuthorized) {
				next({ name: 'Auth' })

				return false
			}

			// Authorized
			else if(access.includes('authorized') && store.isAuthorized) {
				next({ name: 'Account' })

				return false
			}

			else {
				next()
			}
		}
	})
})


export default router
