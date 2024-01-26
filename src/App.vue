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
  <div class="teste col-md-2">
    <div class="col-md-12">
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
.teste {
  background: red;
  display: flex;

}
</style>
