<template>
  <div class="flex h-screen">
    <SideBar />
    <main class="flex-1 overflow-auto bg-zinc-100">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
</script>
