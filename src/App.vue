<template>
    <Header title = "Project Atavism - Party Like It's 2005" />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/connecting">Connecting</router-link>
      <router-link to="/FAQs">FAQs</router-link>
      <router-link to="/rules">Rules</router-link>
      <router-link to="/support">Support</router-link>
      <h3>Tools</h3>
      <router-link to="/online">Who's Online</router-link>
      <router-link to="/player-search">Player Search</router-link>
      <router-link to="/item-search">Item Search</router-link>
      <h3>Links</h3>
      <a href = "https://www.wingsxi.com/wings/">Wings</a>
      <a href = "https://www.limitbreakffxi.com/">Limit Break</a>
      <a href = "https://gitlab.com/Grahf0085/atavism">Gitlab</a>
    </div>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  display: flex;
  min-height: 100vh;
}

#nav {
  width:33%;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-center;
  order: 1;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
