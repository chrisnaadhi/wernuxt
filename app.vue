<script setup>
import "./assets/styles/style.css";

const isDark = ref(false);
const userName = ref("Chrisna");
const toggleDark = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle("dark");
};

useHead({
  titleTemplate: "%s | WerNuxt3",
  meta: [{ name: "description", content: "My Amazing Application" }],
});
</script>

<template>
  <Head>
    <Title>Homepage {{ userName }}</Title>
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
        v-if="isDark"
        class="logo"
        src="https://avatars.githubusercontent.com/u/29566738"
        alt=""
      />
      <img
        v-else
        class="logo"
        src="https://avatars.githubusercontent.com/u/23360933"
        alt=""
      />
      <div>
        Change to your name :
        <input type="text" v-model="userName" class="mb-5" />
      </div>
    </div>
    <footer class="flex flex-col items-center justify-center">
      <div class="flex items-center">
        <p class="mb-5 mx-2">Toggle Theme :</p>
        <div @click="toggleDark" class="dark-toggle">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </div>
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
  --at-apply: text-3xl mb-5 bg-gray-500 rounded-xl pb-1.5 cursor-pointer
    border-none;
}

.logo {
  --at-apply: w-40 rounded-xl my-6;
}
</style>
