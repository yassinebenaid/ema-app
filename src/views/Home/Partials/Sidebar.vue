<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const user = useAuthStore().user
</script>

<template>
	<aside class="bg-stone-50 border-r border-stone-200 w-80 flex flex-col justify-between">
		<RouterLink :to="{ name: 'welcome' }" class="text-2xl open-sans-brand p-2"> Wanna </RouterLink>

		<div class="border-t p-5">
			<div>
				{{ user.name }}
			</div>
			<div class="text-sm text-gray-500">
				{{ user.email }}
			</div>
		</div>
	</aside>
</template>
