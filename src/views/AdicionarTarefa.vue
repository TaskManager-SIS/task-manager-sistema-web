<template>
    <NavbarAplicacao />
    <h1 class="titulo-tela mb-3 mt-5">Cadastrar Tarefa</h1>
    <FormularioAdicionarTarefa />
</template>

<script>

import NavbarAplicacao from '@/components/NavbarAplicacao.vue';
import FormularioAdicionarTarefa from '@/components/FormularioAdicionarTarefa.vue';

export default {
    name: "AdicionarTarefa",
    components: {
        NavbarAplicacao,
        FormularioAdicionarTarefa
    }
}

</script>

<style scoped>
.titulo-tela {
    text-align: center;
}
</style>

