<template>

    <form class="login-form">
  
      <!-- Matrícula -->
      <div class="input-group">
  
        <span class="icon">👤</span>
  
        <input
          type="text"
          placeholder="Matrícula"
        />
  
      </div>
  
      <!-- Senha -->
      <div class="input-group">
  
        <span class="icon">🔒</span>
  
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="Senha"
        />
  
        <button
          type="button"
          class="eye-button"
          @click="togglePassword"
        >
          👁
        </button>
  
      </div>
  
      <!-- Botão -->
      <button class="login-button">
        Entrar
      </button>
  
      <!-- Recuperação -->
      <p class="forgot-password">
        Esqueceu sua senha?
      </p>
  
    </form>
  
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showPassword = ref(false)
  
  function togglePassword(){
    showPassword.value = !showPassword.value
  }
  </script>
  
  <style scoped>
  
  .login-form{
    display:flex;
    flex-direction:column;
    gap:20px;
  }
  
  /* Grupo input */
  .input-group{
    display:flex;
    align-items:center;
  
    border:2px solid #ddd;
  
    border-radius:12px;
  
    padding:14px 18px;
  
    transition:0.3s;
  }
  
  .input-group:focus-within{
    border-color:#34a853;
  }
  
  .icon{
    margin-right:12px;
    font-size:18px;
  }
  
  /* Input */
  input{
    flex:1;
  
    border:none;
    outline:none;
  
    font-size:16px;
    background:none;
  }
  
  /* Botão olho */
  .eye-button{
    background:none;
    border:none;
  
    cursor:pointer;
  
    font-size:18px;
  }
  
  /* Botão entrar */
  .login-button{
    background:#28a745;
    color:white;
  
    border:none;
  
    padding:16px;
  
    border-radius:12px;
  
    font-size:18px;
    font-weight:bold;
  
    cursor:pointer;
  
    transition:0.3s;
  }
  
  .login-button:hover{
    background:#1f8a39;
  }
  
  /* Esqueceu senha */
  .forgot-password{
    text-align:center;
    color:#2e7d32;
  
    font-weight:600;
  
    cursor:pointer;
  }
  
  </style>