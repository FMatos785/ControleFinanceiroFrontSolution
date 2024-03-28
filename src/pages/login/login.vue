<template>
    <div class="">
        <defaultLogin title="Login into your account" primaryBtnText="Login now" secundaryBtnText="Signup now">
            <form>
               <inputDados
               type="email"
               forName="email"
               placeholder="cferreira@gmail.com.br"
               label="Email"
               >
               <img src="../../assets/email.svg" />
               </inputDados>

               <inputDados
               type="password"
               forName="senha"
               placeholder="Entre com a senha"
               label="Senha"
               >
               <img src="../../assets/senha.svg" />
               </inputDados>

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
        </defaultLogin  >
    </div>
</template>


<script setup>
import defaultLogin from '../../components/defaultLoginLayout/Login.vue'
import inputDados from '../../components/primaryInput/input.vue'

</script>

<style>

form{
    width: 100%;
}
</style>