<script setup>
const cookie = useCookie("mode");
const isDark = darkModeState();

if (!cookie.value) {
  cookie.value = "light";
}

onBeforeMount(() => {
  window.document.body.classList.add(cookie.value);
});

const toggleDark = () => {
  if (isDark.value === false) {
    isDark.value = !isDark.value;
    cookie.value = "dark";
    window.document.body.classList.add("dark");
    window.document.body.classList.remove("light");
  } else {
    cookie.value = "light";
    isDark.value = !isDark.value;
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
