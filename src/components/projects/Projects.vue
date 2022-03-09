<template>
    <h1 class="text-center mt-14 text-3xl font-maven underline decoration-2">My Projects</h1>
    <div class="flex flex-wrap justify-center max-w-3xl mt-3 mx-auto">
        <ProjectEntry
            url="https://github.com/Paulanerus/paulee-site"
            title="My Portfolio"
            content="My website you are currently looking at, was made with the JS framework Vue, packaged CSS from Tailwind and Vite as build tool."
            :tags="['Vue', 'Vite', 'TailwindCSS']"
        />
        <ProjectEntry
            url="https://github.com/Paulanerus/Commands-Plus"
            title="Commands+"
            content="Commands+ is a framework designed to simplify the implementation of commands. It is completely written in Java."
            :tags="['Java', 'Framework']"
        />
        <ProjectEntry
            url="https://mysterymod.net/"
            title="MysteryMod"
            content="I spent several months working in a small team on the development of the game modification MysteryMod. The language we used was Java."
            :tags="['Java', 'Minecraft', 'Modification', 'Desktop']"
        />
        <ProjectEntry
            url="https://github.com/Paulanerus/lockme"
            title="LockMe"
            content="An open source password manager written in Kotlin and using the Jetbrains Compose framework to create the graphical user interface. It is currently in an early state and still under development."
            :tags="['Kotlin', 'Password Manager', 'Jetbrains Compose', 'Desktop']"
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