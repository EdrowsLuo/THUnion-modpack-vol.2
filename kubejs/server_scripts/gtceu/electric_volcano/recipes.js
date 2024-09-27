ServerEvents.recipes(event=>{
    event.recipes.gtceu.electric_volcano('lava')
        .circuit(1)
        .duration(100)
        .EUt(1920)
        .outputFluids(Fluid.lava(1000));
})