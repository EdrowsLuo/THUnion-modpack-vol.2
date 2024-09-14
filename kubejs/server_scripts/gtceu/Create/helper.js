const $GTRecipeCapabilities=Java.loadClass('com.gregtechceu.gtceu.common.data.GTRecipeCapabilities');


function xthInput(recipe, place){
    return recipe.get("inputs").get($GTRecipeCapabilities.ITEM)[place-1].content;
}

function xthOutput(recipe, place){
    return toOutput(recipe.get("outputs").get($GTRecipeCapabilities.ITEM)[place-1]);
}

function toOutput(content){
    return OutputItem.of(content.content.ingredient).withCount(content.content.count).withChance(content.chance>10000?1:content.chance/10000.0);
}

function allInputs(recipe){
    var inputList=[];
    recipe.get("inputs").get($GTRecipeCapabilities.ITEM).forEach( (content) => {
        inputList.push(content.content);
    });
    return inputList;
}

function circuit(recipe){
    var value=0;
    try{
        recipe.get("inputs").get($GTRecipeCapabilities.ITEM).forEach( (content) => {
            if(content.chance==0){
                /** @type {InputItem} */ var input=content.content;
                value=input.ingredient.first.nbt.getShort("Configuration");
            }
        });
    }catch(error){}
    return value;
}

function allConsumingInputs(recipe){
    var inputList=[];
    recipe.get("inputs").get($GTRecipeCapabilities.ITEM).forEach( (content) => {
        if(content.chance==0) return;
        inputList.push(content.content);
    });
    return inputList;
}

function allOutputs(recipe){
    var outputList=[];
    recipe.get("outputs").get($GTRecipeCapabilities.ITEM).forEach( (content) => {
        outputList.push(toOutput(content));
    } );
    return outputList;
}

function EUt(recipe){
    try{
        return Number(recipe.get("tickInputs").get($GTRecipeCapabilities.EU)[0].content);
    }catch(error){
        //真的有sb配方不要电
        return 0;
    }
}
