<script setup lang="ts">
import { ref } from 'vue'

const isModalOpen = ref(true)
</script>

<template>
	<div>
		<button
			@click="isModalOpen = true"
			class="hover:bg-gray-100 p-1 rounded-lg active:bg-gray-200 transition-all"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-5"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
				/>
			</svg>
		</button>

		<Teleport to="body">
			<div>
				<Transition name="blur">
					<div
						v-if="isModalOpen"
						class="bg-stone-900/20 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] backdrop-blur-[0.8px] w-screen h-screen fixed top-0 left-0"
					></div>
				</Transition>

				<Transition name="modal">
					<div v-if="isModalOpen" class="bg-white top-0 h-full w-96 rounded-l-xl fixed right-0">
						<div class="py-1 px-3 flex items-center justify-between">
							<div class="text-sm">Notifications</div>
							<button
								@click="isModalOpen = false"
								class="hover:bg-slate-50 text-gray-500 p-2 rounded-lg active:bg-stone-100 transition-all"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-6"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
				</Transition>
			</div>
		</Teleport>
	</div>
</template>
<style scoped>
.blur-enter-active,
.blur-leave-active,
.modal-enter-active,
.modal-leave-active {
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 250ms;
}

.blur-enter-from,
.blur-leave-to {
	opacity: 0;
}

.modal-enter-from,
.modal-leave-to {
	transform: translateX(100%);
	opacity: 0;
}
</style>
