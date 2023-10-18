<template>
  <!-- Navbar desk -->
  <nav class="hidden lg:block">
    <ul>
      <li>Services</li>
      <li>About me</li>
      <li>Contact</li>
    </ul>
  </nav>

  <!-- Navbar responsive -->
  <nav
    class="lg:hidden flex justify-between items-center h-1/6 px-6 py-3 border-b-solid border-b-2 border-b-black bg-gray-100"
  >
    <div class="w-12">
      <img
        src="https://assets.materialup.com/uploads/5b57bc62-4d73-46ec-9cd8-218079e1cf67/preview.jpg"
        alt="steady owl logo"
        class="image"
      />
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
    </div>
  </nav>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
