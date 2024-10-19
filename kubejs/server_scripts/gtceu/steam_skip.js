ServerEvents.recipes(event => {
  event.smelting('2x gtceu:raw_rubber_dust', 'gtceu:sticky_resin');
  event.recipes.create.mixing(Fluid.of('gtceu:rubber',432),['3x gtceu:raw_rubber_dust','#forge:dusts/sulfur']).heated();
  
  event.recipes.create.compacting('gtceu:rubber_plate',[Fluid.of('gtceu:rubber',144)]);
  event.recipes.create.pressing('minecraft:glass_pane','#forge:dusts/glass');
  event.shaped(
    Item.of('gtceu:glass_tube', 1),
    [
      ' A ',
      'A A', 
      ' A '
    ],
    {
       A: 'minecraft:glass_pane'
    }
  );
});

