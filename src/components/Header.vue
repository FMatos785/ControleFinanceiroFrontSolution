<script >
export default {
    methods: {
        navegarPara(p) {
            console.log(p)
            this.$emit('navegar', p)
        }
    }
}
</script>

<template>
    <div class="oi">
        header
        <ul>
            <li>
                <a class="text-header" href="#" @click="navegarPara('Home')">Home</a>
                <img src="../assets/logo.svg" alt="">
            </li>
            <li>
                <a class="text-header" href="#" @click="navegarPara('Receitas')">Receitas</a>
                <img src="../assets/botao-home.png" alt="">
            </li>
            <li>
                <a class="text-header" href="#" @click="navegarPara('Despesas')">Despesas</a>
                <img src="" alt="">
            </li>
        </ul>

    </div>
</template>

<style>
.oi {
    height: 100vh;
}
</style>