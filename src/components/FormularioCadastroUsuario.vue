<template>
    <form class="formulario-cadastro-usuario my-5" 
          method="POST" onsubmit="cadastrarUsuario()">
        <div class="input-container">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" name="nome" v-model="nome" 
                   placeholder="Digite o seu nome" required />
        </div>
        <div class="input-container">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="email" name="email" v-model="email"
                   placeholder="Digite o seu email" required />
        </div>
        <div class="input-container">
            <label for="senha" class="form-label">Senha</label>
            <input type="password" class="form-control" id="senha" name="senha" v-model="senha"
                   placeholder="Digite a sua senha" required />
        </div>

        <!--
        <div class="input-container">
            <label for="confirmar-senha">Confirmar senha</label>
            <input type="password" class="form-control" id="confirmar-senha" name="confirmar-senha"
                   v-model="confirmar_senha" placeholder="Confirme a sua senha" required />
        </div>
        -->

        <div class="button-container">
            <button type="submit" class="btn-registrar">REGISTRAR</button>
        </div>
    </form>
</template>



<script>
    export default {
        name: 'FormularioCadastroUsuario',
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