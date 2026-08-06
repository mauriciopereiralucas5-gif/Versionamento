import { createRouter, createWebHistory } from 'vue-router'

import AuthLayout from '@/Layouts/AuthLayout.vue'
import MainLayout from '@/Layouts/MainLayout.vue'
import Home from '@/Pages/Home.vue'
import Mercado from '@/Pages/Mercado.vue'
import LoginAluno from '@/Pages/Login-Aluno.vue'
import LoginProf from '@/Pages/Login-prof.vue'
import Historico from '@/Pages/Historico.vue'
import Saldo from '@/Pages/Saldo.vue'
import Desempenho from '@/Pages/Desempenho.vue'
import Conquistas from '@/Pages/Conquistas.vue'
import Perfil from '@/Pages/Perfil.vue'
import Carrinho from '@/Pages/Carrinho.vue'
import CadastroProduto from '@/Pages/CadastroProduto.vue'


const routes = [

    {
      path: '/',
      component: AuthLayout,
  
      children: [
  
        {
          path: 'login-aluno',
          name: 'login-aluno',
          component: LoginAluno
        },
  
        {
          path: 'login-prof',
          name: 'login-prof',
          component: LoginProf
        }
  
      ]
    },
  
    {
      path: '/',
      component: MainLayout,
  
      children: [
  
        {
          path: 'home',
          name: 'home',
          component: Home
        },
  
        {
          path: 'mercado',
          name: 'mercado',
          component: Mercado
        },
  
        {
          path: 'historico',
          name: 'historico',
          component: Historico
        },

        {
            path: 'teixeirinhas',
            name: 'teixeirinhas',
            component: Saldo
        },

        {
            path: 'desempenho',
            name: 'desempenho',
            component: Desempenho
        },

        {
            path: 'conquistas',
            name: 'conquistas',
            component: Conquistas
        },

        {
            path: 'perfil',
            name: 'perfil',
            component: Perfil
        },

        {
          path: 'carrinho',
          name: 'carrinho',
          component: Carrinho
      },

      {
        path: 'cadastro-produto',
        name: 'cadastro-produto',
        component: CadastroProduto, meta:{requiresAuth: true},
      },
        
  
      ]
    }
  
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('userToken');

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/LoginProf');
  }else{
    next();
  }
})

export default router