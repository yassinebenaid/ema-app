import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'home',
			path: '/home',
			component: () => import('@/views/Home/Main.vue'),
		},
		{
			name: 'welcome',
			path: '/',
			component: () => import('@/views/Welcome.vue'),
		},
		{
			path: '/auth',
			component: () => import('@/views/auth/Auth.vue'),
			meta: { guest: true },
			children: [
				{
					name: 'login',
					path: 'login',
					component: () => import('@/views/auth/Login.vue'),
				},
				{
					name: 'register',
					path: 'register',
					component: () => import('@/views/auth/Register.vue'),
				},
			],
		},
		{
			path: '/:wte(.*)*',
			component: () => import('@/views/errors/404.vue'),
		},
	],
})

router.beforeEach(to => {
	const auth = useAuthStore()
	auth.reload()

	if (to.meta.guest && auth.authenticated) {
		return { name: 'home' }
	}

	if (!to.meta.guest && !auth.authenticated) {
		return { name: 'login' }
	}
})

export default router
