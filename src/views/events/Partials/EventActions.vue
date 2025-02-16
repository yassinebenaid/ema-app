<script setup lang="ts">
import useHttp from '@/compose/http'
import { useAuthStore } from '@/stores/auth'
import type { Event } from '@/types/event'

const emit = defineEmits<{
	(e: 'attend'): void
	(e: 'leave'): void
}>()

const props = defineProps<{
	event: Event
}>()

const { loading, execute } = useHttp()

const attend = () => {
	execute({
		config: {
			method: 'post',
			url: `events/${props.event.id}/attend`,
			headers: {
				Authorization: `Bearer ${useAuthStore().token}`,
			},
		},
		onSuccess() {
			emit('attend')
		},
		onError({ data }) {
			console.error(data)
		},
	})
}

const leave = () => {
	execute({
		config: {
			method: 'post',
			url: `events/${props.event.id}/leave`,
			headers: {
				Authorization: `Bearer ${useAuthStore().token}`,
			},
		},
		onSuccess() {
			emit('leave')
		},
		onError({ data }) {
			console.error(data)
		},
	})
}
</script>

<template>
	<button v-if="!event.userIsAttendee" @click="attend" :disabled="loading" class="btn-primary w-full">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-5"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
			/>
		</svg>

		Attend
	</button>
	<button @click="leave" v-else :disabled="loading" class="btn-danger w-full">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-5"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
			/>
		</svg>

		Not Going
	</button>
	<button class="btn-secondary w-full">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-5"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
			/>
		</svg>

		Save
	</button>
</template>
