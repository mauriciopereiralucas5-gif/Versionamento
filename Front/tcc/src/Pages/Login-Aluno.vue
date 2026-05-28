<template>
    <h1>Login Aluno</h1>
  <div class="login-page">

    <!-- Lado esquerdo -->
    <div class="left-panel">

      <div class="login-card">

        <!-- Logo -->
        <div class="logo-area">
          <h1 class="logo-title">Teixeirinha</h1>
          <p class="logo-subtitle">
            O dinheiro da nossa escola!
          </p>
        </div>

        <!-- Formulário -->
        <LoginForm />

      </div>

    </div>

    <!-- Lado direito -->
    <div class="right-panel">

      <div class="school-background">

        <!-- Escola -->
        <div class="school">
          <div class="roof"></div>

          <div class="windows">
            <div class="window" v-for="n in 6" :key="n"></div>
          </div>
        </div>

        <!-- Mascote -->
        <div class="mascot">

          <div class="money-body"></div>

          <div class="eye left-eye"></div>
          <div class="eye right-eye"></div>

          <div class="mouth"></div>

          <div class="arm left-arm"></div>
          <div class="arm right-arm"></div>

          <div class="leg left-leg"></div>
          <div class="leg right-leg"></div>

        </div>

      </div>

    </div>

  </div>
</template>
<script setup>
import LoginForm from '../components/LoginForm.vue'
</script>

<style scoped>

/* Página inteira */
.login-page{
  width:100%;
  height:100vh;

  display:flex;

  background:#f4f1e8;

  overflow:hidden;
}

/* ===================================
   LADO ESQUERDO
=================================== */

.left-panel{
  width:40%;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:40px;
}

.login-card{
  width:100%;
  max-width:420px;

  background:white;

  border-radius:35px;

  padding:50px 40px;

  box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

.logo-area{
  text-align:center;
  margin-bottom:40px;
}

.logo-title{
  font-size:48px;
  color:#34a853;
  font-weight:800;
  margin:0;
}

.logo-subtitle{
  color:#555;
  margin-top:8px;
  font-size:18px;
}

/* ===================================
   LADO DIREITO
=================================== */

.right-panel{
  width:60%;
  position:relative;

  background:linear-gradient(
    to bottom,
    #bde3ff,
    #e9f7ff
  );

  overflow:hidden;
}

/* Fundo */
.school-background{
  width:100%;
  height:100%;
  position:relative;
}

/* Chão */
.school-background::after{
  content:'';

  position:absolute;
  bottom:0;

  width:100%;
  height:40%;

  background:#98d26f;

  border-top-left-radius:120px;
}

/* ===================================
   ESCOLA
=================================== */

.school{
  position:absolute;

  top:120px;
  right:180px;

  width:280px;
  height:220px;

  background:#d79c4d;

  border:6px solid #9c6b2f;

  border-radius:10px;
}

.roof{
  width:120px;
  height:50px;

  background:#f3c06a;

  border:5px solid #9c6b2f;

  border-bottom:none;

  position:absolute;

  top:-50px;
  left:50%;
  transform:translateX(-50%);

  border-radius:15px 15px 0 0;
}

.windows{
  display:grid;
  grid-template-columns:repeat(3,1fr);

  gap:20px;

  padding:40px;
}

.window{
  width:45px;
  height:55px;

  background:#bde3ff;

  border:4px solid #7a4e1c;
}

/* ===================================
   MASCOTE
=================================== */

.mascot{
  position:absolute;

  bottom:90px;
  right:180px;

  width:180px;
  height:240px;
}

/* Corpo */
.money-body{
  width:160px;
  height:210px;

  background:#65c13d;

  border:6px solid #2d7f1d;

  border-radius:12px;

  transform:rotate(-8deg);

  position:absolute;
}

/* Olhos */
.eye{
  width:18px;
  height:18px;

  background:white;

  border-radius:50%;

  position:absolute;

  top:70px;
}

.eye::after{
  content:'';

  width:8px;
  height:8px;

  background:black;

  border-radius:50%;

  position:absolute;

  top:5px;
  left:5px;
}

.left-eye{
  left:45px;
}

.right-eye{
  left:90px;
}

/* Boca */
.mouth{
  width:45px;
  height:22px;

  border-bottom:5px solid #222;

  border-radius:50%;

  position:absolute;

  top:120px;
  left:55px;
}

/* Braços */
.arm{
  width:70px;
  height:10px;

  background:#2d7f1d;

  position:absolute;

  top:120px;

  border-radius:20px;
}

.left-arm{
  left:-45px;
  transform:rotate(25deg);
}

.right-arm{
  right:-40px;
  transform:rotate(-35deg);
}

/* Pernas */
.leg{
  width:10px;
  height:70px;

  background:#2d7f1d;

  position:absolute;

  bottom:-50px;

  border-radius:20px;
}

.left-leg{
  left:60px;
}

.right-leg{
  left:100px;
}

/* ===================================
   RESPONSIVIDADE
=================================== */

@media(max-width: 900px){

  .login-page{
    flex-direction:column;
  }

  .left-panel{
    width:100%;
    height:auto;
    padding:30px;
  }

  .right-panel{
    width:100%;
    height:400px;
  }

  .school{
    right:50%;
    transform:translateX(50%);
  }

  .mascot{
    right:50%;
    transform:translateX(50%);
  }
}

</style>