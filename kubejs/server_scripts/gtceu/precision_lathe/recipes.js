ServerEvents.recipes(event=>{
    event.recipes.gtceu.imprinter('logic')
        .itemInputs('#forge:ingots/gold','#forge:silicon','#forge:dusts/redstone')
        .EUt(480)
        .duration(100)
        .itemOutputs('ae2:logic_processor');
    event.recipes.gtceu.imprinter('eng')
        .itemInputs('#forge:gems/diamond','#forge:silicon','#forge:dusts/redstone')
        .EUt(480)
        .duration(100)
        .itemOutputs('ae2:engineering_processor');
    event.recipes.gtceu.imprinter('calc')
        .itemInputs('#forge:gems/certus_quartz','#forge:silicon','#forge:dusts/redstone')
        .EUt(480)
        .duration(100)
        .itemOutputs('ae2:logic_processor');
    event.recipes.gtceu.imprinter('flux')
        .itemInputs('appflux:redstone_crystal','#forge:silicon','#forge:dusts/redstone')
        .EUt(480)
        .duration(300)
        .itemOutputs('appflux:energy_processor');

    addType(event,'gtceu:lathe',20);
    addType(event,'gtceu:bender',21);
    addType(event,'gtceu:compressor',22);
    addType(event,'gtceu:wiremill',23);
    addType(event,'gtceu:forge_hammer',24);
    addType(event,'gtceu:forming_press',25);
    addType(event,'gtceu:imprinter',26);
    
    
})

function addType(event,recipeType, circuit){
    event.findRecipes({type:recipeType}).forEach(recipe=>{
        var builder=event.recipes.gtceu.precision_lathe_all(recipe.getId());
        builder.itemInputs(allT(recipe, 'inputs', $GTRecipeCapabilities.ITEM))
            .itemOutputs(allT(recipe,'outputs',$GTRecipeCapabilities.ITEM))
            .circuit(circuit)
            .duration(recipe.get("duration"))
            .EUt(EUt(recipe));
        if(getCircuit(recipe)!==0){
            builder.circuit(getCircuit(recipe));
        }
    })
}

function allT(recipe, io, cap){
    var list=[];
    recipe.get(io).get(cap).forEach( (content) => {
        if(content.chance===0) return;
        list.push(content.content);
    });
    return list;
}
