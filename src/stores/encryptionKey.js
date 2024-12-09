import { ref } from "vue";
import { defineStore } from "pinia";
export const useEncryptionKeyStore = defineStore("encryptionKey", () => {
  const key = ref("");
  return { key };
});
