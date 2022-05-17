<script setup>
const myName = ref('Chrisna Adhi Pranoto');
const { currentTime } = useCurrentTime();

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
</script>

<template>
  <p class="text-xl dark:text-white">
    {{ currentTime.toLocaleDateString('id-ID', options) }} |
    {{ currentTime.toLocaleTimeString('en-US', { hour12: false }) }}
  </p>
  <p class="dark:text-white">&copy; {{ myName }} | Nuxt 3 + UnoCSS</p>
</template>
