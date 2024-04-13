<template>
    <div class="geral">
        <div id="logo">
            <p><img src="@/assets/logo-financo.svg" alt="" width="40">Finanço</p>
        </div>
        <nav>
            <ul>
                <li><RouterLink to="/home">Inicio</RouterLink></li>
                <li><RouterLink to="/receita">Receitas</RouterLink></li>
            </ul>
        </nav>
    </div>   
    <div class="fundoPreto"></div>
</template>

<script setup>
    import '@/styles/variaveis.css'
</script>

<style scoped>
    *{
    box-sizing: border-box;
    }

    .geral{
        position:fixed;
        width: 60%;
        height: 100vh; 
        background-color: #EEEEEE;
        z-index: 1;
    }
    #logo{
        margin:20px auto 40px auto;
        text-align: center;
    }
    #logo img{
        display: block;
        margin: 0 auto;
    }
    .geral nav ul:first-child{
        border-top:1px solid #c2c2c2;
    }
    .geral nav ul li{
        border-bottom: 1px solid #7001fd;
        height: 40px;
    }
    .geral nav ul li:hover{
        background-color: #7001fd;
    }
    .geral nav ul li a{
        display: block;
        height:100%;
        width:100%;
        text-align: center;
        line-height: 40px;
        text-decoration: none;
        font-family: "Segoe UI", Arial, sans-serif;
        font-weight: bolder;
    }
    .geral nav ul li a:hover{
        color:white;
    }
    .fundoPreto{
        position:absolute;
        border:1px solid black;
        display: block;
        width:100%;
        height:100vh;
        background-color: rgba(54, 52, 46 , .5);
        z-index:8;
    }


@media (min-width:700px){
    
    #logo{
        margin:20px auto 40px auto;
        text-align: center;
    }
    #logo img{
        display: block;
        margin: 0 auto;
    }
    div nav{
    }
    div nav ul:first-child{
        border-top:1px solid #c2c2c2;
    }
    div nav ul li{
        border-bottom: 1px solid #7001fd;
        height: 40px;
    }
    div nav ul li:hover{
        background-color: #7001fd;
        
    }
    div nav ul li a{
        display: block;
        height:100%;
        width:100%;
        text-align: center;
        line-height: 40px;
        text-decoration: none;
        font-family: "Segoe UI", Arial, sans-serif;
        font-weight: bolder;
    }
    div nav ul li a:hover{
        color:white;
    }
}
    
    
    </style>