<script setup>
import { ref } from "vue";
import "./assets/styles/style.css";

useHead;

const isDark = ref(false);
const userName = ref("World");
const toggleDark = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle("dark");
};
</script>

<template>
  <Head>
    <Title>Hello {{ userName }}</Title>
    <Link
      rel="icon"
      href="https://nuxtjs.org/_nuxt/img/logo.d0868f5.svg"
      type="image/x-icon"
    />
  </Head>
  <main class="h-screen py-5 dark:(bg-gray-800 text-white)">
    <div class="text-center">
      <!-- <NuxtWelcome /> -->
      <h1 class="nuxt-color text-4xl">Hello, {{ userName }}</h1>
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
      <p class="mb-5">Toggle Theme :</p>
      <div @click="toggleDark" class="dark-toggle">
        <span v-if="!isDark">🌙</span>
        <span v-else>☀️</span>
      </div>
      <Credit />
      <div>
        Change to your name :
        <input type="text" v-model="userName" class="mt-5" />
      </div>
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
