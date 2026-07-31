<script setup>
import { ref, computed } from 'vue'
import CardProduto from '@/components/CardProduto.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function abrirCarrinho(){
  router.push('/carrinho')
}

const saldo = ref(125)

const categoriaSelecionada = ref('Tudo')
const pesquisa = ref("")
const quantidadeCarrinho = ref(0)

const produtos = [

  {
    nome: 'Chokito',
    descricao: 'Bombom Chokito',
    preco: 2,
    categoria: 'Doces',
    imagem: 'https://americanas.vtexassets.com/arquivos/ids/471271-768-auto/28319636_1SZ.webp?v=638750826861670000&quality=9'
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

function adicionarCarrinho(produto){

quantidadeCarrinho.value++

console.log(produto.nome)

}

</script>

<template>

  <div class="cabecalho">
    <h1 class="Mercado">
    Mercado <span>Escolar</span>
  </h1>

  <div class="saldo-moedas">
    <i class="bi bi-coin"></i>
    {{ saldo }} Teixeirinhas
  </div>

  </div>
<h2 class="subtitle text-center">Troque seus Teixeirinhas por diversos produtos!</h2>

<div class="topo-mercado">

<input
  v-model="pesquisa"
  type="text"
  placeholder= "Pesquisar Produto..."
  class="barra-pesquisa"
>

<button
  class="botao-carrinho"
  @click="abrirCarrinho"
>

  <i class="bi bi-cart-fill"></i>

  <span class="contador-carrinho">
    {{ quantidadeCarrinho }}
  </span>

</button>

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

  @adicionar="adicionarCarrinho(produto)"
  />
      </template>

      <div 
      v-else
      class="sem-produtos"
      >

      🔎 Nenhum produto encontrado

      <p>
        Tente pesquisar por outro nome
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

.topo-mercado{

display:flex;

align-items:center;

justify-content:space-between;

gap:20px;

margin:15px 0;
}

.cabecalho{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
    margin-top: 15px;
}

.saldo-moedas{
    height: 45px;
    padding: 0 10px;
    border: 2px solid #ff6a00;
    border-radius: 15px;
    background: #fff7ef;

    display: flex;
    align-items: center;
    gap: 10px;

    color: #ff6a00;
    font-size: 15px;
    font-weight: bold;
}

.saldo-moedas i{

font-size:20px;
}

.pesquisa-container{
  margin: 25px 0;
  display: flex;
  justify-content: center;
}

.botao-carrinho{

position: relative;

width: 55px;
height: 55px;

border: none;

border-radius: 15px;

background: white;

color: #ff6b00;

font-size: 28px;

cursor: pointer;

transition: .25s;

box-shadow: 0 5px 15px rgba(0,0,0,.08);

display: flex;

justify-content: center;
align-items: center;
}

.botao-carrinho:hover{

background:#ff6b00;

color:white;

transform: translateY(-4px) scale(1.05);

box-shadow:0 12px 25px rgba(255,106,0,.25);
}

.botao-carrinho i{

font-size:25px;
}

.contador-carrinho{

position:absolute;

top:-6px;
right:-6px;

width:24px;
height:24px;

border-radius:50%;

background:#ff3b30;

color:white;

font-size:13px;

font-weight:bold;

display:flex;

justify-content:center;
align-items:center;

border:2px solid white;
}

.barra-pesquisa{
  width: 70vw;
  height: 55px;
  padding: 0 15px;
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