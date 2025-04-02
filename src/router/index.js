import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MainPage from '@/views/pages/MainPage.vue'


const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },



  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue') // Lazy-loading
  }


];


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
