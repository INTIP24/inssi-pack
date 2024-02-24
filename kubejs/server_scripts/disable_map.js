PlayerEvents.loggedIn((event) => {
  event.server.runCommandSilent(`effect give ${event.player.username} xaerominimap:no_minimap infinite 0 true`);
  event.server.runCommandSilent(`effect give ${event.player.username} xaeroworldmap:no_world_map infinite 0 true`);
});

PlayerEvents.respawned((event) => {
  event.server.runCommandSilent(`effect give ${event.player.username} xaerominimap:no_minimap infinite 0 true`);
  event.server.runCommandSilent(`effect give ${event.player.username} xaeroworldmap:no_world_map infinite 0 true`);
});