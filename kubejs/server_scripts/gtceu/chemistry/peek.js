ServerEvents.recipes(event=>{
    event.recipes.gtceu.large_chemical_reactor('pfb')
        .inputFluids(Fluid.of('gtceu:dichlorobenzene',1000),Fluid.of('gtceu:hydrofluoric_acid',2000))
        .duration(200)
        .EUt(7680)
        .outputFluids(Fluid.of('gtceu:p-difluorobenzene',1000),Fluid.of('gtceu:hydrochloric_acid',2000));

    event.recipes.gtceu.large_chemical_reactor('fto')
        .inputFluids(Fluid.of('gtceu:toluene',1000),Fluid.of('gtceu:fluorine',1000))
        .duration(40)
        .EUt(7680)
        .outputFluids(Fluid.of('gtceu:p-fluorotoluene',1000),Fluid.of('gtceu:hydrofluoric_acid',1000));

    event.recipes.gtceu.large_chemical_reactor('f3clto')
        .inputFluids(Fluid.of('gtceu:p-fluorotoluene',1000),Fluid.of('gtceu:chlorine',2000),Fluid.of('gtceu:p-difluorobenzene',1000))
        .duration(200)
        .EUt(30720)
        .outputFluids(Fluid.of('gtceu:4-fluorobenzotrichloride',1000),Fluid.of('gtceu:hydrochloric_acid',3000),Fluid.of('gtceu:hydrofluoric_acid',1000));

    event.recipes.gtceu.mixer('fktaq')
        .inputFluids(Fluid.of('gtceu:4-fluorobenzotrichloride',1000),Fluid.water(1000))
        .outputFluids(Fluid.of('gtceu:4-fluorobenzotrichloride_solution',1000))
        .EUt(1920)
        .duration(100);
    event.recipes.gtceu.distillation_tower('fkt')
        .inputFluids(Fluid.of('gtceu:4-fluorobenzotrichloride_solution',1000))
        .duration(400)
        .EUt(7680)
        .outputFluids(Fluid.of('gtceu:bis4-fluorophenylmethanone',1000),Fluid.of('gtceu:hydrochloric_acid',2000));

    event.recipes.gtceu.chemical_plant('peek')
        .inputFluids(Fluid.of('gtceu:bis4-fluorophenylmethanone',1000),Fluid.of('gtceu:p-difluorobenzene',1000))
        .itemInputs('6x gtceu:soda_ash_dust')
        .addDataNumber('temp',6300)
        .duration(600)
        .EUt(122880)
        .itemOutputs('4x gtceu:sodium_fluoride_dust')
        .outputFluids(Fluid.of('gtceu:peek',1000),Fluid.of('gtceu:carbon_dioxide',1000),Fluid.water(1000));
})