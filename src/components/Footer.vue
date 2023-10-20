<template>
  <div class="px-[6vw]">
    <div class="py-[10vh]">
      <p class="text-[3rem] ppBook">
        Keep the <br />
        contact
      </p>
      <div class="flex flex-col gap-5 pt-5">
        <div class="flex items-center gap-5 py-2">
          <div>
            <img src="../../public/assets/icons/leftArrow.png" />
          </div>
          <div>
            <p class="aeonik text-[1.8rem]">Mail</p>
          </div>
        </div>
        <div class="flex items-center gap-5 py-2">
          <div>
            <img src="../../public/assets/icons/leftArrow.png" />
          </div>
          <div>
            <p class="aeonik text-[1.8rem]">LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
    <hr />

    <div class="flex justify-between">
      <RouterLink to="/privacy-policy">
        <p class="smallText">Private Policy</p>
      </RouterLink>
      <RouterLink to="/">
        <p class="smallText">by Studio Ensemble</p>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.ppBook {
  font-family: "PP Book";
}

.aeonik {
  font-family: "Aeonik";
}
</style>
