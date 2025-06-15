import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginPage.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('accessToken')
  
  if (!accessToken && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})

export default router
