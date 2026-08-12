<script setup lang="ts">
import CardConquista from '@/components/CardConquista.vue';

const listaConquistas = [

    {
        nome: 'Total de Conquistas',
        descricao: 'Parabéns! Continue Assim!',
        NumouNome: 7,
        icon:"bi bi-trophy-fill",
        color: '#7e47b8',
        unlocked: true
    },

    {
        nome: 'Sequência Atual',
        descricao: 'Mantenha o ritmo!',
        NumouNome: 9 ,
        icon:"bi bi-calendar-check-fill",
        color: '#4cc94a',
        unlocked: true

    },

    
]

</script>

<template>
    <h1 class="text-center title">
        Conquistas <span>Escolares</span>
    </h1>
    <h2 class="text-center subtitle">Veja suas conquistas ao decorrer do ano letivo!</h2>

    <div class="conquistas-grid">
        <CardConquista
        v-for="conquistas in listaConquistas"
        :key="conquistas.nome"
        :nome="conquistas.nome"
        :descricao="conquistas.descricao"
        :NumouNome="conquistas.NumouNome"
        :icon="conquistas.icon"
        :color="conquistas.color"
        :unlocked="conquistas.unlocked"

        />
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
    gap: 25px;
}
</style>