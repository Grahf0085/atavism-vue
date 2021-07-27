<template>
    <Header title = "Project Atavism - Party Like It's 2005" />
    <div id = "nav">
      <div id = "internal">
        <router-link to="/">Home</router-link>
        <router-link to="/connecting">Connecting</router-link>
        <router-link to="/FAQs">FAQs</router-link>
        <router-link to="/rules">Rules</router-link>
        <router-link to="/BCNM-KSNM-ENM">BCNM/ENM/KSNM</router-link>
        <router-link to="/support">Support</router-link>
      </div>
      <div id="tools">
        <h3>Tools</h3>
        <router-link to="/online">Who's Online</router-link>
        <router-link to="/player-search">Player Search</router-link>
        <router-link to="/item-search">Item Search</router-link>
        <a href = "https://www.pyogenes.com/ffxi/timer/v2.html">Time Info.</a>
        <a href = "http://ffxi-stat-calc.sourceforge.net/cgi-bin/ffxistats.cgi">Stats Calculator</a>
        <a href = "https://flippantry.com/skillchain/">Skill Chains</a>
        <a href = "http://campsitarus.blogspot.com/">Campsitarus</a>
        <a href = "http://ffxi-atlas.mageringnetwork.com/">Vana'diel Atlas</a>
      </div>
      <div id="links">
        <h3>Links</h3>
        <a href = "https://www.wingsxi.com/wings/">Wings</a>
        <a href = "https://www.limitbreakffxi.com/">Limit Break</a>
        <a href = "https://gitlab.com/Grahf0085/atavism">Gitlab</a>
        <a href = "https://discord.gg/r78h8Bt4">Discord</a>
      </div>
    </div>
  <router-view/>
  <Footer />
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import backgroundFunction from '../utils.js'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted () {
    backgroundFunction()
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
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: .2fr 4fr;
  gap: 4rem;
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
}

#nav, #internal, #tools, #links {
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  margin: 0px;
  height: 30rem;
  border-left: 1px solid white;
}

#nav a {
  margin: .1rem;
  text-decoration: none;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #247551;
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
