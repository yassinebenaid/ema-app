<script setup lang="ts">
import { ref, toValue } from 'vue'
import useHttp from '../../compose/http'

const form = ref({
	name: null,
	email: null,
	password: null,
})

function register() {
	useHttp({
		url: 'auth/register',
		method: 'post',
		data: toValue(form),
	})
}
</script>

<template>
	<div class="flex-1 flex items-center justify-center h-screen">
		<div class="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
			<div class="">
				<img src="https://floatui.com/logo.svg" width="150" class="lg:hidden" />
				<div class="mt-5 space-y-2">
					<h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">Register</h3>
					<p class="">
						Already have an account?
						<RouterLink :to="{ name: 'login' }" class="font-medium text-indigo-600 hover:text-indigo-500">
							Log in
						</RouterLink>
					</p>
				</div>
			</div>

			<form @submit.prevent="register" class="space-y-5">
				<div>
					<label class="font-medium">Name</label>
					<input
						v-model="form.name"
						type="text"
						required
						class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
					/>
				</div>
				<div>
					<label class="font-medium">Email</label>
					<input
						v-model="form.email"
						type="email"
						required
						class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
					/>
				</div>
				<div>
					<label class="font-medium">Password</label>
					<input
						v-model="form.password"
						type="password"
						required
						class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
					/>
				</div>
				<button
					class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
				>
					Create account
				</button>
			</form>
		</div>
	</div>
</template>
