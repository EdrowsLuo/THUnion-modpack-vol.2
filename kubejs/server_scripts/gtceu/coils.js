
var materials=[
    'cupronickel','kanthal','nichrome','rtm_alloy','hssg'
];

ServerEvents.recipes( event => {
    materials.forEach(material=>{
      event.remove({output: `gtceu:${material}_coil_block`});
      event.remove({input:`gtceu:${material}_coil_block`,type:'gtceu:macerator'});
      console.log('123');
      event.shaped(
          Item.of(`gtceu:${material}_coil_block`, 1), 
          [
            'WWW',
            'WTW', 
            'WWW'
          ],
          {
            W: `gtceu:${material}_single_wire`,
            T: '#forge:tools/wrenches', 
          }
        );
      event.recipes.gtceu.assembler(`simplified_${material}_coil_block`)
        .itemInputs(`8x gtceu:${material}_single_wire`)
        .itemOutputs(`1x gtceu:${material}_coil_block`)
        .circuit(8)
        .EUt(120)
        .duration(40);
    });
    
  }

);