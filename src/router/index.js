import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DisplayList from '../views/DisplayList.vue'
import { authGuard } from '../auth/authGuard'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'DisplayList',
    component: DisplayList,
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
