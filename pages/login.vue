<script setup lang="ts">
import {useIsLoadingStore} from "~/store/loading.store"

import {ID} from "appwrite"
import {account} from "~/lib/appwrite"
import {useAuthStore} from "~/store/auth.store";

useSeoMeta({
  title: 'Login | CRM System'
})

console.log('account', account)

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')

const userStore = useAuthStore()
const isLoadingStore = useIsLoadingStore()
const router = useRouter()

const login = async () => {
  isLoadingStore.set({isLoading: true})
  await account.createEmailPasswordSession(emailRef.value, passwordRef.value)
  const response = await account.get()
  if (response) {
    userStore.set({
      email: response.email,
      name: response.name,
      status: response.status,
    })
  }

  clearForm()

  await router.push('/')
  isLoadingStore.set({isLoading: false})

}

function clearForm() {
  emailRef.value= ''
  passwordRef.value= ''
  nameRef.value= ''
}

const register = async () => {
  await account.create(ID.unique(), emailRef.value, passwordRef.value, nameRef.value)
  await login()
}

/* watch(emailRef, () => {
   console.log(emailRef.value)
 })*/
</script>
<template>
  <section class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2x1 font-bold text-center mb-5">Sign In</h1>
      <form>
        <UIInput placeholder="Email" type="email" class="mb-3" v-model="emailRef"/>
        <UIInput placeholder="Password" type="password" class="mb-3" v-model="passwordRef"/>
        <UIInput placeholder="Name" type="name" class="mb-3" v-model="nameRef"/>
        <div class="flex items-center justify-center gap-5">
          <UIButton type='button' @click='login'>Sign In</UIButton>
          <UIButton type='button' @click='register'>Sign Up</UIButton>
        </div>
      </form>
    </div>
  </section>
</template>