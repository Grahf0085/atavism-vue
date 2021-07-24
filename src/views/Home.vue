<template>
  <div class = "home">
    <h2>Welcome!</h2>
    <div class = "meat">
      <p>Atavism attempts a new path to the ancient Final Fantasy XI world before the release of TOAU and all subsequent expansions.
        We embrace a few deviations that could, perhaps, "improve" things a bit. We are a progression server that starts with only
        vanilla content and a level 50 cap. Upon the Shadow Lords defeat ROZ zones, missions, jobs, etc
        will be unlocked for the entire server. Summoner will be available from the start. COP missions, zones, etc will be unlocked for the entire server after one group gains accesses to Sky
      </p>
      <p>
        This project is a fork of <a href = "https://www.limitbreakffxi.com/">Limit Break</a> (TOAU) which is a fork of
        <a href = "https://www.wingsxi.com/wings/index.php">Wings</a> (WOTG). Atavism is the only COP era private server. While the COP era
        of FFXI was certainly more closely related to the TOAU or WOTG era than modern FFXI there are still some major differences (see
        FAQ).
      </p>
      <h2>What You Will Find Here</h2>
      <ul>
        <li>Max Level of 50 and very little ROZ/COP until Shadow Lord is Vanquished</li>
        <li>Land Kings are Force Pop</li>
        <li>Dia/Bio Overwrite Works Both Ways</li>
        <li>No Dual Boxing At This Time</li>
        <li>No Limit on Number of Auction House Listings. Items expire in 30 days.</li>
        <li>Level Sync: 10</li>
        <li>Mob Trains Walk back to Spawn Point instead of Despawning</li>
        <li>Craft Skillup Rate: 1.5</li>
        <li>No Global Yell</li>
        <li>Several Jobs H2H skill drastically increased in-order-to make Monk a more viable subjob</li>
        <li>PLD and DRK MP increased to equal RDMs. This is the way PLD and DRK were before the US release. Reintroduced here for
          many reasons including helping with a lack of healers and creating new opportunities for job/subjob combinations
        </li>
        <li>It's a known bug that topaz has way too many mobs in some zones. Also, SE has moved mobs around and
          introduced new mobs over the years. I attempted to rearrange a few zones and then got tired of it.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>

  .home {
    grid-row: 2;
    border: 1px solid white;
    border-bottom: none;
    border-right: none;
    border-radius: .5rem;
    padding: 3rem;
    margin-left: 10rem;
  }

</style>
