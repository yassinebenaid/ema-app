<script setup lang="ts">
import type { Event } from '@/types/event'

defineProps<{
	event: Event
}>()
</script>

<template>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
		<div
			v-for="i in 10"
			class="flex items-center border border-transparent gap-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md p-3"
		>
			<div class="w-10 h-10 min-h-10 min-w-10">
				<img
					src="https://randomuser.me/api/portraits/women/79.jpg"
					class="w-full h-full rounded-full border-2 border-white"
				/>
			</div>
			<div>
				<div>Yassine benaid</div>
				<div class="text-xs text-gray-500">yassine@benaid.com</div>
			</div>
		</div>
	</div>
</template>
