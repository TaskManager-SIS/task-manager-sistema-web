<template>
    <NavbarAplicacao />
    <h1 class="titulo-tela mb-3 mt-5">Perfil</h1>
    <FormularioAlteracaoPerfil />
</template>

<script>

import NavbarAplicacao from '@/components/NavbarAplicacao.vue';
import FormularioAlteracaoPerfil from '@/components/FormularioAlteracaoPerfil.vue'

export default {
    name: 'Perfil',
    components: { NavbarAplicacao, FormularioAlteracaoPerfil }
}

</script>

<style scoped>

.titulo-tela {
    text-align: center;
}

</style>