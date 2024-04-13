<template>
    <div class="">
        <autenticacao title="Crie uma conta agora" primaryBtnText="Cadastrar" secundaryBtnText="Entrar" rota="/login" @formSubmitted="cadastrar">
            <form>
               <inputDefault
               type="text"
               forName="nome"
               placeholder=" Cristian"
               label="Nome"
               >
               <img src="../../assets/email.svg" />
               </inputDefault>

               <inputDefault
               type="email"
               forName="email"
               placeholder="cferreira@gmail.com.br"
               label="Email"
               >
               <img src="../../assets/email.svg" />
               </inputDefault>

               <inputDefault
               type="text"
               forName="senha"
               placeholder="Entre com a senha"
               label="Senha"
               >
               <img src="../../assets/senha.svg" />
               </inputDefault>

               <inputDefault
               type="text"
               forName="senha2"
               placeholder="Entre com a senha"
               label=""
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
import http from '@/services/http.js'   
import { useRouter } from 'vue-router';
const router = useRouter();

const cadastrar = async () =>{

    var senha = document.querySelector('#senha').value
    var senha2 = document.querySelector('#senha2').value

    if(senha != senha2){
        alert("A senha está diferente da confirmação!")
        return
    }

    const data = {
        nome:document.querySelector('#nome').value, 
        senha:document.querySelector('#senha').value, 
        email:document.querySelector('#email').value
        }

    try{
        let response = await http.post('/Usuario/Cadastrar', data)  

        console.log(response.data)
        alert("Cadastro feito com sucesso!")
        router.push("/login");

    }catch(error){
        console.log('deu ruim')
        console.log(Object.keys(error))
        console.log(error.response.data)
        alert(error.response.data)
    }

    
}
</script>

<style>

form{
    width: 100%;
}
</style>