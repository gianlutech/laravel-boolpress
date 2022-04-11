<template>
  <section id="home">
    <h1 class="text-center my-5">HomePage</h1>
    <PostsList />
  </section>
</template>

<script>
import PostsList from "../posts/PostsList.vue";
export default {
  name: "HomePage",
  components: {
    PostsList,
  },
};
</script>

<style>
</style>