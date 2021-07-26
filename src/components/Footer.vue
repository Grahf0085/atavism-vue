<template>
  <footer>

    <p>All FINAL FANTASY® XI content and images © 2002-2021SQUARE ENIX CO., LTD. All Rights Reserved.</p>

    <p>Special Thanks to <a href = "https://github.com/LandSandBoat/server">LandSandBoat</a>, <a href = "https://www.wingsxi.com">Wings</a>, and <a href = "https://www.limitbreakffxi.com/">LimitBreak</a></p>

    <p>FINAL FANTASY® is a registered trademark of SQUARE ENIX CO., LTD. All Rights Reserved.</p>

  </footer>
</template>

<script>
export default {
  name: 'Footer'
}

</script>

<style scoped>

  footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    padding-left: 15rem;
    position: absolute;
    bottom: 0;
    height: 2.0rem;
    padding-bottom: 1rem;
  }

  p {
    font-size: .9rem;
    margin: 0;
  }

</style>
