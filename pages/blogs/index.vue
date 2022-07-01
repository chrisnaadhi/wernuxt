<script setup>
const { getItems } = useDirectusItems();

const posts = await getItems({ collection: "blogs" });
const removeTag = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace(/(<([^>]+)>)/gi, "");
};
</script>

<template>
  <NuxtLayout name="briefing">
    <section class="main-back">
      <h1>Blogs</h1>
      <ul v-for="post in posts" class="my-5">
        <NuxtLink :to="`/blogs/articles/${post.id}`">
          <li>
            <h1>{{ post.title }}</h1>
          </li>
        </NuxtLink>
        <!-- <span v-html="post.content.slice(0, 27) + '...'"></span> -->
        <p>{{ removeTag(post.content.slice(0, 27)) + "..." }}</p>
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
