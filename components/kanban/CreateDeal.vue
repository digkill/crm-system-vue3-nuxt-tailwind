<script setup lang="ts">
import {useMutation} from "@tanstack/vue-query";
import {defineProps} from 'vue'
import {COLLECTION_DEALS, DB_ID} from "~/env";
import type {DealInterface} from "~/types/deals.types";

const isOpenForm = ref<boolean>(false)
</script>

<template>
  <div class="text-center mb-2">
    <button
        class="transition-all opacity-5 hover:opacity-100 hover:text-[#ea580c]"
        @click="isOpenForm = !isOpenForm"
    >
      <Icon
          v-if="isOpenForm"
          name="radix-icons:arrow-up"
          class="fade-in-100 fade-out-0"
          size="35"
      />
      <Icon
          v-else
          name="radix-icons:plus-circled"
          class="fade-in-100 fade-out-0"
          size="35"
      />
    </button>
  </div>
  <form>

  </form>
</template>
<style scoped>
.input {
  @apply border-[#ff9354] mb-2 placeholder:text-[#ff9354] focus:border-border transition-colors;
}

.btn {
  @apply text-xs border py-1 px-2 rounded border-[#ff9354] hover:border-[#ff9354] transition-colors text-[#ff9354] hover:text-white;
}

.form {
  @apply mb-3 block;
  animation: show 0.3s ease-in-out;
}

@keyframes show {
  from {
    @apply border-[#a252c83d];
    transform: translateY(-35px);
    opacity: 0.4;
  }

  90% {
    @apply border-[#a252c83d];
  }

  to {
    @apply border-transparent;
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
