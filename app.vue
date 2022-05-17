<script setup>
import { ref } from 'vue';
import './assets/styles/style.css';

const isDark = ref(false);
const toggleDark = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle('dark');
};
</script>

<template>
  <main class="h-full py-5 dark:bg-gray-600">
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
      <button
        type="button"
        @click="toggleDark"
        class="
          mb-5
          bg-green-500
          pt-1
          pb-3
          rounded-xl
          cursor-pointer
          border-none
        "
      >
        <span class="text-5xl" v-if="!isDark">🌙</span>
        <span class="text-5xl" v-else>☀️</span>
      </button>
      <Credit />
    </footer>
  </main>
</template>

<style>
.nuxt-color {
  color: #00dc82;
}

/* button {
  @apply mb-5 bg-green-500 pt-1 pb-3 rounded-xl cursor-pointer border-none;
} */

.logo {
  @apply w-36 rounded-xl my-6;
}
</style>
