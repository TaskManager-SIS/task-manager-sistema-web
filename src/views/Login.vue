<script>
    export default {
        name: 'Login'
    }
</script>

<template>
    <div class="login">
        <div class="container align-middle">
            <div class="logo mb-2">
                <img src="../assets/img/task-manager-logo.png" width="50" height="50" 
                     class="d-inline-block align-top align-middle" aria-labelledby="task-manager" />
                <p class="logo-type align-middle" id="task-manager">Task <span style="color: #fff">Manager</span></p>
            </div>

            <form class="login-form mb-5">
                <div class="input-container">
                    <label for="email">E-mail</label>
                    <input type="email" class="form-control" id="email" name="email" v-model="email"
                           placeholder="Digite o seu email" required />
                </div>
                
                <div class="input-container">
                    <label for="senha">Senha</label>
                    <input type="password" class="form-control" id="senha" name="senha" v-model="senha"
                           placeholder="Digite a sua senha" required />
                </div>

                <div class="input-container">
                    <button class="btn-entrar" type="submit">ENTRAR</button>
                </div>
                <span class="cadastre-se">
                    <router-link to="/cadastroUsuario" class="link-cadastro">
                        Não possui cadastro?<br />
                        Crie sua conta
                    </router-link>
                </span>
            </form>
        </div><!-- div container -->
    </div>
</template>

<style scoped>
    .login {
        background-color: #0B384F;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div .logo {
        text-align: center;
    } 

    .logo-type {
        color: #13678A;
        font-size: 30px;
        margin-right: 5px;
        display: inline;
    }

    .login-form {
        background-color: #fff;
        padding: 50px 20px 20px;
        max-width: 400px;
        margin: 0 auto;
        border-radius: 4px;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .btn-entrar {
        font-weight: bold;
        padding: 10px;
        margin-top: 30px;
        color: #fff;
        background-color: #012030;
        border: none;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }

    span .cadastre-se {
        font-size: 12px;
        justify-content: center;
    }

    .link-cadastro {
        color: #13678A;
        font-weight: bold;
    }

    label {
        font-size: 1.1em;
        font-weight: bold;
        margin-bottom: 5px;
        color: #012030;
    }

    input {
        background-color: #E7E7E7;
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