<script setup>
import './assets/styles/style.css';

const toggleDark = () => {
  document.body.classList.toggle('dark');
};
</script>

<template>
  <main class="dark:bg-gray-600">
    <div class="text-center mt-5">
      <!-- <NuxtWelcome /> -->
      <h1 class="heading text-4xl">Hello World</h1>
      <p class="font-bold text-7xl text-gray-800 dark:text-white">
        Nuxt<span class="nuxt-color">3</span>
      </p>
      <img
        class="logo"
        src="https://avatars.githubusercontent.com/u/23360933"
        alt=""
      />
    </div>
    <footer class="flex flex-col items-center justify-center dark:text-white">
      <button @click="toggleDark">Toggle Dark</button>
      <Credit />
    </footer>
  </main>
</template>

<style>
.heading {
  color: #00dc82;
}

.nuxt-color {
  color: #00dc82;
}

.logo {
  @apply w-36 rounded-xl my-6;
}
</style>
