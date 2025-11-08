<template>
  <!-- Layout principal -->
  <div class="flex">
    <!-- Sidebar (Menu Lateral) -->
    <div class="w-64">
      <logo />
      <menu-lateral />
      
    </div>

    <!-- Conteúdo Principal -->
    <div class="flex flex-col flex-1 overflow-hidden">
      
      <!-- Navbar Superior -->
      <div class="navbar bg-base-300 shadow">
        <img
          src="@/assets/images/iconeraio.png"
          alt="Banner"
          class="w-10 h-10 object-cover"
        />
        <div class="flex-1">
          <a class="mx-4 text-xl font-light"> Acesso Rapido</a>
        </div>
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.161 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Controle de Tema -->
      <label class="toggle text-base-content">
  <input type="checkbox" value="black" class="theme-controller" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
</label>
<div class="avatar"><button class="btn btn-ghost btn-circle">
  <div class="w-10 rounded-full">
    <img src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png" />
  </div>
</button>
</div>

      </div>
      <!-- Área de Conteúdo (Rotas) -->
      <main class="flex-1 overflow-y-auto p-6">
        <router-view>
          <div class="overflow-x-auto">
          <table class="table">
        <!-- head -->
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th>Materiais</th>
        <th>Quantidade</th>
        <th>Descrição</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
       <!-- row 1 -->
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src="https://i.pinimg.com/736x/63/ef/ab/63efab1271702fda86eb0b04a6a8ba81.jpg"
                  alt="Tijolo" />
              </div>
            </div>
            <div>
              <div class="font-bold">Tijolos</div>
              <div class="text-sm opacity-50">Material de Construção</div>
            </div>
          </div>
        </td>
        <td>
          5000 Unidades
        
          <br />
        
        </td>
        <td> Tamanho padrão 20x10x5 cm </td>
        <th>
           <button class="btn btn-info btn-xs">details</button>
        </th>
      </tr>
      <!-- row 2 -->
    <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src="https://w7.pngwing.com/pngs/54/14/png-transparent-castle-cement-sack-art-portland-cement-concrete-flexible-intermediate-bulk-container-bag-cement-accessories-gunny-sack-material.png"
                  alt="Concreto" />
              </div>
            </div>
            <div>
              <div class="font-bold">Concreto</div>
              <div class="text-sm opacity-50">Construção</div>
            </div>
          </div>
        </td>
        <td>
          2000 Sacos x 50kg
          <br />
          
        </td>
        <descricion>
          Mistura pronta para uso em obras residenciais e comerciais.
        </descricion>
        <th>
          <button class="btn btn-info btn-xs">details</button>
        </th>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Marjy Ferencz</div>
              <div class="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br />
          <span class="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
           <button class="btn btn-info btn-xs">details</button>
        </th>
      </tr>
      <!-- row 4 -->
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Yancy Tear</div>
              <div class="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br />
          <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button class="btn btn-info btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    <!-- foot -->
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
        </router-view>
        <!-- Em React/Vue, você colocaria <Outlet /> ou <router-view> aqui -->
      </main>
      </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import menuLateral from "@/components/menuLateral.vue";
import logo from "@/components/logo.vue";




</script>

<style lang="scss" scoped></style>
