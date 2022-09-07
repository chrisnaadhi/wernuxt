<script setup>
const userName = nameState();
const submit = "submit";
</script>

<template>
  <NuxtLayout name="briefing">
    <section class="main-back">
      <h1>Contacts Us</h1>
      <p>We are here to help!</p>
      <form>
        <label for="userName">Your Name: </label>
        <input
          type="text"
          v-model="userName"
          class="my-5 mx-2 rounded border p-2 dark:(text-dark bg-white)"
        />
        <NuxtLink to="/">
          <Button :buttontype="submit">Submit</Button>
        </NuxtLink>
      </form>

      <br />
      <NuxtLink to="/">
        <Button> Back to Home </Button>
      </NuxtLink>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.main-back {
  --at-apply: text-center ma py-5 sm:min-w-xl;
}
</style>
