<script setup>
const { getItems } = useDirectusItems();

const posts = await getItems({ collection: "blogs" });
</script>

<template>
  <NuxtLayout name="briefing">
    <section class="main-back">
      <h1>Blogs</h1>
      <ul v-for="post in posts" class="my-5">
        <NuxtLink :to="`/blogs/${post.id}`"
          ><li>
            <h1>{{ post.title }}</h1>
            <p>{{ post.content.slice(0, 25) }}</p>
          </li></NuxtLink
        >
      </ul>
      <NuxtLink to="/">
        <Button> Back to Home </Button>
      </NuxtLink>
    </section>
  </NuxtLayout>
</template>

<style>
.main-back {
  --at-apply: text-center py-5;
}
</style>
