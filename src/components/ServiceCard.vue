<template>
  <div class="py-10">
    <div class="pb-3 w-full h-1/2">
      <img :src="imageService" />
    </div>
    <div class="text-center">
      <h3>{{ title }}</h3>
      <p class="text-lg">{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ServiceCard",
  data() {
    return {};
  },
  methods: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    imageService: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
