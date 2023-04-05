<template>
    <div class="login">
        <div class="container form-logo align-middle">
            <div class="logo-nome mb-2">
                <img :src="logo" :alt="alt" width="50" height="50"
                    class="logo-tm d-inline-block align-top align-middle">
                <span class="nome-tm align-middle">Task<span class="manager">Manager</span></span>
            </div>
            <form class="formulario-login mb-5">
                <div class="input-container">
                    <label for="email">E-mail</label>
                    <input type="email" class="form-control" id="email" name="email" v-model="email"
                        placeholder="Digite o seu email">
                </div>
                <div class="input-container">
                    <label for="senha">Senha</label>
                    <input type="password" class="form-control" id="senha" name="senha" v-model="senha"
                        placeholder="Digite a sua senha">
                </div>
                <div class="input-container">
                    <button class="btn-entrar" type="submit">ENTRAR</button>
                </div>
                <span class="para-cadastrar">Ainda não está cadastrado? <router-link to="/cadastroUsuario"
                        class="link-registrar">Clique aqui e
                        registre-se.</router-link></span>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            logo: '/assets/img/task-manager-logo.png'
        }
    }
}

</script>

<style scoped>

.manager {
    color: #fff;
}
.para-cadastrar {
    font-size: 12px;
    justify-content: center;
}

.logo-tm {
    margin-right: 5px;
}

.nome-tm {
    color: #13678A;
    font-size: 30px;
}

.logo-nome {
    text-align: center;
}

.link-registrar {
    color: #13678A;
    font-weight: bold;
}

.login {
    background-color: #0B384F;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.formulario-login {
    background-color: #fff;
    padding: 20px;
    padding-top: 50px;
    border-radius: 4px;
    max-width: 400px;
    margin: 0 auto;
}

.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #012030;
}

input {
    background-color: #E7E7E7;
    border: none;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.btn-entrar {
    font-weight: bold;
    padding: 10px;
    margin-top: 40px;
    color: #fff;
    background-color: #012030;
    border: none;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

@media only screen and (max-width: 500px) {
    .form-logo {
        width: 90%;
        padding: 20px;
    }
}
</style>