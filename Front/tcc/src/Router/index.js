import { createRouter, createWebHistory } from  'vue-router'
import About from '@/Pages/About.vue'
import Home from '@/Pages/Home.vue'
import Mercado from '@/Pages/Mercado.vue'
import LoginAluno from '@/Pages/Login-Aluno.vue'
import LoginProf from '@/Pages/Login-prof.vue'

const routes = [
    { path: '/home', name: 'home', component: Home},
    { path: '/sobre', name: 'sobre', component: About},
    { path: '/mercado', name: 'mercado', component: Mercado},
    { path: '/login-aluno', name: 'login-aluno', component: LoginAluno},
    { path: '/login-prof', name: 'login-prof', component: LoginProf},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router