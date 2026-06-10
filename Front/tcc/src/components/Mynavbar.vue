<script>
import {BApp} from 'bootstrap-vue-next'
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">Teixeirinha</a> -->
    <router-link class="nav-link" to="/home">Teixeirinha</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- <a class="nav-link" href="../Pages/Cardapio.vue">Mercado</a> -->
          <router-link class="nav-link" to="/mercado">Mercado</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="../Pages/Cardapio.vue">Mercado</a> -->
           <router-link class="nav-link" to="/historico">Histórico de Compras</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="../Pages/Cardapio.vue">Mercado</a> -->
           <router-link class="nav-link" to="/login-aluno">Login Aluno</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="../Pages/Cardapio.vue">Mercado</a> -->
          <router-link class="nav-link" to="/login-prof">Login Prof</router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<style scoped>
/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* FUNDO PRINCIPAL */
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #f4f7ff, #edf2ff);
  font-family: "Poppins", sans-serif;
  color: #1e293b;
  padding: 30px;
}

/* =========================
   NAVBAR
========================= */
.navbar {
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);

  border-radius: 22px;

  padding: 18px 35px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow:
    0 10px 30px rgba(37, 99, 235, 0.08),
    0 2px 10px rgba(0, 0, 0, 0.04);

  border: 1px solid rgba(255, 255, 255, 0.6);
}

/* LOGO */
.logo-area {
  display: flex;
  align-items: center;
  gap: 14px;
}

/* CÍRCULO DA LOGO */
.logo-circle {
  width: 58px;
  height: 58px;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
  font-weight: bold;
  color: white;

  background: linear-gradient(135deg, #2563eb, #4f46e5);

  box-shadow:
    0 10px 20px rgba(37, 99, 235, 0.3),
    inset 0 2px 5px rgba(255, 255, 255, 0.4);

  transition: 0.3s;
}

.logo-circle:hover {
  transform: scale(1.08) rotate(5deg);
}

/* TEXTO DA LOGO */
.logo-text h1 {
  font-size: 28px;
  font-weight: 700;

  background: linear-gradient(135deg, #2563eb, #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  letter-spacing: 0.5px;
}

.logo-text span {
  font-size: 13px;
  color: #64748b;
}

/* MENU */
.menu {
  display: flex;
  gap: 28px;
}

.menu a {
  text-decoration: none;
  color: #334155;

  font-size: 15px;
  font-weight: 500;

  position: relative;

  transition: 0.3s;
}

.menu a::after {
  content: "";

  position: absolute;
  left: 0;
  bottom: -6px;

  width: 0%;
  height: 3px;

  border-radius: 10px;

  background: linear-gradient(90deg, #2563eb, #4f46e5);

  transition: 0.3s;
}

.menu a:hover {
  color: #2563eb;
}

.menu a:hover::after {
  width: 100%;
}

/* PESQUISA */
.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-box input {
  width: 250px;
  height: 48px;

  border: none;
  outline: none;

  padding: 0 18px;

  border-radius: 14px;

  background: #f8fafc;

  font-size: 14px;

  transition: 0.3s;

  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
}

.search-box input:focus {
  background: white;

  box-shadow:
    0 0 0 4px rgba(37, 99, 235, 0.15),
    inset 0 2px 5px rgba(0, 0, 0, 0.05);
}

.search-box button {
  height: 48px;
  padding: 0 22px;

  border: none;
  border-radius: 14px;

  background: linear-gradient(135deg, #2563eb, #4f46e5);

  color: white;
  font-weight: 600;

  cursor: pointer;

  transition: 0.3s;

  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.25);
}

.search-box button:hover {
  transform: translateY(-2px);

  box-shadow: 0 15px 25px rgba(37, 99, 235, 0.35);
}

/* =========================
   HERO SECTION
========================= */
.hero {
  margin-top: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 50px;
}

/* TEXTO */
.hero-content {
  max-width: 650px;
}

.tag {
  display: inline-block;

  background: rgba(37, 99, 235, 0.1);
  color: #2563eb;

  padding: 10px 18px;

  border-radius: 999px;

  font-size: 14px;
  font-weight: 600;

  margin-bottom: 20px;
}

.hero-content h2 {
  font-size: 62px;
  line-height: 1.1;

  margin-bottom: 24px;
}

.hero-content h2 span {
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-content p {
  font-size: 18px;
  line-height: 1.8;

  color: #64748b;

  margin-bottom: 35px;
}

/* BOTÕES */
.buttons {
  display: flex;
  gap: 18px;
}

.primary,
.secondary {
  height: 55px;
  padding: 0 28px;

  border-radius: 16px;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.3s;
}

.primary {
  border: none;

  color: white;

  background: linear-gradient(135deg, #2563eb, #4f46e5);

  box-shadow: 0 15px 25px rgba(37, 99, 235, 0.25);
}

.primary:hover {
  transform: translateY(-3px);
}

.secondary {
  border: 2px solid #dbeafe;

  background: white;
  color: #2563eb;
}

.secondary:hover {
  background: #eff6ff;
}

/* CARD */
.hero-card {
  width: 320px;

  background: white;

  border-radius: 28px;

  padding: 30px;

  box-shadow:
    0 20px 40px rgba(37, 99, 235, 0.12),
    0 5px 15px rgba(0, 0, 0, 0.04);

  border: 1px solid rgba(255, 255, 255, 0.8);
}

.card-top span {
  color: #64748b;
  font-size: 14px;
}

.card-top h3 {
  font-size: 48px;

  margin-top: 12px;

  background: linear-gradient(135deg, #2563eb, #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-bottom {
  margin-top: 35px;

  display: flex;
  justify-content: space-between;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info small {
  color: #94a3b8;
}

.info strong {
  font-size: 22px;
  color: #1e293b;
}

/* RESPONSIVO */
@media (max-width: 1100px) {
  .navbar {
    flex-direction: column;
    gap: 25px;
  }

  .hero {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-card {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .menu {
    flex-wrap: wrap;
    justify-content: center;
  }

  .search-box {
    width: 100%;
  }

  .search-box input {
    width: 100%;
  }

  .hero-content h2 {
    font-size: 42px;
  }

  .buttons {
    flex-direction: column;
    width: 100%;
  }

  .primary,
  .secondary {
    width: 100%;
  }
}
</style>