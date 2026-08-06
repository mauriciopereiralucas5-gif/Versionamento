<template>
  <aside class="sidebar">

    <!-- Logo -->
    <div class="brand">

      <div class="logo">
        <i class="bi bi-cart-fill"></i>
      </div>

      <div class="brand-text">
        <h2>Teixeira</h2>
        <h3>Market</h3>
      </div>

    </div>

    <!-- Perfil -->

    <div class="student-card">

      <div class="avatar">
        <i class="bi bi-person-fill"></i>
      </div>

      <h4>Lucas</h4>

      <span>3º Desenvolvimento de Sistemas</span>

    </div>

    <!-- Menu -->

    <nav class="menu">

      <router-link to="/home" class="item">
      <i class="bi bi-house icon"></i><span>Início</span>
      </router-link>

      <router-link to="/mercado" class="item">
        <i class="bi bi-bag icon"></i><span>Loja</span>
      </router-link>

      <router-link to="/carrinho" class="item">
        <i class="bi bi-cart icon"></i><span>Meu Carrinho</span>
      </router-link>

      <router-link to="/teixeirinhas" class="item">
        <i class="bi bi-coin icon"></i><span>Teixeirinhas</span>
      </router-link>

      <router-link to="/conquistas" class="item">
        <i class="bi bi-trophy icon"></i><span>Conquistas</span>
      </router-link>

      <router-link to="/desempenho" class="item">
        <i class="bi bi-bar-chart icon"></i><span>Desempenho Escolar</span>
      </router-link>

      <router-link to="/historico" class="item">
        <i class="bi bi-clipboard2-data icon"></i><span>Histórico</span>
      </router-link>

      <router-link to="/perfil" class="item">
        <i class="bi bi-person icon"></i><span>Meu Perfil</span>
      </router-link>

    </nav>

    <button class="logout">
      <i class="bi bi-door-open-fill icon"></i><span>Sair</span>
    </button>

    <!-- Carteira -->

    <div class="wallet">

      <div class="wallet-icon">
        <i class="bi bi-coin"></i>
      </div>

      <span class="wallet-title">
        Saldo Atual
      </span>

      <h2>125</h2>
      <h3>Teixeirinhas</h3>
    </div>

  </aside>
</template>

<script setup lang="ts">
</script>

<style scoped>

/* SIDEBAR */

.sidebar{

width:300px;

height:100dvh;

position:fixed;

left:0;
top:0;

overflow-y:auto;

overflow-x:hidden;

background:#111;

z-index:999;

}

/* LOGO */

.brand {

  display: flex;
  align-items: center;

  gap: 15px;

  margin-bottom: 35px;
}

.logo {
  
  color: #ff6b00;
  font-size: 45px;
  padding: 10px;
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

  color: #e85f00;
  font-size: 80px;
  margin-bottom: 10px;
  height: 120px;
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

  border-radius: 15px;

  transition: 0.3s;

  font-weight: 500;
}

.item span{
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
}

.icon {
  font-size: 18px;
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

  margin-top: 20px;
  width: 250px;
  margin-left: 15px;

  background: linear-gradient(
    135deg,
    #232323,
    #444444
  );

  margin-bottom: 50px;

  border-radius: 20px;

  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  color: white;
}

.wallet-icon {

  font-size: 40px;
  color: #ff6b00;
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

/* BOTÃO SAIR */

.logout {

  margin-top: 20px;
  height: 50px;
  width: 275px;
  text-align: left;
  border: none;
  margin: 10px;

  border-radius: 10px;

  background:#111;

  color: white;

  font-size: 16px;

  cursor: pointer;

  transition: 0.3s;
}

.logout:hover {

  background: #e85f00;

  transform: translateY(-2px);
}

.logout span {
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
}

</style>