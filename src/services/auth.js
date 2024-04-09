// // authGuard.js

// import { getTokenFromStorage } from '@/services/auth';

// // Middleware de autenticação
// const authGuard = (to, from, next) => {
//   // Verifique se há um token de autenticação no armazenamento local
//   const token = getTokenFromStorage();
//   console.log(token);

//   if (token) {
//     // Se houver um token, permita a navegação
//     next();
//   } else {
//     // Se não houver um token, redirecione o usuário para a página de login
//     next('/login');
//   }
// };

// export default authGuard;
