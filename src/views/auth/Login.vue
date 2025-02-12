<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
	<div class="flex-1 flex items-center justify-center h-screen">
		<div class="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
			<div class="">
				<RouterLink :to="{ name: 'welcome' }" class="text-3xl lg:hidden open-sans-brand"> Wanna </RouterLink>
				<div class="mt-5 space-y-2">
					<h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">Login</h3>
					<p class="">
						You don't have an account?
						<RouterLink :to="{ name: 'register' }" class="font-medium text-indigo-600 hover:text-indigo-500">
							Create one
						</RouterLink>
					</p>
				</div>
			</div>
			<form class="space-y-5">
				<div>
					<label class="font-medium">Email</label>
					<input
						type="email"
						required
						class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
					/>
				</div>
				<div>
					<label class="font-medium">Password</label>
					<input
						type="password"
						required
						class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
					/>
				</div>
				<button
					class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
				>
					Login
				</button>
			</form>
		</div>
	</div>
</template>
