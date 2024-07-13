<script lang="ts" setup>
console.log('Loading layouts...')
</script>

<template>
  <section class="grid">
    <CommonSidebar />
    <div class="container">
      <slot/>
    </div>
  </section>
</template>

<style scoped>
.grid {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>