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
  <p class="text-xl">
    {{ currentTime.toLocaleDateString('id-ID', options) }} |
    {{ currentTime.toLocaleTimeString('id-ID') }}
  </p>
  <p>&copy; {{ myName }} | Nuxt 3 + UnoCSS</p>
</template>
