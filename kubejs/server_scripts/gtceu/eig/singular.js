ServerEvents.recipes(event=>{
    event.recipes.gtceu.assembler('singular2')
    .itemInputs('4x ae2:spatial_cell_component_2','8x #gtceu:circuits/ev','2x mekanism:basic_energy_cube','minecraft:nether_star','20x minecraft:diamond_block')
    .inputFluids(Fluid.of('gtceu:nichrome',576))
    .duration(600)
    .EUt(1920)
    .itemOutputs('kubejs:singular_storage_2');


    event.recipes.gtceu.assembly_line('singular16')
    .itemInputs('16x ae2:spatial_cell_component_16','16x #gtceu:circuits/luv','8x mekanism:ultimate_energy_cube','4x gtceu:quantum_star','2x ae2:singularity',
        '64x mekanism:teleporter_frame','64x gtceu:ender_pearl_plate'
    )
    .inputFluids(Fluid.of('gtceu:zeron_100',576))
    .duration(6000)
    .EUt(30720)
    .itemOutputs('kubejs:singular_storage_16')
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('kubejs:singular_storage_2')).EUt(120).duration(9600));

    event.recipes.gtceu.assembly_line('singular128')
    .itemInputs('64x ae2:spatial_cell_component_128','32x #gtceu:circuits/uv','64x mekanism:ultimate_energy_cube','64x gtceu:quantum_star','64x ae2:singularity',
        '64x avaritia:neutron','64x avaritia:neutron','64x avaritia:neutron','64x avaritia:neutron','8x gtceu:ruthenium_trinium_americium_neutronate_hex_wire'
    )
    .inputFluids(Fluid.of('gtceu:neutronium',576))
    .duration(10000)
    .EUt(1966080)
    .itemOutputs('kubejs:singular_storage_128')
    .stationResearch(b => b.researchStack(Item.of('kubejs:singular_storage_16')).EUt(GTValues.VA[GTValues.IV]).CWUt(144)) // (1)
})