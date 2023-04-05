<template>
    <form class="formulario-cadastro-usuario my-5" @submit.prevent="cadastrarUsuario">
        <div class="input-container">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" id="nome" name="nome" v-model="state.nome" placeholder="Digite o seu nome">
        </div>
        <div class="input-container">
            <label for="email">E-mail</label>
            <input type="email" class="form-control" id="email" name="email" v-model="state.email"
                placeholder="Digite o seu email">
        </div>
        <div class="input-container">
            <label for="senha">Senha</label>
            <input type="password" class="form-control" id="senha" name="senha" v-model="state.senha"
                placeholder="Digite a sua senha">
        </div>
        <div class="input-container">
            <label for="confirmar-senha">Confirmar senha</label>
            <input type="password" class="form-control" id="confirmar-senha" name="confirmar-senha"
                v-model="state.confirmar_senha" placeholder="Confirme a sua senha">
        </div>
        <div class="button-container">
            <input class="btn-registrar" type="submit" value="REGISTRAR">
        </div>
    </form>
</template>  

<script>

import { reactive } from 'vue'
import axios from 'axios'
import api from '@/services/api';

export default {
    setup() {
        const state = reactive({
            nome: '',
            email: '',
            senha: ''
        })

        async function cadastrarUsuario() {
            const url = 'https://www.taskmanager.targetbr.biz/index.php/usuario'

            let data = {
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha
            }

            data = JSON.stringify(data)

            console.log(data)

            try {
                const response = await axios.post(url, data)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        return { state, cadastrarUsuario }
    }
}

</script>

<style scoped>
.formulario-cadastro-usuario {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    max-width: 400px;
    margin: 0 auto;
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
}
</style>