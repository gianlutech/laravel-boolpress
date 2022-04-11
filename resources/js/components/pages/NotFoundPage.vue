<template>
  <section id="not-found">
    <h2 class="text-muted">Not Found | 404</h2>
    <button class="btn btn-secondary" @click="$router.back()">Indietro</button>
  </section>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style>
</style>