import { createRouter, createWebHistory } from 'vue-router'
import CadastroUsuario from '../views/CadastroUsuario.vue'
import Login from '../views/Login.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/cadastroUsuario',
        name: 'CadastroUsuario',
        component: CadastroUsuario
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router