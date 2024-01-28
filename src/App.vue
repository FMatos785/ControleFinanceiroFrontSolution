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

    <div>
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
  background: var(--bk-green);

}

.structure-header {
  background-color: #EDF3FB;
  width: 100px;
  transition: width 0.1s; /* Adicione a propriedade e duração da transição aqui */
  transition-delay: 0.1s; /* Adicione o atraso da transição aqui */
}

.structure-header:hover {
  width: 260px;
}

.structure-header:hover .text-header {
  display:inline ;
}

.structure-header .text-header {
  display: none ;
}

img{
  width: 10px;
}

</style>
