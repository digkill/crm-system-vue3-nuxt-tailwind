<script setup lang="ts">

import type {CardInterface, ColumnInterface} from "~/components/kanban/kanban.types";
import {useKanbanQuery} from "~/components/kanban/useKanbanQuery";
import {convertCurrency} from "~/utils/convertCurrency";
import dayjs from "dayjs";
import {useDealSlideStore} from "~/store/dealSlide.store";
import type {EnumStatus} from "~/types/deals.types";
import {useMutation} from "@tanstack/vue-query";
import {DB} from "~/lib/appwrite";
import {COLLECTION_DEALS, DB_ID} from "~/env";
import {generateColumnStyle} from "~/components/generateGradient";

useSeoMeta({
  title: 'Home | CRM System',
})

const dragCardRef = ref<CardInterface | null>(null)
const sourceColumnRef = ref<ColumnInterface | null>(null)
const {data, isLoading, refetch} = useKanbanQuery()
const store = useDealSlideStore()

type TypeMutationVariables = {
  docId: string
  status?: EnumStatus
}

const {mutate} = useMutation({
  mutationKey: ['move card'],
  mutationFn: ({docId, status}: TypeMutationVariables) =>
      DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, {
        status,
      }),
  onSuccess: () => {
    refetch()
  },
})

function handleDragStart(card: CardInterface, column: ColumnInterface) {
  dragCardRef.value = card
  sourceColumnRef.value = column
}

function handleDragOver(event: DragEvent) {
  event.preventDefault()
}

function handleDrop(targetColumn: ColumnInterface) {
  if (dragCardRef.value && sourceColumnRef.value) {
    mutate({docId: dragCardRef.value.id, status: targetColumn.id})
  }
}

</script>
<template>
  <section class="flex flex-col items-center justify-center min-h-screen px-6 lg:px-8">
    <h1 class="font-bold text-2xl leading-tight mb-10">CRM System by MEDIARISE</h1>
    <div>
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <div class="grid grid-cols-5 gap-16">

          <div
              v-for="(column, index) in data"
              :key="column.id"
              @dragover="handleDragOver"
              @drop="() => handleDrop(column)"
              class="min-h-screen"
          >

            <div class="rounded bg-orange-600 py-1 px-5 mb-2 text-center text-white"
                 :style="generateColumnStyle(index, data?.length)">
              {{ column.name }}
            </div>
            <div>
              <KanbanCreateDeal :refetch="refetch" :status="column.id" />
              <UICard
                  v-for="card in column.items"
                  :key="card.id"
                  class="mb-5"
                  draggable="true"
                  @dragstart="() => handleDragStart(card, column)"
              >
                <UICardHeader role="button" @click="store.set(card)">{{ card.name }}</UICardHeader>
                <UICardDescription class="mt-2 block">{{ convertCurrency(card.price) }}</UICardDescription>
                <UICardContent> Company {{ card.companyName }}</UICardContent>
                <UICardFooter>
                  {{ dayjs(card.$createdAt).format('DD MMMM YYYY') }}
                </UICardFooter>
              </UICard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>