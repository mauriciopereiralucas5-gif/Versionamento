<template>
    <div class="card">
        <h1>Cadastro</h1>

        <form @submit.prevent="enviarFormulario">
            <div class="campo">
                <table>Nome</table>

                <input 
                type="text"
                v-model="form.nome"
                placeholder="Digite seu nome"
                required
                />
            </div>

            <div class="campo">
                <table>E-mail</table>

                <input
                type="email"
                v-model="form.email"
                placeholder="Digite seu email"
                required
                />

            </div>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const mensagem = ref ('')

const form = reactive({
    nome: '',
    email: ''
})

async function enviarFormulario() {
    try {

        const resposta = await fetch(
            'http://127.0.0.1:5000',
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

        console.log(dados)

    }   catch (erro) {

        console.error(erro)

        mensagem.value =
            'Erro ao enviar cadastro.'
    }
}
</script>