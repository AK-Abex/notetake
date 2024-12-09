<template>
  <div class="container p-6 flex flex-col gap-2" v-if="!loading">
    <EditableTitle v-model="title" />

    <div class="">
      <!-- <Label for="content">Content</Label> -->
      <!-- <Textarea v-model="content" placeholder="Content" /> -->
      <TipTapEditor v-model="content" @update:rawText="rawText = $event" />
    </div>
    <Button
      :disabled="saving"
      @click="saveDocument"
      class="fixed bottom-4 right-4 z-10"
      size="icon"
    >
      <LucideSave class="w-4 h-4" v-if="!saving" />
      <LucideLoader2 class="w-4 h-4 animate-spin" v-else />
    </Button>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import PocketBase from "pocketbase";

const title = ref("");
const content = ref("");
const rawText = ref("");
const loading = ref(true);
const saving = ref(false);
const route = useRoute();
const router = useRouter();
const pb = new PocketBase(import.meta.env.VITE_PB_URL);

const fetchDocument = async () => {
  const document = await pb.collection("docs").getOne(route.params.id);
  title.value = document.title;
  content.value = document.content;
  loading.value = false;
};

const debouncedSave = useDebounceFn(() => {
  saveDocument();
}, 1000);

watch(content, () => {
  debouncedSave();
});

const saveDocument = async () => {
  saving.value = true;
  await pb.collection("docs").update(route.params.id, {
    title: title.value,
    content: content.value,
    raw_text: rawText.value,
  });
  saving.value = false;
  // router.push("/");
};

onMounted(() => {
  fetchDocument();
});
</script>

<style lang="scss" scoped></style>
