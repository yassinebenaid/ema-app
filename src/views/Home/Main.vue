<script setup lang="ts">
import Layout from '../Layout.vue'

const tableItems = [
	{
		name: 'Solo learn app',
		date: 'Oct 9, 2023',
		status: 'Active',
		plan: 'Monthly subscription',
	},
	{
		name: 'Window wrapper',
		date: 'Oct 12, 2023',
		status: 'Active',
		plan: 'Monthly subscription',
	},
	{
		name: 'Unity loroin',
		date: 'Oct 22, 2023',
		status: 'Archived',
		plan: 'Annually subscription',
	},
	{
		name: 'Background remover',
		date: 'Jan 5, 2023',
		status: 'Active',
		plan: 'Monthly subscription',
	},
	{
		name: 'Colon tiger',
		date: 'Jan 6, 2023',
		status: 'Active',
		plan: 'Annually subscription',
	},
]
</script>

<template>
	<Layout>
		<div class="flex items-center justify-between">
			<h1 class="text-2xl font-bold">Events</h1>
			<div>
				<button class="text-xs flex items-center gap-2 bg-primary text-white p-2 rounded-md">
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

		<div class="max-w-screen-xl mx-auto">
			<div class="mt-8 rounded relative h-max overflow-auto">
				<table class="w-full table-auto text-sm text-left">
					<thead class="text-gray-600 bg-stone-50 text-xs font-medium border-b">
						<tr>
							<th class="p-2">Title</th>
							<th class="p-2">Date</th>
							<th class="p-2">Attendees</th>
							<th class="p-2">Location</th>
							<th class="p-2"></th>
						</tr>
					</thead>
					<tbody class="text-gray-600 divide-y">
						<tr v-for="(item, idx) in tableItems" :key="idx">
							<td class="pr-6 py-4 whitespace-nowrap">{{ item.name }}</td>
							<td class="pr-6 py-4 whitespace-nowrap">{{ item.date }}</td>
							<td class="pr-6 py-4 whitespace-nowrap">
								<span
									:class="`px-3 py-2 rounded-full font-semibold text-xs ${
										item.status === 'Active' ? 'text-green-600 bg-green-50' : 'text-blue-600 bg-blue-50'
									}`"
									>{{ item.status }}</span
								>
							</td>
							<td class="pr-6 py-4 whitespace-nowrap">{{ item.plan }}</td>
							<td class="text-right whitespace-nowrap">
								<a
									href="javascript:void(0)"
									class="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg"
									>Manage</a
								>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</Layout>
</template>
