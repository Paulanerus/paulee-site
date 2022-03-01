<template>
  <NavbarVue />
  <AboutMe />
  <Skills />
  <Projects />
</template>

<script>
import NavbarVue from "./Navbar.vue";
import AboutMe from "./AboutMe.vue";
import Skills from "./skills/Skills.vue";
import Projects from "./projects/Projects.vue";

export default {
  name: 'Portfolio',
  components: {
    NavbarVue,
    AboutMe,
    Skills,
    Projects
  },
};
</script>