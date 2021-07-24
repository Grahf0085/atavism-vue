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
    height: 2.5rem;
    padding-left: 5rem;
    margin-top: 4rem;
  }

  h1 {
    font-size: 1.7rem;
  }
</style>
