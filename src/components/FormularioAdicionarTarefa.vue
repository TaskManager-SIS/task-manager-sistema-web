<template>
    <div class="container">
        <div class="formulario-adicionar-tarefa">
            <Mensagem :msg="msg" :condicao="condicao" v-show="msg !== ''"
                :class="[condicao ? 'background-green' : 'background-red', 'mb-2']" />
            <form @submit.prevent="adicionarTarefa">
                <div class="row">
                    <div class="form-group col-12">
                        <label for="titulo">Título<span class="campo-obrigatorio"> *</span></label>
                        <input type="text" class="form-control" id="titulo" for="titulo" v-model="tarefa.titulo">
                        <small v-if="errors.titulo" class="form-text texto-validacao">{{ errors.titulo }}</small>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-12">
                        <label for="descricao">Descrição<span class="campo-obrigatorio"> *</span></label>
                        <textarea class="form-control" id="descricao" v-model="tarefa.descricao"></textarea>
                        <small v-if="errors.descricao" class="form-text texto-validacao">{{ errors.descricao }}</small>
                    </div>
                </div>
                <button class="btn-salvar mt-3" type="submit">Salvar</button>
            </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import Mensagem from './Mensagem.vue';

export default {
    name: "FormularioAdicionarTarefa",
    components: {
        Mensagem
    },
    data() {
        return {
            tarefa: {
                titulo: '',
                descricao: '',
                usuarioId: ''
            },
            errors: {
                titulo: '',
                descricao: ''
            },
            msg: '',
            condicao: ''
        }
    },
    mounted() {
        const usuarioLogado = JSON.parse(sessionStorage.getItem('usuario'));
        this.tarefa.usuarioId = usuarioLogado.id
    },
    methods: {
        validarCampos() {
            this.errors = {};

            if (!this.tarefa.titulo) {
                this.errors.titulo = 'Informe o título';
            }

            if (!this.tarefa.descricao) {
                this.errors.descricao = 'Informe a descrição';
            }

            return Object.keys(this.errors).length === 0;
        },
        adicionarTarefa() {
            console.log(JSON.stringify(this.tarefa))
            if (this.validarCampos()) {
                axios.post('https://www.taskmanager.targetbr.biz/index.php/tarefa', JSON.stringify(this.tarefa))
                    .then(res => {
                        console.log("Teste")
                        this.msg = res.data.msg

                        if (res.data.dados === null) {
                            this.condicao = false
                        } else {
                            this.tarefa = {}
                            this.condicao = true
                        }
                    })
                    .catch(error => {
                        console.error('Erro: ', error);
                    });
            }
        }
    }
}

</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-group {
    margin-bottom: 3%;
}

.texto-validacao,
.campo-obrigatorio {
    color: red;
}

.formulario-adicionar-tarefa {
    background-color: #fff;
    padding: 2%;
    border-radius: 1%;
    width: 40%;
}

.background-green {
    background-color: #2ecc71;
}

.background-red {
    background-color: #e74c3c;
}

label {
    color: #012030;
}

.btn-salvar {
    text-transform: uppercase;
    font-weight: bold;
    padding: 4%;
    width: 100%;
    color: #fff;
    background-color: #012030;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

@media only screen and (max-width: 500px) {
    .formulario-adicionar-tarefa {
        width: 90%;
        padding: 20px;
    }
}
</style>