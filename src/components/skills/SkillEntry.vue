<template>
    <div
        class="max-w-xs border border-default-dark rounded-md shadow-lg transition ease-in-out hover:-translate-y-4 m-4"
    >
        <div class="font-mave p-4">
            <div>
                <h1 class="text-2xl mb-3">{{ title }}</h1>
            </div>
            <p class="text-neutral-600">{{ content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Entry",
    props: {
        title: String,
        content: String
    },
}
</script>