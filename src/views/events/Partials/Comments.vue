<script setup lang="ts">
import useHttp from '@/compose/http'
import { useAuthStore } from '@/stores/auth'
import type User from '@/types/auth'
import type { Event } from '@/types/event'
import { onMounted, ref } from 'vue'

const props = defineProps<{
	event: Event
}>()

const showCommentInput = ref(false)
// const attendees = ref<User[]>()
// const { loading, execute } = useHttp()

// onMounted(() => {
// 	execute({
// 		config: {
// 			method: 'get',
// 			url: `events/${props.event.id}/attendees`,
// 			headers: {
// 				Authorization: `Bearer ${useAuthStore().token}`,
// 			},
// 		},
// 		onSuccess({ data }) {
// 			attendees.value = data.items
// 		},
// 		onError({ data }) {
// 			console.error(data)
// 		},
// 	})
// })
</script>

<template>
	<div class="relative">
		<div class="flex-1 max-h-full overflow-hidden">
			<div v-for="(item, index) in 20" :key="index" class="flex items-center gap-2 p-1">
				<div class="flex gap-2 justify-start items-start">
					<div class="w-1 h-1 min-h-10 min-w-10">
						<img
							src="https://randomuser.me/api/portraits/women/79.jpg"
							class="w-full h-full rounded-full border-2 border-white"
						/>
					</div>
					<div class="bg-slate-100 p-2 rounded-lg">
						<div class="flex items-center gap-1 text-xs">
							<div class="font-medium">yassinebenaid</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="10"
								fill="currentColor"
								class="bi bi-dot"
								viewBox="0 0 16 16"
							>
								<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
							</svg>
							<div class="text-gray-500">1 hour ago</div>
						</div>
						<div class="text-sm w-max">Foobar</div>
					</div>
				</div>
			</div>
		</div>
		<div class="fixed bottom-24 right-10">
			<button @click="showCommentInput = true" class="rounded-lg bg-primary p-2 text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
					/>
				</svg>
			</button>
		</div>
		<div
			v-if="showCommentInput"
			class="fixed rounded-t-md z-10 bottom-0 right-0 items-center bg-white w-[30rem] p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
		>
			<button
				@click="showCommentInput = false"
				class="bg-white absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] rounded-full p-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-4"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</button>
			<div class="flex flex-col bg-slate-100 w-full p-1 rounded-lg text-sm">
				<textarea
					placeholder="write a comment..."
					class="w-full bg-transparent resize-none rounded-lg outline-none p-2"
				></textarea>
				<div class="flex items-center justify-end">
					<button class="text-slate-500 px-3 py-2">
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
								d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
