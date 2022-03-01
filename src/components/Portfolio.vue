<template>
  <NavbarVue />
  <AboutMe />
  <Skills />
</template>

<script>
import NavbarVue from "./Navbar.vue";
import AboutMe from "./AboutMe.vue";
import Skills from "./skills/Skills.vue";

export default {
  name: "Portfolio",
  components: {
    NavbarVue,
    AboutMe,
    Skills
  },
};
</script>