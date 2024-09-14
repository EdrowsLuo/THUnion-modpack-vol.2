ServerEvents.recipes( event => {
    event.forEachRecipe({ mod: 'gtceu', type: 'gtceu:ore_washer' }, recipe => { 
        if(EUt(recipe)>4){ return; }
        try { 
            /** @type {InputItem} */var input = allConsumingInputs(recipe);
            /** @type {OutputItem[]} */var outputs=allOutputs(recipe).filter(output => output.chance==1);
            event.recipes.create.splashing(outputs,input);
        } catch (err) {
            
        }
    });
});