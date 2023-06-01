<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-3 box total-tarefas mb-2">
                Quantidade total de tarefas: {{ tarefas.total }}
            </div>
            <div class="col-12 col-md-3 box tarefas-concluidas mb-2">
                Quantidade de tarefas concluídas: {{ tarefas.concluidas }}
            </div>
            <div class="col-12 col-md-3 box tarefas-canceladas mb-2">
                Quantidade de tarefas canceladas: {{ tarefas.canceladas }}
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'DashboardTarefas',
    data() {
        return {
            tarefas: {
                total: 0,
                concluidas: 0,
                canceladas: 0
            }
        }
    },
    mounted() {
        this.carregarTarefas();
    },
    methods: {
        carregarTarefas() {
            const usuarioLogado = JSON.parse(sessionStorage.getItem('usuario'));
            axios.get('https://www.taskmanager.targetbr.biz/index.php/tarefa')
                .then(response => {
                    response.data.dados.forEach(element => {
                        if (element.usuario_id == usuarioLogado.id) {
                            this.tarefas.total++;
                            switch (element.status) {
                                case 'Concluido':
                                    this.tarefas.concluidas++;
                                    break;
                                case 'Cancelado':
                                    this.tarefas.canceladas++;
                                    break;
                            }
                        }
                    });
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao fazer a requisição:', error);
                });
        }
    }
}

</script>

<style scoped>
.box {
    color: #fff;
    text-align: center;
    padding: 4%;
    border-radius: 5px;
}

.total-tarefas {
    background-color: #3498DB;
    margin-left: 1rem;
    margin-right: 1rem;
}

.tarefas-concluidas {
    background-color: #2ECC71;
    margin-right: 1rem;
}

.tarefas-canceladas {
    background-color: #E74C3C;
    margin-right: 1rem;
}
</style>