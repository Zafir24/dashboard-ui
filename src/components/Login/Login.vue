<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Button from '../button/Button.vue'
import Input from '../input/Input.vue'
import { useAuthStore } from '../../stores/authStore'
import vueDashLogo from '../../../Vue-Dash.png'

const authStore = useAuthStore()
const router = useRouter()
const username = ref('')

const handleSubmit = async () => {
  if (username.value.trim()) {
    authStore.setUsername(username.value)
    username.value = ''
    await router.push({ name: 'dashboard' })
  }
}

const buttonEnabled = computed(() => username.value.trim().length > 0)
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 px-4">
    <div class="flex w-full max-w-md flex-col items-center rounded-xl bg-white p-8 text-center shadow-md">
      <img :src="vueDashLogo" alt="Vue Dash logo" class="mb-4 h-auto w-full max-w-[220px] object-contain" />
      <h1 class="mb-6 text-2xl font-bold text-gray-900">Welcome to VueDash!<br><span class="text-lg"> Enter your name to continue</span></h1>

      <form @submit.prevent="handleSubmit" class="flex w-full flex-col items-center space-y-4">
        <div class="flex w-full max-w-sm flex-col items-center">
          <Input
            id="username"
            v-model="username"
            type="text"
            placeholder="Enter your username"
            required
            :searchIcon="false"
          />
        </div>
        <Button
          label="Continue"
          variant="primary"
          type="submit"
          class="w-fit max-w-sm"
          :disabled="!buttonEnabled"
        />
      </form>

      <div v-if="authStore.isLoggedIn.value" class="mt-4 w-full rounded-md bg-green-50 p-3 text-center">
        <p class="text-sm text-green-800">Welcome back, {{ authStore.currentUsername.value }}!</p>
      </div>
    </div>
  </div>
</template>
