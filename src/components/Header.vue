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
   <aside id="sidebar">
                <div id="logo">
                    <img src="../assets/imgs/logo-remaza.svg" class="w-100 mb-5 px-4" alt="Logo Remaza">
                </div>

                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                            <i class="fa-solid fa-user me-3"></i>
                            Usuário
                        </button>
                      </h2>
                      <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <a href="userGeral.html" class="active">Geral</a>
                                </li>
                                <li class="list-group-item">
                                    <a href="userPermissoes.html">Permissões</a>
                                </li>
                                <li class="list-group-item">
                                    <a href="userDelegacao.html">Delegações</a>
                                </li>
                            </ul>
                        </div>
                      </div>
                    </div>                    
                </div>
                <ul class="sidebar-list">
                    <li class="sidebar-item">
                        <a href="empresaGeral.html" class="sidebar-link" data-bs-target="#flush-collapseOne">
                            <i class="fa-solid fa-building me-3"></i>
                            Empresas
                        </a>
                    </li>
                    <li class="sidebar-item">
                        <a href="sistemaGeral.html" class="sidebar-link" data-bs-target="#flush-collapseOne">
                            <i class="fa-solid fa-desktop me-3"></i>
                            Sistemas
                        </a>
                    </li>                        
                </ul>
            </aside>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;900&display=swap');

html, body{overflow-x: hidden; scroll-behavior: smooth;} 
body {
  font-family: 'Raleway', sans-serif;
}

/* ROOT */
:root{
    --color-iris: #5D5FEF;
    --color-dark-iris: #101270;
    --color-light-iris: #E5E5FA;
    --color-white: #FEFEFE;
    --color-light-laranja: #FFD9B7;
    --color-laranja: #FC871E;
    --color-brown: #C35F06;
    --color-light-gray: #F6F6F6;
    --color-gray: #CCCCCC;
    --color-dark-gray: #858595;
    --color-black: #1E1F29;
    --color-bg: #BABBDE;
    --color-green: green;
}

.color-iris{color: var(--color-iris);}
.color-dark-iris{color: var(--color-dark-iris);}
.color-gray{color: var(--color-dark-gray);}
.color-green{color: var(--color-green);}
.color-laranja{color: var(--color-laranja) !important;}

/* HACKS */
.modal,
.modal-open {
    padding-right: 0 !important;
}

.hidden{
    display: none;
}

.hidden p{
    padding: 10px 0;
    border-bottom: 1px solid var(--color-dark-gray);
    width: 100%;
}

td {
    vertical-align: top; /* Alinha o conteúdo no topo da célula */
    padding-top: 18px !important ;
}

a{
    color: var(--color-iris);
}

/* BADGES */
.badge{
    width: 100%;
    text-transform: uppercase;
    border-radius: 15px;    
}

.badges-empresas{
    padding: 5px 15px;
    border-radius: 15px;
    background-color: var(--color-light-laranja);
    font-size: 13px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    margin: 2px;
    min-width: 150px;
}

/* BOTÕES */
.w-180{
    min-width: 180px;
}

.btn-primary{
    text-decoration: none;
    color: var(--color-white);
    background-color: var(--color-iris);
    border: 2px solid var(--color-iris);
}

.btn-outline-primary{
    color: var(--color-iris);
    border: 2px solid var(--color-iris);
}

.btn-secondary{
    background-color: var(--color-laranja);
    color: var(--color-white);
    border: 2px solid var(--color-laranja);
}

.btn-outline-secondary{
    color: var(--color-laranja);
    border: 2px solid var(--color-laranja);
}

.btn-outline-primary:active,
.btn-outline-primary:hover,
.btn-primary:active,
.btn-primary:hover{
    background-color: var(--color-dark-iris);
    border: 2px solid var(--color-dark-iris);
}

.btn-outline-secondary:active,
.btn-outline-secondary:hover,
.btn-secondary:active,
.btn-secondary:hover{
    background-color: var(--color-brown);
    border: 2px solid var(--color-brown);
}

.btn-solicitacao{
    width: 180px;
}

/* LOGIN */
#login{
    background-image: linear-gradient(var(--color-dark-iris), var(--color-iris));
    background-attachment: fixed;
    padding: 90px 0;
    height: 100vh;
}

#loginCard{
    width: 360px;
    margin: 10px auto;
}

#olaImg{
    max-width: 700px;
}


/* FORMS */
.form-check-input:checked{
    background-color: var(--color-iris);
    border-color: var(--color-iris);
}

/* Step */
#step {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px auto;
    width: 200px;
}

.step-box {
    position: relative;
    width: 20px;
    height: 20px;
    background-color: var(--color-white);
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    border: 2px solid var(--color-dark-gray);
}

.step-box.activate {
    background-color: var(--color-iris); /* Cor da caixa ativa */
}

#step::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-dark-gray);
    z-index: 0;
}


/* Barra de busca/Dropdown */
.btn-buscar{
    border: 2px solid var(--color-gray);
    justify-content: space-between;
    color: var(--color-black) !important;
} 

#buscaSistemas li:first-child{
    border-bottom: 1px solid var(--color-dark-gray);

}

#sistemasDefault{
    list-style: none;
    padding-left: 0;
    width: 100%;
}

.sistema-item{
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    align-items: center;
    font-size: 1.25rem;
}

.result-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sistema-item select{
    width: 50%;
}

/* TEMPLATE */
#template{
    background-color: var(--color-light-iris);
    position: relative;
}

header{
    background-color: var(--color-white);
    padding: 30px;
    border-radius: 8px;
}

.dropdown-toggle{
    text-decoration: none;
    color: var(--color-laranja);
}

#breadcrumb{
    padding: 30px;
}

#breadcrumb a{
    color: var(--color-iris);
}

#breadcrumb a:active,
#breadcrumb a:hover{
    color: var(--color-dark-iris);
}

.breadcrumb{
    margin-bottom: 0;
}

/* MAIN */
main{
    flex: 1;
    margin-left: 280px;
}

#content{
    background-color: var(--color-white);
    padding: 30px;
    border-radius: 8px;
}

#content h1{
    font-weight: bold;
    color: var(--color-iris);    
}

#content h3{
    color: var(--color-iris);    
}

/* FOOTER */
footer{
    padding: 30px;
}

/* SIDEBAR */
#sidebar{
    position: fixed;
    width: 280px;
    background-color: var(--color-dark-iris);
    padding: 30px 0;
    border-radius: 0 20px 20px 0;
    height: 100vh;
}

.sidebar-list{
    list-style: none;
    padding-left: 0;
}

.sidebar-item{
    padding: 0;
}

.sidebar-item a{
    display: block;
    text-decoration: none;
    color: var(--color-white);
    padding: 1rem 1.25rem;
}

.list-group-item a.active{
    background-color: var(--color-laranja);
    color: var(--color-white);
}

.sidebar-item a:active,
.sidebar-item a:hover{
    background-color: var(--color-white);
    color: var(--color-dark-iris);
}

.sidebar-link.active{
    background-color: var(--color-white);
    color: var(--color-dark-iris);
}

.accordion-button{
    background-color: var(--color-dark-iris);
    color: var(--color-white);
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-bottom: 0px !important;
}

.accordion-button::after {
    background-image: url("../img/down-angle.svg")
}

.accordion-button:hover,
.accordion-button:not(.collapsed){
    background-color: var(--color-white);
    color: var(--color-dark-iris);
}

.accordion-item{
    border: 0;
}

.accordion-body{
    padding: 0;
}

.list-group-item:first-child,
.list-group-item:last-child{
    border-radius: 0;
}

.list-group-item{
    background-color: var(--color-bg);
    border: 0; 
    padding: 0;   
}

.list-group-item a{
    text-decoration: none;
    color: var(--color-dark-iris);
    display: block;
    padding: 1rem 1.25rem;
}

.list-group-item a:active,
.list-group-item a:hover{
    background-color: var(--color-laranja);
    color: var(--color-white) !important;
}

/* MODAL */
.modal-dialog{
    min-width: 700px;
}

.modal-title{
    color: var(--color-iris);
}

/* Modal Sistemas */
#relSistema .modal-dialog{
    min-width: 990px !important;
}

/* CADASTRO USUÁRIO */
.empresas-badges{
    background-color: var(--color-light-iris);
}

/* Permissões */
#permEmpresa{
    background-color: var(--color-light-iris);
    display: flex;
    justify-content: start;
    align-items: center;
}

@media screen and (max-width: 575px) { 
    /* LOGIN */
    #login{
        height: auto;
        padding: 30px 0;
    }

    #loginCard{
        width: 100%;
        margin: 10px auto;
    }

    #olaImg{
        margin-bottom: 30px;
    }
}

</style>