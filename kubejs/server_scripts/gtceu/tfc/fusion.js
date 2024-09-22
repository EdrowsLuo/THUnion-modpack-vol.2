ServerEvents.recipes(event=>{
    event.recipes.gtceu.twisted_fusion('ascr')
        .inputFluids(Fluid.of('gtceu:arsenic',144),Fluid.of('gtceu:chromium',144))
        .outputFluids(Fluid.of('gtceu:caesium',144),Fluid.of('gtceu:argon',1000))
        .EUt(30720)
        .duration(16);

    event.recipes.gtceu.twisted_fusion('fen')
        .inputFluids(Fluid.of('gtceu:iron',144),Fluid.of('gtceu:nitrogen',1000))
        .outputFluids(Fluid.of('gtceu:neon',1000),Fluid.of('gtceu:fluorine',1000))
        .EUt(30720)
        .duration(16);

    event.recipes.gtceu.twisted_fusion('kcr')
        .inputFluids(Fluid.of('gtceu:potassium',144),Fluid.of('gtceu:chromium',144))
        .outputFluids(Fluid.of('gtceu:carbon',144),Fluid.of('gtceu:krypton',1000))
        .EUt(30720)
        .duration(16);

    event.recipes.gtceu.twisted_fusion('isn')
        .inputFluids(Fluid.of('gtceu:iodine',144),Fluid.of('gtceu:tin',144))
        .outputFluids(Fluid.of('gtceu:sulfur',144),Fluid.of('gtceu:indium',144))
        .EUt(30720)
        .duration(16);

    event.recipes.gtceu.twisted_fusion('icr')
        .inputFluids(Fluid.of('gtceu:iodine',144),Fluid.of('gtceu:chromium',144))
        .outputFluids(Fluid.of('gtceu:carbon',144),Fluid.of('gtceu:iridium',144))
        .EUt(30720)
        .duration(16);

    event.recipes.gtceu.twisted_fusion('kfe')
        .inputFluids(Fluid.of('gtceu:potassium',144),Fluid.of('gtceu:iron',144))
        .outputFluids(Fluid.of('gtceu:fluorine',1000),Fluid.of('gtceu:trinium',144))
        .EUt(122880)
        .duration(16);

    event.recipes.gtceu.twisted_fusion('dkr')
        .inputFluids(Fluid.of('gtceu:deuterium',1000),Fluid.of('gtceu:krypton',1000))
        .outputFluids(Fluid.of('gtceu:potassium',144),Fluid.of('gtceu:duranium',144))
        .EUt(122880)
        .duration(16);

    event.recipes.gtceu.twisted_fusion('tdr')
        .inputFluids(Fluid.of('gtceu:tritium',1000),Fluid.of('gtceu:duranium',144))
        .outputFluids(Fluid.of('gtceu:deuterium',1000),Fluid.of('gtceu:tritanium',144))
        .EUt(491520)
        .duration(16);

    event.recipes.gtceu.twisted_fusion('npt')
        .inputFluids(Fluid.of('gtceu:nitrogen',1000),Fluid.of('gtceu:platinum',144))
        .outputFluids(Fluid.of('gtceu:neutronium',144),Fluid.of('gtceu:phosphorus',144))
        .EUt(491520)
        .duration(16);
    event.recipes.gtceu.twisted_fusion('thu')
        .inputFluids(Fluid.of('gtceu:thorium',144),Fluid.of('gtceu:uranium',144))
        .outputFluids(Fluid.of('gtceu:thunium',16))
        .EUt(1966080)
        .duration(16);

})