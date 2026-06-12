<template>

    <div class="card-registro">
  
      <h1
        class="titulo"
        :style="{ color: cor }"
      >
        {{ titulo }}
      </h1>
  
      <form @submit.prevent="enviarFormulario">
  
        <div class="campo">
  
          <label>Nome</label>
  
          <input
            type="text"
            v-model="form.nome"
            placeholder="Digite seu nome"
            required
          />
  
        </div>
  
        <div class="campo">
  
          <label>E-mail</label>
  
          <input
            type="email"
            v-model="form.email"
            placeholder="Digite seu e-mail"
            required
          />
  
        </div>
  
        <div class="campo">
  
          <label>Senha</label>
  
          <input
            type="password"
            v-model="form.senha"
            placeholder="Digite sua senha"
            required
          />
  
        </div>
  
        <button
          type="submit"
          class="botao-login"
          :style="{ backgroundColor: cor }"
        >
          Entrar
        </button>
  
      </form>
  
    </div>
  
  </template>

<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  titulo: {
    type: String,
    default: 'Cadastro'
  },

  cor: {
    type: String,
    default: '#ff6b00'
  }
})

const mensagem = ref('')
const resultado = ref('')

const form = reactive({
  nome: '',
  email: '',
  senha: ''
})

async function enviarFormulario() {
  try {

    const resposta = await fetch(
      'http://127.0.0.1:5000/cadastro',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(form)
      }
    )

    const dados = await resposta.json()

    mensagem.value = dados.mensagem
    resultado.value = dados.resultado

  } catch (erro) {

    console.error(erro)

    mensagem.value =
      'Erro ao enviar cadastro.'
  }
}
</script>

<style scoped>

.card-registro{
  width:100%;
}

.titulo{
  text-align:left;
  margin-bottom:20px;
  font-size:25px;
}

.campo{
  display:flex;
  flex-direction:column;
  margin-bottom:20px;
}

.campo label{
  margin-bottom:8px;
  font-weight:50;
}

.campo input{

  height:30px;

  border:1px solid #ddd;

  border-radius:10px;

  padding-left:20px;

  font-size:18px;
}

.campo input:focus{

  outline:none;

  border-color:#ff6b00;

  box-shadow:
  0 0 10px rgba(255,107,0,.2);
}

.botao-login{

  width:100%;
  height:40px;

  border:none;

  border-radius:15px;

  color:white;

  font-size:20px;
  font-weight:bold;

  cursor:pointer;

  transition:.3s;
}

.botao-login:hover{

  transform:translateY(-2px);
}

</style>