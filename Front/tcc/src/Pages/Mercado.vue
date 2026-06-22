<script setup>
import { ref, computed } from 'vue'
import CardProduto from '@/components/CardProduto.vue'
import Saldo from './Saldo.vue'

const categoriaSelecionada = ref('Tudo')
const pesquisa = ref("")

const produtos = [

  {
    nome: 'Chokito',
    descricao: 'Bombom Chokito',
    preco: 2,
    categoria: 'Doces',
    imagem: 'https://cdn.awsli.com.br/2500x2500/298/298064/produto/13927482/d2b5e5ef55.jpg'
  },

  {
    nome: 'Bis',
    descricao: 'Chocolate Bis',
    preco: 3,
    categoria: 'Doces',
    imagem: 'https://images.tcdn.com.br/img/img_prod/987957/bis_lacta_chocolate_ao_leite_126g_1718141_1_35c49019a3e940f4c85ad81634fc4ae7.jpg'
  },

  {
    nome: 'Trento',
    descricao: 'Chocolate Trento',
    preco: 3,
    categoria: 'Doces',
    imagem: 'https://distribuidoragirotto.com.br/files/1035957/a18b02f327598abdde545d6ad2a2d6f0'
  },

  {
    nome: 'Laka Oreo',
    descricao: 'Barra de Laka Branco com Oreo',
    preco: 4,
    categoria: 'Doces',
    imagem: 'https://www.havan.com.br/media/catalog/product/b/a/barra-de-chocolate-laka-oreo-lacta_924301.jpg'
  },

  {
    nome: 'Coca-Cola',
    descricao: 'Refrigerante',
    preco: 4,
    categoria: 'Bebidas',
    imagem: 'https://www.carolcestas.com/lojas/00025470/prod/coca350_01.jpg'
  }

]

const produtosFiltrados = computed(() => {

let lista = produtos

// filtro de categoria

if (categoriaSelecionada.value !== 'Tudo') {

  lista = lista.filter(
    produto =>
    produto.categoria === categoriaSelecionada.value
  )
}

// filtro de pesquisa

if (pesquisa.value) {

  lista = lista.filter(
    produto =>
    produto.nome
      .toLowerCase()
      .includes(
        pesquisa.value.toLowerCase()
      )
  )
}

return lista
})
</script>

<template>

<h1 class="Mercado text-center">Mercado
  <span>Escolar</span>
</h1>
<h2 class="subtitle text-center">Troque seus Teixeirinhas por diversos produtos!</h2>

<div class="pesquisa.container">
  <input
  v-model="pesquisa"
  type="text"
  placeholder="🔍 Pesquisar Produto..."
  class="barra-pesquisa"
  >
</div>

<div class="contador-produtos">
  📦 {{ produtosFiltrados.length}}

  <span v-if="produtosFiltrados.length === 1">
    produto encontrado
  </span>

  <span v-else>
    produtos encontrados
  </span>

</div>

<div class="categoria">
  <button class="grid-item"
  :class="{ativo: categoriaSelecionada === 'Tudo'}" 
  @click="categoriaSelecionada = 'Tudo'">
  🛒​Tudo
</button>
<button class="grid-item"
:class="{ativo: categoriaSelecionada === 'Doces'}" 
@click="categoriaSelecionada = 'Doces'">
🍫​Doces
</button>
<button class="grid-item"
:class="{ativo: categoriaSelecionada === 'Bebidas'}"
@click="categoriaSelecionada = 'Bebidas'">
🧋​Bebidas
</button>
<button class="grid-item"
:class="{ativo: categoriaSelecionada === 'Salgados'}" 
@click="categoriaSelecionada = 'Salgados'">
🥐​Salgados
</button>
<button class="grid-item"
:class="{ativo: categoriaSelecionada === 'Brindes'}"
@click="categoriaSelecionada = 'Brindes'">
🎁​Brindes
</button>
</div>

  <div class="mercado">

    <div class="grid-produtos">

      <template v-if="produtosFiltrados.length">
        <CardProduto
  v-for="produto in produtosFiltrados"
  :key="produto.nome"
  :nome="produto.nome"
  :descricao="produto.descricao"
  :preco="produto.preco"
  :imagem="produto.imagem"
  />
      </template>

      <div 
      v-else
      class="sem-produtos"
      >

      🔎 Nenhum produto encontrado

      <p>
        Tente pesquisar outro nome
      </p>
    </div>
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

.subtitle{
  font-weight: bold;
  color: #666;
  font-size: 15px;
}

.pesquisa-container{
  margin: 25px 0;
  display: flex;
  justify-content: center;
}

.barra-pesquisa{
  width: 450px;
  height: 55px;
  padding: 0 20px;
  border: 2px solid #ff6a00;
  border-radius: 15px;
  outline: none;
  font-size: 17px;
  transition: .3s;
}

.barra-pesquisa:focus{
  box-shadow: 0 0 15px rgba(rgba(255,106,0,.25));
}

.contador-produtos{
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: 600;
  color: #444;
}

.sem-produtos{
  width: 100%;
  padding: 50px;
  text-align: center;
  background: white;
  border-radius: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #ff6a00;
  box-shadow: 0 5px 20px rgba(0,0,0,.08);
}

.sem-produtos p{
  margin-top: 15px;
  font-size: 16px;
  color: #666;
  font-weight: normal;
}

.categorias{
  display: flex;
  gap: 15px;
  margin: 30px 0;
  flex-wrap: wrap;
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
  min-width: 140px;
  height: 55px;
  border: 2px solid #ff6a00;
  border-radius: 15px;
  background-color: #fff6ef;
  color: #ff6a00;
  font-size: 17px;
  font-weight: 700;
  margin: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: .3s;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.grid-item:hover{
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255,106,0,.25);
}

.grid-item.ativo{
  background: #ff6a00;
  color: #fff6ef;
  border: 2px solid #ff6a00;
  box-shadow: 0 8px 20px rgba(255,106,0,.35);
}

</style>