import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuth = defineStore('auth', () => {
	const token = ref(localStorage.getItem('auth:token'))
	const authenticated = ref(!!token)

	const setToken = (t: string) => {
		token.value = t
		authenticated.value = true
		localStorage.setItem('auth:token', t)
	}

	const removeToken = () => {
		token.value = null
		authenticated.value = false
		localStorage.removeItem('auth:token')
	}

	return {
		token,
		authenticated,
		setToken,
		removeToken,
	}
})
