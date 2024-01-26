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
    <div>
        header
        <ul>
            <li><a href="#" @click="navegarPara ('Home')">Home</a></li>
            <li><a href="#" @click="navegarPara ('Receitas')">Receitas</a></li>
            <li><a href="#" @click="navegarPara ('Despesas')">Despesas</a></li>
        </ul>

    </div>
</template>

<style></style>