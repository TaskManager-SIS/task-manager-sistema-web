<template>
    <div class="container mt-5">
        <ul class="lista-de-tarefas col-12">
            <button class="btn btn-primary btn-adicionar-tarefa mb-2" @click="adicionarTarefa">
                <i class="fas fa-plus"></i>
            </button>
            <li v-for="tarefa in tarefas" :key="tarefa.id" class="tarefa-item mb-2">
                <div class="input-group">
                    <div class="input-group-prepend" :class="{ 'input-group-append': true }">
                        <input type="checkbox" class="check-box" :id="tarefa.id" v-model="tarefa.concluido"
                            :for="tarefa.id">
                    </div>
                    <span :class="{ 'titulo-tarefa': true, 'tarefa-concluida': tarefa.concluido }">
                        {{ tarefa.titulo }}
                    </span>
                    <button class="delete-icon" @click="removerTarefa(tarefa)">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'ListaDeTarefas',
    data() {
        return {
            tarefas: []
        };
    },
    mounted() {
        this.carregarTarefas();
    },
    methods: {
        adicionarTarefa() {
            this.$router.push('/adicionarTarefa');
        },
        carregarTarefas() {
            const usuarioLogado = JSON.parse(sessionStorage.getItem('usuario'));
            axios
                .get('https://www.taskmanager.targetbr.biz/index.php/tarefa')
                .then(response => {
                    this.tarefas = response.data.dados.filter(
                        element => element.usuario_id === usuarioLogado.id && element.status !== 'Cancelado'
                    );
                    this.ativarDesativarCheckBoxes();
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao fazer a requisição:', error);
                });
        },
        ativarDesativarCheckBoxes() {
            this.tarefas.forEach(tarefa => {
                if (tarefa.status === 'Concluido' || tarefa.status === 'Cancelado') {
                    this.ativarCheckBox(tarefa);
                } else {
                    this.desativarCheckBox(tarefa);
                }
            });
        },
        ativarCheckBox(tarefa) {
            tarefa.concluido = true;
        },
        desativarCheckBox(tarefa) {
            tarefa.concluido = false;
        },
        alterarStatus(tarefa) {
            const novoStatus = tarefa.concluido ? 'Em andamento' : 'Concluido';
            axios
                .put('https://www.taskmanager.targetbr.biz/index.php/tarefa/atualizar-status', {
                    id: tarefa.id,
                    status: novoStatus
                })
                .then(response => {
                    tarefa.status = novoStatus;
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao atualizar o status da tarefa:', error);
                });
        },
        removerTarefa(tarefa) {
            axios
                .post('https://www.taskmanager.targetbr.biz/index.php/tarefa/atualizar-status', {
                    id: tarefa.id,
                    status: 'Cancelado'
                })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao atualizar o status da tarefa:', error);
                });
        }
    }
};
</script>

<style scoped>
.check-box {
    font-weight: bold;
}

.btn-adicionar-tarefa {
    text-transform: uppercase;
    text-align: center;
}

.cor-verde {
    background-color: #2ECC71;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.lista-de-tarefas {
    list-style-type: none;
    width: 60%;
}

.tarefa-item {
    background-color: #3498DB;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.checkbox-label {
    position: relative;
    width: 20px;
    height: 20px;
    border: 1px solid #3498DB;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.checkbox-label:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #3498DB;
}

.input-group-prepend {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 6px;
    padding-left: 2%;
    padding-right: 2%;
}

.titulo-tarefa {
    color: #fff;
    padding-left: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
    font-size: 16px;
    flex: 1;
}

.tarefa-concluida {
    text-decoration: line-through;
}

.delete-icon {
    background-color: transparent;
    border: none;
    padding: 0;
    padding-right: 1%;
    margin: 0;
    color: #fff;
    cursor: pointer;
    transition: color 0.2s;
}
</style>
