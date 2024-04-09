import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/login/login.vue'
import Signup from '@/pages/signup/Signup.vue'
import home from '@/pages/home/home.vue'
// import { isAuthenticated } from '@/services/auth'; // Função para verificar se o usuário está autenticado


const routes = [
  { path: '/login', component: Login },
  { path: '/cadastrar', component: Signup },
  {path: '/home', component: home,    meta: { requiresAuth: true }  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  let teste = sessionStorage.getItem('token');
  console.log(teste)
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
