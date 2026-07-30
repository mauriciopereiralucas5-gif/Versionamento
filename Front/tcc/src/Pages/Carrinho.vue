<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function voltarMercado(){
    router.push('/mercado')
}
</script>

<template>

    <div class="carrinho">
    
        <h1>
            🛒 Meu Carrinho
        </h1>
    
        <p class="subtitulo">
            Confira os produtos antes de finalizar sua compra.
        </p>
    
        <div class="carrinho-vazio">
    
            <div class="icone">
                🛒
            </div>
    
            <h2>
                Seu carrinho está vazio
            </h2>
    
            <p>
                Adicione alguns produtos para começar.
            </p>
    
            <button @click="voltarMercado">
    Continuar Comprando
</button>
    
        </div>
    
    </div>
    
    </template>
    
    <style scoped>
    
    .carrinho{
    
        max-width:900px;
    
        margin:auto;
    
        padding:40px;
    }
    
    h1{
    
        text-align:center;
    
        font-size:45px;
    
        font-weight:bold;
    
        color:#222;
    }
    
    .subtitulo{
    
        text-align:center;
        font-weight: bold;
        color:#666;
        margin-bottom:40px;
        font-size: 20px;
    }
    
    .carrinho-vazio{
    
        background:white;
    
        border-radius:25px;
    
        padding:60px;
    
        text-align:center;
    
        box-shadow:0 10px 25px rgba(0,0,0,.08);
    }
    
    .icone{
    
        font-size:80px;
    
        margin-bottom:20px;
    }
    
    h2{
    
        color:#333;
        font-weight: bolder;
        margin-bottom:15px;
    }

    .carrinho-vazio p{
        font-weight: bolder;
        color: #333;
    }
    
    button{
    
        margin-top:25px;
    
        background:#ff6a00;
    
        color:white;
    
        border:none;
    
        border-radius:12px;
    
        padding:15px 35px;
    
        font-size:18px;
    
        font-weight:bold;
    
        cursor:pointer;
    
        transition:.3s;
    }
    
    button:hover{
    
        background:#e85f00;
    
        transform:translateY(-3px);
    }
    
    </style>