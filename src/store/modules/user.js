import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const AddToken = (newToken) => {
    token.value = newToken
  }

  const RemoveToken = () => {
    token.value = ''
  }
  return {
    token,
    AddToken,
    RemoveToken,
  }
}, { persist: true })