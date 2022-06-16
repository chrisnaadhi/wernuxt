<script setup>
const myName = ref("Chrisna Adhi Pranoto");
const { currentTime } = useCurrentTime();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
</script>

<template>
  <LazyClientOnly>
    <div
      class="bg-green-400 w-full flex flex-col items-center py-5 dark:(bg-green-700 text-white)"
    >
      <p class="text-xl">
        {{ currentTime.toLocaleDateString("id-ID", options) }} |
        {{ currentTime.toLocaleTimeString("en-US", { hour12: false }) }}
      </p>
      <p class="font-italic">&copy; {{ myName }} | Nuxt 3 + UnoCSS</p>
    </div>
  </LazyClientOnly>
</template>
