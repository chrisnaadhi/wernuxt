<script setup>
import { ref } from "vue";
import "./assets/styles/style.css";

const isDark = ref(false);
const toggleDark = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle("dark");
};
</script>

<template>
  <main class="h-4xl py-5 dark:bg-gray-600">
    <div class="text-center">
      <!-- <NuxtWelcome /> -->
      <h1 class="nuxt-color text-4xl">Hello World</h1>
      <p class="font-bold text-7xl text-gray-800 dark:text-white">
        Nuxt<span class="nuxt-color">3</span>
      </p>

      <img
        v-if="!isDark"
        class="logo"
        src="https://avatars.githubusercontent.com/u/23360933"
        alt=""
      />
      <img
        v-else
        class="logo"
        src="https://avatars.githubusercontent.com/u/29566738"
        alt=""
      />
    </div>
    <footer class="flex flex-col items-center justify-center">
      <p class="mb-5 dark:text-white">Toggle Theme :</p>
      <div @click="toggleDark" class="dark-toggle">
        <span v-if="!isDark">🌙</span>
        <span v-else>☀️</span>
      </div>
      <Credit />
    </footer>
  </main>
</template>

<style>
.nuxt-color {
  color: #00dc82;
}

.dark-toggle {
  --at-apply: text-5xl mb-5 bg-green-500 pt-1 pb-3 rounded-xl cursor-pointer
    border-none;
}

.logo {
  --at-apply: w-40 rounded-xl my-6;
}
</style>
