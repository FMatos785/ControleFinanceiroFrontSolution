<template>
    <div class="">
        <defaultLogin title="Login into your account" primaryBtnText="Login now" secundaryBtnText="Signup now">
            <form>
               <inputDados
               type="text"
               forName="nome"
               placeholder="Cristian"
               label="Nome"
               >
               <img src="../../assets/email.svg" />
               </inputDados>
            </form>
        </defaultLogin  >
    </div>
</template>


<script setup>
import defaultLogin from '../../components/defaultLoginLayout/Login.vue'
import inputDados from '../../components/primaryInput/input.vue'

</script>

<style>

</style>