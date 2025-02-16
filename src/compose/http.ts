import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { ref, type Ref } from 'vue'

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		Accept: 'application/json',
	},
})
export default function useHttp(config: AxiosRequestConfig): Promise<AxiosResponse>
export default function useHttp(): {
	loading: Ref<boolean>
	errors: Ref<string[]>
	execute: (options: {
		config: AxiosRequestConfig
		onSuccess?: (res: AxiosResponse) => void
		onError?: (res: AxiosResponse) => void
	}) => void
}

export default function useHttp(config?: AxiosRequestConfig) {
	if (config) {
		return instance(config)
	}

	const loading = ref(false)
	const errors = ref([])

	const execute = (options: {
		config: AxiosRequestConfig
		onSuccess?: (res: AxiosResponse) => void
		onError?: (res: AxiosResponse) => void
	}) => {
		loading.value = true

		options.config.headers!['Accept-Language'] = 'en'

		instance(options.config)
			.then(res => {
				if (options.onSuccess && res.data.success) {
					options.onSuccess(res.data)
				}
				if (options.onError && !res.data.success) {
					options.onError(res.data)
				}
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
