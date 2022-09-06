<script setup>
const userName = nameState();
</script>

<template>
  <NuxtLayout name="briefing">
    <section class="main-back">
      <h1>Contacts Us</h1>
      <p>We are here to help!</p>
      <label for="userName">Your Name: </label>
      <input
        type="text"
        v-model="userName"
        class="my-5 rounded-xl border p-2 dark:(text-dark bg-white)"
      />
      <br />
      <NuxtLink to="/">
        <Button> Back to Home </Button>
      </NuxtLink>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.main-back {
  --at-apply: text-center min-w-xl ma py-5;
}
</style>
