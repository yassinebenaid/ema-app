<script setup lang="ts">
import PathBar from '@/components/PathBar.vue'
import Sidebar from './Partials/Sidebar.vue'
</script>

<template>
	<div class="w-full h-screen flex">
		<Sidebar />

		<main class="w-full flex p-2">
			<header>
				<PathBar :segments="['Events']" />
			</header>
		</main>
	</div>
</template>
