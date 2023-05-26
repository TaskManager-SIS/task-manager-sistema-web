import { createRouter, createWebHistory } from 'vue-router'
import CadastroUsuario from '../views/CadastroUsuario.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Perfil from '../views/Perfil.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/cadastroUsuario',
        name: 'CadastaroUsuario',
        component: CadastroUsuario
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true 
        }
    },
    {
        path: '/perfil',
        name: 'Perfil',
        component: Perfil,
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (sessionStorage.getItem('autenticado')) {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }
})

export default router