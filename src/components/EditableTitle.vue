<template>
  <div class="relative">
    <h1
      class="text-2xl font-bold mb-4 bg-transparent"
      @dblclick="focusAndEdit"
      v-if="!isEditing"
    >
      {{ value }}
    </h1>
    <input
      v-else
      v-model="value"
      class="w-full border-none outline-none text-2xl font-bold mb-4 bg-transparent"
      @blur="isEditing = false"
      ref="inputRef"
    />
  </div>
</template>

<script setup>
const value = defineModel();
const isEditing = ref(false);
const inputRef = ref(null);

const focusAndEdit = () => {
  isEditing.value = true;
  nextTick(() => {
    inputRef.value.focus();
  });
};
</script>

<style lang="scss" scoped></style>
