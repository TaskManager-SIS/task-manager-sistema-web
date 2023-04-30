<template>
    <Navbar />
    <FormularioCadastroUsuario />
</template>

<script>

import FormularioCadastroUsuario from '@/components/FormularioCadastroUsuario.vue';
import Navbar from '@/components/Navbar.vue';

export default {
    name: "CadastroUsuario",
    components: {
        Navbar,
        FormularioCadastroUsuario
    }
}

</script>
