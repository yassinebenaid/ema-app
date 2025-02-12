import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { ref } from 'vue'

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		Accept: 'application/json',
	},
})

export default function useHttp() {
	const loading = ref(false)
	const errors = ref([])

	const execute = (config: AxiosRequestConfig) => {
		loading.value = true

		instance(config)
			.then(res => {
				errors.value = res.data?.errors
			})
			.finally(() => {
				loading.value = false
			})
	}

	return {
		loading,
		errors,
		execute,
	}
}
