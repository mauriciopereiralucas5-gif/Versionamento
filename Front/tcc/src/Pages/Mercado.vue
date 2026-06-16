<script setup>
import CardProduto from '@/components/CardProduto.vue'
</script>

<template>

  <div class="mercado">

    <h1 class="text-center">Mercado Escolar</h1>

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
        :preco="4"
        imagem="https://distribuidoragirotto.com.br/files/1035957/a18b02f327598abdde545d6ad2a2d6f0"
      />

      <CardProduto
        nome="Trento"
        descricao="Chocolate Trento"
        :preco="4"
        imagem="https://distribuidoragirotto.com.br/files/1035957/a18b02f327598abdde545d6ad2a2d6f0"
      />

    </div>

  </div>

</template>

<style scoped>

.grid-produtos{

  display:flex;

  flex-wrap:wrap;

  gap:25px;
}

</style>