import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/login/login.vue'
import Signup from '@/pages/signup/Signup.vue'
import home from '@/pages/home/home.vue'
import receita from '@/pages/receita/receita.vue'
// import { isAuthenticated } from '@/services/auth'; // Função para verificar se o usuário está autenticado


const routes = [
  { path: '/login', component: Login },
  { path: '/cadastrar', component: Signup },
  { path: '/receita', component: receita, meta: { requiresAuth: true } },
  {path: '/home', component: home, name:'home',   meta: { requiresAuth: true }  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  
  // Verifique se a rota requer autenticação e se há um token no localStorage
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    // Se não houver token, redirecione para a página de login
    console.log("localStorage.getItem('token')")
    next('/login');
  } else {
    // Caso contrário, prossiga para a próxima rota
    next();
  }
});
export default router;
