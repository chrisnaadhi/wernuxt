<script setup>
import "./assets/styles/style.css";
</script>

<template>
  <div class="text-center mt-5">
    <!-- <NuxtWelcome /> -->
    <h1 class="heading">Hello World</h1>
    <p class="font-bold text-9xl text-gray-800">
      Nuxt<span class="nuxt-color">3</span>
    </p>
    <img
      class="logo"
      src="https://avatars.githubusercontent.com/u/23360933"
      alt=""
    />
  </div>
  <footer>
    <Credit />
  </footer>
</template>

<style>
.heading {
  color: #42b883;
  @apply text-5xl;
}

.nuxt-color {
  color: #00dc82;
}

.logo {
  @apply w-56 rounded-xl mt-5;
}
</style>
