<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_CUSTOMERS, DB_ID } from '~/env'
import type { CustomerInterface } from '~/types/deals.types'
import {DB} from "~/lib/appwrite";

useSeoMeta({
	title: 'Customers | CRM System',
})

const { data: customers, isLoading } = useQuery({
	queryKey: ['customers'],
	queryFn: () => DB.listDocuments(DB_ID, COLLECTION_CUSTOMERS),
})
</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">Our customers</h1>
		<div v-if="isLoading">Loading...</div>
		<UITable v-else>
			<UITableHeader>
				<UITableRow>
					<UITableHead class="w-[200px]">Image</UITableHead>
					<UITableHead class="w-[300px]">Name</UITableHead>
					<UITableHead class="w-[200px]">Email</UITableHead>
					<UITableHead>Source</UITableHead>
				</UITableRow>
			</UITableHeader>
			<UITableBody>
				<UITableRow
					v-for="customer in (customers?.documents as unknown as CustomerInterface[])"
					:key="customer.$id"
				>
					<UITableCell>
						<NuxtLink :href="`/customers/edit/${customer.$id}`">
							<NuxtImg
								:src="customer.avatar"
								:alt="customer.name"
								width="50"
								height="50"
								class="rounded-full"
							/>
						</NuxtLink>
					</UITableCell>
					<UITableCell class="font-medium">
						{{ customer.name }}
					</UITableCell>
					<UITableCell>{{ customer.email }}</UITableCell>
					<UITableCell>{{ customer.source }}</UITableCell>
				</UITableRow>
			</UITableBody>
		</UITable>
	</div>
</template>
