<template>
    <div class="">
        <autenticacao title="Crie uma conta agora" primaryBtnText="Cadastrar" secundaryBtnText="Entrar" rota="/login" >
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
               type="password"
               forName="senha"
               placeholder="Entre com a senha"
               label="Senha"
               >
               <img src="../../assets/senha.svg" />
               </inputDefault>

               <inputDefault
               type="password"
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

</script>

<style>

form{
    width: 100%;
}
</style>