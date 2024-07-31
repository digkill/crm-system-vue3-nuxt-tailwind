<script lang="ts" setup>
import {account} from "~/lib/appwrite"
import {useAuthStore, useIsLoadingStore} from "~/store/auth.store"

const isLoadingStore = useIsLoadingStore();
const store = useAuthStore()
const router = useRouter()

onMounted(async () => {
  try {
    const user = await account.get()
    if (user) store.set(user)
  } catch (error) {
    await router.push('/login')
  } finally {
    isLoadingStore.set({isLoading: false})
  }
})

</script>

<template>
  <CommonLoader v-if="isLoadingStore.isLoading" />
  <section v-else :class="{ grid: store.isAuth }" style="min-height: 100vh">
    <CommonSidebar v-if="store.isAuth"/>
    <div class="container">
      <slot/>
    </div>
  </section>
</template>

<style scoped>
.grid {
/*  min-height: 100vh;*/
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>