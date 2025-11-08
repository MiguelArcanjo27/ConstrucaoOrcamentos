<template>
  <div>
    <breadcrumbs>
      <template v-slot:model> Tutores </template>
      <template v-slot:action> Tutor </template>
    </breadcrumbs>
    <pre>
      {{ $route.params.id }}
    </pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ObraController from '../../controllers/ObraController'
import { useRoute } from 'vue-router'
import jsPDF from 'jspdf'

const route = useRoute()
const obra = ref(null)

onMounted(() => {
  obra.value = ObraController.buscar(route.params.id)
})

function baixarPDF() {
  const doc = new jsPDF()
  doc.text(`Relatório - Obra #${obra.value.id}`, 20, 20)
  doc.text(`Tipo: ${obra.value.tipo}`, 20, 30)
  doc.text(`Área: ${obra.value.area} m²`, 20, 40)
  doc.text(`Volume: ${obra.value.volume} m³`, 20, 50)
  doc.text(`Custo estimado: R$ ${obra.value.custo}`, 20, 60)
  doc.save(`Obra_${obra.value.id}.pdf`)
}

function enviarWhats() {
  const msg = encodeURIComponent(`Orçamento Construcálculo - Obra #${obra.value.id}\nCusto estimado: R$ ${obra.value.custo}`)
  window.open(`https://wa.me/?text=${msg}`, '_blank')
}

</script>

<style lang="scss" scoped></style>
