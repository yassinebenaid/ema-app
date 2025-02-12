import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../stores/auth'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'home',
			path: '/home',
			component: () => import('@/views/Home.vue'),
			beforeEnter(to, from) {
				if (!useAuth().authenticated) {
					return { name: 'login' }
				}
			},
		},
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
