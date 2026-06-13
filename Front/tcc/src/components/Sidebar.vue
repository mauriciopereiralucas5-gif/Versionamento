<template>
  <aside class="sidebar">

    <!-- Logo -->
    <div class="brand">

      <div class="logo">
        🛒
      </div>

      <div class="brand-text">
        <h2>Teixeira</h2>
        <h3>Market</h3>
      </div>

    </div>

    <!-- Perfil -->

    <div class="student-card">

      <div class="avatar">
        👨‍🎓
      </div>

      <h4>Lucas</h4>

      <span>3º Desenvolvimento de Sistemas</span>

    </div>

    <!-- Menu -->

    <nav class="menu">

      <router-link to="/home" class="item">
        🏠 Dashboard
      </router-link>

      <router-link to="/mercado" class="item">
        🛒 Loja Escolar
      </router-link>

      <router-link to="/teixeirinhas" class="item">
        🪙 Meus Teixeirinhas
      </router-link>

      <router-link to="/conquistas" class="item">
        🏆 Conquistas
      </router-link>

      <router-link to="/desempenho" class="item">
        📚 Desempenho Escolar
      </router-link>

      <router-link to="/historico" class="item">
        📋 Histórico de Compras
      </router-link>

      <router-link to="/perfil" class="item">
        👤 Meu Perfil
      </router-link>

    </nav>

    <!-- Carteira -->

    <div class="wallet">

      <div class="wallet-icon">
        🪙
      </div>

      <span class="wallet-title">
        Saldo Atual
      </span>

      <h2>125</h2>

      <small>Teixeirinhas</small>

    </div>

    <!-- Botão -->

    <button class="logout">
      🚪 Sair
    </button>

  </aside>
</template>

<script setup lang="ts">
</script>

<style scoped>

/* SIDEBAR */

.sidebar {

width: 300px;
height: 100vh;

background: #111;

position: fixed;

left: 0;
top: 0;

overflow-y: auto;

overflow-x: hidden;
}

/* LOGO */

.brand {

  display: flex;
  align-items: center;

  gap: 15px;

  margin-bottom: 35px;
}

.logo {

  font-size: 45px;
}

.brand-text h2 {
  color: #bbbbbb;
  margin: 0;
  font-size: 28px;
}

.brand-text h3 {

  margin: 0;

  color: #ff6b00;

  font-size: 28px;
}

/* PERFIL */

.student-card {

  background: #1d1d1d;

  border-radius: 20px;

  padding: 20px;

  text-align: center;

  margin-bottom: 30px;

  border: 1px solid #2a2a2a;
}

.avatar {

  font-size: 55px;

  margin-bottom: 10px;
}

.student-card h4 {
  color: aliceblue;
  margin-bottom: 5px;
}

.student-card span {

  font-size: 13px;

  color: #bbbbbb;
}

/* MENU */

.menu {

  display: flex;

  flex-direction: column;

  gap: 8px;
}

.item {

  text-decoration: none;

  color: white;

  padding: 14px 16px;

  border-radius: 12px;

  transition: 0.3s;

  font-weight: 500;
}

.item:hover {

  background: #ff6b00;

  transform: translateX(5px);
}

.router-link-active {

  background: #ff6b00;
}

/* CARTEIRA */

.wallet {

  margin-top: auto;

  background: linear-gradient(
    135deg,
    #ff6b00,
    #ff8c1a
  );

  border-radius: 20px;

  padding: 10px;

  text-align: center;

  color: white;
}

.wallet-icon {

  font-size: 40px;

  margin-bottom: 10px;
}

.wallet-title {

  display: block;

  margin-bottom: 8px;

  font-size: 14px;
}

.wallet h2 {

  font-size: 38px;

  margin: 0;
}

.wallet small {

  opacity: 0.9;
}

/* BOTÃO SAIR */

.logout {

  margin-top: 20px;

  height: 55px;

  border: none;

  border-radius: 15px;

  background: #ff6b00;

  color: white;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  transition: 0.3s;
}

.logout:hover {

  background: #e85f00;

  transform: translateY(-2px);
}

</style>