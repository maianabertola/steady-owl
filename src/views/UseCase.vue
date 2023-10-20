<template>
  <section class="paddingSection h-[100vh]">
    <TitlePage :text-line1="title"></TitlePage>
  </section>
  <div class="h-[100vh]">
    <STAR
      v-for="element in star"
      :maj="element.maj"
      :span="element.span"
      :text="element.text"
    ></STAR>
  </div>
</template>

<script lang="ts">
import STAR from "@/components/STAR.vue";
import TitlePage from "@/components/TitlePage.vue";

export default {
  name: "UseCase",
  data() {
    return {
      title: "A case about X",
      star: [
        {
          maj: "S",
          span: "ituation",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam non quam lacus suspendisse faucibus. Mauris pharetra et ultrices neque ornare. Viverra justo nec ultrices dui. Mauris augue neque gravida infermentum et. Nullam non nisi est sit amet facilisis.",
        },
        {
          maj: "T",
          span: "asks",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam non quam lacus suspendisse faucibus. Mauris pharetra et ultrices neque ornare. Viverra justo nec ultrices dui. Mauris augue neque gravida infermentum et. Nullam non nisi est sit amet facilisis.",
        },
        {
          maj: "A",
          span: "ctions",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam non quam lacus suspendisse faucibus. Mauris pharetra et ultrices neque ornare. Viverra justo nec ultrices dui. Mauris augue neque gravida infermentum et. Nullam non nisi est sit amet facilisis.",
        },
        {
          maj: "R",
          span: "esults",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam non quam lacus suspendisse faucibus. Mauris pharetra et ultrices neque ornare. Viverra justo nec ultrices dui. Mauris augue neque gravida infermentum et. Nullam non nisi est sit amet facilisis.",
        },
      ],
    };
  },
  methods: {},
  components: {
    STAR,
    TitlePage,
  },
};
</script>

<style scoped></style>
