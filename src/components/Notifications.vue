<script setup lang="ts">
import useHttp from '@/compose/http'
import useEcho from '@/compose/ws'
import { useAuthStore } from '@/stores/auth'
import type { Notification, Pagination } from '@/types/general'
import moment from 'moment'
import { computed, onMounted, ref } from 'vue'

const isModalOpen = ref(false)

const notifications = ref<Notification[]>([])
const hasUnreadNotifications = computed(() => notifications.value.filter(n => n.readAt == null).length)
const pagination = ref<Pagination>()
let page = 1

const { execute, loading } = useHttp()

const loadNotifications = () => {
	execute({
		config: {
			url: 'notifications',
			method: 'get',
			headers: {
				Authorization: `Bearer ${useAuthStore().token}`,
			},
			params: {
				per_page: 3,
				page: page,
			},
		},
		onSuccess({ data }) {
			notifications.value.push(...data.items)
			pagination.value = data.meta
		},
	})
}

onMounted(() => {
	loadNotifications()

	const user = useAuthStore().user
	useEcho()
		.private('App.Models.User.' + user?.id)
		.notification((notification: Notification) => {
			window.NotificationAlert.play()
			notifications.value.unshift(notification)
		})
})

const loadMore = () => {
	if (page == pagination.value?.lastPage) {
		return
	}
	page++
	loadNotifications()
}

const markNotificationAsRead = (id: string) => {
	isModalOpen.value = false
	execute({
		config: {
			method: 'post',
			url: `notifications/read`,
			data: {
				notificationId: id,
			},
			headers: {
				Authorization: `Bearer ${useAuthStore().token}`,
			},
		},
		onSuccess() {
			notifications.value.forEach(e => {
				if (e.id == id) {
					e.readAt = 'now'
				}
			})
		},
	})
}
</script>

<template>
	<div>
		<button
			@click="isModalOpen = true"
			class="hover:bg-gray-100 relative p-1 rounded-lg active:bg-gray-200 transition-all"
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
			<div v-if="hasUnreadNotifications" class="absolute bg-red-700 rounded-full top-1 left-2 p-1"></div>
		</button>

		<Teleport to="body">
			<div>
				<Transition name="blur">
					<div
						@click="isModalOpen = false"
						v-if="isModalOpen"
						class="bg-stone-900/20 z-10 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] backdrop-blur-[0.8px] w-screen h-screen fixed top-0 left-0"
					></div>
				</Transition>

				<Transition name="modal">
					<div v-if="isModalOpen" class="bg-white z-10 top-0 h-full w-96 rounded-l-xl fixed right-0">
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
						<div class="flex-1 p-2 max-h-full overflow-x-hidden overflow-y-scroll pb-[10rem]">
							<RouterLink
								v-for="notification in notifications"
								:key="notification.id"
								@click="markNotificationAsRead(notification.id)"
								:to="{
									name: 'events.view',
									params: { eventId: notification.data.event.id },
								}"
							>
								<div
									:class="{ 'font-medium  bg-yellow-50/50': !notification.readAt }"
									class="text-sm border-b hover:bg-gray-100 active:bg-gray-50 transition-all p-3 text-gray-500"
								>
									<div>
										<span class="font-medium text-primary">{{ notification.data.attendeeName }}</span> has
										attended your event "<span class="font-medium text-primary">{{
											notification.data.event.title
										}}</span
										>"
									</div>
									<div class="text-xs text-gray-400">
										{{ moment(notification.data.time).fromNow() }}
									</div>
								</div>
							</RouterLink>

							<div v-if="loading" class="grid place-content-center">
								<div class="loader"></div>
							</div>
							<div v-else class="grid place-items-center w-full pt-10">
								<button
									v-if="page != pagination?.lastPage"
									@click="loadMore"
									class="btn-primary !px-2 !text-xs"
								>
									Load More
								</button>
							</div>
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

.loader {
	width: 30px;
	aspect-ratio: 1;
	border-radius: 50%;
	background: radial-gradient(farthest-side, #2646538d 94%, #0000) top/8px 8px no-repeat,
		conic-gradient(#0000 30%, #2646538d);
	-webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
	animation: l13 1s infinite linear;
}
</style>
