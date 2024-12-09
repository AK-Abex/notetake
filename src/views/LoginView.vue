<template>
  <div class="flex justify-center items-center h-screen w-full bg-background">
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to your account</CardDescription>
      </CardHeader>
      <CardContent class="flex flex-col gap-2">
        <Input v-model="email" placeholder="Email" />
        <Input v-model="password" placeholder="Password" type="password" />
      </CardContent>
      <CardFooter>
        <Button @click="handleLogin">Login</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup>
import PocketBase from "pocketbase";
import { useEncryptionKeyStore } from "@/stores/encryptionKey";

const pb = new PocketBase(import.meta.env.VITE_PB_URL);
const email = ref("");
const password = ref("");
const router = useRouter();
const encryptionKeyStore = useEncryptionKeyStore();

const handleLogin = async () => {
  console.log(email.value, password.value);
  try {
    const userData = await pb
      .collection("users")
      .authWithPassword(email.value, password.value);
    encryptionKeyStore.key = password.value;
    console.log(userData);
    router.push("/");
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
