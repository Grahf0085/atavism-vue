<template>
  <div class="rules">
    <h2>Rules</h2>
    <div class="meat">
      <h2>General</h2>
      <ol>
        <li>It's just a game. Don't cheat</li>
        <li>No third party programs that provide automation</li>
        <li>No real money trade</li>
        <li>No exploiting bugs. Just take note of it and report it in the discord</li>
        <li>No monster player killing</li>
        <li>No tools to assist in claiming</li>
        <li>If you find an out of era item report it in the discord</li>
      </ol>
      <h2>Ashita/Windower Addons</h2>
      <ol>
        <li>Ashita Cast</li>
        <li>Autojoin</li>
        <li>Battlemod</li>
        <li>Cfhblock</li>
        <li>Checker</li>
        <li>Clock</li>
        <li>CraftMon</li>
        <li>Deeps</li>
        <li></li>
        <li></li>
      </ol>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Rules'
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

  .meat {
    border: 1px solid white;
    padding: 3rem;
    border-radius: .5rem;
    border-bottom: none;
    border-right: none;
  }

  li {
    margin: .5rem;
    list-style-type: square;
    font-size: 18px;
  }

</style>
