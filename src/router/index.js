import Vue from 'vue'
import VueRouter from 'vue-router'
import InstaRandom from '../views/InstaRandom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: InstaRandom 
  },
  {
    path: '/about',
    name: 'about',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
