import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
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
	],
})

export default router
