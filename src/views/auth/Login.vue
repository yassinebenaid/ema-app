<script setup lang="ts">
import { ref, toValue } from 'vue'
import useHttp from '../../compose/http'
import Input from '../../components/Input.vue'
import { useAuthStore } from '../../stores/auth'
import { useRouter } from 'vue-router'

const form = ref({
	name: null,
	email: null,
	password: null,
})

const auth = useAuthStore()
const router = useRouter()
const { loading, errors, execute } = useHttp()

function register() {
	execute({
		config: {
			url: 'auth/login',
			method: 'post',
			data: toValue(form),
		},
		onSuccess({ data }) {
			auth.setToken(data.token)
			auth.reload().then(() => router.push({ name: 'home' }))
		},
	})
}
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
						<RouterLink :to="{ name: 'register' }" class="font-medium text-primary hover:underline">
							Create one
						</RouterLink>
					</p>
				</div>
			</div>
			<form @submit.prevent="register" class="space-y-5">
				<Input
					v-model="form.email"
					placeholder="ysbenaid@gmail.com"
					name="email"
					label="Email"
					type="email"
					required
				/>

				<Input
					v-model="form.password"
					placeholder="********"
					name="password"
					label="Password"
					type="password"
					required
				/>

				<button :disabled="loading" class="btn-primary w-full">Login</button>
			</form>

			<ul class="text-xs text-red-500">
				<li v-for="(error, index) in errors" :key="index" class="flex items-center gap-2 p-0.5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						fill="currentColor"
						class="bi bi-exclamation-triangle"
						viewBox="0 0 16 16"
					>
						<path
							d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"
						/>
						<path
							d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"
						/></svg
					>{{ error }}
				</li>
			</ul>
		</div>
	</div>
</template>
