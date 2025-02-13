<script setup lang="ts">
import { ref } from 'vue'

const isModalOpen = ref(false)
</script>

<template>
	<div>
		<button
			@click="isModalOpen = true"
			class="text-xs flex items-center gap-2 bg-primary text-white p-2 px-3 rounded-md"
		>
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

		<Teleport to="body">
			<div>
				<Transition name="blur">
					<div
						v-if="isModalOpen"
						class="bg-stone-900/20 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] backdrop-blur-[0.8px] w-screen h-screen fixed top-0 left-0"
					></div>
				</Transition>

				<Transition name="modal">
					<div
						v-if="isModalOpen"
						class="bg-white origin-center divide-y flex flex-col rounded-xl top-[50%] min-h-96 -translate-x-[50%] -translate-y-[50%] w-[50rem] fixed left-[50%]"
					>
						<div class="py-1 px-3 flex items-center justify-between">
							<div class="text-sm">New Event</div>
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

						<div class="flex-1 flex flex-col gap-1 p-3">
							<input
								type="text"
								class="w-full p-2 outline-none focus:bg-stone-50 rounded-lg border border-transparent hover:bg-stone-50 translate-full"
								placeholder="Event Title ..."
							/>

							<div class="grid grid-cols-2">
								<div
									class="flex items-center gap-2 text-sm text-gray-400 hover:bg-stone-100 cursor-pointer transition-all p-2 rounded-lg"
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
											d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
										/>
									</svg>
									Date
								</div>

								<div
									class="flex items-center gap-2 text-xs text-gray-400 hover:bg-stone-100 cursor-pointer transition-all p-2 rounded-lg"
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
											d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
										/>
									</svg>
									Attendees Limit
								</div>
								<div
									class="flex items-center gap-2 text-sm text-gray-400 hover:bg-stone-100 cursor-pointer transition-all p-2 rounded-lg"
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
											d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
										/>
									</svg>
									Location
								</div>
								<div
									class="flex items-center gap-2 text-xs text-gray-400 hover:bg-stone-100 cursor-pointer transition-all p-2 rounded-lg"
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
											d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
										/>
										<path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
									</svg>

									Tags
								</div>
							</div>
							<textarea
								type="text"
								class="w-full text-sm p-2 h-40 outline-none rounded-lg border border-transparent resize-none translate-full"
								placeholder="Event description ..."
							></textarea>
						</div>

						<div class="p-3 flex justify-end gap-3 items-center">
							<button @click="isModalOpen = false" class="btn-secondary !py-2 !text-xs">Cancel</button>
							<button class="btn-primary !py-2 !text-xs">Save</button>
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
	transition-duration: 150ms;
}

.blur-enter-from,
.blur-leave-to {
	opacity: 0;
}

.modal-enter-from,
.modal-leave-to {
	translate: 0 -5%;
	opacity: 0;
}
</style>
