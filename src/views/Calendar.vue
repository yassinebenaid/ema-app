<script setup lang="ts">
import { ScheduleXCalendar } from '@schedule-x/vue'
import {
	createCalendar,
	createViewDay,
	createViewMonthAgenda,
	createViewMonthGrid,
	createViewWeek,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import Layout from './Layout.vue'

// Do not use a ref here, as the calendar instance is not reactive, and doing so might cause issues
// For updating events, use the events service plugin
const calendarApp = createCalendar({
	selectedDate: '2023-12-19',
	views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
	events: [],
})
</script>

<template>
	<Layout>
		<div class="flex items-center justify-between pb-6">
			<h1 class="text-2xl font-bold">Calendar</h1>
		</div>

		<ScheduleXCalendar class="w-full" :calendar-app="calendarApp" />
	</Layout>
</template>
