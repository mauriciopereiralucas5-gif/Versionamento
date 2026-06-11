<script setup lang="ts">
import Registerform from '@/components/Registerform.vue';

</script>

<template>
  <div class="login-prof">
    <-- LADO ESQUERDO -->
  <section class="left-panel">
  <div class="overlay"></div>
  <div class="brand-content">
    <div class="logo-area">
      <div class="logo-icon">🛒</div>
        <h1 class="text-center">Login Professor</h1>
        <span>Market</span>
      
    </div>
  </div>
  <p class="description">
    O mercado escolar que 
    <span>Recompensa</span> Atitudes!
  </p>
  <div class="feature">
    <div class="icon">🏅</div>
    <h3>Recompensas</h3>
    <p>ganhe moeda por boas Atitudes</p>
  </div>
  <div class="feature">
    <div class="icon">🛒</div>
    <h3>Troque</h3>
    <p>Troque suas moedas por produtos</p>
  </div>
  <div class="feature">
    <div class="icon">📊</div>
    <h3>Acompanhe</h3>
    <p>Veja seu progesso</p>
  </div>
  </section>
  </div>

  <-- Lado direito -->
  <section class="right-painel">
    <div class="login-card">
      <div class="avantar">
        👨‍🏫
      </div>
      <h2>
        Bem-vindo
        <span>Professor!</span>
      </h2>
      <p class="subtitle">
        Faça login para acessor o sistema
      </p>
      <div class="input-group">
        <input type="text"
        placeholder="Usuario ou e-mail"
        />
        <div class="input-group">
          <input 
          type="password"
          placeholder="Senha"
        />
        </div>
        <div class="forgot">
          Entrar como Professor
        </div>
        <button class="bnt-professor">
          Entrar como Professor
        </button>
        <div class="divider">
          <span>ou</span>
        </div>
        <button class="btn-admin">
          Acessar como Administrador
        </button>
        <div class="security">
          🔒 sistema seguro e confiável
        </div>
      </div>
    </div>
  </section>

  <Registerform/>
</template>
 