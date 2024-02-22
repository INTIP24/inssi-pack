PlayerEvents.loggedIn((event) => {
  event.player.potionEffects.add("xaerosminimap:no_minimap", Infinite, 1, false, false);
});

PlayerEvents.respawned((event) => {
  event.player.potionEffects.add("xaerosminimap:no_minimap", Infinite, 1, false, false);
});