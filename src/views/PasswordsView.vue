<template>
  <div class="container py-6">
    <!-- Header with Add button -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Password Manager</h1>
      <Dialog>
        <DialogTrigger as-child>
          <Button>Add Password</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Password</DialogTitle>
            <DialogDescription>Enter the details for the new password entry.</DialogDescription>
          </DialogHeader>

          <form @submit.prevent="handleSubmit">
            <div class="grid gap-4 py-4">
              <div class="grid gap-2">
                <Label for="title">Title</Label>
                <Input id="title" v-model="newPassword.title" />
              </div>
              <div class="grid gap-2">
                <Label for="username">Username</Label>
                <Input id="username" v-model="newPassword.username" />
              </div>
              <div class="grid gap-2">
                <Label for="password">Password</Label>
                <Input id="password" type="password" v-model="newPassword.password" />
              </div>
              <div class="grid gap-2">
                <Label for="url">URL</Label>
                <Input id="url" v-model="newPassword.url" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>

    <!-- Password Table -->
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>URL</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="password in passwords" :key="password.id">
          <TableCell>{{ password.title }}</TableCell>
          <TableCell>{{ password.username }}</TableCell>
          <TableCell>{{ password.url }}</TableCell>
          <TableCell>
            <Button variant="ghost" size="icon" @click="copyPassword(password)">
              <Copy class="h-4 w-4" />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Copy } from 'lucide-vue-next'
const pb = new PocketBase(import.meta.env.VITE_PB_URL)

const passwords = ref([])
const newPassword = ref({
  title: '',
  username: '',
  password: '',
  url: ''
})

// Fetch passwords from PocketBase
const fetchPasswords = async () => {
  try {
    const records = await pb.collection('passwords').getFullList()
    passwords.value = records
  } catch (error) {
    console.error('Error fetching passwords:', error)
  }
}

// Add new password
const handleSubmit = async () => {
  try {
    await pb.collection('passwords').create(newPassword.value)
    await fetchPasswords()
    newPassword.value = { title: '', username: '', password: '', url: '' }
  } catch (error) {
    console.error('Error adding password:', error)
  }
}

// Copy password to clipboard
const copyPassword = async (password) => {
  try {
    await navigator.clipboard.writeText(password.password)
    // You might want to add a toast notification here
  } catch (error) {
    console.error('Error copying password:', error)
  }
}

onMounted(() => {
  fetchPasswords()
})
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
