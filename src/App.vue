
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


</style>
