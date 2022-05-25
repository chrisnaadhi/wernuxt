<script setup></script>

<template>
  <ul class="bar">
    <li><a href="#">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="#">Blogs</a></li>
    <li><a href="#">Contact</a></li>
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
