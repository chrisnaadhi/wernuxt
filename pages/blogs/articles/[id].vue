<script setup>
const { getItemById } = useDirectusItems();
const route = useRoute();

const post = await getItemById({ collection: "blogs", id: route.params.id });
const { data: userProfile, refresh } = await useFetch(
  `https://gubs0ke4.directus.app/users/${post.user_created}`
);
if (post) {
  refresh();
} else {
  throwError("No Post found!");
}
</script>

<template>
  <section>
    <NuxtLayout name="briefing">
      <div
        class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-gray-700 dark:text-white"
      >
        <div class="max-w-screen-xl sm:text-center sm:mx-auto">
          <h2
            class="mb-4 font-sans text-3xl font-bold tracking-tight sm:( text-4xl leading-none )"
          >
            {{ post.title }}
          </h2>
          <hr class="w-full my-8 border-gray-300" />
          <p class="pb-4 md:pb-0">
            {{ userProfile.data.first_name }} {{ userProfile.data.last_name }} |
            {{ userProfile.data.email }}
          </p>
          <span
            v-html="post.content"
            class="text-base md:text-lg sm:px-4"
          ></span>
        </div>
        <div class="flex align-items justify-center">
          <NuxtLink to="/blogs"><Button>Back to Blogs</Button></NuxtLink>
        </div>
      </div>
    </NuxtLayout>
  </section>
</template>
