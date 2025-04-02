import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import SubLayout from '@/layouts/SubLayout.vue'

import MainPage from '@/views/pages/MainPage.vue'


const routes = [

  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Main',
        component: MainPage
      }
    ]
  },

  // {
  //   path: '/write',
  //   name: 'Write',
  //   component: SubLayout,
  //   children: [
  //     {
  //       path: '',
  //       component: WritePage
  //     }
  //   ]
  // },
  

  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/AboutView.vue') // Lazy-loading
  // }


];


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
