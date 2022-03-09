<template>
    <h1 class="text-center mt-14 text-3xl font-maven underline decoration-2">My Skills</h1>
    <div class="flex flex-wrap justify-center max-w-3xl mt-3 mx-auto">
        <SkillEntry
            title="Java"
            content="The first language I learned and which has also become my favorite language over the years."
            :rating="3"
        />
        <SkillEntry
            title="Kotlin"
            content="For some time now I've been doing my projects exclusively in Kotlin, because I genuiely like the structure of the language."
            :rating="2"
        />
        <SkillEntry
            title="Python"
            content="A language I had in school and used several times for small and private projects."
            :rating="2"
        />
        <SkillEntry
            title="Vue"
            content="Just recently I've developed the joy of working with Vue and look forward to creating future projects with it."
            :rating="1"
        />
        <SkillEntry
            title="C/C++"
            content="C/C++ accompanies me again and again during my studies, however, privately I deal little with it."
            :rating="1"
        />
    </div>
</template>

<script>
import SkillEntry from "./SkillEntry.vue";
export default {
    name: 'Skills',
    components: { SkillEntry }
}
</script>
