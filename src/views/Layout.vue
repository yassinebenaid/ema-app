<script setup lang="ts">
import PathBar from '@/components/PathBar.vue'

import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const logout = () => {
	auth.logout()
	router.push({ name: 'login' })
}
</script>

<template>
	<div class="w-full h-screen flex">
		<aside class="bg-stone-50 border-r border-stone-200 w-80 flex flex-col justify-between">
			<RouterLink :to="{ name: 'welcome' }" class="text-2xl open-sans-brand p-2"> Wanna </RouterLink>

			<ul class="flex-1 flex flex-col gap-1 p-3 text-sm text-primary/70 font-medium">
				<li>
					<RouterLink
						:to="{ name: 'home' }"
						class="flex active:bg-stone-200 hover:bg-stone-200/50 items-center gap-2 p-2 rounded-lg"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							fill="currentColor"
							class="bi bi-collection"
							viewBox="0 0 16 16"
						>
							<path
								d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z"
							/>
						</svg>
						Events
					</RouterLink>
				</li>
				<li>
					<RouterLink
						:to="{ name: 'login' }"
						class="flex active:bg-stone-200 hover:bg-stone-200/50 items-center gap-2 p-2 rounded-lg"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							fill="currentColor"
							class="bi bi-bookmarks"
							viewBox="0 0 16 16"
						>
							<path
								d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"
							/>
							<path
								d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"
							/>
						</svg>
						My List
					</RouterLink>
				</li>
				<li>
					<RouterLink
						:to="{ name: 'login' }"
						class="flex active:bg-stone-200 hover:bg-stone-200/50 items-center gap-2 p-2 rounded-lg"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							fill="currentColor"
							class="bi bi-calendar-week"
							viewBox="0 0 16 16"
						>
							<path
								d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
							/>
							<path
								d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
							/>
						</svg>
						Calendar
					</RouterLink>
				</li>
			</ul>

			<div class="border-t flex items-center justify-between">
				<div class="flex p-3 items-center gap-2">
					<div>
						<img
							src="https://randomuser.me/api/portraits/women/79.jpg"
							class="w-10 h-10 rounded-full border-2 border-white"
						/>
					</div>
					<div>
						<div>
							{{ auth.user?.name }}
						</div>
						<div class="text-xs text-gray-500">
							{{ auth.user?.email }}
						</div>
					</div>
				</div>
				<div class="grid place-content-center p-3">
					<button @click="logout" class="hover:bg-gray-200 active:bg-gray-100 transition-all p-2 rounded-lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="23"
							height="23"
							fill="currentColor"
							class="bi bi-box-arrow-right"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
							/>
							<path
								fill-rule="evenodd"
								d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</aside>

		<main class="w-full flex flex-col gap-2 p-3">
			<header>
				<PathBar :segments="['Events']" />
			</header>

			<div>
				<slot />
			</div>
		</main>
	</div>
</template>
