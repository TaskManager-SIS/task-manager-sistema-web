<template>
    <div class="container-fluid mensagem">
        <Mensagem :msg="msg" :condicao="condicao" v-show="this.msg != ''"
            :class="{ 'background-green': condicao, 'background-red': !condicao }" />
    </div>
    <div class="container">
        <form class="formulario-alteracao-perfil" @submit.prevent="salvarAlteracao()">
            <div class="row">
                <div class="form-group col-md-12">
                    <label for="nome">Nome<span class="campo-obrigatorio"> * </span></label>
                    <input type="text" class="form-control" id="nome" name="nome" v-model="usuario.nome"
                        placeholder="Digite o seu nome">
                    <small v-if="errors.nome" class="form-text texto-validacao">{{ errors.nome }}</small>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-12">
                    <label for="email">E-mail<span class="campo-obrigatorio"> * </span></label>
                    <input type="" class="form-control" id="email" name="email" v-model="usuario.email"
                        placeholder="Digite o seu email">
                    <small v-if="errors.email" class="form-text texto-validacao">{{ errors.email }}</small>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-12">
                    <label for="senha">Senha<span class="campo-obrigatorio"> * </span></label>
                    <input type="password" class="form-control" id="senha" name="senha" v-model="usuario.senha"
                        placeholder="Digite a sua senha">
                    <small v-if="errors.senha" class="form-text texto-validacao">{{ errors.senha }}</small>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-12">
                    <label for="confirmar-senha">Confirmar senha<span class="campo-obrigatorio"> * </span></label>
                    <input type="password" class="form-control" id="confirmar-senha" name="confirmar-senha"
                        v-model="usuario.confirmar_senha" placeholder="Confirme a sua senha">
                    <small v-if="errors.confirmar_senha" class="form-text texto-validacao">
                        {{ errors.confirmar_senha }}
                    </small>
                </div>
            </div>
            <input class="btn-salvar mt-3" type="submit" value="Salvar">
        </form>
    </div>
</template>  

<script>

import axios from 'axios'
import Mensagem from './Mensagem.vue'

export default {
    name: "FormularioAlteracaoPerfil",
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
    mounted() {
        this.buscarPerfil()
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
        buscarPerfil() {
            var usuarioLogado = JSON.parse(sessionStorage.getItem('usuario'))
            this.usuario.nome = usuarioLogado.nome
            this.usuario.email = usuarioLogado.email
            this.usuario.ativo = true
        },
        salvarAlteracao() {
            if (this.validarCampos()) {
                axios.put("https://www.taskmanager.targetbr.biz/index.php/usuario", JSON.stringify(this.usuario))
                    .then(res => {
                        this.msg = res.data.msg
                        console.log(res)
                        if (res.data.dados === null) {
                            this.condicao = false
                        } else {
                            this.usuario = {}
                            this.condicao = true
                        }
                    })
            }
        },
        validarEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}

</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
}

.form-group {
    margin-bottom: 3%;
}

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

.formulario-alteracao-perfil {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    width: 40%;
}

.background-green {
    background-color: #2ECC71;
}

.background-red {
    background-color: #E74C3C;
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

.btn-salvar {
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
    width: 100%;
    color: #fff;
    background-color: #012030;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

@media only screen and (max-width: 500px) {
    .formulario-alteracao-perfil {
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