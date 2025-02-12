<script setup lang="ts">
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
	<aside class="bg-stone-50 border-r border-stone-200 w-80 flex flex-col justify-between">
		<RouterLink :to="{ name: 'welcome' }" class="text-2xl open-sans-brand p-2"> Wanna </RouterLink>

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
</template>
