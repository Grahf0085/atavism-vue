import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/connecting',
    name: 'Connecting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Connecting.vue')
  },
  {
    path: '/faqs',
    name: 'FAQs',
    component: () => import('../views/FAQs.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import('../views/Rules.vue')
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('../views/Support.vue')
  },
  {
    path: '/online',
    name: 'Online',
    component: () => import('../views/Online.vue')
  },
  {
    path: '/player-search',
    name: 'Player Search',
    component: () => import('../views/PlayerSearch.vue')
  },
  {
    path: '/item-search',
    name: 'Item Search',
    component: () => import('../views/ItemSearch.vue')
  },
  {
    path: '/bcnm-ksnm-enm',
    name: 'BCNM-KSNM-ENM',
    component: () => import('../views/BCNM-KSNM-ENM.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
