<template>
    <nav class="navbar navbar-expand-lg">
        <router-link to="" class="navbar-brand align-middle link-logo navbar-brand">
            <img :src="logo" width="30" height="30" class="d-inline-block align-top">
            Task Manager
        </router-link>
        <form class="form-inline">
            <router-link to="/cadastroUsuario">
                <button class="btn-registrar my-2 my-sm-0">Registre-se</button>
            </router-link>
            <router-link to="/">
                <button class="btn-entrar my-2 my-sm-0">Entrar</button>
            </router-link>
        </form>
    </nav>
</template>

<script>

export default {
    name: "Navbar",
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
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.link-logo:hover,
.link-logo:visited {
    color: #fff;
}

.link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

nav a {
    color: #fff;
}

.btn-entrar,
.btn-registrar {
    color: #fff;
    border: none;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px;
    font-weight: bold;
    margin-right: 10px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
}

.btn-registrar {
    background-color: #45C4B0;
}

.btn-entrar {
    background-color: #13678A;
}

@media only screen and (max-width: 500px) {
    .btn-entrar {
        width: 100%;
    }

    .btn-registrar {
        width: 100%;
    }

    .navbar {
        display: flex;
        justify-content: center;
    }
}
</style>