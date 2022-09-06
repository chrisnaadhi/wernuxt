<script setup lang="ts">
const { getItems } = useDirectusItems();

interface Article {
  id?: string | number;
  title?: string | any;
  content?: string;
  status?: string;
}

const posts = await getItems<Article>({ collection: "blogs" });
const removeTag = (str: string) => {
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
    <section class="main-back ma">
      <h1>Blogs</h1>
      <ul v-for="post in posts" class="my-5">
        <NuxtLink :to="`/blogs/articles/${post.id}`">
          <li class="list-none">
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

<style scoped>
.main-back {
  --at-apply: max-w-xl text-center py-5;
}
</style>
