<script setup lang="ts">
import Registerform from '@/components/Registerform.vue'
</script>

<template>
  <div class="aluno-page">

    <!-- LADO ESQUERDO -->
    <div class="left-side">

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
          O mercadinho escolar que
          <span>recompensa</span> atitudes!
        </p>

        <div class="features">

          <div class="feature">
            <div class="feature-icon">🏅</div>
            <h3>Recompensas</h3>
            <p>Ganhe teixeirinhas por boas notas</p>
          </div>

          <div class="feature">
            <div class="feature-icon">🛒</div>
            <h3>Troque</h3>
            <p>Troque teixeirinhas por produtos</p>
          </div>

          <div class="feature">
            <div class="feature-icon">📈</div>
            <h3>Acompanhe</h3>
            <p>Veja seu desempenho</p>
          </div>

        </div>

      </div>

    </div>

    <!-- LADO DIREITO -->
    <div class="right-side">

      <div class="login-card">

        <p class="welcome">
          Bem-vindo ao
        </p>

        <h1 class="titulo-market">
          Teixeira <span>Market</span>
        </h1>

        <p class="descricao">
          Faça login para acessar o sistema
        </p>

        <Registerform
  titulo="Cadastro do Aluno"
  cor="#ff6b00"
/>
      </div>

    </div>

  </div>
</template>