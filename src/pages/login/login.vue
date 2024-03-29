<template>
    <div class="">
        <autenticacao title="Login entre com sua conta" primaryBtnText="Entrar" secundaryBtnText="Cadastrar" rota="/cadastrar">
            <form>
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

               <!-- <inputDados
               type="password"
               forName="senha"
               placeholder="Entre com a senha"
               label="Senha"
               >
               <img src="../../assets/senha.svg" />
               </inputDados>

               <inputDados
               type="password"
               forName="senha"
               placeholder="Entre com a senha"
               label=""
               >
               <img src="../../assets/senha.svg" />
               </inputDados> -->

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