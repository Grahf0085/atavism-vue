<template>
  <div class = "support">
    <h2>Supportish</h2>
    <div class = "meat">
      <h2>Your Toon Is Stuck? Type "!unstuck"</h2>
      <p>The "!unstuck" command will teleport your toon back to it's homepoint after 20 minutes. This command should only be used
         as a last resprt when you're unable to move. After you type "!unstuck" and press enter you toon will receive a terror
         status (your character will be unable to move or otherwise act) for 20 minutes. After a 20 minute wait your toon will be teleported back to it's home point. Anyone
         abusing this command could be punished. This command cannot be cancelled once triggered.
      </p>
      <h2>Game Hung or Crashed Curing a Cutscene/Dialogue? Type "!release"</h2>
        <p>If a cutscene or dialogue is frozen it might be possible to skip the cutscene by using the "!release" command. Not guaranteed to work.
        </p>
      <h2>Player is Harassing You? Use /blacklist</h2>
        <p>Maybe you try and talk out the problem first. Be brave. If that doesn't work ask the player to stop sending you
          messages. If that doesn't work use the /blacklist command to block the player from contacting you in-game. If that
          doesn't work please take a screenshot of the incident and report on discord.
        </p>
      <h2>Witnessed a Crime? Screenshot It</h2>
      <p>Take a screenshot of the violation and post it in the discord channel. If you want to remain anonymous just PM me the screenshot. Must have evidence of your claim.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Support'
}
</script>

<style scoped>

  .support {
    grid-row: 2;
    border: 1px solid white;
    border-bottom: none;
    border-right: none;
    border-radius: .5rem;
    padding: 3rem;
    margin-left: 10rem;
  }

</style>
