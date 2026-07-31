<script setup>

defineProps({
  nome: String,
  descricao: String,
  preco: Number,
  imagem: String
})

const emit = defineEmits(['adicionar'])

</script>

<template>

  <div class="produto-card">

    <div class="imagem-container">
      <img
        :src="imagem"
        :alt="nome"
      >
    </div>

    <div class="conteudo">

      <h3>{{ nome }}</h3>

      <p>{{ descricao }}</p>

      <div class="preco">
        🪙 {{ preco }}
      </div>

      <button @click="emit('adicionar')">
        Adicionar ao Carrinho
      </button>
    </div>

  </div>

</template>

<style scoped>

.produto-card{

  width:280px;

  background:white;

  border-radius:20px;

  overflow:hidden;

  box-shadow:
  0 8px 20px rgba(0,0,0,.08);

  transition:.3s;
}

.produto-card:hover{

  transform:translateY(-8px);

  box-shadow:
  0 15px 35px rgba(0,0,0,.15);
}

.imagem-container{

  height:220px;

  background:#f8f9fa;

  display:flex;

  justify-content:center;

  align-items:center;
}

.imagem-container img{

  width:80%;

  height:80%;

  object-fit:contain;
}

.conteudo{

  padding:20px;
  font-size: 15px;
  font-weight: bolder;
}

.conteudo h3{

  text-align:center;

  font-size:28px;

  font-weight:700;
}

.conteudo p{

  text-align:center;

  color:#666;

  margin:15px 0;
}

.preco{

  text-align:center;

  font-size:24px;

  font-weight:bold;

  color:hsl(25, 100%, 50%);
}

button{

  width:100%;

  margin-top:20px;

  border:none;

  border-radius:12px;

  padding:12px;

  background:#ff6b00;

  color:white;

  font-size:16px;

  font-weight:600;

  cursor:pointer;

  transition:.3s;
}

button:hover{

  background:#e85f00;
}

</style>