<template>
    <div
        class="bg-default-dark text-default-white h-14 flex items-center justify-between container-anim shadow-lg"
    >
        <span class="text-4xl ml-4">Paul.</span>
        <div class="space-x-7 mr-4 text-lg">
            <a class="relative" href>Kontakt</a>
            <a class="relative" href="https://github.com/Paulanerus" target="_blank">Github</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
};
</script>

<style>
.container-anim {
    animation: fadeIn 0.6s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

a::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform: scaleX(0);
    transition: transform 0.18s ease;
}

a:hover::before {
    transform: scaleX(1);
}
</style>