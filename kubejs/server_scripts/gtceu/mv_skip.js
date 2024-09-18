ServerEvents.recipes(event=>{
    ['white','light_gray','gray','black','brown','red','orange','yellow','lime','green','cyan','light_blue','blue','purple','magneta','pink'].forEach(
        color=>{coloredGlassLens(event,color)}
    );

    event.recipes.gtceu.forming_press('mek_lv_circuit')
        .itemInputs('#forge:plates/osmium','4x #forge:dusts/redstone')
        .itemOutputs('4x mekanism:basic_control_circuit')
        .EUt(30)
        .duration(30);
    
    event.recipes.gtceu.circuit_assembler('mek_mv_circuit')
        .itemInputs('mekanism:basic_control_circuit','4x gtceu:fine_annealed_copper_wire')
        .inputFluids(Fluid.of('gtceu:redstone',16))
        .itemOutputs('4x mekanism:advanced_control_circuit')
        .EUt(30)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('mek_hv_circuit')
        .itemInputs('mekanism:advanced_control_circuit','4x gtceu:fine_gold_wire')
        .inputFluids(Fluid.of('gtceu:redstone',72))
        .itemOutputs('4x mekanism:elite_control_circuit')
        .EUt(120)
        .duration(100);

    event.recipes.gtceu.circuit_assembler('mek_ev_circuit')
        .itemInputs('mekanism:elite_control_circuit','4x gtceu:fine_electrum_wire')
        .inputFluids(Fluid.of('gtceu:redstone',288))
        .itemOutputs('4x mekanism:ultimate_control_circuit')
        .EUt(480)
        .duration(100);
    
});


function coloredGlassLens(event, color){
    event.recipes.gtceu.lathe(`kjs/lens_${color}`)
        .itemInputs(`minecraft:${color}_stained_glass`)
        .itemOutputs(`gtceu:${color}_glass_lens`,'gtceu:small_glass_dust')
        .duration(600)
        .EUt(120);

}