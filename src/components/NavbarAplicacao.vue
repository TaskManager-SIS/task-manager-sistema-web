<template>
    <nav class="navbar navbar-expand-lg">
        <router-link to="" class="navbar-brand align-middle link-logo">
            <img :src="logo" width="30" height="30" class="d-inline-block align-top">
            Task Manager
        </router-link>
        <button class="navbar-toggler" @click="toggleNavbar" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" :class="{ 'show': isNavbarOpen }">
            <ul class="navbar-nav navbar-nav">
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/listagemDeTarefas" class="nav-link">Tarefas</router-link>
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
            isNavbarOpen: false
        };
    },
    methods: {
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        },
        logoff() {
            sessionStorage.removeItem('autenticado')
            sessionStorage.removeItem('usuario')
            this.$router.push('/')
        }
    }
}

</script>

<style scoped>

nav {
    background-color: #012030;
    padding: 15px 50px;
    width: 100%;
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

.navbar-toggler {
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
}

.navbar-toggler-icon {
    width: 1.5rem;
    height: 1.5rem;
    background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255, 255, 255, 0.8)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.navbar-collapse {
    display: none;
}

.navbar-collapse.show {
    display: block;
}
</style>
