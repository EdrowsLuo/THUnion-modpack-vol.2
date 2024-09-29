ServerEvents.recipes(event=>{
    //Scandium
    event.recipes.gtceu.fusion_reactor('scandium')
    .inputFluids(Fluid.of('gtceu:calcium',16),Fluid.of('gtceu:hydrogen',125))
    .outputFluids(Fluid.of('gtceu:scandium',16))
    .duration(32)
    .EUt(24576)
    .fusionStartEU(100000000);

    //Rhenium
    event.recipes.gtceu.fusion_reactor('rhenium')
    .inputFluids(Fluid.of('gtceu:tungsten',16),Fluid.of('gtceu:hydrogen',125))
    .outputFluids(Fluid.of('gtceu:rhenium',16))
    .duration(32)
    .EUt(24576)
    .fusionStartEU(100000000);

    //Holmium
    event.recipes.gtceu.fusion_reactor('holmium')
    .inputFluids(Fluid.of('gtceu:europium',16),Fluid.of('gtceu:hydrogen',375))
    .outputFluids(Fluid.of('gtceu:holmium',16))
    .duration(32)
    .EUt(24576)
    .fusionStartEU(100000000);

    //Gadolinium
    event.recipes.gtceu.fusion_reactor('gadolinium')
    .inputFluids(Fluid.of('gtceu:samarium',16),Fluid.of('gtceu:hydrogen',250))
    .outputFluids(Fluid.of('gtceu:gadolinium',16))
    .duration(32)
    .EUt(49152)
    .fusionStartEU(200000000);
})