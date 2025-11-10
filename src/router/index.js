import { createRouter, createWebHistory } from 'vue-router'

// Views de Materiais
import MaterialIndex from '@/views/materiais/index.vue'
import MaterialAdd from '@/views/materiais/add.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
          path: '/materiais',
          name: 'MaterialIndex',
          component: MaterialIndex
        },
        {
          path: '/materiais/add',
          name: 'MaterialAdd',
          component: MaterialAdd
        },
      ],
})

export default router