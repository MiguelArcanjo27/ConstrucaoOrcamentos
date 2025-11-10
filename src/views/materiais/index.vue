<template>
    

    <div class="material-index">
    <h2>Meus Materiais</h2>
    <router-link to="/materiais/add" class="btn btn-primary transition Material">Adicionar Material</router-link>

    <div class="material-list">
      <div v-for="material in materiais" :key="material.id" class="material-card">
        <h3>{{ material.nome }}</h3>
        <p>Categoria: {{ material.categoria }}</p>
        <p>Preço: R$ {{ material.precoUnitario.toFixed(2) }} / {{ material.unidadeMedida }}</p>
        <div class="actions">
          <router-link :to="`/materiais/${material.id}/edit`" class="btn btn-sm btn-secondary">Editar</router-link>
          <button @click="deleteMaterial(material.id)" class="btn btn-sm btn-danger">Excluir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialService from '@/services/MaterialService';

export default {
  name: 'MaterialIndex',
  data() {
    return {
      materiais: []
    };
  },
  async mounted() {
    this.materiais = await MaterialService.getAll();
  },
  methods: {
    async deleteMaterial(id) {
      if (confirm('Tem certeza que deseja excluir este material?')) {
        await MaterialService.delete(id);
        this.materiais = this.materiais.filter(m => m.id != id);
      }
    }
  }
}
</script>

<style scoped>
.material-index {
  padding: 20px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.material-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.material-card {
  background: #fff;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.actions {
  margin-top: 15px;
  display: flex;
  gap: 8px;
}
</style>