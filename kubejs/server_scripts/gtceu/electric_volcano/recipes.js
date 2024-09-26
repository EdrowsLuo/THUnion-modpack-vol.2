ServerEvents.recipes(event=>{
    event.recipes.gtceu.assembler('lava')
        .circuit(1)
        .duration(100)
        .EUt(1920)
        .outputFluids(Fluid.lava(1000));
})