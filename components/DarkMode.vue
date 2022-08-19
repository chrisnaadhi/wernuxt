<script setup>
const isDark = darkModeState();
const cookie = useCookie("mode");

onBeforeMount(() => {
  window.document.body.classList.add(cookie.value);
});

const toggleDark = () => {
  if (cookie.value === "light") {
    cookie.value = "dark";
    window.document.body.classList.add("dark");
    window.document.body.classList.remove("light");
  } else {
    cookie.value = "light";
    window.document.body.classList.add("light");
    window.document.body.classList.remove("dark");
  }
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
