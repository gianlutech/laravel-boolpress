<template>
  <section id="post-detail">
    <h1>Dettaglio post</h1>
    <Loader v-if="isLoading && !post" />
    <PostCard v-else :post="post" />
  </section>
</template>

<script>
import Loader from "../Loader.vue";
import PostCard from "../posts/PostCard.vue";
export default {
  name: "PostDetailPage",
  components: { Loader, PostCard },
  data() {
    return {
      post: null,
      isLoading: false,
    };
  },
  methods: {
    getPost() {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts/" + this.$route.params.id)
        .then((res) => {
          this.post = res.data;
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
    this.getPost();
  },
};
</script>

<style>
</style>