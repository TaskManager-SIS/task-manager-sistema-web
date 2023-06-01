<template>
    <NavbarAplicacao />
    <DashboardTarefas />
</template>

<script>

import DashboardTarefas from '@/components/DashboardTarefas.vue';
import NavbarAplicacao from '@/components/NavbarAplicacao.vue';

export default {
    name: "Home",
    components: { NavbarAplicacao, DashboardTarefas }
}

</script>

<style scoped></style>