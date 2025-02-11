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
			<!-- <div class="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
				<li class="text-gray-500 hover:text-indigo-600" v-for="(item, idx) in navigation" :key="idx">
					<a :href="item.path" v-text="item.title"></a>
				</li>
			</div> -->
			<li class="order-2 py-5 md:py-0">
				<RouterLink
					:to="{ name: 'login' }"
					class="py-2 px-5 rounded-lg font-bold text-center text-indigo-600 hover:bg-gray-100 active:bg-gray-200 duration-150 block md:py-3 md:inline"
				>
					Get started
				</RouterLink>
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
						:to="{ name: 'login' }"
						class="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
					>
						Let's get started
					</RouterLink>
				</div>
			</div>
			<div class="flex-none mt-14 md:mt-0 md:max-w-xl">
				<img
					src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
					class="md:rounded-tl-[108px]"
					alt=""
				/>
			</div>
		</div>
	</section>

	<section class="py-14">
		<div class="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
			<div class="max-w-2xl mx-auto">
				<h3 class="text-gray-800 text-3xl font-semibold sm:text-4xl">The fastest way to launch a product</h3>
				<p class="mt-3">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius,
					enim ex faucibus purus.
				</p>
			</div>
			<div class="mt-12">
				<ul class="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
					<li v-for="(item, index) in features" :key="index" class="space-y-3">
						<div
							class="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center"
						>
							<!-- SVG Icon will be inserted here -->
							<component :is="item.icon"></component>
						</div>
						<h4 class="text-lg text-gray-800 font-semibold">
							{{ item.title }}
						</h4>
						<p>
							{{ item.desc }}
						</p>
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
					<p>Nulla auctor metus vitae lectus iaculis, vel euismod massa efficitur.</p>
					<div class="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
						<a
							href="javascript:void(0)"
							class="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
						>
							Let's get started
						</a>
						<a
							href="javascript:void(0)"
							class="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
						>
							Get access
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
								<path
									fillRule="evenodd"
									d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</div>
				</div>
				<div class="mt-10 py-10 border-t items-center justify-between sm:flex">
					<p>© 2022 Float UI Inc. All rights reserved.</p>
					<ul class="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
						<li
							v-for="(item, idx) in footerNavs"
							:key="idx"
							class="text-gray-800 hover:text-gray-500 duration-150"
						>
							<a :href="item.href">{{ item.name }}</a>
						</li>
					</ul>
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
			features: [
				{
					icon: '',
					title: 'Fast Refresh',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',
				},
				{
					icon: '',
					title: 'Analytics',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',
				},
				{
					icon: '',
					title: 'Datacenter security',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',
				},
				{
					icon: '',
					title: 'Build on your terms',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',
				},
				{
					icon: '',
					title: 'Safe to use',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',
				},
				{
					icon: '',
					title: 'Flexible',
					desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.',
				},
			],
			footerNavs: [
				{ href: 'javascript:void()', name: 'Terms' },
				{ href: 'javascript:void()', name: 'License' },
				{ href: 'javascript:void()', name: 'Privacy' },
				{ href: 'javascript:void()', name: 'About us' },
			],
			isOpen: false,
			navigation: [
				{ title: 'Partners', path: 'javascript:void(0)' },
				{ title: 'Customers', path: 'javascript:void(0)' },
				{ title: 'Team', path: 'javascript:void(0)' },
			],
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
