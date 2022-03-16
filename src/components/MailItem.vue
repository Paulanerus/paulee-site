<template>
    <a
        class="text-neutral-600 left-5 fixed bottom-1 pt-100 mb-16 font-maven hover:text-default-dark invisible sm:visible"
        href="mailto:paul@paulee.dev"
    >paul@paulee.dev</a>
</template>

<script>
</script>

<style scoped>
a {
    writing-mode: vertical-rl;
}

a::after {
    position: fixed;
    content: "";
    background-color: #525252;
    height: 60px;
    width: 1.5px;
    left: 29px;
    bottom: 0;
}
</style>