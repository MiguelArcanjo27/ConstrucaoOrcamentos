<template>
    <div v-if="obra">
    <h2 class="text-xl font-semibold mb-4">Editar Obra #{{ obra.id }}</h2>
    <form @submit.prevent="atualizar" class="space-y-3">
      <div>
        <label>Altura (m)</label>
        <input v-model.number="obra.altura" type="number" step="0.01" class="input" />
      </div>
      <div>
        <label>Largura (m)</label>
        <input v-model.number="obra.largura" type="number" step="0.01" class="input" />
      </div>
      <div>
        <label>Comprimento (m)</label>
        <input v-model.number="obra.comprimento" type="number" step="0.01" class="input" />
      </div>
      <div>
        <label>Custo por m³ (R$)</label>
        <input v-model.number="obra.custoPorMetroCubico" type="number" step="0.01" class="input" />
  </div>
    </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ObraController from '../../controllers/ObraController'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const obra = ref(null)

onMounted(() => {
  obra.value = JSON.parse(JSON.stringify(ObraController.buscar(route.params.id)))
})

function atualizar() {
  const atualizada = ObraController.atualizar(obra.value)
  alert('Atualizada! Custo: R$ ' + atualizada.custo)
  router.push('/obras')
}
</script>

<style lang="scss" scoped></style>
