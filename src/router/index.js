import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/botones',
    name: 'botones',
    component: () => import(/* webpackChunkName: "Botones" */ '../views/Botones.vue')
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import(/* webpackChunkName: "Cards" */ '../views/Cards.vue')
  },
  {
    path: '/dialogs',
    name: 'dialogs',
    component: () => import(/* webpackChunkName: "Dialogs" */ '../views/Dialogs.vue')
  },
  {
    path: '/tareas',
    name: 'tareas',
    component: () => import(/* webpackChunkName: "Tareas" */ '../views/Tareas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
