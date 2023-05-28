<template>
    <nav class="navbar navbar-expand-lg">
        <router-link to="" class="navbar-brand align-middle link-logo">
            <img :src="logo" width="30" height="30" class="d-inline-block align-top">
            Task Manager
        </router-link>
        <div class="" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="" class="nav-link">Tarefas</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/perfil" class="nav-link">Perfil</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="" class="nav-link" @click="logoff">Sair</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
    name: "NavbarAplicacao",
    data() {
        return {
            logo: '/assets/img/task-manager-logo.png',
        }
    },
    methods: {
        logoff() {
            sessionStorage.removeItem('autenticado');
            sessionStorage.removeItem('usuario');
            this.$router.push('/');
        }
    }
}

</script>

<style scoped>
nav {
    background-color: #012030;
    padding: 15px 50px;
}

#navbarNav {
    justify-content: end;
}

.link-logo:hover,
.link-logo:visited {
    color: #fff;
}

nav a,
nav a:hover,
nav a:visited {
    color: #fff;
    text-decoration: none;
}
</style>