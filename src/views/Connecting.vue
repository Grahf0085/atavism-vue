<template>
  <div class = "connecting">
    <h2>Connecting</h2>
    <div class = "meat">
      <h2>Linux (tested on Arch with wine 5.0)</h2>
      <ol>
        <li>Install wine and lutris</li>
        <li>Download Installer Here: LINK TO COME</li>
        <li>Install.......what file to RUN?!?!!?</li>
        <li>Download atavism loader: <a href ="https://drive.google.com/file/d/1ZSG2-0D_3k3GEa53IHUwqIHhCzGldG1T/view?usp=sharing" download>-----> Download Here</a></li>
        <li>Put bootloader SOMEWHERE FILL THIS IN OMG</li>
        <li>Start bootloader and point it to atavism.duckdns.org. Ie open a terminal in the atavism loader directory and run 'wine atavismloader.exe --server atavism.duckdns.org'</li>
        <li>Make an account through the bootloader</li>
        <li>In lutris make a new game.</li>
        <ol>
          <li>In the 'Game Info' tab enter a name and select wine for the runner. Ensure wine 5.0 is installed.</li>
          <li>In the 'Game Options' 'executable' line enter the path to atavism loader. In the 'arguments' line enter '--server atavism.duckdns.org --user USERNAME --pass PASSWORD'</li>
          <li>Click save</li>
          <li>Launch Game</li>
        </ol>
      </ol>
      <h2>Windows</h2>
      <ul>
        <li>Windows should not pose any additonal problems</li>
        <li>You're welcome to use Ashita or Windower.  Just be sure you're only using approved addons from the rules section</li>
      </ul>
    </div>
  </div>
</template>

<script>

import backgroundFunction from '../../utils.js'

export default {
  name: 'Connecting',
  mounted () {
    backgroundFunction()
  }
}
</script>

<style scoped>

  .connecting {
    grid-row: 2;
    border: 1px solid white;
    border-bottom: none;
    border-right: none;
    border-radius: .5rem;
    padding: 3rem;
    margin-left: 10rem;
  }

  li {
    list-style: decimal;
    list-style-position: inside;
  }

</style>
