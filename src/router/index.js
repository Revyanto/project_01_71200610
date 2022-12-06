import { createRouter, createWebHistory } from 'vue-router'
import menuMakan from '../views/menuMakan.vue'
import menuMinum from '../views/menuMinum.vue'
import menuSnack from '../views/menuSnack.vue'

const routes = [
  {
    path: '/makanan',
    name: 'Makanan',
    component: menuMakan
  },
  {
    path: '/minuman',
    name: 'Minuman',
    component: menuMinum
  },
  {
    path: '/snack',
    name: 'Snack',
    component: menuSnack
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
