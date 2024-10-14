ServerEvents.recipes(event => {

    event.shaped(
        'gtceu:chemical_plant', 
        [
          'ZMZ',
          'PLP', 
          'ZHZ'
        ],
        {
          Z: '#gtceu:circuits/zpm',
          M: 'gtceu:luv_electric_motor', 
          P: 'gtceu:polytetrafluoroethylene_nonuple_fluid_pipe',
          L: 'gtceu:large_chemical_reactor',
          H: 'gtceu:zpm_machine_hull'
        }
      );

    event.recipes.gtceu.chemical_plant('plat')
        .itemInputs('90x gtceu:platinum_group_sludge_dust')
        .circuit(1)
        .duration(200)
        .addDataNumber('temp',5400)
        .EUt(7680)
        .itemOutputs('15x #forge:dusts/platinum','9x #forge:dusts/palladium','5x #forge:dusts/ruthenium','5x #forge:dusts/rhodium','2x #forge:dusts/iridium',
            '2x #forge:dusts/osmium','18x #forge:dusts/gold','12x #forge:dusts/silicon_dioxide'
        )
        .outputFluids(Fluid.of('gtceu:ammonia',3000));

    event.recipes.gtceu.chemical_plant('rare')
        .itemInputs('64x gtceu:rare_earth_dust')
        .circuit(2)
        .duration(300)
        .addDataNumber('temp',5400)
        .EUt(7680)
        .itemOutputs('16x #forge:dusts/cadmium','16x #forge:dusts/neodymium','16x #forge:dusts/cerium','16x #forge:dusts/lanthanum',
            '16x #forge:dusts/samarium','16x #forge:dusts/yttrium','4x #forge:dusts/scandium','4x #forge:dusts/holmium','1x #forge:dusts/lutetium'
        );

    event.recipes.gtceu.chemical_plant('epoxy')
        .inputFluids(Fluid.of('gtceu:oxygen',1000),Fluid.of('gtceu:hydrogen',4000))
        .itemInputs('6x gtceu:carbon_dust',)
        .outputFluids(Fluid.of('gtceu:epoxy',1000))
        .circuit(3)
        .duration(300)
        .addDataNumber('temp',3600)
        .EUt(1920);

    event.recipes.gtceu.chemical_plant('pbi')
        .inputFluids(Fluid.of('gtceu:nitrogen',4000),Fluid.of('gtceu:hydrogen',12000))
        .itemInputs('20x gtceu:carbon_dust',)
        .outputFluids(Fluid.of('gtceu:polybenzimidazole',1000))
        .circuit(4)
        .duration(200)
        .addDataNumber('temp',7200)
        .EUt(122880);
    event.recipes.gtceu.chemical_plant('nq')
        .itemInputs('12x gtceu:naquadah_dust')
        .circuit(5)
        .duration(100)
        .addDataNumber('temp',9000)
        .EUt(122880)
        .outputFluids(Fluid.of('gtceu:enriched_naquadah',288),Fluid.of('gtceu:naquadria',288))
        .itemOutputs('2x #forge:dusts/titanium','2x #forge:dusts/trinium','1x #forge:dusts/indium','1x #forge:dusts/phosphorus',
            '1x #forge:dusts/barium','1x #forge:dusts/gallium'
        );
    
});