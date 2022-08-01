<script setup>
const isDark = darkModeState();
const toggleDark = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle("dark");
};
</script>

<template>
  <div @click="toggleDark" class="dark-toggle">
    <span v-if="isDark">☀️</span>
    <span v-else>🌙</span>
  </div>
</template>

<style scoped>
.dark-toggle {
  --at-apply: text-3xl mb-5 bg-gray-500 rounded-xl pb-1.5 cursor-pointer
    border-none;
}
</style>
