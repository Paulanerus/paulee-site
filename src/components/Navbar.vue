<template>
    <div
        class="text-default-dark h-14 flex items-center justify-between shadow-lg fixed left-0 top-0 w-full backdrop-blur-md z-10"
    >
        <span class="text-4xl ml-4">Paul.</span>
        <div class="space-x-7 mr-4 text-lg">
            <a class="relative" href="mailto:paul@paulee.dev">Contact</a>
            <a class="relative" href="https://github.com/Paulanerus" target="_blank">Github</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
};
</script>

<style scoped>
a::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #1a1b1f;
    transform: scaleX(0);
    transition: transform 0.18s ease;
}

a:hover::before {
    transform: scaleX(1);
}
</style>
