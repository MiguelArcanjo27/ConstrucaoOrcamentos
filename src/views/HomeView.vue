
<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
    <div class="text-center max-w-md">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Bem-vindo ao Construcálculo!</h1>
      <p class="text-gray-600 mb-6">
        Você está logado como: <strong>{{ userEmail }}</strong>
      </p>
      <button
        @click="logout"
        class="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
      >
        Sair
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userEmail = ref('')

onMounted(() => {
  userEmail.value = localStorage.getItem('userEmail') || 'usuário'
})

const logout = () => {
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('userEmail')
  // localStorage.removeItem('token')
  router.push('/login')
}
</script>