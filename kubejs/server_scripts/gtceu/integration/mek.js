ServerEvents.recipes(event=>{
    event.recipes.gtceu.chemical_reactor('heavy_water')
        .inputFluids(Fluid.of('gtceu:deuterium',2000),Fluid.of('gtceu:oxygen',1000))
        .outputFluids(Fluid.of('mekanism:heavy_water',1000))
        .duration(100)
        .EUt(480);


    
})