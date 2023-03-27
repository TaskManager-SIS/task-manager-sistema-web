<template>
    <form class="formulario-cadastro-usuario my-5">
        <div class="input-container">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" id="nome" name="name" v-model="nome" placeholder="Digite o seu nome">
        </div>
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
            <label for="confirmar-senha">Confirmar senha</label>
            <input type="password" class="form-control" id="confirmar-senha" name="confirmar-senha"
                v-model="confirmar_senha" placeholder="Confirme a sua senha">
        </div>
        <div class="input-container">
            <button class="btn-registrar" type="submit">REGISTRAR</button>
        </div>
    </form>
</template>

<script>

export default {
    name: 'FormularioCadastroUsuario'
}

</script>

<style scoped>
.formulario-cadastro-usuario {
    background-color: #fff;
    padding: 30px;
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
    .cadastro-usuario {
        width: 80%;
    }
}
</style>