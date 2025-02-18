import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@vuepic/vue-datepicker/dist/main.css'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import axios from 'axios'

window.axios = <any>axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		Accept: 'application/json',
		'Accept-Language': 'en',
	},
})

window.Pusher = Pusher

window.Echo = new Echo({
	cluster: 'm1',
	broadcaster: 'pusher',
	key: import.meta.env.VITE_PUSHER_APP_KEY,
	wsHost: import.meta.env.VITE_PUSHER_HOST,
	wsPort: import.meta.env.VITE_PUSHER_PORT,
	wssPort: import.meta.env.VITE_PUSHER_PORT,
	forceTLS: false,
	disableStats: true,
	enabledTransports: ['ws', 'wss'],
	authEndpoint: import.meta.env.VITE_API_URL + '/broadcasting/auth',
})

createApp(App).use(createPinia()).use(router).mount('#app')
