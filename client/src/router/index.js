import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/villagers',
    name: 'Villagers',
    component: () => import('../views/Villagers.vue')
  },
  {
    path: '/villagers/:id',
    name: 'Villager',
    component: () => import('../views/Villager.vue')
  },
  {
    path: '/fishes',
    name: 'Fishes',
    component: () => import('../views/Fishes.vue')
  },
  // {
  //   path: '/fishes/:id',
  //   name: 'Fish',
  //   component: () => import('../views/Fish.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
