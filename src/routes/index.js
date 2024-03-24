import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/login/login.vue'
import Signup from '@/pages/signup/Signup.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/cadastrar', component: Signup },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
