<script setup lang="ts">
import Empty from '@/components/Empty.vue'
import useHttp from '@/compose/http'
import { useAuthStore } from '@/stores/auth'
import type User from '@/types/auth'
import type { Event } from '@/types/event'
import { onMounted, ref } from 'vue'

const props = defineProps<{
	event: Event
}>()

const attendees = ref<User[]>()
const { loading, execute } = useHttp()

onMounted(() => {
	execute({
		config: {
			method: 'get',
			url: `events/${props.event.id}/attendees`,
			headers: {
				Authorization: `Bearer ${useAuthStore().token}`,
			},
		},
		onSuccess({ data }) {
			attendees.value = data.items
		},
		onError({ data }) {
			console.error(data)
		},
	})
})
</script>

<template>
	<div v-if="loading" class="w-full h-96 grid place-content-center">
		<div class="loader"></div>
	</div>
	<template v-else>
		<div v-if="attendees?.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
			<div
				v-for="attendee in attendees"
				class="flex items-center border border-transparent gap-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md p-3"
			>
				<div class="w-10 h-10 min-h-10 min-w-10">
					<img
						src="https://randomuser.me/api/portraits/women/79.jpg"
						class="w-full h-full rounded-full border-2 border-white"
					/>
				</div>
				<div>
					<div>{{ attendee.name }}</div>
					<div class="text-xs text-gray-500">{{ attendee.email }}</div>
				</div>
			</div>
		</div>
		<Empty v-else />
	</template>
</template>
