<template>
  <div class="min-h-[90vh] flex flex-row justify-between items-end">
    <h1>{{ textLine1 }} <br />{{ textLine2 }} <br />{{ textLine3 }}</h1>
    <div class="pb-[1rem]">
      <img src="../../assets/icons/Arrow.png" alt="steady owl arrow" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TitlePage",
  data() {
    return {};
  },
  methods: {},
  props: {
    textLine1: {
      type: String,
      required: true,
    },
    textLine2: {
      type: String,
      required: false,
    },
    textLine3: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped></style>
