<template>
  <div class="h-screen w-64 border-r bg-background relative">
    <div class="flex h-full flex-col">
      <div class="flex h-16 items-center px-4">
        <h1 class="text-2xl font-bold">PocketNotes</h1>
      </div>

      <nav class="flex-1 py-4">
        <div class="space-y-1 px-3">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            active-class="bg-accent text-accent-foreground"
          >
            <component :is="item.icon" class="h-5 w-5" />
            {{ item.label }}
          </RouterLink>
        </div>
      </nav>

      <!-- <div class="border-t p-4">
        <Button variant="ghost" class="w-full justify-start">
          <LayoutDashboard class="mr-2 h-4 w-4" />
          Dashboard
        </Button>
      </div> -->

      <Button
        class="rounded-full absolute bottom-4 right-4"
        size="icon"
        @click="handleLogout"
      >
        <LucideLogOut class="h-4 w-4" />
      </Button>
    </div>
  </div>
</template>

<script setup>
import {
  LayoutDashboard,
  NotebookPen,
  KeyRound,
  Settings,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_PB_URL);
const router = useRouter();

const navItems = [
  {
    path: "/",
    label: "Notes",
    icon: NotebookPen,
  },
  {
    path: "/passwords",
    label: "Passwords",
    icon: KeyRound,
  },
  {
    path: "/settings",
    label: "Settings",
    icon: Settings,
  },
];

const handleLogout = () => {
  pb.authStore.clear();
  router.push("/login");
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
