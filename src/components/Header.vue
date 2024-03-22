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
    <div class="header">
        <div>
            <div class="head">
                    <div class="user-img">
                        <img src="../assets/foto-cris.jpeg" alt="">
                    </div>
                    <div class="user-details">
                        <p class="title">Usuario</p>
                        <p class="name">Cristian </p>
                    </div>
                </div>
            
            <ul>
                <li>
                    <i class="icon ph-bold ph-house-simple"></i>
                    <a class="text-header" href="#" @click="navegarPara('Home')">Home lorem teste rdvgrf </a>
                </li>
                <li>
                    <i class="icon ph-bold ph-file-text"></i>
                    <a class="text-header" href="#" @click="navegarPara('Receitas')">Receitas</a>
                </li>
                <li>
                    <i class="icon ph-bold ph-chart-bar"></i>
                    <a class="text-header" href="#" @click="navegarPara('Despesas')">Despesas</a>
                </li>
            </ul>
        </div>

    </div>
</template>

<style>
.header {
    height: 100vh;
    background-color: red;
    /* background-color: #fff; */
    position: fixed;
    /* background-color: #757575; */
}

/* ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center ;
    padding: 0 0 10px 0;

} */


.structure-header {
  height: 100%;
  border-radius: 0 10px 10px 0; 
  /* background: blue !important; */

  background-color: #fff;
  border-right: 1px solid rgba(0, 0, 0, 0.07);
  width: 5%;
  transition: width 0.1s; /* Adicione a propriedade e duração da transição aqui */
  transition-delay: 0.1s; /* Adicione o atraso da transição aqui */
  /* display: flex;
  justify-content: center; */
}

.structure-header:hover {
  width: 15%;
}

.structure-header:hover .text-header {
  display:inline ;
}

.structure-header .text-header {
  display: none ;
}

 .structure-header .user-details{
  display: none;
}

.structure-header:hover .user-details{
  display: inline;
}

img{
  width: 10px;
}




/* .head{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f6f6f6;
}

.user-img{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
}

.user-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-fit: contain;;
}

.user-details .title,
.menu .title{
    font-size: 10px;
    font-weight: 500;
    color: #757575;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.user-details .name{
    font-size: 14px;
    font-weight: 500;
}



ul li{
    list-style: none;
    margin-bottom: 5px;
    background: red;
}

ul li a{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #757575;
    text-decoration: none;
    padding: 12px 8px;
    border-radius: 8px;
    transition: all 0.3s;
} */


</style>