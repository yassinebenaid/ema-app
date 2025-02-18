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
