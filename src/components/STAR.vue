<template>
  <h2>
    {{ maj }}<span class="ppThin">{{ span }}:</span>
  </h2>
  <div class="flex flex-row pl-2 gap-2">
    <hr class="h-[200px] w-2 bg-black" />
    <div>
      <p class="text-base">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "STAR",
  data() {
    return {};
  },
  methods: {},
  props: {
    maj: {
      type: String,
      required: true,
    },
    span: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.ppThin {
  font-family: "PP Thin";
}
</style>
