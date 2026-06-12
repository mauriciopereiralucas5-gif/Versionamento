<script setup lang="ts">
import Registerform from '@/components/Registerform.vue'
</script>

<template>

  <div class="professor-page">

    <!-- LADO ESQUERDO -->
    <div class="left-side">

      <div class="left-content">

        <div class="logo">
          👨‍🏫
        </div>

        <h1 class="logo-title">
          Teixeira
          <span>Market</span>
        </h1>

        <p class="subtitle">
          Gerencie recompensas e acompanhe o
          desempenho dos seus alunos.
        </p>

        <div class="features">

          <div class="feature">
            <div class="feature-icon">🏆</div>
            <h3>Recompense</h3>
            <p>Distribua Teixeirinhas aos alunos.</p>
          </div>

          <div class="feature">
            <div class="feature-icon">📊</div>
            <h3>Acompanhe</h3>
            <p>Veja o progresso das turmas.</p>
          </div>

          <div class="feature">
            <div class="feature-icon">📚</div>
            <h3>Gerencie</h3>
            <p>Controle atividades e resultados.</p>
          </div>

        </div>

      </div>

    </div>

    <!-- LADO DIREITO -->
    <div class="right-side">

      <div class="login-card">

        <p class="welcome">
          Bem-vindo(a), Professor(a)
        </p>

        <h1 class="titulo-market">
          Área do Professor
        </h1>

        <p class="descricao">
          Faça login para acessar o sistema
        </p>

        <Registerform
          titulo="Login Professor"
          cor="#0d6efd"
        />

      </div>

    </div>

  </div>

</template>

<style scoped>

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

/* TELA */

.professor-page{
  width:100%;
  height:100vh;
  display:flex;
}

/* ESQUERDA */

.left-side{

  width:50%;

  background:
  linear-gradient(
    rgba(0,0,0,.75),
    rgba(0,0,0,.75)
  ),
  url('https://image.slidesdocs.com/responsive-images/background/radiant-educational-setting-3d-render-of-a-classroom-with-brilliantly-illuminated-school-desks-large-windows-and-a-whiteboard-powerpoint-background_b93b4d6d07__960_540.jpg');

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
  font-size:70px;
}

.logo-title{

  font-size:80px;
  line-height:80px;

  margin-bottom:20px;
}

.logo-title span{
  color:#0d6efd;
}

.subtitle{

  font-size:28px;

  line-height:40px;

  margin-bottom:60px;
}

.features{

  display:flex;

  justify-content:space-between;

  gap:20px;
}

.feature{
  text-align:center;
  width:180px;
}

.feature-icon{
  font-size:35px;
  margin-bottom:10px;
}

.feature h3{
  color:#0d6efd;
  margin-bottom:10px;
}

.feature p{
  color:#ddd;
  font-size:14px;
}

/* DIREITA */

.right-side{

  width:50%;

  background:#111;

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

  color:#0d6efd;

  font-weight:bold;

  margin-bottom:10px;
}

.titulo-market{

  text-align:center;

  font-size:50px;

  margin-bottom:15px;

  color:#111;
}

.descricao{

  text-align:center;

  color:#666;

  margin-bottom:40px;
}

</style>