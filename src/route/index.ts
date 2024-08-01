// src/router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Login/index.vue')
  },
  // 添加其他路由...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
