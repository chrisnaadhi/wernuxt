<template>
  <main class="main-layer">
    <Navbar />
    <div class="h-2xl ma">
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
