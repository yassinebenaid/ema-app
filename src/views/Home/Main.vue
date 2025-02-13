<script setup lang="ts">
import useHttp from '@/compose/http'
import Layout from '../Layout.vue'
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import type { Event } from '@/types/event'

const events = ref<Event[]>([])

const { execute, loading } = useHttp()

const load = () => {
	execute({
		config: {
			url: 'events',
			method: 'get',
			headers: {
				Authorization: `Bearer ${useAuthStore().token}`,
			},
			params: {
				per_page: 18,
			},
		},
		onSuccess({ data }) {
			events.value = data.items
		},
	})
}

onMounted(load)
</script>

<template>
	<Layout>
		<div class="flex items-center justify-between">
			<h1 class="text-2xl font-bold">Events</h1>
			<div>
				<button class="text-xs flex items-center gap-2 bg-primary text-white p-2 px-3 rounded-md">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-4"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
					</svg>
					Add event
				</button>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-2">
			<template v-if="loading && !events.length">
				<div v-for="i in 9" :key="i" class="flex flex-col gap-2 animate-pulse border rounded-md p-3">
					<div class="text-sm bg-stone-200/50 animate-pulse p-3 rounded-xl"></div>
					<div class="flex items-center gap-2">
						<div class="text-sm bg-stone-200/50 animate-pulse p-3 rounded-xl"></div>

						<div class="text-sm bg-stone-200/50 animate-pulse p-2 w-[50%] rounded-xl"></div>
					</div>
					<div class="flex items-center gap-2">
						<div class="text-sm bg-stone-200/50 animate-pulse p-3 rounded-xl"></div>

						<div class="text-sm bg-stone-200/50 animate-pulse p-2 w-[50%] rounded-xl"></div>
					</div>
					<div class="flex items-center gap-2">
						<div class="text-sm bg-stone-200/50 animate-pulse p-3 rounded-xl"></div>

						<div class="text-sm bg-stone-200/50 animate-pulse p-2 w-[50%] rounded-xl"></div>
					</div>
					<div class="flex items-center gap-2">
						<div class="text-sm bg-stone-200/50 animate-pulse p-3 rounded-xl"></div>
						<div class="text-sm bg-stone-200/50 animate-pulse p-3 rounded-xl"></div>
						<div class="text-sm bg-stone-200/50 animate-pulse p-3 rounded-xl"></div>
						<div class="text-sm bg-stone-200/50 animate-pulse p-3 rounded-xl"></div>

						<div class="text-sm bg-stone-200/50 animate-pulse p-2 w-[30%] rounded-xl"></div>
					</div>
				</div>
			</template>
			<template v-else>
				<div
					v-for="event in events"
					:key="event.id"
					class="flex flex-col gap-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md p-3"
				>
					<div class="text-sm">{{ event.title }}</div>
					<div class="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-4 text-gray-400"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
							/>
						</svg>

						<span class="text-xs text-gray-500">{{ event.date }}</span>
					</div>
					<div class="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-4 text-gray-400"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
							/>
						</svg>

						<span class="text-xs text-gray-500"> {{ event.location }}</span>
					</div>
					<div class="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-4 text-gray-400"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
							/>
						</svg>

						<div class="flex items-center -space-x-2 overflow-hidden">
							<img
								src="https://randomuser.me/api/portraits/women/79.jpg"
								class="size-6 rounded-full border-2 border-white"
							/>
							<p class="text-xs text-gray-400 pl-3">{{ event.user.name }}</p>
						</div>
					</div>
					<div class="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-4 text-gray-400"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
							/>
						</svg>

						<div class="flex items-center -space-x-2 overflow-hidden">
							<img
								src="https://randomuser.me/api/portraits/women/79.jpg"
								class="size-6 rounded-full border-2 border-white"
							/>
							<img
								src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
								class="size-6 rounded-full border-2 border-white"
							/>
							<img
								src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
								class="size-6 rounded-full border-2 border-white"
							/>
							<img
								src="https://randomuser.me/api/portraits/men/86.jpg"
								class="size-6 rounded-full border-2 border-white"
							/>
							<p class="text-xs text-gray-400 pl-3">+5K attendees</p>
						</div>
					</div>
				</div>
			</template>
		</div>
	</Layout>
</template>
