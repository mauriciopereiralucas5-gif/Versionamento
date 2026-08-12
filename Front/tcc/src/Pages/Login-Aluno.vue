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
  color="#ff6b00"
/>
      </div>

    </div>

  </div>
</template>

<style scoped>

.aluno-page{
  display:flex;
  height:100vh;
  width:100%;
}

/* ESQUERDA */

.left-side{
  width:50%;
  position:relative;

  background:
  linear-gradient(
    rgba(0,0,0,.75),
    rgba(0,0,0,.75)
  ),
  url('https://png.pngtree.com/background/20250205/original/pngtree-supermarket-aisle-with-product-on-shelves-blurred-background-picture-image_15628036.jpg');

  background-size:cover;
  background-position:center;

  display:flex;
  justify-content:center;
  align-items:center;
}

.left-content{
  width:75%;
  color:white;
}

.logo{
  font-size:60px;
}

.logo-title{
  font-size:90px;
  line-height:90px;
  margin-bottom:25px;
}

.logo-title span{
  color:#ff6b00;
}

.subtitle{
  font-size:30px;
  line-height:45px;
}

.subtitle span{
  color:#ff6b00;
  font-weight:bold;
}

.features{
  margin-top:80px;
  display:flex;
  justify-content:space-between;
}

.feature{
  text-align:center;
  width:150px;
}

.feature-icon{
  font-size:35px;
  margin-bottom:10px;
}

.feature h3{
  color:#ff6b00;
  margin-bottom:10px;
}

.feature p{
  font-size:14px;
  color:#ddd;
}

/* DIREITA */

.right-side{
  width:50%;
  background:black;

  display:flex;
  justify-content:center;
  align-items:center;
}

.login-card{

  width:675px;

  background:white;

  border-radius:35px;

  padding:20px;

  box-shadow:
  0 10px 40px rgba(0,0,0,.3);
}

.welcome{
  text-align:center;
  color:#ff6b00;
  font-weight:bold;
  font-size:22px;
}

.titulo-market{
  text-align:center;
  font-size:40px;
  margin-top:10px;
}

.titulo-market span{
  color:#ff6b00;
}

.descricao{
  text-align:center;
  color:#666;
  margin-top:20px;
  margin-bottom:40px;
  font-size:20px;
}

</style>