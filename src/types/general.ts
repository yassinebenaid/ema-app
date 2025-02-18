import type { AxiosStatic } from 'axios'
import type Echo from 'laravel-echo'
import type Pusher from 'pusher-js'

export interface Pagination {
	currentPage: number
	lastPage: number
	totalItems: number
}

export interface Notification {
	id: string
	readAt?: string
	type: string
	createdAt: string
	data: {
		attendeeName: string
		event: {
			id: number
			title: string
		}
		time: string
	}
}

declare global {
	interface Window {
		axios: AxiosStatic
	}

	var Pusher: typeof Pusher
	var Echo: Echo<any>
}
