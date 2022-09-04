<script setup>
import "../assets/styles/style.css";

const userName = nameState();
const isDark = isDarkMode();

useHead({
  titleTemplate: "%s | WerNuxt3",
  meta: [{ name: "description", content: "My Amazing Application" }],
});
</script>

<template>
  <main>
    <Head>
      <Title>{{ userName ? userName : "Guest" }}</Title>
      <Link
        rel="icon"
        href="https://nuxtjs.org/_nuxt/img/logo.d0868f5.svg"
        type="image/x-icon"
      />
    </Head>
    <NuxtLayout name="briefing">
      <div>
        <div class="text-center">
          <!-- <NuxtWelcome /> -->
          <h1 class="nuxt-color text-4xl pt-3">
            Hello, {{ userName ? userName : "Guest" }}!
          </h1>
          <p class="font-bold text-7xl text-gray-800 dark:text-white">
            Nuxt<span class="nuxt-color">3</span>
          </p>

          <img
            v-if="isDark"
            class="logo"
            src="~/assets/images/29566738.png"
            alt="Nuxt Dark"
          />
          <img
            v-else
            class="logo"
            src="~/assets/images/23360933.png"
            alt="Nuxt White"
          />
          <div>
            Change to your name :
            <input
              type="text"
              v-model="userName"
              class="mb-5 rounded-xl border p-2 dark:(text-dark bg-white)"
            />
          </div>
        </div>
        <div class="px-6 mb-8">
          <h1 class="text-center">Description</h1>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            elementum justo vitae quam vestibulum congue. In hac habitasse
            platea dictumst. Ut tincidunt eget nunc ac euismod. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus non augue volutpat, bibendum erat
            venenatis, tincidunt mi. Morbi gravida quam quam, non tincidunt ex
            efficitur a. Sed finibus interdum turpis, et maximus est ullamcorper
            non. Suspendisse potenti. Quisque ac convallis augue. Phasellus eros
            nisi, rutrum eu sapien ut, convallis porta velit. In hac habitasse
            platea dictumst. Proin ullamcorper purus in quam feugiat, eget
            tincidunt dui fermentum. Nullam nulla libero, gravida at mattis vel,
            ultrices sed tortor. Sed sit amet mattis nunc, et pharetra sem.
          </p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="flex items-center">
            <p class="mb-5 mx-2">Toggle Theme :</p>
            <DarkMode />
          </div>
        </div>
      </div>
    </NuxtLayout>
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

.logo {
  --at-apply: w-40 rounded-xl my-6;
}

a {
  --at-apply: text-gray-600 dark:(text-white) ;
}
</style>
