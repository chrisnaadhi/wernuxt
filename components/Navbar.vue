<script setup></script>

<template>
  <ul class="flex items-center justify-center py-4 bg-green-400 text-gray-800 mb-3">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Blogs</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</template>

<style scoped>
  li {
    --at-apply: list-none mx-5;
  }
  
  a {
    --at-apply: decoration-none text-gray-800 hover:(underline text-white);
  }
</style>
