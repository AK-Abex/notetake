<template>
  <div class="flex h-screen">
    <SideBar />
    <main class="flex-1 overflow-auto">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
</script>
