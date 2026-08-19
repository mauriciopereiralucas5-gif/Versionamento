<script setup>
import CardConquista from '@/components/CardConquista.vue';
import { computed, ref } from 'vue';
const Conquistas = [

    {
        nome: 'Suas Conquistas:',
        descricao: 'Parabéns! Continue Assim!',
        NumouNome: 7,
        icon:"bi bi-trophy-fill",
        color: '#8742ed',
        unlocked: true,
        categoria: 'Outros'
    },

    {
        nome: 'Sequência Atual:',
        descricao: 'Mantenha o ritmo!',
        NumouNome: 9 ,
        icon:"bi bi-calendar-check-fill",
        color: '#4cc94a',
        unlocked: true,
        categoria: 'Frequencia'
    },

]
const categoriaSelecionada = ref('Todas')

const conquistaFiltrados = computed(() => {

let lista = Conquistas

// filtro de categoria

if (categoriaSelecionada.value !== 'Todas') {

  lista = lista.filter(
    Conquistas =>
    Conquistas.categoria === categoriaSelecionada.value
  )
}
return lista
})

</script>

<template>
    <h1 class="text-center title">
        Conquistas <span>Escolares</span>
    </h1>
    <h2 class="text-center subtitle">Veja suas conquistas ao decorrer do ano letivo!</h2>


    <div class="conquistas-grid">
        <CardConquista
        v-for="conquistas in Conquistas"
        :key="conquistas.nome"
        :nome="conquistas.nome"
        :descricao="conquistas.descricao"
        :NumouNome="conquistas.NumouNome"
        :icon="conquistas.icon"
        :color="conquistas.color"
        :unlocked="conquistas.unlocked"
        />
    </div>

    <div class="grid-tipos">
        <button class="grid-botao"
        :class="{ativo: categoriaSelecionada === 'Todas'}"
        @click="categoriaSelecionada = 'Todas'">
        Todas
        </button>
        <button class="grid-botao"
        :class="{ativo: categoriaSelecionada === 'Frequencia'}"
        @click="categoriaSelecionada = 'Frequencia'">
        Frequência
        </button>
        <button class="grid-botao"
        :class="{ativo: categoriaSelecionada === 'Atividades'}"
        @click="categoriaSelecionada = 'Atividades'">
        Atividades
        </button>
        <button class="grid-botao"
        :class="{ativo: categoriaSelecionada === 'Comportamento'}"
        @click="categoriaSelecionada = 'Comportamento'">
        Comportamento
        </button>
        <button class="grid-botao"
        :class="{ativo: categoriaSelecionada === 'Outros'}"
        @click="categoriaSelecionada = 'Outros'">
        Outros
        </button>
        <div class="grid-conquistas-categoria">
            <template v-if="categoriaSelecionada.length">
                <CardConquista
            v-for="conquistas in Conquistas"
            :key="conquistas.nome"
            :nome="conquistas.nome"
            :descricao="conquistas.descricao"
            :NumouNome="conquistas.NumouNome"
            :icon="conquistas.icon"
            :color="conquistas.color"
            :unlocked="conquistas.unlocked"
            />
            </template>

            <div
            v-else
            class="sem-conquista"
            >
            🔎 Nenhuma conquista encontrada
            <p>
                Tente procurar por outra conquista
            </p>
        </div>
        </div>
    </div>

    <div class="texto">
        <p>Em andamento...</p>
    </div>
</template>

<style scoped>

.texto p {
    text-align: center;
    font-weight: bold;
    font-size: 80px;
    padding: 20px;
    margin-top: 100px;
}

.title {
    font-weight: bold;
    font-size: 40px;
}

.title span {
    color: #ff6a00;
}

.subtitle {
    font-size: 15px;
    color: #666;
}

.conquistas-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
}

.grid-tipos {
    display: flex;
  gap: 15px;
  margin: 30px 0;
  flex-wrap: wrap;
}

.grid-botao {
    min-width: 120px;
  height: 35px;
  border: 2px solid;
  border-radius: 15px;
  background-color: #f4f4f4;
  color: #ff6a00;
  font-size: 17px;
  font-weight: 700;
  margin: 5px;
  padding: 2px;
  text-align: center;
  cursor: pointer;
  transition: .3s;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.grid-botao:hover{
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255,106,0,.25);
}

.grid-botao.ativo{
  background: #ff6a00;
  color: #fff6ef;
  border: 2px solid #ff6a00;
  box-shadow: 0 8px 20px rgba(255,106,0,.35);
}

.grid-conquistas-categoria {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
}
</style>