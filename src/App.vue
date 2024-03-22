
<script >

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/views/Home.vue'
import Receitas from '@/views/Receitas.vue'
import Despesas from '@/views/Despesas.vue'

export default {
  components: {
    Header,
    Footer,
    Home,
    Receitas,
    Despesas
  },
  data() {  // <-- Mude de data para data()
    return {
      componente: 'Home'
    };
  },

}
</script>

<template>

  <div class="structure">

    <div class="structure-header">
      <Header @navegar="componente = $event" />
    </div>

    <div id="structure-conteudo">
      <KeepAlive>
        <component :is="componente" />
      </KeepAlive>
      <Footer />
    </div>
    
  </div>

</template>

<style >
.structure {
  display: flex;
  /* background: var(--bk-green) !important; */

  
height: 100vh;
}

.structure-header {
  height: 100%;
  border-radius: 0 10px 10px 0; 

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

#structure-conteudo {
  margin-left: 1%;
  /* background-color: #EDF3FB; */
  height: 100%;
  background: #EDF3FB !important;
  width: 100% !important;
}

</style>
