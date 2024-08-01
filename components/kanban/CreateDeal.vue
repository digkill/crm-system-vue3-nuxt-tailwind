<script setup lang="ts">
import {useMutation} from "@tanstack/vue-query";
import {defineProps} from 'vue'
import {COLLECTION_DEALS, DB_ID} from "~/env";
import type {DealInterface} from "~/types/deals.types";
import {useForm} from "vee-validate";
import {DB} from "~/lib/appwrite";
import {ID} from "appwrite";

const isOpenForm = ref<boolean>(false)

interface DealFormStateInterface extends Pick<DealInterface, "name" | 'price'>
{
  customer: {
    email: string,
    name: string,
  },
  status: string,
}

const props = defineProps({
  status: {
    type: String,
    default: '',
    required: true,
  },
  refetch: {
    type: Function,
  }
})

const { handleSubmit, defineField, handleReset } = useForm<DealFormStateInterface>({
  initialValues: {
    status: props.status,
  }
})

const [name, nameAttrs] = defineField('name')
const [price, priceAttrs] = defineField('price')
const [customerEmail, customerEmailAttrs] = defineField('customer.email')
const [customerName, customerNameAttrs] = defineField('customer.name')

const { mutate, isPending } = useMutation({
  mutationKey: ['create a new deal'],
  mutationFn: (data: DealFormStateInterface) =>
      DB.createDocument(DB_ID, COLLECTION_DEALS, ID.unique(), data),
  onSuccess() {
    props.refetch && props.refetch()
    handleReset()
  },
})

const onSubmit = handleSubmit(values => {
  mutate(values)
})
</script>

<template>
  <div class="text-center mb-2">
    <button
        class="transition-all opacity-40 hover:opacity-100 hover:text-[#ea580c]"
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
  <form v-if="isOpenForm" @submit="onSubmit" class="form">
    <UIInput
        placeholder="Name"
        v-model="name"
        v-bind="nameAttrs"
        type="text"
        class="input"
    />
    <UIInput
        placeholder="Ammount"
        v-model="price"
        v-bind="priceAttrs"
        type="text"
        class="input"
    />
    <UIInput
        placeholder="Email"
        v-model="customerEmail"
        v-bind="customerEmailAttrs"
        type="text"
        class="input"
    />
    <UIInput
        placeholder="Company"
        v-model="customerName"
        v-bind="customerNameAttrs"
        type="text"
        class="input"
    />

    <button class="btn" :disabled="isPending">
      {{ isPending ? 'Loading...' : 'Add' }}
    </button>
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
