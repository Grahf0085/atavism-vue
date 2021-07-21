<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style scoped>
  header {
    margin: 0;
    height: 2.5rem;
    padding-left: 5rem;
    margin-top: 2rem;
  }
</style>
