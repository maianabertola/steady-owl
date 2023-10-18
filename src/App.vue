<script setup lang="ts"></script>

<template>
  <header>
    <div>
      <NavBar></NavBar>
    </div>
  </header>

  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
