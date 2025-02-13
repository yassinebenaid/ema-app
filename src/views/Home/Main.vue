<script setup lang="ts">
import useHttp from '@/compose/http'
import Layout from '../Layout.vue'
import { onMounted, ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
import type { Event } from '@/types/event'
import EventCard from './Partials/EventCard.vue'
import EventCardLoading from './Partials/EventCardLoading.vue'
import Filters from './Partials/Filters.vue'
import { useElementVisibility } from '@vueuse/core'
import type { Pagination } from '@/types/general'
import NewTask from './Partials/NewTask.vue'

const events = ref<Event[]>([])
const pagination = ref<Pagination>()
let page = 1

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
				page: page,
			},
		},
		onSuccess({ data }) {
			events.value.push(...data.items)
			pagination.value = data.meta
		},
	})
}

onMounted(load)

const lazyLoadingElement = ref<HTMLDivElement>()
const lazyLoadingElementIsVisible = useElementVisibility(lazyLoadingElement)

watch(lazyLoadingElementIsVisible, () => {
	if (page == pagination.value?.lastPage) {
		return
	}
	page++
	load()
})
</script>

<template>
	<Layout>
		<div class="flex items-center justify-between">
			<h1 class="text-2xl font-bold">Events</h1>
			<div>
				<NewTask />
			</div>
		</div>

		<div class="py-5">
			<Filters />
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
			<template v-if="loading && !events.length">
				<EventCardLoading v-for="i in 9" :key="i" />
			</template>
			<template v-else>
				<EventCard v-for="event in events" :key="event.id" :event="event" />
			</template>
		</div>
		<div
			v-if="page != pagination?.lastPage"
			ref="lazyLoadingElement"
			class="grid pt-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2"
		>
			<EventCardLoading v-for="i in 3" :key="i" />
		</div>
	</Layout>
</template>
