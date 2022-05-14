import { createRouter, createWebHistory } from 'vue-router';
import CalcView from '@/views/CalcView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CalcView,
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/CalcTodoListView.vue'),
    },
    {
      path: '/aboutVue3',
      name: 'aboutVue3',
      component: () => import('../views/HomeView.vue'),
    },

  ],
});

export default router;
