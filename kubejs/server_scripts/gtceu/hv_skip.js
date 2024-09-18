ServerEvents.recipes(event=>{

    event.recipes.gtceu.electrolyzer('easy_titanium')
        .itemInputs('3x gtceu:rutile_dust')
        .notConsumable('gtceu:long_platinum_rod')
        .itemOutputs('gtceu:titanium_dust')
        .outputFluids(Fluid.of('gtceu:oxygen',2000))
        .EUt(1920)
        .duration(200);

    event.recipes.gtceu.circuit_assembler('mek_hv_circuit_2')
        .itemInputs('gtceu:energetic_silver_plate','2x gtceu:cpu_chip','8x gtceu:fine_electrum_wire','4x #gtceu:resistors')
        .inputFluids(Fluid.of('gtceu:redstone',288))
        .itemOutputs('16x mekanism:elite_control_circuit')
        .EUt(480)
        .duration(200);

        
});