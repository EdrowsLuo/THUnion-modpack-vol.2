ServerEvents.recipes(event=>{
    
    addRecipes(event);


    event.recipes.gtceu.cosmic_neutron_collector('spnt_1')
    .circuit(1)
    .itemOutputs('avaritia:neutron_pile')
    .EUt(32000)
    .duration(200);

    event.recipes.gtceu.cosmic_neutron_collector('spnt_2')
    .circuit(2)
    .inputFluids(Fluid.of('gtceu:neutron',1000))
    .itemOutputs('8x avaritia:neutron_pile')
    .EUt(32000)
    .duration(200);

    event.recipes.gtceu.cosmic_neutron_collector('spnt_3')
    .circuit(3)
    .inputFluids(Fluid.of('gtceu:neutronium',1))
    .itemOutputs('64x avaritia:neutron_pile')
    .EUt(32000)
    .duration(200);

})

function addRecipes(event){

    var circuit1=1;
    var circuit2=2;
    GTRegistries.ELEMENTS.forEach(element=>{
        //console.log(element.name());
        addElement(event,element.name().toLowerCase(),element.protons(),element.neutrons());
    });
    function addElement(event, name, protons, neutrons){
        var dust=Item.of(`#forge:dusts/${name}`);
        var fluid=Fluid.of(`gtceu:${name}`,1000);
        console.log(dust);
        console.log(fluid);
        if(dust!=null){
            event.recipes.gtceu.mass_generator(`${name}_element_break`)
            .itemInputs(dust)
            .outputFluids(Fluid.of('gtceu:proton',protons),Fluid.of('gtceu:neutron',neutrons))
            .duration((protons+neutrons)*20)
            .EUt(4000);
    
            event.recipes.gtceu.element_duplicator(`${name}_element_duplicate`)
            .notConsumable(dust)
            .inputFluids(Fluid.of('gtceu:proton',protons),Fluid.of('gtceu:neutron',neutrons))
            .itemOutputs(dust)
            .duration((protons+neutrons)*20*Math.sqrt(protons+neutrons))
            .EUt(4000);

            event.recipes.gtceu.element_creator(`${name}_element_create`)
            .circuit(circuit1)
            .circuit(circuit2)
            .inputFluids(Fluid.of('gtceu:proton',protons),Fluid.of('gtceu:neutron',neutrons))
            .itemOutputs(dust)
            .duration((protons+neutrons)*200*Math.sqrt(protons+neutrons))
            .EUt(512000);
            circuit2++;
            if(circuit2>32){
                circuit1++;
                circuit2=circuit1+1;
            }
        }
        else if(Fluid.exists(`gtceu:${name}`)){
            event.recipes.gtceu.mass_generator(`${name}_element_break`)
            .inputFluids(fluid)
            .outputFluids(Fluid.of('gtceu:proton',protons),Fluid.of('gtceu:neutron',neutrons))
            .duration((protons+neutrons)*20)
            .EUt(4000);
    
            event.recipes.gtceu.element_duplicator(`${name}_element_duplicate`)
            .notConsumableFluid(fluid)
            .inputFluids(Fluid.of('gtceu:proton',protons),Fluid.of('gtceu:neutron',neutrons))
            .outputFluids(fluid)
            .duration((protons+neutrons)*20*Math.sqrt(protons+neutrons))
            .EUt(4000);

            event.recipes.gtceu.element_creator(`${name}_element_create`)
            .circuit(circuit1)
            .circuit(circuit2)
            .inputFluids(Fluid.of('gtceu:proton',protons),Fluid.of('gtceu:neutron',neutrons))
            .outputFluids(fluid)
            .duration((protons+neutrons)*200*Math.sqrt(protons+neutrons))
            .EUt(512000);
            circuit2++;
            if(circuit2>32){
                circuit1++;
                circuit2=circuit1+1;
            }
        }
    }
}
