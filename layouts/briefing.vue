<template>
  <main class="main-layer">
    <Navbar />
    <div>
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
