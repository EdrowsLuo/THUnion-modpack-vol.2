
function modifyRecipe(/** @type {Internal.GTRecipe} */recipe, /** @type {Internal.GTRecipeCapabilities} */capability, modifier, /** @type {Boolean} */isInput,/** @type {Boolean} */ isTick){
    var newRecipe=recipe.copy();
    
    if(isInput){
        if(isTick){

        }else{
            newRecipe.inputs.replace(capability, newRecipe.copyContents(newRecipe.inputs, modifier).get(capability));
        }
    }else{
        if(isTick){

        }else{
            newRecipe.outputs.replace(capability, newRecipe.copyContents(newRecipe.outputs, modifier).get(capability));
        }
    }
    return newRecipe;

}