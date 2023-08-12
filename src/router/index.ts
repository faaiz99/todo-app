import Main from '../components/Main.vue'
import Login from '../components/Authentication/Login.vue'
import Registration from '../components/Authentication/Registration.vue'
import Home from '../components/Authentication/Home.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Main },
  { path: '/login', component: Login },
  { path: '/registration', component: Registration },
  { path: '/home', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
export default router
