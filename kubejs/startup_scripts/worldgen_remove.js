WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.blocks = ['embers:silver_ore', 'embers:lead_ore'];
  });
});