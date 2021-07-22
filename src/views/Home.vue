<template>
  <div class="home">
    <h2>Welcome!</h2>
    <div class ="meat">
      <p>Atavism attempts to be a new path to the ancient Final Fantasy XI world before the release of TOAU and all subsequent expansions.
        We embrace a few deviations that could, perhaps, "improve" things a bit.
      </p>
      <p>
        This project is a fork of <a href = "https://www.limitbreakffxi.com/">Limit Break</a> (TOAU) which is a fork of
        <a href = "https://www.wingsxi.com/wings/index.php">Wings</a> (WOTG). Atavism is the only COP era private server. While the COP era
        of FFXI was certainly more closely related to the TOAU or WOTG era than modern FFXI there are still some major differences (see
        FAQ).
      </p>
      <h2>What You Will Find Here</h2>
      <p>To start, we will be a level 50 cap server with only vanilla jobs and zones. Upon the Shadow Lords defeat ROZ zones, missions, jobs, etc
        will be unlocked for the entire server. Summoner will be available from the start but won't have many summons available until ROZ
        is released. Upon the defeat of Eald'narche COP missions, zones, etc will be unlocked for the entire server.
        </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: inherit;
  }
  .home {
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

  p {
    font-size: 18px;
  }

  h2 {
    font-size: 1.5rem;
  }
</style>
