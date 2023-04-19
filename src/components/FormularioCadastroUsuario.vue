<template>
    <div class="container-fluid mensagem">
        <Mensagem :msg="msg" :condicao="condicao" v-show="this.msg != ''"
            :class="{ 'background-green': condicao, 'background-red': !condicao }" />
    </div>
    <form class="formulario-cadastro-usuario my-5" @submit.prevent="cadastrarUsuario">
        <div class="input-container">
            <label for="nome">Nome<span class="campo-obrigatorio"> * </span></label>
            <input type="text" class="form-control" id="nome" name="nome" v-model="usuario.nome"
                placeholder="Digite o seu nome">
            <small v-if="errors.nome" class="form-text texto-validacao">{{ errors.nome }}</small>
        </div>
        <div class="input-container">
            <label for="email">E-mail<span class="campo-obrigatorio"> * </span></label>
            <input type="" class="form-control" id="email" name="email" v-model="usuario.email"
                placeholder="Digite o seu email">
            <small v-if="errors.email" class="form-text texto-validacao">{{ errors.email }}</small>
        </div>
        <div class="input-container">
            <label for="senha">Senha<span class="campo-obrigatorio"> * </span></label>
            <input type="password" class="form-control" id="senha" name="senha" v-model="usuario.senha"
                placeholder="Digite a sua senha">
            <small v-if="errors.senha" class="form-text texto-validacao">{{ errors.senha }}</small>
        </div>
        <div class="input-container">
            <label for="confirmar-senha">Confirmar senha<span class="campo-obrigatorio"> * </span></label>
            <input type="password" class="form-control" id="confirmar-senha" name="confirmar-senha"
                v-model="usuario.confirmar_senha" placeholder="Confirme a sua senha">
            <small v-if="errors.confirmar_senha" class="form-text texto-validacao">{{ errors.confirmar_senha }}</small>
        </div>
        <div class="button-container">
            <input class="btn-registrar" type="submit" value="REGISTRAR">
        </div>
    </form>
</template>  

<script>

import axios from 'axios'
import Mensagem from './Mensagem.vue'

export default {
    name: "FormularioCadastroUsuario",
    components: {
        Mensagem
    },
    data() {
        return {
            usuario: {
                nome: "",
                email: "",
                senha: "",
                confirmar_senha: ""
            },
            errors: {
                nome: "",
                email: "",
                senha: "",
                confirmar_senha: "",
            },
            msg: "",
            condicao: ""
        }
    },
    methods: {
        validarCampos() {
            this.errors = {}; 

            if (!this.usuario.nome) {
                this.errors.nome = "Informe seu nome";
            }

            if (!this.usuario.email) {
                this.errors.email = "Informe seu e-mail";
            } else if (!this.validarEmail(this.usuario.email)) {
                this.errors.email = "Informe seu e-mail válido";
            }

            if (!this.usuario.senha) {
                this.errors.senha = "Informe sua senha";
            }

            if (!this.usuario.confirmar_senha) {
                this.errors.confirmar_senha = "Digite novamente sua senha";
            }

            if (this.usuario.senha !== this.usuario.confirmar_senha) {
                this.errors.confirmar_senha = "As senhas não coincidem";
            }

            return Object.keys(this.errors).length === 0;
        },
        cadastrarUsuario() {
            if (this.validarCampos()) {
                axios.post("https://www.taskmanager.targetbr.biz/index.php/usuario", JSON.stringify(this.usuario))
                    .then(res => {
                        this.errors.nome = ""
                        this.errors.email = ""
                        this.errors.senha = ""
                        this.errors.confirmar_senha = ""
                        this.msg = res.data.msg

                        if (res.data.dados === null) {
                            this.condicao = false
                        } else {
                            this.condicao = true
                        }
                    })
            }
        },
        validarEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    },
}

</script>

<style scoped>
.mensagem {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: right;
}

.texto-validacao,
.campo-obrigatorio {
    color: red;
}

.formulario-cadastro-usuario {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    max-width: 400px;
    margin: 0 auto;
}

.background-green {
    background-color: #2ECC71;
}

.background-red {
    background-color: #E74C3C;
}

.button-container {
    display: flex;
    flex-direction: column;
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

.btn-registrar {
    font-weight: bold;
    padding: 10px;
    margin-top: 40px;
    color: #fff;
    background-color: #012030;
    border: none;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

@media only screen and (max-width: 500px) {
    .formulario-cadastro-usuario {
        width: 90%;
        padding: 20px;
    }

    .mensagem {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
}
</style>