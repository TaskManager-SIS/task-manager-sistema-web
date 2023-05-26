<template>
    <div class="login">
        <div class="container formulario-com-titulo">
            <div class="titulo-tela align-middle">
                <img :src="logo" width="50" height="50" class="logo">
                <h1>Task<span class="titulo-parcial">Manager</span></h1>
            </div>
            <form class="formulario-login mt-3" @submit.prevent="logar">
                <div class="row">
                    <div class="col-md-12 form-group">
                        <label for="email">E-mail</label>
                        <input type="email" class="form-control" id="email" name="email" v-model="usuario.email"
                            placeholder="Digite o seu email">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 form-group">
                        <label for="senha">Senha</label>
                        <input type="password" class="form-control" id="senha" name="senha" v-model="usuario.senha"
                            placeholder="Digite a sua senha">
                    </div>
                </div>
                <input class="btn-entrar mt-5" type="submit" value="ENTRAR">
                <span class="link-para-cadastro">Ainda não está cadastrado? <router-link to="/cadastroUsuario"
                        class="link-registrar">Clique aqui e
                        registre-se.</router-link></span>
            </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            usuario: {
                email: "",
                senha: ""
            },
            logo: '/assets/img/task-manager-logo.png'
        }
    },
    methods: {
        logar() {
            axios.post('https://www.taskmanager.targetbr.biz/index.php/usuario/buscar-pelo-email-e-senha', JSON.stringify(this.usuario))
                .then(res => {
                    if (res.data.msg === "Usuário encontrado com sucesso!" && res.data.dados.ativo === true) {
                        sessionStorage.setItem('autenticado', true);
                        sessionStorage.setItem('usuario', JSON.stringify(res.data.dados));
                        this.$router.push('/home');
                    } else {
                        alert('Usuário não encontrado!')
                    }
                }).catch(error => {
                    console.error(error);
                })
        }
    }
}

</script>

<style scoped>
.manager {
    color: #fff;
}

.link-registrar {
    color: #13678A;
    font-weight: bold;
}

.titulo-tela {
    display: flex;
    justify-items: center;
    justify-content: center;
    color: #13678A;
}

.logo {
    margin-right: 1%;
}

.titulo-parcial {
    color: #fff;
}

.link-para-cadastro {
    font-size: 0.75rem;
}

.form-group {
    margin-bottom: 3%;
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
    border-radius: 4px;
    max-width: 400px;
    margin: 0 auto;
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
    width: 100%;
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