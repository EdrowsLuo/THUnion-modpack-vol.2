ServerEvents.recipes(event=>{
    event.recipes.gtceu.assembly_line('uhv_electric_motor')
    .itemInputs('2x gtceu:long_magnetic_samarium_rod','4x gtceu:long_darmstadtium_rod','4x gtceu:darmstadtium_ring','8x gtceu:darmstadtium_round',
        '64x gtceu:fine_cosmic_neutron_wire','64x gtceu:fine_cosmic_neutron_wire','64x gtceu:fine_cosmic_neutron_wire','2x gtceu:europium_double_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',1152),Fluid.of('gtceu:lubricant',2000),Fluid.of('gtceu:neutronium',144))
    .itemOutputs('gtceu:uhv_electric_motor')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uv_electric_motor')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(300000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uhv_electric_pump')
    .itemInputs('gtceu:uhv_electric_motor','gtceu:duranium_large_fluid_pipe','2x gtceu:darmstadtium_plate','8x gtceu:darmstadtium_screw',
        '32x gtceu:silicone_rubber_ring','gtceu:darmstadtium_rotor','2x gtceu:europium_double_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',1152),Fluid.of('gtceu:lubricant',2000),Fluid.of('gtceu:neutronium',144))
    .itemOutputs('gtceu:uhv_electric_pump')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uv_electric_pump')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(300000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uhv_electric_piston')
    .itemInputs('gtceu:uhv_electric_motor','4x gtceu:darmstadtium_plate','4x gtceu:darmstadtium_ring','16x gtceu:darmstadtium_round',
        '4x gtceu:darmstadtium_rod','gtceu:darmstadtium_gear','gtceu:small_darmstadtium_gear','2x gtceu:europium_double_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',1152),Fluid.of('gtceu:lubricant',2000),Fluid.of('gtceu:neutronium',144))
    .itemOutputs('gtceu:uhv_electric_piston')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uv_electric_piston')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(300000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uhv_conveyor_module')
    .itemInputs('2x gtceu:uhv_electric_motor','2x gtceu:darmstadtium_plate','4x gtceu:darmstadtium_ring','16x gtceu:darmstadtium_round',
        '4x gtceu:darmstadtium_screw','2x gtceu:europium_double_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',1152),Fluid.of('gtceu:lubricant',2000),Fluid.of('gtceu:styrene_butadiene_rubber',4608),Fluid.of('gtceu:neutronium',144))
    .itemOutputs('gtceu:uhv_conveyor_module')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uv_conveyor_module')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(300000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uhv_robot_arm')
    .itemInputs('4x gtceu:long_darmstadtium_rod','gtceu:darmstadtium_gear','3x gtceu:small_darmstadtium_gear','2x gtceu:uhv_electric_motor',
        'gtceu:uhv_electric_piston','#gtceu:circuits/uhv','2x #gtceu:circuits/uv','4x #gtceu:circuits/zpm','4x gtceu:europium_double_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',2304),Fluid.of('gtceu:lubricant',2000),Fluid.of('gtceu:neutronium',144))
    .itemOutputs('gtceu:uhv_robot_arm')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uv_robot_arm')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(300000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uhv_emitter')
    .itemInputs('gtceu:neutronium_frame','2x gtceu:uhv_electric_motor','4x gtceu:long_darmstadtium_rod','gtceu:gravi_star',
        '2x #gtceu:circuits/uhv','2x #gtceu:circuits/uv','64x gtceu:neutronium_foil','32x gtceu:neutronium_foil','4x gtceu:europium_double_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',2304),Fluid.of('gtceu:neutronium',144))
    .itemOutputs('gtceu:uhv_emitter')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uv_emitter')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(300000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uhv_sensor')
    .itemInputs('gtceu:neutronium_frame','2x gtceu:uhv_electric_motor','4x gtceu:darmstadtium_plate','gtceu:gravi_star',
        '2x #gtceu:circuits/uhv','2x #gtceu:circuits/uv','64x gtceu:neutronium_foil','32x gtceu:neutronium_foil','4x gtceu:europium_double_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',2304),Fluid.of('gtceu:neutronium',144))
    .itemOutputs('gtceu:uhv_sensor')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uv_sensor')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(300000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uhv_field_generator')
    .itemInputs('gtceu:neutronium_frame','6x gtceu:darmstadtium_plate','gtceu:gravi_star','2x gtceu:uhv_emitter',
        '2x #gtceu:circuits/uhv','64x gtceu:ruthenium_trinium_americium_neutronate_single_wire','64x gtceu:ruthenium_trinium_americium_neutronate_single_wire','4x gtceu:europium_double_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',2304),Fluid.of('gtceu:neutronium',144))
    .itemOutputs('gtceu:uhv_field_generator')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uv_field_generator')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(300000)
    .duration(400);


    event.recipes.gtceu.assembly_line('uev_electric_motor')
    .itemInputs('4x gtceu:long_magnetic_samarium_rod','4x gtceu:long_eternal_neutron_rod','4x gtceu:eternal_neutron_ring','8x gtceu:eternal_neutron_round',
        '64x gtceu:fine_neutronium_wire','64x gtceu:fine_neutronium_wire','64x gtceu:fine_neutronium_wire','64x gtceu:fine_neutronium_wire',
        '2x gtceu:crystal_matrix_quadruple_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',2304),Fluid.of('gtceu:lubricant',4000),Fluid.of('gtceu:neutronium',576))
    .itemOutputs('gtceu:uev_electric_motor')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_electric_motor')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(1200000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uev_electric_pump')
    .itemInputs('gtceu:uev_electric_motor','gtceu:neutronium_large_fluid_pipe','2x gtceu:eternal_neutron_plate','8x gtceu:eternal_neutron_screw',
        '64x gtceu:silicone_rubber_ring','gtceu:eternal_neutron_rotor','2x gtceu:crystal_matrix_quadruple_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',2304),Fluid.of('gtceu:lubricant',4000),Fluid.of('gtceu:neutronium',576))
    .itemOutputs('gtceu:uev_electric_pump')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_electric_pump')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(1200000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uev_electric_piston')
    .itemInputs('gtceu:uev_electric_motor','4x gtceu:eternal_neutron_plate','4x gtceu:eternal_neutron_ring','16x gtceu:eternal_neutron_round',
        '4x gtceu:eternal_neutron_rod','gtceu:eternal_neutron_gear','gtceu:small_eternal_neutron_gear','2x gtceu:crystal_matrix_quadruple_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',2304),Fluid.of('gtceu:lubricant',4000),Fluid.of('gtceu:neutronium',576))
    .itemOutputs('gtceu:uev_electric_piston')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_electric_piston')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(1200000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uev_conveyor_module')
    .itemInputs('2x gtceu:uev_electric_motor','2x gtceu:eternal_neutron_plate','4x gtceu:eternal_neutron_ring','16x gtceu:eternal_neutron_round',
        '4x gtceu:eternal_neutron_screw','2x gtceu:crystal_matrix_quadruple_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',2304),Fluid.of('gtceu:lubricant',4000),Fluid.of('gtceu:styrene_butadiene_rubber',9216),Fluid.of('gtceu:neutronium',576))
    .itemOutputs('gtceu:uev_conveyor_module')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_conveyor_module')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(1200000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uev_robot_arm')
    .itemInputs('4x gtceu:long_eternal_neutron_rod','gtceu:eternal_neutron_gear','3x gtceu:small_eternal_neutron_gear','2x gtceu:uev_electric_motor',
        'gtceu:uev_electric_piston','#gtceu:circuits/uev','2x #gtceu:circuits/uhv','4x #gtceu:circuits/uv','4x gtceu:crystal_matrix_quadruple_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',4608),Fluid.of('gtceu:lubricant',4000),Fluid.of('gtceu:neutronium',576))
    .itemOutputs('gtceu:uev_robot_arm')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_robot_arm')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(1200000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uev_emitter')
    .itemInputs('gtceu:twisted_frame','2x gtceu:uev_electric_motor','4x gtceu:long_eternal_neutron_rod','gtceu:gravi_star',
        '2x #gtceu:circuits/uev','2x #gtceu:circuits/uhv','64x gtceu:neutronium_foil','32x gtceu:neutronium_foil','4x gtceu:crystal_matrix_quadruple_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',4608),Fluid.of('gtceu:neutronium',576))
    .itemOutputs('gtceu:uev_emitter')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_emitter')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(1200000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uev_sensor')
    .itemInputs('gtceu:twisted_frame','2x gtceu:uev_electric_motor','4x gtceu:eternal_neutron_plate','gtceu:gravi_star',
        '2x #gtceu:circuits/uev','2x #gtceu:circuits/uhv','64x gtceu:neutronium_foil','32x gtceu:neutronium_foil','4x gtceu:crystal_matrix_quadruple_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',4608),Fluid.of('gtceu:neutronium',576))
    .itemOutputs('gtceu:uev_sensor')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_sensor')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(1200000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uev_field_generator')
    .itemInputs('gtceu:twisted_frame','6x gtceu:eternal_neutron_plate','gtceu:gravi_star','2x gtceu:uev_emitter',
        '2x #gtceu:circuits/uev','64x gtceu:fine_eternium_wire',
        '64x gtceu:fine_eternium_wire','4x gtceu:crystal_matrix_quadruple_cable'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',4608),Fluid.of('gtceu:neutronium',576))
    .itemOutputs('gtceu:uev_field_generator')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_field_generator')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(1200000)
    .duration(400);

    event.recipes.gtceu.assembly_line('uev_energy_input_hatch')
    .itemInputs('gtceu:uev_machine_hull','4x gtceu:crystal_matrix_single_cable','2x gtceu:uhpic_chip','#gtceu:circuits/uev',
        '2x gtceu:eternium_double_wire'
    )
    .inputFluids(Fluid.of('gtceu:sodium_potassium',14000),Fluid.of('gtceu:soldering_alloy',5760))
    .itemOutputs('gtceu:uev_energy_input_hatch')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_energy_input_hatch')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(7864320)
    .duration(1000);

    event.recipes.gtceu.assembly_line('uev_energy_output_hatch')
    .itemInputs('gtceu:uev_machine_hull','4x gtceu:crystal_matrix_spring','2x gtceu:uhpic_chip','#gtceu:circuits/uev',
        '2x gtceu:eternium_double_wire'
    )
    .inputFluids(Fluid.of('gtceu:sodium_potassium',14000),Fluid.of('gtceu:soldering_alloy',5760))
    .itemOutputs('gtceu:uev_energy_output_hatch')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uhv_energy_output_hatch')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(7864320)
    .duration(1000);
    

    tieredCasing(event,'uev','seaborgium','peek','crystal_matrix')

    tieredCasing(event,'uiv','draconium_awakened','peek','draconium')

    tieredTransformer(event, 'uhv', 'europium','crystal_matrix','gtceu:uhpic_chip');
    tieredTransformer(event, 'uev', 'crystal_matrix','draconium','gtceu:uhpic_chip');
    
    event.recipes.gtceu.mixer('calamity_crystal')
    .itemInputs('gtceu:celestial_desire_dust','gtceu:celestial_chaotic_dust','gtceu:celestial_truth_dust','gtceu:celestial_life_dust',
        'gtceu:celestial_origin_dust','gtceu:celestial_nihility_dust','gtceu:celestial_end_dust'
    )
    .inputFluids(Fluid.of('bloodmagic:life_essence_fluid',1000000))
    .duration(1200)
    .EUt(66666)
    .itemOutputs('gtceu:calamity_crystal_dust');

    ['desire','chaotic','truth','life','origin','nihility','end'].forEach(type=>{
        event.recipes.gtceu.macerator(`${type}_etching`)
        .itemInputs(`celestial_artifacts:${type}_etching`)
        .duration(600)
        .EUt(30720)
        .itemOutputs(`64x gtceu:celestial_${type}_dust`);

        event.recipes.gtceu.autoclave(`${type}_etching_form`)
        .itemInputs(`64x gtceu:celestial_${type}_dust`)
        .itemOutputs(`celestial_artifacts:${type}_etching`)
        .inputFluids(Fluid.of('gtceu:naquadah',576))
        .duration(1200)
        .EUt(30720)

        event.recipes.gtceu.autoclave(`${type}_etching_form_nt`)
        .itemInputs(`64x gtceu:celestial_${type}_dust`)
        .itemOutputs(`celestial_artifacts:${type}_etching`)
        .inputFluids(Fluid.of('gtceu:neutronium',1))
        .duration(20)
        .EUt(122880)
    })

});

function tieredTransformer(event,tier,tierwire,nexttierwire,chip){
    event.shaped(
        `gtceu:${tier}_transformer_1a`, 
        [
          'CWW',
          'NH ', 
          'CWW'
        ],
        {
          C: chip,
          H: `gtceu:${tier}_machine_hull`,
          W: `gtceu:${tierwire}_single_cable`,
          N: `gtceu:${nexttierwire}_single_cable` 
        }
      );

      event.shaped(
        `gtceu:${tier}_transformer_2a`, 
        [
          'CWW',
          'NH ', 
          'CWW'
        ],
        {
          C: chip,
          H: `gtceu:${tier}_machine_hull`,
          W: `gtceu:${tierwire}_double_cable`,
          N: `gtceu:${nexttierwire}_double_cable` 
        }
      );
      event.shaped(
        `gtceu:${tier}_transformer_4a`, 
        [
          'CWW',
          'NH ', 
          'CWW'
        ],
        {
          C: chip,
          H: `gtceu:${tier}_machine_hull`,
          W: `gtceu:${tierwire}_quadruple_cable`,
          N: `gtceu:${nexttierwire}_quadruple_cable` 
        }
      );
      event.shaped(
        `gtceu:${tier}_transformer_16a`, 
        [
          'CWW',
          'NH ', 
          'CWW'
        ],
        {
          C: chip,
          H: `gtceu:${tier}_machine_hull`,
          W: `gtceu:${tierwire}_hex_cable`,
          N: `gtceu:${nexttierwire}_hex_cable` 
        }
      );
}


function tieredCasing(event,tier,basemat,plastic,wire){
    event.remove({output:`gtceu:${tier}_machine_casing`});
    event.remove({output:`gtceu:${tier}_machine_hull`});
    event.shaped(
        `gtceu:${tier}_machine_casing`, 
        [
          'WWW',
          'WTW', 
          'WWW'
        ],
        {
          W: `gtceu:${basemat}_plate`,
          T: '#forge:tools/wrenches', 
        }
      );

      event.shaped(
        `gtceu:${tier}_machine_hull`, 
        [
          '   ',
          'PBP', 
          'WCW'
        ],
        {
          B: `gtceu:${basemat}_plate`,
          P: `gtceu:${plastic}_plate`,
          W: `gtceu:${wire}_single_cable`, 
          C: `gtceu:${tier}_machine_casing`
        }
      );

    event.recipes.gtceu.assembler(`${tier}_casing`)
    .itemInputs(`8x gtceu:${basemat}_plate`)
    .circuit(8)
    .itemOutputs(`gtceu:${tier}_machine_casing`)
    .EUt(16)
    .duration(50);

    event.recipes.gtceu.assembler(`${tier}_hull`)
    .itemInputs(`gtceu:${tier}_machine_casing`,`2x gtceu:${wire}_single_cable`)
    .inputFluids(Fluid.of(`gtceu:${plastic}`,288))
    .itemOutputs(`gtceu:${tier}_machine_hull`)
    .EUt(16)
    .duration(50);
    
    
}


ServerEvents.recipes(event=>{
    
});

ServerEvents.tags("item", event => {
    event.add('forge:ingots','avaritia:neutron_ingot');
    event.add('forge:ingots/cosmic_neutron','avaritia:neutron_ingot');

    event.add('forge:nuggets','avaritia:neutron_nugget');
    event.add('forge:nuggets/cosmic_neutron','avaritia:neutron_nugget');

    event.add('forge:storage_blocks','avaritia:neutron');
    event.add('forge:storage_blocks/cosmic_neutron','avaritia:neutron');

    event.add('forge:ingots','avaritia:crystal_matrix_ingot');
    event.add('forge:ingots/crystal_matrix','avaritia:crystal_matrix_ingot');

    event.add('forge:storage_blocks','avaritia:crystal_matrix');
    event.add('forge:storage_blocks/crystal_matrix','avaritia:crystal_matrix');

    event.add('forge:nuggets/eternium','l2complements:eternium_nugget');
    event.add('forge:ingots/eternium','l2complements:eternium_ingot');
    event.add('forge:storage_blocks/eternium','l2complements:eternium_block');


});