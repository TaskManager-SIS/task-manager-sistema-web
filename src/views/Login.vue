<template>
    <div class="login">
        <div class="container">
            <div class="titulo-tela">
                <img :src="logo" width="50" height="50" class="logo">
                <h1>Task<span class="titulo-parcial">Manager</span></h1>
            </div>
            <div class="formulario-login">
                <div class="mensagem">
                    <Mensagem v-if="mostrarMensagemErro" :msg="msgErro" class="mensagem-erro" />
                </div>
                <form @submit.prevent="logar">
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="text" class="form-control" id="email" name="email" v-model.trim="usuario.email"
                            placeholder="Digite o seu email">
                        <small v-if="errors.email" class="form-text texto-validacao">{{ errors.email }}</small>
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha</label>
                        <input type="password" class="form-control" id="senha" name="senha" v-model.trim="usuario.senha"
                            placeholder="Digite a sua senha">
                        <small v-if="errors.senha" class="form-text texto-validacao">{{ errors.senha }}</small>
                    </div>
                    <button type="submit" class="btn-entrar mt-5 mb-2">Entrar</button>
                    <p class="link-para-cadastro">
                        Ainda não está cadastrado?
                        <router-link to="/cadastroUsuario" class="link-registrar">Clique aqui e registre-se.</router-link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import Mensagem from '@/components/Mensagem.vue';
import axios from 'axios';

export default {
    name: "Login",
    components: { Mensagem },
    data() {
        return {
            usuario: {
                email: "",
                senha: ""
            },
            errors: {},
            msgErro: "",
            logo: "/assets/img/task-manager-logo.png"
        };
    },
    computed: {
        mostrarMensagemErro() {
            return this.msgErro === 'E-mail ou senha incorretos';
        }
    },
    methods: {
        validarEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        validarCampos() {
            this.errors = {};

            if (!this.usuario.email) {
                this.errors.email = "Informe seu e-mail";
            } else if (!this.validarEmail(this.usuario.email)) {
                this.errors.email = "Informe um e-mail válido";
            }

            if (!this.usuario.senha) {
                this.errors.senha = "Informe sua senha";
            }

            return Object.keys(this.errors).length === 0;
        },
        logar() {
            if (this.validarCampos()) {
                console.log(JSON.stringify(this.usuario))
                axios.post("https://www.taskmanager.targetbr.biz/index.php/usuario/buscar-pelo-email-e-senha", JSON.stringify(this.usuario))
                    .then(res => {
                        console.log(res)
                        const dados = res.data.dados;
                        if (res.data.msg === "Usuário encontrado com sucesso!" && dados.ativo) {
                            sessionStorage.setItem("autenticado", true);
                            sessionStorage.setItem("usuario", JSON.stringify(dados));
                            this.$router.push("/home");
                        } else {
                            this.msgErro = 'E-mail ou senha incorretos';
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    }
};

</script>

<style scoped>
.login {
    background-color: #0B384F;
    height: 100vh;
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

.mensagem {
    text-align: right;
    margin-bottom: 10px;
}

.mensagem-erro {
    background-color: #E74C3C;
}

.titulo-tela {
    display: flex;
    justify-content: center;
    color: #13678A;
    margin-bottom: 20px;
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
    text-transform: uppercase;
    padding: 10px;
    width: 100%;
    color: #fff;
    background-color: #012030;
    border: none;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.link-registrar {
    color: #13678A;
    font-weight: bold;
}

.texto-validacao {
    color: red;
}

@media only screen and (max-width: 500px) {
    .container {
        width: 90%;
        padding: 20px;
    }
}
</style>
