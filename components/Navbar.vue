<script setup></script>

<template>
  <ul class="bar">
    <li><NuxtLink to="/">Home</NuxtLink></li>
    <li><NuxtLink to="/about">About</NuxtLink></li>
    <li><NuxtLink to="/blogs">Blogs</NuxtLink></li>
    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
  </ul>
</template>

<style scoped>
.bar {
  --at-apply: flex items-center justify-center py-4 bg-green-400 text-gray-800;
}

li {
  --at-apply: list-none mx-5;
}

a {
  --at-apply: decoration-none text-gray-800 hover:(underline text-white);
}
</style>
