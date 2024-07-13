<script lang="ts" setup>
</script>
<template>
  <aside class="sidebar px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-15 block">
      <NuxtImg src="/logo.svg" alt="" width="100px" class="mx-auto mb-1"/>
    </NuxtLink>
    <button class="absolute top-2 right-3 transition-colors hover:text-red-500">
      <!-- line-md:logout -->
      <Icon name="line-md:logout" size="32"/>
    </button>
    <CommonMenu/>
    <UIButton>Send</UIButton>
  </aside>
</template>