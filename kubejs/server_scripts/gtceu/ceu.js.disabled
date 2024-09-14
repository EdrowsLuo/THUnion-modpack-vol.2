var chips=[
    '#forge:plates/steel',
    '#forge:plates/aluminium',
    'gtceu:ulpic_chip',
    'gtceu:lpic_chip',
    'gtceu:mpic_chip',
    'gtceu:hpic_chip',
    'gtceu:uhpic_chip',
    'gtceu:uhpic_chip'
];

var cablemat=[
    'tin',
    'copper',
    'gold',
    'aluminium',
    'platinum',
    'niobium_titanium',
    'vanadium_gallium',
    'yttrium_barium_cuprate'
]

var tiers=[
    'lv','mv','hv','ev','iv','luv','zpm','uv'
];

var amperes=[
    '1a','4a','16a'
];

var ampereshatch=[
    '','_4a','_16a'
];

var cables=[
    'single','quadruple','hex'
];

ServerEvents.recipes( event => {
    for (var i=0;i<8;i++){
        for(var j=0;j<3;j++){
            event.shaped(
                Item.of('gtceu:'+tiers[i]+'_'+amperes[j]+'_energy_converter', 1), 
                [
                  'CIC',
                  'PHP', 
                  'COC'
                ],
                {
                  C: 'gtceu:'+cablemat[i]+'_'+cables[j]+'_cable',
                  I: (i<3?'gtceu:'+tiers[i]+'_energy_input_hatch':'gtceu:'+tiers[i]+'_energy_input_hatch'+ampereshatch[j]), 
                  O: (i<3?'gtceu:'+tiers[i]+'_energy_output_hatch':'gtceu:'+tiers[i]+'_energy_output_hatch'+ampereshatch[j]),
                  P: chips[i],
                  H: 'gtceu:'+tiers[i]+'_machine_hull'
                }
              );
        }
    }

    event.shaped(
        Item.of('gtceu:lv_voltage_coil', 1), 
        [
          'WWW',
          'WRW', 
          'WWW'
        ],
        {
          W: 'gtceu:steel_single_wire',
          R: 'gtceu:magnetic_iron_rod', 
        }
      );
});