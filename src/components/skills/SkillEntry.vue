<template>
    <div
        class="max-w-xs border border-default-dark rounded-md shadow-lg transition ease-in-out hover:-translate-y-4 m-4 hover:shadow-2xl"
    >
        <div class="font-mave p-4">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl mb-3">{{ title }}</h1>
                <div>
                  <span v-for="i in rating" class="material-icons text-default-dark text-base">star_rate</span>
                </div>
            </div>
            <p class="text-neutral-600">{{ content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkillsEntry',
    props: {
        title: String,
        content: String,
        rating: Number,
    },
}
</script>
