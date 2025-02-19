import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@vuepic/vue-datepicker/dist/main.css'
import axios from 'axios'

window.axios = <any>axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		Accept: 'application/json',
		'Accept-Language': 'en',
	},
})

createApp(App).use(createPinia()).use(router).mount('#app')
