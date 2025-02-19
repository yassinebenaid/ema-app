import Pusher from 'pusher-js'
import Echo from 'laravel-echo'
import { useAuthStore } from '@/stores/auth'

window.Pusher = Pusher

const echo = new Echo({
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
	auth: {
		headers: {
			Authorization: `Bearer ${useAuthStore().token}`,
		},
	},
})

export default function useEcho() {
	return echo
}
