<template>
    <div class="message-container mt-3">
        {{ msg }}
    </div>
</template>

<script>

export default {
    name: "Mensagem",
    props: {
        msg: String
    }
}

</script>

<style scoped>
.message-container {
    color: white;
    background-color: #2ECC71;
    border-radius: 4px;
    text-align: center;
    padding: 15px;
    font-weight:400;
    border: none;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

</style>
