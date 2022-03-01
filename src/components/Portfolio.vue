<template>
  <NavbarVue />
  <AboutMe />
</template>

<script>
import NavbarVue from "./nav/Navbar.vue";
import AboutMe from "./AboutMe.vue";

export default {
  name: "Portfolio",
  components: {
    NavbarVue,
    AboutMe
  },
};
</script>