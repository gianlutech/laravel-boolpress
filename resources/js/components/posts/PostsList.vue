<template>
  <section>
    <h2 class="text-center">Posts</h2>
    <Loader v-if="isLoading" />
    <div v-else>
      <ul v-if="posts.length">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </ul>
      <h4 v-else>Non ci sono Post</h4>
    </div>
  </section>
</template>

<script>
import Loader from "../Loader.vue";
import PostCard from "./PostCard.vue";
export default {
  name: "PostsList",
  components: {
    Loader,
    PostCard,
  },
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },

  methods: {
    getPosts() {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
</style>