<template>
  <NavbarVue />
  <AboutMe />
  <Skills />
  <Projects />
  <MailItem />
</template>

<script>
import NavbarVue from "./components/Navbar.vue";
import AboutMe from "./components/AboutMe.vue";
import Skills from "./components/skills/Skills.vue";
import Projects from "./components/projects/Projects.vue";
import MailItem from "./components/MailItem.vue";


export default {
  name: 'App',
  components: {
    NavbarVue,
    AboutMe,
    Skills,
    Projects,
    MailItem
},
};
</script>