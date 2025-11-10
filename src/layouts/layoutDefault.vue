<template>
  <!-- Layout principal -->
  
<div class="flex">
 
  
  
  <!-- Sidebar (Menu Lateral) -->
  <div class="w-64" v-show="sidebarAberto">
    <logo />
    <menu-lateral />
    

  </div>

  <!-- Conteúdo Principal -->
  <div class="flex flex-col flex-1 overflow-hidden">
    <nav-bar />
    
    
    <!-- Navbar Superior -->
    <div class="w-full flex items-center bg-base-300 px-6 h-16 shadow ">
      <img
        src="@/assets/images/iconeraio.png"
        alt="Banner"
        class="w-8 h-8 object-cover"
      />
      <a class="mx-4 text-xl font-light">Construcálculo</a>
      <div class="flex-1"></div>
     
        <div>
        <!-- Controle de Tema -->
        <label class="toggle text-base-content">
          <input type="checkbox" value="black" class="theme-controller" />
          <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
        </label>
        <div class="avatar">
          <button class="btn btn-ghost btn-circle">
            <div class="w-10 rounded-full">
              <img src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png" />
            </div>
          </button>
        </div>
      </div>
    </div>
    <!-- Área de Conteúdo (Rotas) -->
    <main class="flex-1 overflow-y-auto p-6">
      
  <router-view>
    
        
        <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 table">
            <!-- head -->
            
            <thead class="bg-gray">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Materiais
            </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantidade
            </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Descrição
            </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ação
            </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <!-- row 1 -->
              <tr v-for="material in materiais" :key="material.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <input type="radio" class="mr-3" />
                <div class="flex-shrink-0 h-10 w-10">
                  <img v-if="material.imagem" :src="material.imagem" :alt="material.nome" class="h-10 w-10 rounded" />
                  <div v-else class="h-10 w-10 bg-gray-300 rounded flex items-center justify-center">
                    <i class="fas fa-box text-gray-600"></i>
                  </div>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">{{ material.nome }}</div>
                  <div class="text-sm text-gray-500">{{ material.categoria }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {{ material.quantidade }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {{ material.descricao }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">
              <button @click="calcular(material)" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                Calcular
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </router-view>
  <!-- Em React/Vue, você colocaria <Outlet /> ou <router-view> aqui -->
    </main>
    
  </div>
</div>
</template>

<script setup>
import menuLateral from "@/components/menuLateral.vue";
import logo from "@/components/logo.vue";
import navBar from "@/components/navBar.vue";

import { onMounted, ref } from "vue";
import MaterialService from "@/services/MaterialService.js";


const sidebarAberto = ref(true);
const materiais = ref([]);


onMounted(async () => {
  materiais.value = await MaterialService.getAll();
});

function calcular(material) {
  alert(`Calculando para: ${material.nome}`);
  // Aqui você pode redirecionar ou abrir modal
}

</script>

<style >

</style>
