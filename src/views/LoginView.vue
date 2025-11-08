<template>
  <div class="relative min-h-screen bg-[#76c4f3] flex flex-col items-center justify-center overflow-hidden text-white font-sans p-4">
    <!-- Formas decorativas no fundo -->
    <div class="absolute inset-0 pointer-events-none z-[-1]">
      <!-- Triângulo (shape-1) -->
      <div
        class="absolute top-1/5 right-1/10 w-36 h-36 bg-gradient-to-br from-black to-gray-800 opacity-70"
        style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
      ></div>
      <!-- Círculo elíptico (shape-2) -->
      <div
        class="absolute bottom-10 left-10 w-52 h-20 bg-gradient-to-r from-black to-gray-800 rounded-full opacity-70"
        style="transform: rotate(-20deg)"
      ></div>
    </div>

    <!-- Conteúdo central -->
    <div class="text-center max-w-md w-full z-10">
      <h1 class="text-4xl font-bold text-orange-500 mb-2">Acessar conta.</h1>
      <p class="text-sm mb-6">Suas informações ficam salvas automaticamente</p>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Digite seu email para entrar"
          class="w-full px-6 py-3 text-gray-800 bg-white/90 border-4 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 placeholder:text-gray-600"
          required
        />

        <button
          type="submit"
          class="w-full py-4 bg-[#5d1fd8] text-white font-semibold rounded-full hover:bg-[#4a19b0] active:scale-95 transition-all duration-200"
        >
          Entrar
        </button>
      </form>

      <div class="mt-8 space-y-3 text-sm">
        <p>
          Ainda não tem uma conta?
          <a href="#" @click.prevent="navigateToSignup" class="underline hover:text-orange-400">CRIAR UMA CONTA CONSTRUCÁLCULO</a>
        </p>
        <p>
          Esqueceu sua senha?
          <a href="#" @click.prevent="recoverPassword" class="underline hover:text-orange-400">RESTAURAR SENHA</a>
        </p>
        <p>
          Problemas para acessar?
          <a href="#" @click.prevent="openHelp" class="underline hover:text-orange-400">Clique aqui e informe</a>
        </p>
      </div>
    </div>

    <!-- Logo no rodapé -->
    <div class="absolute bottom-5 left-0 right-0 text-center">
      <h2 class="text-4xl font-bold text-black drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] tracking-tighter">
        Construcálculo
      </h2>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const email = ref('')

const handleSubmit = async () => {
  const value = email.value.trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!value) {
    alert('Por favor, digite seu email.')
    return
  }
  if (!emailRegex.test(value)) {
    alert('Por favor, insira um email válido.')
    return
  }

  try {
    
    // const response = await api.post('/auth/login', { email: value })
    // const { token, user } = response.data

    // ✅ Simulando sucesso
    console.log('✅ Login bem-sucedido')

    // Salvar estado de autenticação
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userEmail', value)
    // Se usar token: localStorage.setItem('token', token)

    // 👉 Redirecionar:
    // - Se veio de uma rota protegida (ex: /dashboard), volta pra lá
    // - Senão, vai pra home ('/')
    const redirectPath = route.query.redirect || '/'
    await router.push(redirectPath)
  } catch (error) {
    console.error('Erro no login:', error)
    alert('Erro ao fazer login. Tente novamente.')
  }
}
</script>
<style scoped></style>