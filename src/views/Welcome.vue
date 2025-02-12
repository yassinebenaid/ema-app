<template>
	<nav class="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
		<div class="flex justify-between">
			<RouterLink :to="{ name: 'welcome' }" class="text-2xl open-sans-brand"> Wanna </RouterLink>
			<button class="text-gray-500 outline-none md:hidden" @click="toggleMenu">
				<template v-if="isOpen">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</template>
				<template v-else>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</template>
			</button>
		</div>
		<ul
			:class="isOpen ? 'absolute inset-x-0 px-4 border-b bg-white md:border-none md:static' : 'hidden'"
			class="flex-1 justify-end mt-12 md:text-sm md:font-medium md:flex md:mt-0"
		>
			<li class="order-2 py-5 md:py-0">
				<RouterLink :to="{ name: 'home' }" class="btn-secondary"> Get started </RouterLink>
			</li>
		</ul>
	</nav>
	<section class="py-28">
		<div
			class="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8"
		>
			<div class="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
				<h2 class="text-4xl text-gray-800 font-extrabold md:text-5xl">
					Transform Events into Opportunities Fast
				</h2>
				<p>
					Everything you need to plan, manage, and deliver remarkable events in one intuitive platform. Join
					50,000+ event professionals who've already transformed their business.
				</p>
				<div class="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
					<RouterLink
						:to="{ name: 'home' }"
						class="block py-2 px-4 text-center text-white font-medium bg-primary duration-150 hover:opacity-90 active:opacity-80 rounded-lg shadow-lg hover:shadow-none"
					>
						Let's get started
					</RouterLink>
				</div>
			</div>
			<div class="flex-none mt-14 md:mt-0 md:max-w-xl">
				<img src="../assets/community.png" class="md:rounded-tl-[108px]" alt="" />
			</div>
		</div>
	</section>

	<section class="py-14">
		<div class="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
			<div class="max-w-2xl mx-auto">
				<h3 class="text-gray-800 text-3xl font-semibold sm:text-4xl">
					The fastest way to take your events from concept to celebration
				</h3>
				<p class="mt-3">Everything you need to succeed. A bunch of batteries out of the box. Just for you</p>
			</div>
			<div class="mt-12">
				<ul class="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
					<li class="space-y-3">
						<div
							class="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-alarm"
								viewBox="0 0 16 16"
							>
								<path
									d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"
								/>
								<path
									d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"
								/>
							</svg>
						</div>
						<h4 class="text-lg text-gray-800 font-semibold">Realtime Experience</h4>
						<p>There is no time to refresh. Your events are more important.</p>
					</li>
					<li class="space-y-3">
						<div
							class="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-crosshair2"
								viewBox="0 0 16 16"
							>
								<path
									d="M8 0a.5.5 0 0 1 .5.5v.518A7 7 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7 7 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7 7 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7 7 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0m-.5 2.02A6 6 0 0 0 2.02 7.5h1.005A5 5 0 0 1 7.5 3.025zm1 1.005A5 5 0 0 1 12.975 7.5h1.005A6 6 0 0 0 8.5 2.02zM12.975 8.5A5 5 0 0 1 8.5 12.975v1.005a6 6 0 0 0 5.48-5.48zM7.5 12.975A5 5 0 0 1 3.025 8.5H2.02a6 6 0 0 0 5.48 5.48zM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
								/>
							</svg>
						</div>
						<h4 class="text-lg text-gray-800 font-semibold">Communication Hub</h4>
						<p>Automated email confirmations and reminders coming to your inbox.</p>
					</li>
					<li class="space-y-3">
						<div
							class="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-activity"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"
								/>
							</svg>
						</div>
						<h4 class="text-lg text-gray-800 font-semibold">History</h4>
						<p>Past is what dictates the future. You will never forget history anymore.</p>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<div>
		<footer class="pt-10">
			<div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
				<div class="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
					<RouterLink :to="{ name: 'welcome' }" class="text-3xl open-sans-brand"> Wanna </RouterLink>
					<p>Your all in one event management plaform.</p>
					<div class="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
						<RouterLink :to="{ name: 'home' }" class="btn-primary"> Let's get started </RouterLink>
					</div>
				</div>
				<div class="mt-10 py-10 border-t items-center justify-center sm:flex">
					<p>© 2022 Float UI Inc. All rights reserved.</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import { ref } from 'vue'
export default {
	data: function () {
		return {
			isOpen: false,
		}
	},
	methods: {
		toggleMenu() {
			this.isOpen = !this.isOpen
		},
	},
	setup() {
		let open = ref(false)
		function menuOpen() {
			open.value = !open.value
		}
		return { open, menuOpen }
	},
}
</script>
