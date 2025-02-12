<script setup lang="ts">
const props = defineProps<{
	label: string
	name: string
	placeholder: string
	required?: boolean
	type?: 'text' | 'email' | 'password'
	error?: string
	autocomplete?: string
	modelValue: null
}>()

const id =
	props.name?.toLowerCase().replace(/[^a-z]/, '') + Date.now().toString(36) + Math.random().toString(36)
</script>

<template>
	<div class="w-full">
		<label :for="id" class="block p-1 text-sm font-medium text-secondary">
			{{ label }} <span v-if="required" class="text-orange-500">*</span>
		</label>
		<input
			:value="modelValue"
			@input=" (e: any) => $emit('update:modelValue',e.target.value)"
			:id="id"
			:placeholder="placeholder"
			:type="type ?? 'text'"
			:required="required"
			:name="name"
			:class="error && 'border-red-300 focus:ring-red-200'"
			:autocomplete="autocomplete ?? 'none'"
			class="w-full px-4 py-2 transition-all border outline-none rounded-lg placeholder:text-tertiary/60"
		/>
	</div>
</template>
