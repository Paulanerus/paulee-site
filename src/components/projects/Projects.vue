<template>
    <h1 class="text-center mt-14 text-3xl font-maven underline decoration-2">My Projects</h1>
    <div class="flex flex-wrap justify-center max-w-3xl mt-3 mx-auto">
        <ProjectEntry
            url="https://github.com/Paulanerus"
            title="Project A"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
            :tags="['Kotlin', 'Desktop', 'Mobile']"
        />
        <ProjectEntry
            url="https://github.com/Paulanerus"
            title="Project B"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
            :tags="['Java', 'Desktop']"
        />
        <ProjectEntry
            url="https://github.com/Paulanerus"
            title="Project C"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
            :tags="['Vue', 'Vite']"
        />
    </div>
</template>

<script>
import ProjectEntry from "./ProjectEntry.vue";
export default {
    name: "Projects",
    components: { ProjectEntry }
}
</script>