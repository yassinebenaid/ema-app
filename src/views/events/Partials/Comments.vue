<script setup lang="ts">
import type { Event } from '@/types/event'

defineProps<{
	event: Event
}>()
</script>

<template>
	<div class="relative">
		<div class="flex-1 max-h-full overflow-hidden">
			<div v-for="(_, index) in 3" :key="index" class="flex items-center gap-2 p-1">
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
	</div>
</template>
