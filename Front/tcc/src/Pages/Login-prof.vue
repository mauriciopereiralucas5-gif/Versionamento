<script setup lang="ts">
import Registerform from '@/components/Registerform.vue';

</script>

<template>
    <section class="left-panel">
      <div class="overlay"></div>

      <div class="brand-content">
        <div class="logo-area">
          <div class="logo-icon">🛒</div>

          <h1>
            Teixeira
            <span>Market</span>
          </h1>
        </div>

        <p class="description">
          O mercadinho escolar que
          <span>recompensa</span> atitudes!
        </p>

        <div class="features">

          <div class="feature">
            <div class="icon">🏅</div>
            <h3>Recompensas</h3>
            <p>Ganhe moedas por boas atitudes</p>
          </div>

          <div class="feature">
            <div class="icon">🛒</div>
            <h3>Troque</h3>
            <p>Troque suas moedas por produtos</p>
          </div>

          <div class="feature">
            <div class="icon">📊</div>
            <h3>Acompanhe</h3>
            <p>Veja seu progresso</p>
          </div>

        </div>

      </div>
    </section>

  <Registerform/>
</template>
 