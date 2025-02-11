import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'welcome',
			path: '/',
			component: () => import('@/views/Welcome.vue'),
		},
		{
			path: '/auth',
			component: () => import('@/views/auth/Auth.vue'),
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

export default router
