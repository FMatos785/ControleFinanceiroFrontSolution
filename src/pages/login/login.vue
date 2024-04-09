<template>
    <div class="">
        <autenticacao title="entre com sua conta" primaryBtnText="Entrar" secundaryBtnText="Cadastrar" rota="/cadastrar"  @formSubmitted="login"  >
            <form >
               <inputDefault
               type="email"
               forName="email"
               placeholder="cferreira@gmail.com.br"
               label="Email"
               @input="updateEmail" 

               >
               <img src="../../assets/email.svg" />
               </inputDefault>

               <inputDefault
               type="password"
               forName="senha"
               placeholder="Entre com a senha"
               label="Senha"
               @input="updatePassword" 
               >
               <img src="../../assets/senha.svg" />
               </inputDefault>

            </form>
        </autenticacao  >
    </div>
</template>


<script setup>
import autenticacao from '../../components/autenticacaoLayout/UsuarioAutenticacao.vue'
import inputDefault from '../../components/estruturaInput/input.vue'
import axios from 'axios';
import { ref } from 'vue';

const email = ref('');
const password = ref('');


const updateEmail = (value) => {
    // email.value = value; // Atualiza a variável de e-mail
    email.value = value.target.value; 
};

const updatePassword = (value) => {
    // password.value = value; // Atualiza a variável de senha
    password.value = value.target.value;
};


const login = async () => {
  console.log('O formulário foi enviado do componente filho!');
  console.log('E-mail:', email.value);
        console.log('Senha:', password.value);
            console.log(password.value)
  try {
    // const response = await axios.post('https://localhost:44318/ControleFinanceiro/Usuario/Auth', { email: email.value, senha: password.value });
    // const response = await axios.post('https://localhost:44318/ControleFinanceiro/Usuario/Auth', { email, senha });
    // const response = await axios.post(`https://localhost:44318/ControleFinanceiro/Usuario/Auth?email=${email}&senha=${senha}`);
    // var email = 'cferreira@websupply.com.br'
    // var senha = '2016ingles'
    
    // let response = await axios.post(
    //   'https://localhost:44318/ControleFinanceiro/Usuario/Auth', {
    //       params: {
    //         email:  email.value, 
    //         senha: password.value
    //       }
    //     }
    //   )

    let response = await axios.post(`https://localhost:44318/ControleFinanceiro/Usuario/Auth?email=${email.value}&senha=${senha.value}`)

    localStorage.setItem("token", response.data.token.token)
    // Lidar com a resposta de login
    console.log('Resposta de login:',  response.data.token.token);
  } catch (error) {
    console.error('Erro no login:', error);
    // Exibir mensagem de erro para o usuário
  }
};
</script>
<!-- // const handleEmailChange = (value) => {
//   // Faça algo com o valor do email
//   console.log("handleEmailChange")
//   console.log('Novo valor do email:', value.target.value);
//   email.value = value.target.value; 

// };

// const handlePasswordChange = (value) => {
//   // Faça algo com o valor da senha
//   console.log('Novo valor da senha:', value);
//   password.value = value.target.value;

// };

// const login = async () => {
//     console.log("login")
  //   console.log( email.value)
  //   console.log(password.value)
  // try {
  //   const response = await axios.post('https://localhost:44318/ControleFinanceiro/Usuario/Auth/', { email: email.value, password: password.value });
  //   // Lidar com a resposta de login
  //   console.log('Resposta de login:', response);
  // } catch (error) {
  //   console.error('Erro no login:', error);
  //   // Exibir mensagem de erro para o usuário
  // }
// }; -->





<style>

form{
    width: 100%;
}
</style>