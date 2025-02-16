import type User from './auth'

export interface Event {
	id: number
	date: string
	title: string
	maxAttendeesCount: number
	description: string
	location: string
	user: User
	attendees?: User[]
	userIsAttendee?: boolean
}
