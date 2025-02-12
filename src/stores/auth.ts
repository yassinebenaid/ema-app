import useHttp from '@/compose/http'
import type User from '@/types/auth'
import type { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
	const user = ref<User | null>()

	const logout = () => {
		localStorage.removeItem('auth:token')
		sessionStorage.removeItem('auth:user')
		user.value = null
	}

	const reload = async () => {
		try {
			const token = localStorage.getItem('auth:token')
			user.value = JSON.parse(<string>sessionStorage.getItem('auth:user'))

			if (!user.value) {
				const res = <AxiosResponse>await useHttp({
					url: 'auth/me',
					method: 'post',
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})

				if (res.data.success) {
					user.value = res.data.data.user
					sessionStorage.setItem('auth:user', JSON.stringify(user.value))
				}
			}
		} catch (e) {
			user.value = null
			console.error(e)
		}
	}

	const setToken = (t: string) => {
		logout()
		localStorage.setItem('auth:token', t)
	}

	const isLoggedIn = (): boolean => {
		return !!user.value
	}

	return {
		user,
		setToken,
		reload,
		isLoggedIn,
		logout,
	}
})
