<template>
  <button
    class="py-4 px-8 bg-black rounded-md aeonik text-gray-100 tracking-wider"
  >
    {{ cta }}
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
  data() {
    return {};
  },
  methods: {},
  props: {
    cta: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.aeonik {
  font-family: "Aeonik";
}
</style>
