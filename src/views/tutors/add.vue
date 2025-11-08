<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">Nova Obra</h2>
    <form @submit.prevent="salvar" class="space-y-3">
      <div>
        <label>Altura (m)</label>
        <input v-model.number="altura" type="number" step="0.01" class="input" />
      </div>
      <div>
        <label>Largura (m)</label>
        <input v-model.number="largura" type="number" step="0.01" class="input" />
      </div>
      <div>
        <label>Comprimento (m)</label>
        <input v-model.number="comprimento" type="number" step="0.01" class="input" />
      </div>
      <div>
        <label>Tipo</label>
        <select v-model="tipo" class="input">
          <option value="tijolo">Tijolo</option>
          <option value="concreto">Concreto</option>
          <option value="madeira">Madeira</option>
        </select>
      </div>

      <button class="btn" type="submit">Calcular e Salvar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ObraController from '../../controllers/ObraController'
import { useRouter } from 'vue-router'

const altura = ref(2.7)
const largura = ref(5)
const comprimento = ref(6)
const tipo = ref('tijolo')
const router = useRouter()

function salvar() {
  const obra = ObraController.salvar({
    altura: altura.value,
    largura: largura.value,
    comprimento: comprimento.value,
    tipo: tipo.value
  })
  alert(`Obra salva! Custo estimado: R$ ${obra.custo}`)
  router.push('/obras')
}
</script>
<style scoped> </style>
