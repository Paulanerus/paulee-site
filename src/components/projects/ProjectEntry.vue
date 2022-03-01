<template>
    <a :href="url" target="_blank">
        <div class="flex justify-center space-x-6 transition ease-in-out hover:-translate-y-4 m-4">
            <div class="font-maven shadow-lg p-4">
                <div class="border-l-2 border-default-dark">
                    <h1 class="text-2xl mb-3 ml-2">{{ title }}</h1>
                </div>
                <p class="text-neutral-600">{{ content }}</p>
                <div class="flex justify-items-start space-x-4 text-neutral-400 text-sm mt-3">
                    <p v-for="tag in this.tags">{{ tag }}</p>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'ProjectEntry',
    props: {
        url: String,
        title: String,
        content: String,
        tags: Array,
    },
}
</script>