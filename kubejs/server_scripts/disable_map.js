PlayerEvents.loggedIn((event) => {
  event.server.runCommandSilent(`effect give ${event.player.username} xaerominimap:no_minimap infinite 0 true`);
});

PlayerEvents.respawned((event) => {
  event.server.runCommandSilent(`effect give ${event.player.username} xaerominimap:no_minimap infinite 0 true`);
  //event.player.potionEffects.add("xaerominimap:no_minimap", Infinite, 1, false, false);
});