import { createRouter, createWebHistory } from 'vue-router'
import CadastroUsuario from '../views/CadastroUsuario.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Perfil from '../views/Perfil.vue'
import AdicionarTarefa from '../views/AdicionarTarefa.vue'
import ListagemDeTarefas from '../views/ListagemDeTarefas.vue'

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
    },
    {
        path: '/adicionarTarefa',
        name: 'AdicionarTarefa',
        component: AdicionarTarefa,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/listagemDeTarefas',
        name: 'ListagemDeTarefas',
        component: ListagemDeTarefas,
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
    var usuarioLogado = JSON.parse(sessionStorage.getItem('usuario'))
    if (to.meta.requiresAuth) {
        if (sessionStorage.getItem('autenticado') && usuarioLogado.ativo === true) {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }
})

export default router