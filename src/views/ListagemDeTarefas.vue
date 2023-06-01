<template>
    <NavbarAplicacao />
    <ListaDeTarefas />
</template>

<script>

import NavbarAplicacao from '@/components/NavbarAplicacao.vue';
import ListaDeTarefas from '@/components/ListaDeTarefas.vue';

export default {
    name: 'ListagemDeTarefas',
    components: {
        NavbarAplicacao,
        ListaDeTarefas
    }
}

</script>

