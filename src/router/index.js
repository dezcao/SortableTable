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
    path: '/elementUI',
    name: 'ElementUI',
    component: () => import(/* webpackChunkName: "about" */ '../views/element_ui/index.vue')
  },
  {
    path: '/bootstrapVue',
    name: 'BootstrapVue',
    component: () => import(/* webpackChunkName: "about" */ '../views/bootstrap_vue/index.vue')
  },
  {
    path: '/vuetify',
    name: 'Vuetify',
    component: () => import(/* webpackChunkName: "about" */ '../views/vuetify/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
