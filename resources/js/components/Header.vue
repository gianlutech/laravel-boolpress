<template>
  <header>
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">{{ title }}</span>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["title"],
};
</script>
