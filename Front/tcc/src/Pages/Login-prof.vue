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
          O mercadinho escolar
          que <span>recompensa</span> atitudes!
        </p>

        <div class="features">

          <div class="feature">
            <h3>🏅 Recompensas</h3>
            <p>Ganhe moedas por boas atitudes</p>
          </div>

          <div class="feature">
            <h3>🛒 Troque</h3>
            <p>Troque moedas por produtos</p>
          </div>

          <div class="feature">
            <h3>📈 Acompanhe</h3>
            <p>Veja seu progresso</p>
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

        <h1 class="titulo-login">
          Teixeira
          <span>Market</span>
        </h1>

        <p class="descricao">
          Faça login para acessar o sistema
        </p>

        <Registerform />

      </div>

    </div>

  </div>

</template>

<style scoped>

/* RESET */

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* TELA */

.aluno-page{

  width: 100%;
  height: 100vh;

  display: flex;

  background-color: black;
}

/* ========================= */
/* LADO ESQUERDO */
/* ========================= */

.left-side{

  width: 50%;

  position: relative;

  background:
  linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)),
  url('@/assets/market-bg.jpg');

  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* CONTEÚDO */

.left-content{

  width: 70%;

  color: white;

  z-index: 2;
}

/* LOGO */

.logo{

  font-size: 70px;

  margin-bottom: 20px;
}

/* TÍTULO */

.logo-title{

  font-size: 72px;

  line-height: 70px;

  font-weight: bold;
}

.logo-title span{

  color: #ff6b00;
}

/* SUBTÍTULO */

.subtitle{

  margin-top: 30px;

  font-size: 28px;

  line-height: 40px;
}

.subtitle span{

  color: #ff6b00;

  font-weight: bold;
}

/* FEATURES */

.features{

  margin-top: 70px;

  display: flex;

  gap: 30px;
}

.feature h3{

  color: #ff6b00;

  margin-bottom: 10px;
}

.feature p{

  color: #ddd;
}

/* ========================= */
/* LADO DIREITO */
/* ========================= */

.right-side{

  width: 50%;

  display: flex;

  justify-content: center;
  align-items: center;
}

/* CARD */

.login-card{

  width: 550px;

  background-color: white;

  border-radius: 25px;

  padding: 50px;

  box-shadow:
  0 0 25px rgba(0,0,0,.4);
}

/* TEXTO */

.welcome{

  text-align: center;

  color: #ff6b00;

  font-weight: bold;

  margin-bottom: 10px;
}

.titulo-login{

  text-align: center;

  font-size: 50px;

  margin-bottom: 15px;
}

.titulo-login span{

  color: #ff6b00;
}

.descricao{

  text-align: center;

  color: #555;

  margin-bottom: 40px;
}
</style>