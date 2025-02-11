<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
	<main class="w-full flex">
		<div class="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
			<div class="relative z-10 w-full max-w-md">
				<RouterLink :to="{ name: 'welcome' }" class="text-3xl text-white open-sans-brand"> Wanna </RouterLink>
				<div class="mt-16 space-y-3">
					<h3 class="text-white text-3xl font-bold">Make Your Events Matter Instantly</h3>
					<p class="text-gray-300">
						Trusted by 50,000+ event professionals worldwide, with everything you need to plan, manage, and
						create unforgettable events in one seamless platform.
					</p>
					<div class="flex items-center -space-x-2 overflow-hidden">
						<img
							src="https://randomuser.me/api/portraits/women/79.jpg"
							class="w-10 h-10 rounded-full border-2 border-white"
						/>
						<img
							src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
							class="w-10 h-10 rounded-full border-2 border-white"
						/>
						<img
							src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
							class="w-10 h-10 rounded-full border-2 border-white"
						/>
						<img
							src="https://randomuser.me/api/portraits/men/86.jpg"
							class="w-10 h-10 rounded-full border-2 border-white"
						/>
						<img
							src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
							class="w-10 h-10 rounded-full border-2 border-white"
						/>
						<p class="text-sm text-gray-400 font-medium translate-x-5">Join 5.000+ users</p>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-0 my-auto h-[500px]"
				style="
					background: linear-gradient(
						152.92deg,
						rgba(192, 132, 252, 0.2) 4.54%,
						rgba(232, 121, 249, 0.26) 34.2%,
						rgba(192, 132, 252, 0.1) 77.55%
					);
					filter: blur(118px);
				"
			></div>
		</div>
		<RouterView />
	</main>
</template>
