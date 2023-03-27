<template>
    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">
            <img src="../assets/img/task-manager-logo.png" width="30" height="30" class="d-inline-block align-top">
            Task Manager
        </a>
        <form class="form-inline">
            <button class="btn-registrar my-2 my-sm-0" type="submit">REGISTRE-SE</button>
            <button class="btn-entrar my-2 my-sm-0" type="submit">ENTRAR</button>
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
}

.btn-entrar {
    background-color: #13678A;
    color: #fff;
    border: none;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px;
    font-weight: bold;
}

</style>