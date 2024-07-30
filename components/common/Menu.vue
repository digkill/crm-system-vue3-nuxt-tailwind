<script lang="ts" setup>

import {MENU_ITEMS} from "./menu.items";
</script>
<template>
  <div>
    <NuxtLink
        class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-white hover:shadow transition-all mb-2"
        v-for='item in MENU_ITEMS' :key='item.id' :to='item.link'>
      <Icon :name="item.icon" class="mr-3"/>
      <span>{{ item.name }}</span>
    </NuxtLink>
  </div>
</template>
<style scoped>

</style>