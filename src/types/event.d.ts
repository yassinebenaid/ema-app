import type User from './auth'

export interface Event {
	id: number
	date: string
	title: string
	description: string
	location: string
	user: User
}
