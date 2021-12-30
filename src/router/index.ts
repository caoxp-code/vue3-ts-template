import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from './router.config'

export default createRouter({
  history: createWebHistory(),
  routes,
})
