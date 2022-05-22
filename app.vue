<script setup>
import './assets/styles/style.css';

const isDark = ref(false);
const userName = ref('Chrisna');
const toggleDark = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle('dark');
};

useHead({
  titleTemplate: '%s | WerNuxt3',
  meta: [{ name: 'description', content: 'My Amazing Application' }],
});
</script>

<template>
  <Head>
    <Title>Homepage {{ userName ? userName : 'Guest' }}</Title>
    <Link
      rel="icon"
      href="https://nuxtjs.org/_nuxt/img/logo.d0868f5.svg"
      type="image/x-icon"
    />
  </Head>
  <main class="main-layer">
    <Navbar />
    <div class="text-center">
      <!-- <NuxtWelcome /> -->
      <h1 class="nuxt-color text-4xl">
        Hello, {{ userName ? userName : 'Guest' }}!
      </h1>
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
    <div class="px-12 mb-8">
      <h1 class="text-center">Description</h1>
      <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum justo vitae quam vestibulum congue. In hac habitasse platea dictumst. Ut tincidunt eget nunc ac euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus non augue volutpat, bibendum erat venenatis, tincidunt mi. Morbi gravida quam quam, non tincidunt ex efficitur a. Sed finibus interdum turpis, et maximus est ullamcorper non. Suspendisse potenti. Quisque ac convallis augue. Phasellus eros nisi, rutrum eu sapien ut, convallis porta velit. In hac habitasse platea dictumst. Proin ullamcorper purus in quam feugiat, eget tincidunt dui fermentum. Nullam nulla libero, gravida at mattis vel, ultrices sed tortor. Sed sit amet mattis nunc, et pharetra sem.
      </p>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center">
        <p class="mb-5 mx-2">Toggle Theme :</p>
        <div @click="toggleDark" class="dark-toggle">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </div>
      </div>
    </div>
    <Credit />
  </main>
</template>

<style>
.main-layer {
  --at-apply: dark:(bg-gray-800 text-white);
  transition: all .3s linear;
}

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
