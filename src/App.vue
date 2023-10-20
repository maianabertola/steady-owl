<script setup lang="ts"></script>

<template>
  <header>
    <div>
      <NavBar></NavBar>
    </div>
  </header>

  <RouterView />
  <footer><Footer></Footer></footer>
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped></style>
