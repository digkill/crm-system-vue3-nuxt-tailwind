<script setup lang="ts">
  useHead({
    title: 'Login'
  })
</script>
<template>
  <section class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2x1 font-bold text-center mb-5">Sign In</h1>

      <form>

        <UIInput placeholder="Email" type="email" class="mb-3"/>
      </form>
    </div>
  </section>
</template>