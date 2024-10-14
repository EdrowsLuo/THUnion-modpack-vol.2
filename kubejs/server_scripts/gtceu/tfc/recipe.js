ServerEvents.recipes(event=>{
    event.recipes.gtceu.assembly_line('twisted_fusion_controller')
    .itemInputs('8x gtceu:fusion_coil','4x #gtceu:circuits/uev','4x gtceu:gravi_star','gtceu:double_neutronium_plate',
        '4x gtceu:uhv_field_generator','64x gtceu:uhpic_chip','64x gtceu:uhpic_chip','64x gtceu:uhpic_chip','8x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire'
    )
    .inputFluids(Fluid.of('gtceu:soldering_alloy',2304),Fluid.of('gtceu:neutronium',1152))
    .itemOutputs('gtceu:twisted_fusion_mk1')
    .stationResearch(b => b.researchStack(Item.of('gtceu:uv_fusion_reactor')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(4800000)
    .duration(6000);

    event.recipes.gtceu.assembler('twisted_fusion_casing')
    .itemInputs('gtceu:uhv_machine_casing','2x gtceu:fusion_coil','2x gtceu:uv_voltage_coil','2x gtceu:uhv_field_generator',
        '6x gtceu:neutronium_plate'
    )
    .inputFluids(Fluid.of('gtceu:polybenzimidazole',576))
    .itemOutputs('2x kubejs:twisted_fusion_casing')
    .EUt(1966080)
    .duration(100);
});
