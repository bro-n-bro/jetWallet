import { createRouter, createWebHistory } from 'vue-router'
import { DBgetMultipleData } from '@/utils/db'
import { decodeFromBase64 } from '@/utils'
import { useGlobalStore } from '@/store'

import defaultLayout from '@/layouts/Default.vue'
import accountLayout from '@/layouts/Account.vue'


const routes = [
    {
		path: '/',
		name: 'MainPage',
		component: () => import('../views/IndexPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['register', 'locked']
		}
	},
	{
		path: '/create_wallet',
		name: 'CreateWallet',
		component: () => import('../views/CreateWallet/IndexPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['register', 'locked']
		}
	},
	{
		path: '/confirm_wallet',
		name: 'CreateWalletConfirm',
		component: () => import('../views/CreateWallet/ConfirmPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['register', 'locked']
		}
	},
	{
		path: '/create_pin',
		name: 'CreatePin',
		component: () => import('../views/CreateWallet/PinPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['register', 'locked']
		}
	},
	{
		path: '/wallet_created',
		name: 'CreatedWallet',
		component: () => import('../views/CreateWallet/CreatedPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['not_register', 'locked']
		}
	},
	{
		path: '/import_wallet',
		name: 'ImportWallet',
		component: () => import('../views/CreateWallet/ImportPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['register', 'locked']
		}
	},
	{
		path: '/auth',
		name: 'Auth',
		component: () => import('../views/AuthPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['not_register', 'authorized', 'locked']
		}
	},
	{
		path: '/lock',
		name: 'Lock',
		component: () => import('../views/UserLockPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: ['not_register']
		}
	},
	{
		path: '/account',
		name: 'Account',
		component: () => import('../views/Account/IndexPage.vue'),
		meta: {
			layout: accountLayout,
			accessDenied: ['not_authorized', 'locked']
		}
	},
	{
		path: '/account/claim_confirm',
		name: 'ClaimConfirm',
		component: () => import('../views/Account/ClaimConfirmPage.vue'),
		meta: {
			layout: accountLayout,
			accessDenied: ['not_authorized', 'locked']
		}
	},
	{
		path: '/account/stake',
		name: 'Stake',
		component: () => import('../views/Account/StakePage.vue'),
		meta: {
			layout: accountLayout,
			accessDenied: ['not_authorized', 'locked']
		}
	},
	{
		path: '/account/unstake',
		name: 'Unstake',
		component: () => import('../views/Account/UnstakePage.vue'),
		meta: {
			layout: accountLayout,
			accessDenied: ['not_authorized', 'locked']
		}
	},
	{
		path: '/account/redelegate',
		name: 'Redelegate',
		component: () => import('../views/Account/RedelegatePage.vue'),
		meta: {
			layout: accountLayout,
			accessDenied: ['not_authorized', 'locked']
		}
	},
	{
		path: '/account/receive',
		name: 'Receive',
		component: () => import('../views/Account/ReceivePage.vue'),
		meta: {
			layout: accountLayout,
			accessDenied: ['not_authorized', 'locked']
		}
	},
	{
		path: '/account/send',
		name: 'Send',
		component: () => import('../views/Account/SendPage.vue'),
		meta: {
			layout: accountLayout,
			accessDenied: ['not_authorized', 'locked']
		}
	},
	{
		path: '/add_wallet',
		name: 'AddWallet',
		component: () => import('../views/AddWallet/IndexPage.vue'),
		meta: {
			layout: accountLayout,
			accessDenied: ['not_authorized', 'locked']
		}
	},
	{
		path: '/add_wallet/create',
		name: 'AddWalletCreate',
		component: () => import('../views/AddWallet/CreatePage.vue'),
		meta: {
			layout: accountLayout,
			accessDenied: ['not_authorized', 'locked']
		}
	},
	{
		path: '/add_wallet/confirm',
		name: 'AddWalletConfirm',
		component: () => import('../views/AddWallet/ConfirmPage.vue'),
		meta: {
			layout: accountLayout,
			accessDenied: ['not_authorized', 'locked']
		}
	},
	{
		path: '/add_wallet/import',
		name: 'AddWalletImport',
		component: () => import('../views/AddWallet/ImportPage.vue'),
		meta: {
			layout: accountLayout,
			accessDenied: ['not_authorized', 'locked']
		}
	},
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeResolve(async (to, from, next) => {
	let store = useGlobalStore(),
		DBData = await DBgetMultipleData('global', ['isRegister', 'isUserLock', 'userLockTimestamp', 'authTimestamp'])

	// Parse jetPack request
	if (to.query.tgWebAppStartParam) {
		store.jetPackRequest = decodeFromBase64(to.query.tgWebAppStartParam)
	}

	// Check access
	to.matched.some(record => {
		let access = record.meta.accessDenied

		if(access.length) {
			// Not register
			if (access.includes('not_register') && DBData.isRegister == undefined) {
				// Redirect
				next({ name: 'MainPage' })

				return false
			}

			// Lock
			else if (access.includes('locked') && DBData.isUserLock && (new Date() - new Date(DBData.userLockTimestamp) < store.userLockTime)) {
				// Redirect
				next({ name: 'Lock' })

				return false
			}

			// Register
			else if (access.includes('register') && DBData.isRegister) {
				// Redirect
				next({ name: 'Auth' })

				return false
			}

			// Not authorized
			else if (access.includes('not_authorized') && !store.isAuthorized) {
				// Redirect
				next({ name: 'Auth' })

				return false
			}

			// Authorized
			else if (access.includes('authorized') && store.isAuthorized) {
				// Redirect
				next({ name: 'Account' })

				return false
			}

			// Auto auth
			else if (to.name === 'Auth') {
				if (new Date() - new Date(DBData.authTimestamp) < store.authTime) {
					// Auth
					store.auth()

					// Redirect
					next({ name: 'Account' })

					return false
				}
			}

			else {
				next()
			}
		}
	})
})


export default router
