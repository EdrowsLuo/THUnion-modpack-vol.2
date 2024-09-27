ServerEvents.recipes(event=>{
   componentBuild(event);
})

function componentBuild(event){
    var voltages=['hv','ev','iv','luv','zpm','uv'];
    for(var i=0;i<=5;i++){
        for(var j=i;j<=5;j++){
            componentRecipe(event, voltages[j],480*Math.pow(4,j),voltages[i],(j+1-i)*(j+1-i));
        }
    }
}

function componentRecipe(event, tier, voltage, tier_component, factor){
    event.recipes.gtceu.forming_press(`${tier}_to_${tier_component}_motor`)
    .notConsumable(`gtceu:${tier_component}_electric_motor`)
    .itemInputs(`gtceu:${tier}_component_alloy_plate`)
    .itemOutputs(`${factor}x gtceu:${tier_component}_electric_motor`)
    .duration(100)
    .EUt(voltage);

    event.recipes.gtceu.forming_press(`${tier}_to_${tier_component}_piston`)
    .notConsumable(`gtceu:${tier_component}_electric_piston`)
    .itemInputs(`2x gtceu:${tier}_component_alloy_plate`)
    .itemOutputs(`${factor}x gtceu:${tier_component}_electric_piston`)
    .duration(100)
    .EUt(voltage);

    event.recipes.gtceu.forming_press(`${tier}_to_${tier_component}_pump`)
    .notConsumable(`gtceu:${tier_component}_electric_pump`)
    .itemInputs(`2x gtceu:${tier}_component_alloy_plate`)
    .itemOutputs(`${factor}x gtceu:${tier_component}_electric_pump`)
    .duration(100)
    .EUt(voltage);

    event.recipes.gtceu.forming_press(`${tier}_to_${tier_component}_conveyor`)
    .notConsumable(`gtceu:${tier_component}_conveyor_module`)
    .itemInputs(`2x gtceu:${tier}_component_alloy_plate`)
    .itemOutputs(`${factor}x gtceu:${tier_component}_conveyor_module`)
    .duration(100)
    .EUt(voltage);

    event.recipes.gtceu.forming_press(`${tier}_to_${tier_component}_robot`)
    .notConsumable(`gtceu:${tier_component}_robot_arm`)
    .itemInputs(`6x gtceu:${tier}_component_alloy_plate`,`#gtceu:circuits/${tier}`)
    .itemOutputs(`${factor}x gtceu:${tier_component}_robot_arm`)
    .duration(100)
    .EUt(voltage);

    event.recipes.gtceu.forming_press(`${tier}_to_${tier_component}_emitter`)
    .notConsumable(`gtceu:${tier_component}_emitter`)
    .itemInputs(`12x gtceu:${tier}_component_alloy_plate`,`4x #gtceu:circuits/${tier}`)
    .itemOutputs(`${factor}x gtceu:${tier_component}_emitter`)
    .duration(100)
    .EUt(voltage);

    event.recipes.gtceu.forming_press(`${tier}_to_${tier_component}_sensor`)
    .notConsumable(`gtceu:${tier_component}_sensor`)
    .itemInputs(`12x gtceu:${tier}_component_alloy_plate`,`4x #gtceu:circuits/${tier}`)
    .itemOutputs(`${factor}x gtceu:${tier_component}_sensor`)
    .duration(100)
    .EUt(voltage);

    event.recipes.gtceu.forming_press(`${tier}_to_${tier_component}_field`)
    .notConsumable(`gtceu:${tier_component}_field_generator`)
    .itemInputs(`64x gtceu:${tier}_component_alloy_plate`,`8x #gtceu:circuits/${tier}`)
    .itemOutputs(`${factor}x gtceu:${tier_component}_field_generator`)
    .duration(100)
    .EUt(voltage);
}