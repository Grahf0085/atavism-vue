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
    display: flex;
    margin: 0;
    width: 100%;
    height: 2.5rem;
  }
  h1 {
    margin-top: 0;
    margin-left: 1rem;
  }
</style>
