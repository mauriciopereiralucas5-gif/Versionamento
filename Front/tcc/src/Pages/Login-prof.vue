<template>
    <h1>Login Prof</h1>
    <div class="login-page">
  
      <!-- Painel esquerdo -->
      <div class="left-panel">
  
        <div class="login-card">
  
          <!-- Título -->
          <div class="logo-area">
  
            <h1 class="logo-title">
              Portal do Professor
            </h1>
  
            <p class="logo-subtitle">
              Acesse o sistema acadêmico
            </p>
  
          </div>
  
          <!-- Formulário -->
          <LoginFormProfessor />
  
        </div>
  
      </div>
  
      <!-- Painel direito -->
      <div class="right-panel">
  
        <!-- Fundo -->
        <div class="background">
  
          <!-- Círculos decorativos -->
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
  
          <!-- Card informativo -->
          <div class="info-card">
  
            <h2>
              Área do Professor
            </h2>
  
            <p>
              Gerencie notas, frequência,
              atividades e acompanhe o
              desempenho dos alunos.
            </p>
  
          </div>
  
        </div>
  
      </div>
  
    </div>
  </template>
  
  <script setup>
  import LoginFormProfessor from '../components/LoginFormProfessor.vue'
  </script>
  
  <style scoped>
  
  /* ===================================
     PÁGINA
  =================================== */
  
  .login-page{
    width:100%;
    height:100vh;
  
    display:flex;
  
    overflow:hidden;
  
    background:#f5f7fa;
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
  
    padding:50px 40px;
  
    border-radius:30px;
  
    box-shadow:
      0 10px 30px rgba(0,0,0,0.08);
  }
  
  /* Logo */
  
  .logo-area{
    text-align:center;
    margin-bottom:40px;
  }
  
  .logo-title{
    font-size:42px;
    color:#1f4e79;
  
    margin:0;
  
    font-weight:800;
  }
  
  .logo-subtitle{
    color:#666;
    margin-top:10px;
  
    font-size:17px;
  }
  
  /* ===================================
     LADO DIREITO
  =================================== */
  
  .right-panel{
    width:60%;
  
    position:relative;
  
    background:
      linear-gradient(
        135deg,
        #1f4e79,
        #3c78b5
      );
  
    overflow:hidden;
  }
  
  /* Fundo */
  
  .background{
    width:100%;
    height:100%;
  
    position:relative;
  }
  
  /* Círculos decorativos */
  
  .circle{
    position:absolute;
  
    border-radius:50%;
  
    background:rgba(255,255,255,0.08);
  }
  
  .circle-1{
    width:400px;
    height:400px;
  
    top:-100px;
    right:-100px;
  }
  
  .circle-2{
    width:250px;
    height:250px;
  
    bottom:50px;
    left:80px;
  }
  
  /* Card lateral */
  
  .info-card{
    position:absolute;
  
    top:50%;
    left:50%;
  
    transform:
      translate(-50%, -50%);
  
    width:70%;
  
    background:rgba(255,255,255,0.1);
  
    backdrop-filter:blur(10px);
  
    padding:50px;
  
    border-radius:25px;
  
    color:white;
  
    box-shadow:
      0 8px 25px rgba(0,0,0,0.2);
  }
  
  .info-card h2{
    font-size:42px;
    margin-bottom:20px;
  }
  
  .info-card p{
    font-size:20px;
  
    line-height:1.8;
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
    }
  
    .right-panel{
      width:100%;
      height:350px;
    }
  
    .info-card{
      width:85%;
      padding:30px;
    }
  
    .info-card h2{
      font-size:30px;
    }
  
    .info-card p{
      font-size:16px;
    }
  }
  
  </style>