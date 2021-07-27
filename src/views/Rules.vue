<template>
  <div class = "rules">
    <h2>Rules</h2>
    <div class = "meat">
      <h2>General</h2>
      <ol class = "general">
        <li>It's just a game. Don't cheat</li>
        <li>Have Fun</li>
        <li>Be respectful</li>
        <li>Play Together - unless you're a BST or noob</li>
        <li>No real money trade</li>
        <li>No exploiting bugs. Just report it in the discord</li>
        <li>No monster player killing</li>
        <li>If you find an out of era item report it in the discord</li>
        <li>Requests for additional addons should be made in discord addon channel</li>
      </ol>
      <h2>Approved <a href = "https://docs.ashitaxi.com/">Ashita Addons/Plugins</a></h2>
      <ol class = "ashita">
        <li>Battlemod</li>
        <li>Cfhblock</li>
        <li>Chatmon</li>
        <li>Checker</li>
        <li>Clock</li>
        <li>CraftMon</li>
        <li>Deeps</li>
        <li>Distance</li>
        <li>Draw Distance</li>
        <li>Duration</li>
        <li>Filterless</li>
        <li>Filters</li>
        <li>Find</li>
        <li>FPS</li>
        <li>Gearlock</li>
        <li>Hardware Mouse</li>
        <li>Hide Console</li>
        <li>Logs</li>
        <li>Pet Info</li>
        <li>Recast</li>
        <li>Screenshot</li>
        <li>Status</li>
        <li>Timestamp</li>
        <li>TParty</li>
        <li>Watchexp</li>
      </ol>
      <h2>Approved <a href = "https://docs.windower.net">Windower Addons/Plugins</a></h2>
      <ol class = "windower">
        <li>Bar Filler</li>
        <li>Battle Mod</li>
        <li>Blist</li>
        <li>Cancel</li>
        <li>Clock</li>
        <li>Console BG</li>
        <li>Distance</li>
        <li>Dress Up</li>
        <li>Enemy Bar</li>
        <li>Equip Viewer</li>
        <li>FFXIDB</li>
        <li>Find All</li>
        <li>Gear Swap</li>
        <li>Highlight</li>
        <li>Info Bar</li>
        <li>Logger</li>
        <li>Macro Changer</li>
        <li>Pet TP</li>
        <li>Scoreboard</li>
        <li>Set BGM</li>
        <li>SS Organizer</li>
        <li>Time Stamp</li>
        <li>Timers</li>
        <li>TParty</li>
        <li>XIV Bar</li>
        <li>Zone Timer</li>
      </ol>
      <h2>BANNED</h2>
      <ol class = "banned">
        <li>Any modified bootloader</li>
        <li>Auction House Addons</li>
        <li>Targeting Addons</li>
        <li>Position of Speed Addons</li>
        <li>Multisend / Servo</li>
        <li>Minimap and other map overlays that interact with the world (Show NPCs, players, etc)</li>
        <li>Allmaps</li>
        <li>Scripts ran unattended</li>
        <li>Shorthand used to claim</li>
        <li>LightLuggage</li>
        <li>Fishing/exp/healing bots or any other bots that automate player actions</li>
        <li>Claim tools or character enhancement tools like flee or warp hacks.</li>
        <li>WatchDog (or anything that gives you abilities you shouldn't have access to)</li>
      </ol>
    </div>
  </div>
</template>

<script>

import backgroundFunction from '../../utils.js'

export default {
  name: 'Rules',
  mounted () {
    backgroundFunction()
  }
}
</script>

<style scoped>

  .rules {
    grid-row: 2;
    border: 1px solid white;
    border-bottom: none;
    border-right: none;
    border-radius: .5rem;
    padding: 3rem;
    margin-left: 10rem;
  }

  ol {
    column-count: 5;
    margin: 0;
  }
  li {
    font-size: 0.95rem;
  }

  .meat {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(10, 1fr); */

  }

  /* .general {
    grid-row: 1
  }

  .ashita {
    grid-row: 3
  }

  .windows {
    grid-row: 5
  }

  .banned {
    grid-row: 7
  } */

</style>
