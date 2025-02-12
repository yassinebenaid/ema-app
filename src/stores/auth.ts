import useHttp from '@/compose/http'
import type { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuth = defineStore('auth', () => {
	const token = ref(localStorage.getItem('auth:token'))
	const user = ref()

	const logout = () => {
		localStorage.removeItem('auth:token')
		sessionStorage.removeItem('auth:user')
		token.value = null
		user.value = null
	}

	const reload = async () => {
		try {
			user.value = JSON.parse(<string>sessionStorage.getItem('auth:user'))

			if (!user.value) {
				const res = <AxiosResponse>await useHttp({
					url: 'auth/me',
					method: 'post',
					headers: {
						Authorization: `Bearer ${token.value}`,
					},
				})

				if (res.data.success) {
					user.value = res.data.data.user
					sessionStorage.setItem('auth:user', JSON.stringify(user.value))
				}
			}
		} catch (e) {
			user.value = undefined
		}
	}

	const setToken = (t: string) => {
		logout()
		token.value = t
		localStorage.setItem('auth:token', t)
		reload()
	}

	return {
		token,
		user,
		setToken,
		reload,
	}
})
