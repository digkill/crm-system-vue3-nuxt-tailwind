<script setup lang="ts">

import type {CardInterface, ColumnInterface} from "~/components/kanban/kanban.types";
import {useKanbanQuery} from "~/components/kanban/useKanbanQuery";

useSeoMeta({
  title: 'Home | CRM System',
})

const dragCardRef = ref<CardInterface | null>(null)
const sourceColumnRef = ref<ColumnInterface | null>(null)
useKanbanQuery()

</script>
<template>
  <section class="flex flex-col items-center justify-center min-h-screen px-6 lg:px-8">
    <h1 class="font-bold text-2xl leading-tight mb-10">
      CRM System by MEDIARISE
    </h1>
    <div>
      <UICard class="mb-3" draggable="true">
        <UICardHeader role="button">Name card</UICardHeader>
        <UICardContent> Company </UICardContent>
        <UICardFooter> Date </UICardFooter>
      </UICard>
    </div>
  </section>
</template>