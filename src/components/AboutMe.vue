<template>
    <div class="mt-14 shadow-lg rounded-md max-w-2xl mx-auto container-anim">
        <div class="p-4 m-4">
            <h1 class="font-roboto text-default-dark text-5xl mb-1">Hello there!</h1>
            <p class="text-lg font-maven">
                My name is Paul and I am a {{ age }} year old computer science student from Germany.
                In school I was already interested in software development and quickly found my way to
                Java. Since then I deepened my knowledge in other languages/frameworks, like Kotlin, Python or Vue.
                I plan to finish my bachelor in spring 2025.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    data() {
        return {
            age: 0,
        };
    },
    mounted() {
        const date = new Date();
        this.age = date.getFullYear() - 2002 - (date.getDay() >= 16 && date.getMonth() >= 7 ? 0 : 1);
    },
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
        margin-top: 3.5rem;
    }
}
</style>