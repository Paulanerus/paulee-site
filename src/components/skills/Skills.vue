<template>
    <h1 class="text-center mt-14 text-3xl font-maven underline decoration-2">My Skills</h1>
    <div class="flex flex-wrap justify-center max-w-3xl mt-3 mx-auto">
        <SkillEntry
            title="Java"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
            :rating="3"
        />
        <SkillEntry
            title="Kotlin"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
            :rating="2"
        />
        <SkillEntry
            title="Python"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
            :rating="2"
        />
        <SkillEntry
            title="Vue"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
            :rating="1"
        />
        <SkillEntry
            title="C/C++"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
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
