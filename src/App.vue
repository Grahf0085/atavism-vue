<template>
    <Header title = "Project Atavism - Party Like It's 2005" />
    <div id="nav">
      <div id="internal">
        <router-link to="/">Home</router-link>
        <router-link to="/connecting">Connecting</router-link>
        <router-link to="/FAQs">FAQs</router-link>
        <router-link to="/rules">Rules</router-link>
        <router-link to="/support">Support</router-link>
      </div>
      <div id="tools">
        <h3>Tools</h3>
        <router-link to="/online">Who's Online</router-link>
        <router-link to="/player-search">Player Search</router-link>
        <router-link to="/item-search">Item Search</router-link>
        <a href = "https://www.pyogenes.com/ffxi/timer/v2.html">Time Info.</a>
      </div>
      <div id="links">
        <h3>Links</h3>
        <a href = "https://www.wingsxi.com/wings/">Wings</a>
        <a href = "https://www.limitbreakffxi.com/">Limit Break</a>
        <a href = "https://gitlab.com/Grahf0085/atavism">Gitlab</a>
      </div>
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

body {
  margin: 0;
}

#app {
  font-family: Ubuntu, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  color: #214261;
  height: 100vh;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: .2fr 4fr;
  gap: 4rem;
  background: -webkit-linear-gradient(360deg,#030303 10%,#1f1f1f 360%);
  background: linear-gradient(360deg,#030303 10%,#1f1f1f 360%);
}

#nav, #internal, #tools, #links {
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  margin: 0px;
  height: 49%;
  border-left: 1px solid white;
}

#nav a {
  margin: .1rem;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#internal {
  width: 4rem;
  border-bottom: 1px solid white;
}

#tools {
  width: 8rem;
  border-bottom: 1px solid white;
}

h3 {
  margin: .4rem;
  color: #2c3e50;
}

@font-face {
    font-family: 'Ubuntu';
    src: url('../public/fonts/Ubuntu-Regular.eot');
    src: url('../public/fonts/Ubuntu-Regular.eot?#iefix') format('embedded-opentype'),
        url('../public/fonts/Ubuntu-Regular.woff2') format('woff2'),
        url('../public/fonts/Ubuntu-Regular.woff') format('woff'),
        url('../public/fonts/Ubuntu-Regular.ttf') format('truetype'),
        url('../public/fonts/Ubuntu-Regular.svg#Ubuntu-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

</style>
