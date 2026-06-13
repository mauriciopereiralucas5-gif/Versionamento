<script setup>
import CardProduto from '@/components/CardProduto.vue';
</script>

<template>

    <div class="fundo-card">
  
      <img
        :src="imagem"
        :alt="nome"
        class="card-img-top"
      >
  
      <div class="card-body">
  
        <h3 class="produto">
          {{ nome }}
        </h3>
  
        <h5 class="preco">
          🪙 {{ preco }} Teixeirinhas
        </h5>
  
        <p class="descricao">
          {{ descricao }}
        </p>
  
        <button class="cor-botao">
          Ver Produto
        </button>
  
      </div>
  
    </div>
  
  </template>

<style scoped>

.produtos-grid {

display: flex;

flex-wrap: wrap;

gap: 25px;

justify-content: flex-start;

align-items: flex-start;
}
</style>