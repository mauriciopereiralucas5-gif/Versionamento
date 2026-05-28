<template>

    <form class="login-form">
  
      <!-- Campo código -->
      <div class="input-group">
  
        <span class="icon">👨‍🏫</span>
  
        <input
          type="text"
          placeholder="Gmail do Professor"
        />
  
      </div>
  
      <!-- Campo senha -->
      <div class="input-group">
  
        <span class="icon">🔒</span>
  
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="Senha"
        />
  
        <!-- Mostrar senha -->
        <button
          type="button"
          class="eye-button"
          @click="togglePassword"
        >
          
        </button>
  
      </div>
  
      <!-- Botão -->
      <button class="login-button">
        Entrar
      </button>
  
      <!-- Opções extras -->
      <div class="extra-options">
  
        <label>
          <input type="checkbox">
          Lembrar login
        </label>
  
        <a href="#">
          Recuperar senha
        </a>
  
      </div>
  
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
  
  /* Form */
  
  .login-form{
    display:flex;
    flex-direction:column;
  
    gap:20px;
  }
  
  /* Inputs */
  
  .input-group{
    display:flex;
    align-items:center;
  
    border:2px solid #d9e2ec;
  
    border-radius:14px;
  
    padding:15px 18px;
  
    transition:0.3s;
  
    background:#fff;
  }
  
  .input-group:focus-within{
    border-color:#1f4e79;
  
    box-shadow:
      0 0 0 4px rgba(31,78,121,0.1);
  }
  
  /* Ícone */
  
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
  }
  
  /* Botão mostrar senha */
  
  .eye-button{
    border:none;
    background:none;
  
    cursor:pointer;
  
    font-size:18px;
  }
  
  /* Botão login */
  
  .login-button{
    background:#1f4e79;
  
    color:white;
  
    border:none;
  
    padding:16px;
  
    border-radius:14px;
  
    font-size:17px;
    font-weight:700;
  
    cursor:pointer;
  
    transition:0.3s;
  }
  
  .login-button:hover{
    background:#173958;
  }
  
  /* Opções extras */
  
  .extra-options{
    display:flex;
    justify-content:space-between;
    align-items:center;
  
    margin-top:5px;
  
    font-size:14px;
  }
  
  .extra-options a{
    color:#1f4e79;
  
    text-decoration:none;
  
    font-weight:600;
  }
  
  .extra-options a:hover{
    text-decoration:underline;
  }
  
  </style>