<script setup>
const userName = nameState();
useHead({
  titleTemplate: "%s | WerNuxt3",
  meta: [{ name: "description", content: "My Amazing Application" }],
});
</script>

<template>
  <main class="main-layer">
    <Head>
      <Title>{{ userName ? userName : "Guest" }}</Title>
      <Link
        rel="icon"
        href="https://nuxtjs.org/_nuxt/img/logo.d0868f5.svg"
        type="image/x-icon"
      />
    </Head>
    <Navbar />
    <div class="min-h-3xl ma px-2">
      <slot> Heyo! </slot>
    </div>

    <Credit />
  </main>
</template>

<style>
.main-layer {
  --at-apply: dark:(bg-gray-800 text-white);
  transition: all .3s linear;
}
</style>
