<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query'
import { COLLECTION_CUSTOMERS, DB_ID, STORAGE_ID } from '~/env'
import type { CustomerInterface } from '~/types/deals.types'
import {DB, storage} from "~/lib/appwrite";
import {ID} from "appwrite";

interface InputFileEvent extends Event {
	target: HTMLInputElement
}

interface CustomerFormStateInterface
	extends Pick<CustomerInterface, 'avatar' | 'email' | 'name' | 'source'> {}

useSeoMeta({
	title: `Edit company`,
})

const route = useRoute()
const customerId = route.params.id as string

const { handleSubmit, defineField, setFieldValue, setValues, values } =
	useForm<CustomerFormStateInterface>()

const { data, isSuccess } = useQuery({
	queryKey: ['get customer', customerId],
	queryFn: () => DB.getDocument(DB_ID, COLLECTION_CUSTOMERS, customerId),
})

watch(isSuccess, () => {
	const initialData = data.value as unknown as CustomerFormStateInterface
	setValues({
		email: initialData.email,
    avatar: initialData.avatar || '',
    source: initialData.source || '',
		name: initialData.name,
	})
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [fromSource, fromSourceAttrs] = defineField('source')

const { mutate, isPending } = useMutation({
	mutationKey: ['update customer', customerId],
	mutationFn: (data: CustomerFormStateInterface) =>
		DB.updateDocument(DB_ID, COLLECTION_CUSTOMERS, customerId, data),
})

const { mutate: uploadImage, isPending: isUploadImagePending } = useMutation({
	mutationKey: ['upload image'],
	mutationFn: (file: File) => storage.createFile(STORAGE_ID, ID.unique(), file),
	onSuccess(data) {
		const response = storage.getFileDownload(STORAGE_ID, data.$id)
		setFieldValue('avatar', response.href)
	},
})

const onSubmit = handleSubmit(values => {
	mutate(values)
})
</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">
			Редактирование {{ (data as unknown as CustomerFormStateInterface)?.name }}
		</h1>

		<form @submit="onSubmit" class="form">
			<UIInput
				placeholder="Name"
				v-model="name"
				v-bind="nameAttrs"
				type="text"
				class="input"
			/>

			<UIInput
				placeholder="Email"
				v-model="email"
				v-bind="emailAttrs"
				type="text"
				class="input"
			/>
			<UIInput
				placeholder="Source"
				v-model="fromSource"
				v-bind="fromSourceAttrs"
				type="text"
				class="input"
			/>

			<img
				v-if="values.avatar || isUploadImagePending"
				:src="values.avatar"
				alt=""
				width="50"
				height="50"
				class="rounded-full my-4"
			/>
			<div class="grid w-full max-w-sm items-center gap-1.5 input">
				<label>
					<div class="text-sm mb-2">Logo</div>
					<UIInput
						type="file"
						:onchange="(e:InputFileEvent) => e?.target?.files?.length && uploadImage(e.target.files[0])"
						:disabled="isUploadImagePending"
            class="border-[#ea580c]"
					/>
				</label>
			</div>

			<UIButton :disabled="isPending" variant="secondary" class="mt-3 bg-orange-600 text-white">
				{{ isPending ? 'Loading...' : 'Save' }}
			</UIButton>
		</form>
	</div>
</template>

<style scoped>
.input {
	@apply border-[#ea580c] mb-4 placeholder:text-[#ea580c] focus:border-border transition-colors;
}
</style>
