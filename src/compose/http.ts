import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		Accept: 'application/json',
	},
})

export default function useHttp(config: AxiosRequestConfig) {
	return instance(config)
}
