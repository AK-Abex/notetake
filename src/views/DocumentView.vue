<template>
  <div class="container p-6 flex flex-col gap-2" v-if="!loading">
    <EditableTitle v-model="title" />

    <div class="">
      <Label for="content">Content</Label>
      <Textarea v-model="content" placeholder="Content" />
    </div>
    <Button @click="saveDocument">Save</Button>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import PocketBase from "pocketbase";
const title = ref("");
const content = ref("");
const loading = ref(true);
const route = useRoute();
const router = useRouter();
const pb = new PocketBase(import.meta.env.VITE_PB_URL);

const fetchDocument = async () => {
  const document = await pb.collection("docs").getOne(route.params.id);
  title.value = document.title;
  content.value = document.content;
  loading.value = false;
};

const saveDocument = async () => {
  await pb.collection("docs").update(route.params.id, {
    title: title.value,
    content: content.value,
  });
  router.push("/");
};

onMounted(() => {
  fetchDocument();
});
</script>

<style lang="scss" scoped></style>
