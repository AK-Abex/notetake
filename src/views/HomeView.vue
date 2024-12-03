<template>
  <div class="container p-6">
    <h1 class="text-2xl font-bold mb-4 flex items-center">
      Documents

      <Button variant="outline" class="ml-auto" @click="handleNewNote"
        >New Document</Button
      >
    </h1>
    <!-- Your page content here -->
    <div class="flex flex-wrap gap-4">
      <template v-for="note in notes" :key="note.id">
        <div
          class="border p-4 rounded-md mb-4 max-w-[200px] w-full cursor-pointer"
          @click="router.push(`/document/${note.id}`)"
        >
          <h2 class="text-lg font-bold">{{ note.title }}</h2>
          <p class="text-xs text-gray-500 truncate">
            {{ note.content }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import PocketBase from "pocketbase";
const notes = ref([]);
const loading = ref(false);
const router = useRouter();

const pb = new PocketBase(import.meta.env.VITE_PB_URL);

const fetchNotes = async () => {
  const notesData = await pb.collection("docs").getFullList();
  notes.value = notesData;
};

const handleNewNote = async () => {
  const note = await pb.collection("docs").create({
    title: "New Document",
    content: "New Document Content",
    created_by: pb.authStore.model?.id,
  });

  router.push(`/document/${note.id}`);
};

onMounted(() => {
  console.log("HomeView mounted");
  const user = pb.authStore.isValid;
  console.log("Auth status:", user);

  fetchNotes();
});
</script>

<style lang="scss" scoped></style>
