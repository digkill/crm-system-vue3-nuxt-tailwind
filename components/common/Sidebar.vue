<script lang="ts" setup>
import {useAuthStore, useIsLoadingStore} from "~/store/auth.store"
import {account} from "~/lib/appwrite"

const store = useAuthStore();
const isLoadingStore = useIsLoadingStore()
const router = useRouter()

const logout = async () => {
  isLoadingStore.set({isLoading: true})
  await account.deleteSessions('current')
  store.clear()
  await router.push('/login')
  isLoadingStore.set({isLoading: false})
}

</script>
<template>
  <aside class="sidebar px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-15 block">
      <NuxtImg src="/logo.svg" alt="" width="100px" class="mx-auto mb-1"/>
    </NuxtLink>
    <button
        class="absolute top-2 right-3 transition-colors hover:text-red-500"
        @click="logout">
      <!-- line-md:logout -->
      <Icon name="line-md:logout" size="32"/>
    </button>
    <CommonMenu/>
  </aside>
</template>