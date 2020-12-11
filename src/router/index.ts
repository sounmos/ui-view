import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Enter from '../views/Enter.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // @ts-ignore
    component: Enter
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
