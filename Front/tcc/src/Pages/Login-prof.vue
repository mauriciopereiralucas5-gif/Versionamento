<script setup lang="ts">
import Registerform from '@/components/Registerform.vue';

</script>

<template>
  <div class="login-prof">
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


  <Registerform/>
</template>
 