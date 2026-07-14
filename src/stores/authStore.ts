import { ref, computed } from 'vue'

const username = ref(localStorage.getItem('username') || '')

export const useAuthStore = () => {
  const setUsername = (value: string) => {
    username.value = value
    localStorage.setItem('username', value)
  }

  const clearUsername = () => {
    username.value = ''
    localStorage.removeItem('username')
  }

  const isLoggedIn = computed(() => username.value.trim().length > 0)
  const currentUsername = computed(() => username.value)

  return {
    setUsername,
    clearUsername,
    isLoggedIn,
    currentUsername,
  }
}
