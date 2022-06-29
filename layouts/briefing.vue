<template>
  <main class="main-layer">
    <Head>
      <Link
        rel="icon"
        href="https://nuxtjs.org/_nuxt/img/logo.d0868f5.svg"
        type="image/x-icon"
      />
    </Head>
    <Navbar />
    <div class="min-h-screen ma px-2">
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
