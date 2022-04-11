<template>
  <div>
    <div class="card my-3">
      <h5 class="card-header d-flex align-items-center justify-content-between">
        <div>{{ updatedAt }}</div>
        <router-link
          class="btn btn-sm btn-primary"
          :to="{ name: 'post-detail', params: { id: post.id } }"
          >Vedi</router-link
        >
      </h5>
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.content }}</p>
        <!--         <a href="#" class="btn btn-primary">Go somewhere</a>
 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
  computed: {
    updatedAt() {
      const postDate = new Date(this.post.updated_at);
      let day = postDate.getDate();
      let month = postDate.getMonth();
      const year = postDate.getFullYear();
      const hours = postDate.getHours();
      const minutes = postDate.getMinutes();
      const seconds = postDate.getSeconds();

      if (day < 10) day = "0" + day;
      if (month < 10) month = "0" + month;

      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    },
  },
};
</script>

<style>
</style>