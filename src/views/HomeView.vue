<template>
  <div class="">
    <section id="heroSection" class="min-h-screen paddingSection">
      <div class="min-h-[85vh] flex justify-between items-end">
        <h1>Cool <br />Tagline <br />about this</h1>
        <div>
          <img src="../assets/icons/Arrow.png" alt="steady owl arrow" />
        </div>
      </div>
    </section>

    <section id="promess" class="paddingSection">
      <div class="flexCenter">
        <h2>Cool title about CFO as a Service.</h2>
        <p class="pb-[20vh]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          suscipit in velit euismod ultrices. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Pellentesque suscipit in velit euismod
          ultrices.
        </p>
      </div>
      <hr />
    </section>
    <section id="services" class="paddingSection">
      <div class="flex flex-col justify-center items-center">
        <div class="text-center">
          <h2>Here’s a cool promess about my services.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque suscipit in velit euismod ultrices.
          </p>
        </div>
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :title="service.title"
          :text="service.text"
          :imageService="service.imageService"
        ></ServiceCard>
        <div>
          <Button :cta="callToAction" class="mb-[20vh]"></Button>
        </div>
        <hr />
      </div>
    </section>
    <section id="process" class="paddingSection">
      <div class="flexCenter">
        <h2>How we get things done?</h2>
        <p>Well, it’s simple simple.</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import ServiceCard from "@/components/ServiceCard.vue";
import Button from "@/components/Button.vue";

export default {
  name: "HomeView",
  data() {
    return {
      services: [
        {
          title: "FP&A",
          text: "Text 1",
          imageService: "../../public/assets/images/dummies.png",
        },
        {
          title: "Fund Raising",
          text: "Text 2",
          imageService: "../../public/assets/images/dummies.png",
        },
        {
          title: "Post Merger Integration (PMI)",
          text: "Text 3",
          imageService: "../../public/assets/images/dummies.png",
        },
      ],
      callToAction: "Click for more",
    };
  },
  methods: {},
  components: {
    ServiceCard,
    Button,
  },
};
</script>

<style scoped></style>
