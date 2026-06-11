<script setup lang="ts">
import Registerform from '@/components/Registerform.vue';
</script>

<template>
    <!--lado esquerdo-->
    <div class="aluno-page">
        <div class="overlay"></div>
        <div class="left-content">
            <div class="logo">
          🛒
        </div>
        <h1 class="logo-title">
            Teixeira
            <span>Market</span>
        </h1>
        <p class="subtitle">
            O mercado do JTA
            que <span>recompensa</span> por um bom rendimento!
        </p>

        <div class="features">
            <div class="feature">
                <h3>🏅 Recompensas</h3>
            <p>Ganhe teixeirinhas por um bom desempenho!</p>
            </div>
            <div class="feature">
                <h3>🛒 Troque </h3>
                <p>Troque teixeirinhas por prêmios!</p>
            </div>
            <div class="feature">
                <h3>📈 Acompanhe</h3>
                <p>Acompanhe seu rendimento escolar!</p>
            </div>
        </div>
        </div>
    </div>

<!--lado direito-->

<div class="right-side">

<div class="login-card">

  <p class="welcome">
    Bem-vindo ao
  </p>

  <h1 class="titulo-login">
    Teixeira
    <span>Market</span>
  </h1>

  <p class="descricao">
    Faça login para acessar o site
  </p>

  <Registerform/>

</div>

</div>
</template>