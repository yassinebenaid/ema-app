import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuth = defineStore('auth', () => {
	const user = ref()
	user.value = JSON.parse(<string>localStorage.getItem('auth:user'))
	const token = localStorage.getItem('auth:token')
})
