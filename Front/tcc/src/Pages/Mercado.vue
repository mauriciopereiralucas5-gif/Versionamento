<script setup>
import CardProduto from '@/components/CardProduto.vue'
</script>

<template>

<h1 class="Mercado text-center">Mercado
  <span>Escolar</span>
</h1>

<button class="grid-item" @click="categoriaSelecionada = Tudo">
  Tudo
</button>
<button class="grid-item" @click="categoriaSelecionada = Doces">
  Doces
</button>
<button class="grid-item" @click="categoriaSelecionada = Bebidas">
  Bebidas
</button>
<button class="grid-item" @click="categoriaSelecionada = Salgados">
  Salgados
</button>
<button class="grid-item" @click="categoriaSelecionada = Brindes">
  Brindes
</button>

  <div class="mercado">

    <div class="grid-produtos">

      <CardProduto
        nome="Chokito"
        descricao="Bombom Chokito"
        :preco="2"
        imagem="https://cdn.awsli.com.br/2500x2500/298/298064/produto/13927482/d2b5e5ef55.jpg"
      />

      <CardProduto
        nome="Bis"
        descricao="Chocolate Bis"
        :preco="3"
        imagem="https://images.tcdn.com.br/img/img_prod/987957/bis_lacta_chocolate_ao_leite_126g_1718141_1_35c49019a3e940f4c85ad81634fc4ae7.jpg"
      />

      <CardProduto
        nome="Trento"
        descricao="Chocolate Trento"
        :preco="3"
        imagem="https://distribuidoragirotto.com.br/files/1035957/a18b02f327598abdde545d6ad2a2d6f0"
      />

      <CardProduto
        nome="Laka Oreo"
        descricao="Barra de Laka Branco com Oreo"
        :preco="5"
        imagem="https://a-static.mlcdn.com.br/1500x1500/barra-de-chocolate-laka-oreo-branco-com-biscoito-oreo-80g/magazineluiza/238755100/1395a5339c67205d0f9e6506481e23f8.jpg"
      />

    </div>

  </div>

</template>

<style scoped>

.Mercado{
  font-size: 45px;
  font-weight: bolder;
  color: rgb(41, 41, 41);
}

.Mercado span{
  color: #ff6a00;
}

.grid-produtos{

  display:flex;

  flex-wrap:wrap;

  gap:25px;
}

grid-container {
  display: grid;
  /* Cria 2 colunas de tamanhos iguais */
  grid-template-columns: 1fr 1fr;
  /* Define o espaçamento entre as linhas e colunas */
  gap: 20px; 
}

.grid-item {
  font-size: 15px;
  margin: 10px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  background-color: #ff6a00;
  color: white;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: .3s;
}

button:hover{
  background-color: #e85f00;
}

</style>