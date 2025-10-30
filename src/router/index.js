import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/dashboard.vue'),
    },
    {
      path: '/tutors',
      children: [
        { path: '', component: () => import('@/views/tutors/index.vue')},
<<<<<<< HEAD
        { path: 'add', name: 'tutors.add', component: () => import('@/views/tutors/add.vue')},
=======
>>>>>>> 87fd98366f348993d4ad19c3798811935b17db1f
        { path: ':id/edit', component: () => import('@/views/tutors/edit.vue')},
        { path: ':id/show', component: () => import('@/views/tutors/show.vue')},
      ]
    }
  ],
})

export default router
