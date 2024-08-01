<script setup lang="ts">
import dayjs from 'dayjs'
import { useDealSlideStore } from '~/store/dealSlide.store'

const store = useDealSlideStore()
</script>

<template>
  <div class="border-border bg-black/20 rounded p-3">
    <div class="uppercase bold text-xl mb-4">About deal</div>
    <KanbanSlideoverLabel label-text="Name">
      <h2>
        {{ store.card?.name }}
      </h2>
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Amount">
      {{ convertCurrency(store.card?.price || 0) }}
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Status">
      <UIBadge variant="outline">
        {{ store.card?.status }}
      </UIBadge>
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Customer">
      {{ store.card?.companyName }}
    </KanbanSlideoverLabel>
    <KanbanSlideoverLabel label-text="Created At">
      {{ dayjs(store.card?.$createdAt).format('DD MMMM YYYY') }}
    </KanbanSlideoverLabel>
  </div>
</template>
