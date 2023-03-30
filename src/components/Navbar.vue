<template>
    <nav class="navbar navbar-expand-lg">
        <router-link to="" class="navbar-brand align-middle link-logo">
            <img src="../assets/img/task-manager-logo.png" width="30" height="30" class="d-inline-block align-top">
            Task Manager
        </router-link>
        <form class="form-inline">
            <router-link to="/cadastroUsuario">
                <button class="btn-registrar my-2 my-sm-0">REGISTRE-SE</button>
            </router-link>
            <router-link to="/">
                <button class="btn-entrar my-2 my-sm-0">ENTRAR</button>
            </router-link>
        </form>
    </nav>
</template>

<script>

export default {
    name: "Navbar",
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

.link-logo:hover {
    color: #fff;
}

nav a {
    color: #fff;
}

.btn-registrar {
    background-color: #45C4B0;
    color: #fff;
    border: none;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px;
    font-weight: bold;
    margin-right: 10px;
    text-decoration: none;
    text-align: center;
}

.btn-entrar {
    background-color: #13678A;
    color: #fff;
    border: none;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
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