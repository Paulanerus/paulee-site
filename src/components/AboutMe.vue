<template>
    <div class="mt-24 shadow-lg rounded-md max-w-2xl mx-auto container-anim">
        <div class="p-4 m-4">
            <h1 class="font-roboto text-default-dark text-6xl -mb-2">Hello there!</h1>
            <p
                class="text-lg"
            >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutMe",
}
</script>

<style scoped>
.container-anim {
    animation: fadeIn 0.45s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        margin-top: 17rem;
    }
    to {
        opacity: 1;
        margin-top: 6rem;
    }
}
</style>