<script setup>
defineProps({
  nome: String,
  descricao: String,
  preco: Number,
  imagem: String
})
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

/* CARD */

.fundo-card {

width: 280px;

flex-shrink: 0;

background: white;

border-radius: 20px;

overflow: hidden;

box-shadow: 0 8px 20px rgba(0,0,0,.08);

transition: .3s;
}

.card-img-top{
  width:100%;
  height:200px;
  object-fit:contain;
}

/* CORPO */

.card-body {

    padding: 20px;
}

/* NOME */

.produto {

    text-align: center;

    font-size: 28px;

    font-weight: 700;

    color: #222;

    margin-bottom: 10px;
}

/* PREÇO */

.preco {

    text-align: center;

    color: #ff6b00;

    font-size: 22px;

    font-weight: bold;

    margin-bottom: 12px;
}

/* DESCRIÇÃO */

.descricao {

    text-align: center;

    color: #666;

    font-size: 16px;

    min-height: 45px;

    margin-bottom: 20px;
}

/* BOTÃO */

.cor-botao {

    width: 100%;

    border: none;

    border-radius: 12px;

    padding: 12px;

    background: #ff6b00;

    color: white;

    font-size: 17px;

    font-weight: 600;

    transition: 0.3s;
}

.cor-botao:hover {

    background: #ff8124;

    transform: scale(1.02);
}

</style>