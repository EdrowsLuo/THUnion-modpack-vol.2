ServerEvents.recipes(event=>{
    event.remove({output:'gtceu:nan_certificate'});
    event.recipes.gtceu.extruder('nan_fix')
    .itemInputs('128x gtceu:neutronium_block')
    .itemOutputs('gtceu:nan_certificate')
    .EUt(7)
    .duration(2147483647);


    event.recipes.gtceu.neutron_compressor('test1')
    .itemInputs('1000x #forge:ingots/iron')
    .itemOutputs(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'))
    .EUt(491520)
    .duration(1);

    ['nickel','iron','copper','bronze','electrum','steel','tin','invar','aluminum','silver','gold','lead','uranium','tungsten','titanium',
        'naquadah','netherite','platinum'].forEach(material=>{
        singularityRecipe(event,`#forge:ingots/${material}`,material);
    });
    ['coal','diamond','emerald'].forEach(material=>{
        singularityRecipe(event,`#forge:gems/${material}`,material);
    });
    ['redstone','glowstone'].forEach(material=>{
        singularityRecipe(event,`#forge:dusts/${material}`,material);
    });

    singularityRecipe(event,'minecraft:lapis_lazuli','lapis_lazuli');

    event.recipes.gtceu.neutron_compressor('optic_singularity')
        .itemInputs(`1000x kubejs:optic_processor_mainframe`)
        .itemOutputs('kubejs:optic_processor_singularity')
        .EUt(31457280)
        .duration(1);


    function singularityRecipe(event, input, output){
        event.recipes.gtceu.neutron_compressor(`${output}_singularity`)
        .itemInputs(`1000x ${input}`)
        .itemOutputs(Item.of('avaritia:singularity',`{Id:"avaritia:${output}"}`))
        .EUt(491520)
        .duration(1);
    }
    
    

    event.recipes.gtceu.assembly_line('ultimate_compressor')
    .itemInputs('64x avaritia:neutron','64x avaritia:neutron','64x avaritia:neutron','64x avaritia:neutron',
        '64x avaritia:neutron_compressor','64x avaritia:neutron_compressor','64x avaritia:neutron_compressor','64x avaritia:neutron_compressor',
        '4x gtceu:uhv_electric_piston','4x gtceu:europium_double_cable','4x #gtceu:circuits/uhv'
    )
    .inputFluids(Fluid.of('gtceu:neutronium',1440))
    .itemOutputs('gtceu:ultimate_neutron_compressor')
    .stationResearch(b => b.researchStack(Item.of('avaritia:neutron_compressor')).EUt(GTValues.VA[GTValues.IV]).CWUt(40))
    .EUt(300000)
    .duration(400);
})
