<template>
  <div class = "bcnm-ksnm-enm">
    <h2>Working BCNMs, KSNMs, and ENMs</h2>
      <div class = "meat">
        <div>
          <h2>Balgas Dais</h2>
          <p>Treasure and Tribulations (BS50)</p>
          <p>Wild Wild Whiskers (BS60)</p>
          <p>Divine Punishers (BS60)</p>
          <p>Early Bird Catches the Wyrm (KS99)</p>
        </div>
        <div>
          <h2>Bearclaw Pinnacle</h2>
            <p>Brothers (ENM75)</p>
        </div>
        <div>
          <h2>Boneyard Gully</h2>
            <p>Sheep in Antlion's Clothing (ENM75)</p>
        </div>
        <div>
          <h2>Ghelsba Outpost</h2>
          <p>Petrifying Pair (BS30)</p>
        </div>
        <div>
          <h2>Horlais Peak</h2>
            <p>Carapace Combatants (BS30)</p>
            <p>Under Observation (BS40)</p>
            <p>Double Dragonian (KS30)</p>
        </div>
        <div>
          <h2>Qu'Bia Arena</h2>
          <p>Undying Promise (BS40)</p>
        </div>
        <div>
          <h2>Sacrifical Chamber</h2>
          <p>Jungle Boogymen (BS60)</p>
          <p>Amphibian Assault (BS60)</p>
        </div>
        <div>
          <h2>Waughroon Shrine</h2>
          <p>Royal Jelly (BS40)</p>
          <p>Up in Arms (BS60)</p>
          <p>Operation Desert Swarm (KS30)</p>
        </div>
      </div>
  </div>
</template>

<script>

import backgroundFunction from '../../utils.js'

export default {
  name: 'BCNM-KSNM-ENM',
  mounted () {
    backgroundFunction()
  }
}

</script>

<style scoped>

  .bcnm-ksnm-enm {
    grid-row: 2;
    border: 1px solid white;
    border-bottom: none;
    border-right: none;
    border-radius: .5rem;
    padding: 3rem;
    margin-left: 10rem;
  }

  .meat {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  p {
    font-size: 0.9rem;
    /* text-align: center; */
  }

</style>
